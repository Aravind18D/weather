async function getData(){
    let cityName=document.getElementById('name').value;
   
    let url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1801d39372c536d4a4f266105a47e49c`);
   
    let data=await url.json();
    
    console.log(data);
    
    document.querySelector(".container1").style.display = "block";
    document.getElementById("cityname").innerHTML=data.name;
    document.getElementById("temp").innerHTML=data.main.temp;
    document.getElementById("pressure").innerHTML=data.main.pressure;
    document.getElementById("humidity").innerHTML=data.main.humidity;
    let weather=data.weather[0].main.toLowerCase();
    switch (weather) {
        case "clouds":
            document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.AavQo77oc2G6douY5qGqgwHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
            break;
        case "clear":
            document.body.style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.HToFY0nOiRR6zJI4Xwnl4gHaEs?rs=1&pid=ImgDetMain&o=7&rm=3')";
            break;
        case "rain":
            document.body.style.backgroundImage = "url('https://tse1.mm.bing.net/th/id/OIP.fkWr_1EeH5QcmzbfQ7GlvQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3')";
            break;
        case "sunny":
            document.body.style.backgroundImage = "url('https://tse2.mm.bing.net/th/id/OIP.wzFhMV_QLfLuYFygqNvXNQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3')";
            break;
        case "thunderstorm":
            document.body.style.backgroundImage = "url('https://tse3.mm.bing.net/th/id/OIP.UyvwMDFGWEvo3UEfeaik2QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3')";
            break;
        default:
            document.body.style.backgroundImage = "url('https://tse2.mm.bing.net/th/id/OIP.BkCkbet2P_4lqs0Z2KvblQHaEV?rs=1&pid=ImgDetMain&o=7&rm=3')";
    }

}






























