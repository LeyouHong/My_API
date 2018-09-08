const axios = require('axios');

exports.getWeather = (lat, lng) => {
  return axios({
    method: 'get',
    url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
    responseType: 'application/json',
  })
}
