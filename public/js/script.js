const cityName=document.getElementById("cityName")
const submitBtn=document.getElementById("submitbtn")
const city_name=document.getElementById("city_name")
const temp=document.getElementById("temp")
const temp_status=document.getElementById("temp_status")

async function getInfo(event){
    event.preventDefault();
    let cityVal=cityName.value;
    // console.log(cityVal);
    // console.log(cityName);
    console.log();
    if(cityVal == ""){
        city_name.innerText=`Please write name before search`;
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=60c8142833c66ef559917dd909f01e80`;
            const response= await fetch(url);
            const data=await response.json();
            console.log(data);
            const arrData=[data]; //array of an object
            document.getElementById("city_name").innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            console.log(arrData[0].name);
            temp.innerText=arrData[0].main.temp;
            // temp_status.innerHTML=arrData[0].weather[0].main;

            const tempMood=arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML="<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood === "Clouds"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color: blue;'></i>";
            }
            else if(tempMood === "Haze"){
                temp_status.innerHTML="<i class='fa-solid fa-wind' style='color: white;'></i>";
            }
            else if(tempMood === "Rain"||tempMood === "Mist"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color: skyblue;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fa-solid fa-sun' style='color: orange;'></i>";
            }

        }
         catch{
            // city_name.innerText=`Plz enter city name`
            // document.getElementById("city_name").innerText=`${arrData[0].name},${arrData[0].sys.country}`;
         }
    }
}

submitBtn.addEventListener("click",getInfo);