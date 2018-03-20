function searchWeather(){
    var API_KEY = 'a4f3595d529f46e4bc9719b17e1b7938'
    var URL = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh&key=' + API_KEY
    
    fetch(URL)
    .then(function(data){
        console.log(data)
        return data.json()
    })
    .then(function(json){
        console.log(json)
    })
    .catch(function(errors) {
        console.log(errors)
    });
}