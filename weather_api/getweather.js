const axios = require('axios');

exports.getWeather = (body) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(body.address);
        var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAujdU9Y16ra-A4qg_qMHo6KD7BXfwMsgk`;

        axios.get(geocodeUrl).then((response) => {
            if (response.data.status === 'ZERO_RESULTS') {
                throw new Error('Unable to find that address.');
            }
      
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
      //console.log(response.data.results[0].formatted_address);
            return axios.get(weatherUrl);
        }).then((response) => {
            var temperature = response.data.currently.temperature;
            var apparentTemperature = response.data.currently.apparentTemperature;
            resolve (`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
        }).catch((e) => {
            if (e.code === 'ENOTFOUND') {
                reject('Unable to connect to API servers.');
            } else {
                reject(e.message);
            }
            });  
    })
}