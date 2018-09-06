const weather = require("./getweather")

const route = {};

route.main = () => {
  return (req, res) => {
   weather.getWeather(req.body)
   .then((response)=>{
    res.json(response)
   })
   .catch((e)=>{
     res.json("request error")
   })
  }
}

module.exports = route;