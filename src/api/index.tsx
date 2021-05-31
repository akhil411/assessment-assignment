import axios from 'axios';

const API = {
    getTableData: function () {
        return axios.get('http://universities.hipolabs.com/search?country=Australia');
    },
}

export default API;
