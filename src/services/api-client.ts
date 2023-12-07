import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '14fd2cf5037046bd8d1c52bbb90fde1b'
    }
})