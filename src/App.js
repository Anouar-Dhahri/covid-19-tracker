import React from 'react';
import { Cards, CountryPicker, Chart } from './components'

import { globalData, countryData } from './apis';

import styles from './App.module.css';

import covid_logo from './assets/covid19_logo.png';

class App extends React.Component {

  state = {
    global: {},
    data: {}
  }

  async componentDidMount() {
    const res = await globalData();
    console.log(res);
    this.setState({global: res.data});
  }

  handleCountryChange = async (country) => {
    const res = await countryData(country);
    if(country === "") {
      this.setState({data: this.state.global})
    }else {
      this.setState({ data: res.data});
    }
  }


  render() {
    const { data, global } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid_logo} alt="logo" />
        <Cards global={global}/>
        <CountryPicker handleCountryChange= {this.handleCountryChange}/>
        <Chart global={global} data={data}/> 
      </div>
    );
  }
}

export default App;
