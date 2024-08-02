import axios from 'axios'

const baseUrl='cloudinary://231743819138729:cAsBVo6eczUAy7Ea3kxSsQvOWy8@djiorn5kc'

const postImages=async(image)=>{
    const response=await axios.post(`${baseUrl}`,image)
console.log('✌️response --->', response.data);
    
    return response.data
}

const services={
    postImages
}

export default services;