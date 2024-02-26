export interface login {
    email: string,
    password: string

}
export interface signup {
    name: string,
    email: string,
    password: string

}
export interface addproduct {
    id: number|undefined,
    productid: number|undefined,
    name: string,
    price: number,
    image: string,
    color: string,
    category: string,
    description: string,
    quantity: undefined | number,
    email: undefined | string,
}
export interface address{
    
    email:string|undefined,
    name:string,
    number:number,
    house:string,
    city:string,
    pincode:number,
    state:string

} 

