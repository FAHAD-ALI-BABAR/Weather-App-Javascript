const apikey="89bbb1e88fa27968fa95794854baa597";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbar=document.querySelector(".search-bar input");
const searchbtn=document.querySelector(".search-bar button");
const weatherpic=document.querySelector(".sun")
async function weathercheck(city){
   const rawdata= await fetch(apiurl + city + `&appid=${apikey}`);
   let actualdata=await rawdata.json();
   console.log(actualdata);
   document.querySelector(".c").innerHTML=actualdata.name;
   document.querySelector(".temp1").innerHTML=Math.round( actualdata.main.temp) + "°C";
   document.querySelector(".t").innerHTML=actualdata.main.humidity + "%";
   document.querySelector(".p").innerHTML=actualdata.wind.speed + " Km/hr";

   if(actualdata.weather[0].main =="Clouds"){
       weatherpic.src="./clouds.png";
   }
   else if(actualdata.weather[0].main == "Wind"){
       weatherpic.src="./windy.png";
   }
   else if(actualdata.weather[0].main == "Rain"){
       weatherpic.src="./rain.png";
   }
   else if(actualdata.weather[0].main == "Snow"){
       weatherpic.src="./snow.png";
   }
   else if(actualdata.weather[0].main == "Sun"){
       weatherpic.src="./sun.png";
   }
   else if(actualdata.weather[0].main == "Drizzle"){
       weatherpic.src="./drizzle.png";
   }

} 
searchbtn.addEventListener("click", function(){
    weathercheck(searchbar.value);
})