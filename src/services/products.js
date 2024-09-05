import axios from "axios";

export const getProducts = async() => {
    try{
        const response = await axios.get('https://world.openfoodfacts.net/api/v2/product/{barcode}');
        return response.data;
    }catch(error) {
        console.error("Error fetching products", error);
        return[];
    }
}