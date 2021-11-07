import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const globalData = async () => {
    try {
        const data = await axios.get(`${url}/all`);
        return data;
    } catch (error) {
        return error;
    }
};

export const fetchcountries = async () => {
    try {
        const data = await axios.get(`${url}/countries`);
        return data;
    } catch (error) {
        return error;
    }
}

export const countryData = async (country) => {
    try {
        const data = await axios.get(`${url}/countries/${country}`);
        return data;
    } catch (error) {
        return error;
    }
}
