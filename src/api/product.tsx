import instance from "./instance";

export const add = (product: any) => {
    return instance.post('/products',product)
}
export const removeItem = (id: number) => {
    return instance.delete(`/products/${id}`)
}
export const get = (id: any) => {
    return instance.get(`/products/${id}`)
}
