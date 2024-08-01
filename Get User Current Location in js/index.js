const btn = document.getElementById('getLocation');

function gotLocation(postion){
    console.log(postion);
}

function failedLocation(){
    console.log("There was an error")
}

btn.addEventListener('click', ()=> {
    navigator.geolocation.getCurrentPosition(gotLocation , failedLocation)
})