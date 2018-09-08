const axios = require('axios');

exports.geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);
  return axios({
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    responseType: 'application/json',
  })
}
