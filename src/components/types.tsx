export type Product =  {
    id:string,
    title: string,
    brand: string,
    price: number,
    description: string,
    image: string
}
export type CartProduct =  {
    id:string,
    title: string,
    brand: string,
    price: number,
    description: string,
    image: string,
    quantity:number
}
export type Action ={
type:string,
payload?:Product[] | Product |number |any
}