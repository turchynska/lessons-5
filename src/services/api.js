import axios from "axios";

export const getUsers = async() => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }catch(err){
        console.err("Error fetching users", err)
        return[];
    }
}