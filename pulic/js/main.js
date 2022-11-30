console.log("hello from main.js")
const cityname = document.getElementById("cityname");
const submit = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");

const temp=document.getElementById("temp")
const middle_layer=document.getElementById("middle_layer")

city_name.innerText = "plase Enter a City name : )"
middle_layer.classList.add("data_hide")
var isdata= true;


const submitform = async (e) => {
    e.preventDefault();

   

const usercityname = cityname.value;

    if (usercityname === "") {
        city_name.innerText = "plase Enter a City name : )"
        middle_layer.classList.add("data_hide")
    }
    
    else {
        if(isdata){
            city_name.innerText="DATA IS LODING WAIT FEW SECOND..."
        }
        try { 
            const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${usercityname}&appid=326c099a3438886bcb8ce829b4870560`)
            const objdata = await (await data).json();

            city_name.innerText =objdata.name
            temp.innerText=objdata.main.temp
            middle_layer.classList.remove("data_hide")
            
            isdata=false;

        } catch {
            middle_layer.classList.add("data_hide")

            city_name.innerText = "plase Enter a City name : )"
        }
    
    }
   
}     



submit.addEventListener("click", submitform)