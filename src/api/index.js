import axios from 'axios';

const url = 'https://api.football-data.org/v2/competitions/2021/matches';

export const fetchData = async (matchday) => {
    let changeURL = url;
    if(matchday && matchday != 0){
      changeURL = `${url}?matchday=${matchday}`; }
    
   try{
      const {data : { matches }} = await axios.get(changeURL, {
         headers :{ 'X-Auth-Token': 'ea7cb0230e764362aef72269a19ed9d5'}  
         });
      return { matches };
   }
   catch(error){
      console.log(error);
   }
}


export const fetchWeek = async() => {
   try{
      const {data : { matches }} = await axios.get(`${url}`, {
         headers :{ 'X-Auth-Token': 'ea7cb0230e764362aef72269a19ed9d5'}  
         });
         return matches.map((item) => item.matchday);
   }
   catch(error){
      console.log(error);
   }
}