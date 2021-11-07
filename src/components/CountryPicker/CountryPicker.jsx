import React, { useState, useEffect } from 'react';
import { fetchcountries,countryData } from '../../apis';
import cx from 'classnames';

import styles from './CountryPicker.module.css';

import world from './../../assets/world.png';

function CountryPicker({ handleCountryChange }) {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  useEffect(() => {
    getCountries();
  }, []);


  const getCountries = async () => {
    const res = await fetchcountries();
    setCountries(res.data)
  };

  const getCountryData = async (data) => {
    if(data === "") {
      setCountry({});
    }else {
      const res = await countryData(data);
      setCountry(res.data);  
    }
  }

  return (
    <div className={styles.container}>
      {
        Object.keys(country).length === 0 ? (
          <div className={styles.info}>
            <div className={cx(styles.row, styles.country)}>
              <img src={world} alt="flag" className={styles.flag}/>
              <span className={styles.flag_title}></span>
            </div>
          
            <div className={styles.row}>
              <span>Cases: <span className={styles.number}>0</span></span>
              <span>Active: <span className={styles.number}>0</span></span>
              <span>Deaths: <span className={styles.number}>0</span></span>
              <span>Recovered: <span className={styles.number}>0</span></span>
            </div>

            <div className={styles.row}>
              <span>Active Per One Million: <span className={styles.number}>0</span></span>
              <span>Cases Per One Million: <span className={styles.number}>0</span></span>
              <span>Deaths Per One Million: <span className={styles.number}>0</span></span>
              <span>Recovered Per One Million: <span className={styles.number}>0</span></span>
            </div>

            <div className={styles.row}>
              <span>Today Cases: <span className={styles.number}>0</span></span>
              <span>Today Deaths: <span className={styles.number}>0</span></span>
              <span>Today Recovered:  <span className={styles.number}>0</span></span>
              <span>Date:  <span className={styles.number}>{new Date().toDateString()}</span></span>
            </div>
          </div>
        ): 
        (
          <div className={styles.info}>
            <div className={cx(styles.row, styles.country)}>
              <span className={styles.flag_title}>{country.country}</span>
              <img src={country.countryInfo.flag} alt="flag" className={styles.flag}/>
            </div>
          
            <div className={styles.row}>
              <span>Cases: <span className={styles.number}>{country.cases}</span></span>
              <span>Active: <span className={styles.number}>{country.active}</span></span>
              <span>Deaths: <span className={styles.number}>{country.deaths}</span></span>
              <span>Recovered: <span className={styles.number}>{country.recovered}</span></span>
            </div>

            <div className={styles.row}>
              <span>Active Per One Million: <span className={styles.number}>{country.activePerOneMillion}</span></span>
              <span>Cases Per One Million: <span className={styles.number}>{country.casesPerOneMillion}</span></span>
              <span>Deaths Per One Million: <span className={styles.number}>{country.deathsPerOneMillion}</span></span>
              <span>Recovered Per One Million: <span className={styles.number}>{country.recoveredPerOneMillion}</span></span>
            </div>

            <div className={styles.row}>
              <span>Today Cases: <span className={styles.number}>{country.todayCases}</span></span>
              <span>Today Deaths: <span className={styles.number}>{country.todayDeaths}</span></span>
              <span>Today Recovered:  <span className={styles.number}>{country.todayRecovered}</span></span>
              <span>Date:  <span className={styles.number}>{new Date().toDateString()}</span></span>
            </div>
          </div>
        )
      }

      
      <div className={styles.selector}>
        <div className={styles.countrySelector}>
          <select onChange={ 
            (e) => {
              handleCountryChange(e.target.value)
              getCountryData(e.target.value)
            }
          }>
            <option value="">Select a Country </option>
            {
              countries.map((item,idx) => (
                <option value={item.country} key={idx}>
                  { item.country }
                </option>
              )
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CountryPicker
