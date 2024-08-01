// Get  All the elements 
const button = document.getElementById('click-button')
const input = document.getElementById('city-input')

const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

// Make A fucntion To Fetch api , we don't know how much this function will take to fetch
// that's why we use async function
async function getData(cityName){  // async function to fetch api data
    
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c2a470e31f964e6ba68135038243107&q=${cityName}&aqi=yes`
    )
    let response = await data.json() // Api data we store in json object
    console.log(response)
    return response
}

// Perform the event when button is clicked
button.addEventListener('click', async ()=> {
    const value = input.value
    const result = await getData(value) // all the json data come in this variable

    // now we create new element and enter the data that we want to display
    cityName.innerText = `${result.location.name},  ${result.location.region} -  ${result.location.country}`
    cityTime.innerText = `${result.location.localtime}`
    cityTemp.innerText = "Temprature" +  result.current.temp_c
})