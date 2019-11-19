import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:'https://mentor-me-web.herokuapp.com/api',
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`
        }
    })
}