import axios from 'axios';

const url = 'https://api.football-data.org/v2/competitions/2021/matches';

export const fetchData = async () => {
   try{

      const {data : { matches }} = await axios.get(url, {
         headers :{ 'X-Auth-Token': 'ea7cb0230e764362aef72269a19ed9d5'}  
         });

      return { matches };
   }
   catch(error){

   }
}