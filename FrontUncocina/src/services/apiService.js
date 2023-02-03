import axios from "axios";
const fetcher = (method, endPointURL, body) => {
  const apiService = axios.create({
    baseURL: process.env.BASE_API_URL
  })
  /* const token = 'asd' //Esto deberia sacarlo de redux

  if(token){
    apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;//Cambi
  } */
  
  //PUEDEN SER NECESARIO MANIPULAR EL METODO PARA LOS FORMULARIOS
  return apiService[method](endPointURL, body)
}

export const postService = (endPointURL, data) => {
  return fetcher('post', endPointURL, data)
}
