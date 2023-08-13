import axios from "axios";

export default axios.create({
    baseURL:  'https://api.rawg.io/api',
    params: {
        key: '0a4c3b79f49f41d88e218695d167226c'
    }
})