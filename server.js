var express = require('express');
var app = express();
const axios = require('axios')
const port = 3000
const requestOne = axios.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=b77514d18a7138aafc9ed1bbdca4f85b");
const requestTwo = axios.get("http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=b77514d18a7138aafc9ed1bbdca4f85b");
const requestThree = axios.get("http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=b77514d18a7138aafc9ed1bbdca4f85b");
const requestFour = axios.get("http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b77514d18a7138aafc9ed1bbdca4f85b")
const requestFive = axios.get("http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b77514d18a7138aafc9ed1bbdca4f85b")
const requestSix =axios.get("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b77514d18a7138aafc9ed1bbdca4f85b")
const requestSeven = axios.get("http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=b77514d18a7138aafc9ed1bbdca4f85b")

axios
  .all([requestOne, requestTwo, requestThree,requestFour,requestFive,requestSix,requestSeven])
  .then(axios.spread((ResponseOne, ResponseTwo, ResponseThree , ResponseFour ,ResponseFive,ResponsesSix,ResponseSeven) => {
      console.log(ResponseOne.data,ResponseTwo.data, ResponseThree.data,ResponseFour.data ,ResponseFive.data,ResponsesSix.data,ResponseSeven.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  })
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))