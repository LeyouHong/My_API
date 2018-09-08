const weather = require("./weather/weather.js")
const geocode = require("./geocode/geocode.js")

const route = {};

route.main = () => {
  return (req, res) => {
    geocode.geocodeAddress(req.body.address)
    .then((response)=>{
      let lat = response.data.results[0].geometry.location.lat
      let lng = response.data.results[0].geometry.location.lng
      weather.getWeather(lat, lng)
      .then((response)=>{
        res.json(response.data)
      })
      .catch((e)=>{
        res.json(e)
      })
    })
    .catch((e)=>{
      res.json(e)
    })
  }
}

module.exports = route;