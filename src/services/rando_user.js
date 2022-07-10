import axios from 'axios';
//const baseUrl=  "https://api.randomuser.me/" ;


 const fetchUser= async()=>{
    const baseUrl=  "https://api.randomuser.me/" ;
   
 
try{
    let response= await axios.get(baseUrl);
  console.log(response.data.results);    
   return response.data.results;
}
catch(error){
    console.log(error)
   }

 }




 export default fetchUser;

 