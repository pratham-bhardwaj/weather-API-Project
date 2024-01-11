let apiKey="20e80b809dd1403890683843232610";

let displaybox=document.querySelector(".displayBox");
let inputbar=document.querySelector("#input");
let searchbutton=document.querySelector("#button");

let apicaller = function(){
    let query=inputbar.value;

    if(query==""){
        alert("please enter the city");
    }else{
        fetchApi(query);
    }
    inputbar.value="";
}


searchbutton.addEventListener("click",apicaller)
   


async function fetchApi(query="gwalior"){
    let apidata =await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`);

    let obj = await apidata.json();

    screenUpdate(obj);
}

fetchApi();



function screenUpdate(obj){
    console.log(obj);
    let weather= obj.current.condition.text;
    let icon=obj.current.condition.icon;
    let temp= obj.current.temp_c;
    let location= obj.location.name;
    let humidity= obj.current.humidity;
    let time= obj.current.last_updated;

    displaybox.innerHTML=`
    <div class="box" id="box1">
    <p>${location}</p>
    <p>${time}</p>
</div>
<div class="box" id="box2">
   <img src=${icon} width="30%"
    <p>${temp}</p>
</div>
<div class="box" id="box3">
    <p>${weather}</p>
    <p>Humidity-${humidity} %</p>
</div>`
}
