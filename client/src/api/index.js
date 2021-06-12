import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertFood = payload => api.post(`/food`, payload)
export const getAllFoods = () => api.get(`/foods`)
export const updateFoodById = (id, payload) => api.put(`/food/${id}`, payload)
export const deleteFoodById = id => api.delete(`/food/${id}`)
export const getFoodById = id => api.get(`/food/${id}`)

const apis = {
    insertFood,
    getAllFoods,
    updateFoodById,
    deleteFoodById,
    getFoodById,
}

export default apis