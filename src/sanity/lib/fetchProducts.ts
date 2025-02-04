console.log("hello00")
const fetchProducts = async () => {
    try{
        const response = await fetch("https://677d93bc4496848554cb2350.mockapi.io/productsDetails/productDetails")
        const products = await response.json()
        console.log("Fetched Products", products)
        return(products)
    }catch(error){
        console.log("Error fetching products", error)
    }
}
export default fetchProducts