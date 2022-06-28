import axios from 'axios';

const apiUrl = 'http://localhost:5000/product/';


export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'addProduct', data, options);
    } catch (error) {
        throw error;
    }
}
export const getMultipleFiles = async () => {
    try{
        const {data} = await axios.get(apiUrl);
        return data;
    }catch(error){
        throw error;
    }
}