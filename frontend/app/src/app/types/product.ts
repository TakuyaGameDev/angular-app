export type Product = {
    id: number,
    kind_id: number,
    name: string,
    price: number,
    no: number,
    created_at: Date,
    updated_at: Date
}

export type ProductRes = {
    items: Array<Product>,
    message: string
}