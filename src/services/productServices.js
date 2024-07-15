import axios from "axios";

export const getProduct = async() => {
    const { data } = await axios.get('/api/productos.json')
    return data
}