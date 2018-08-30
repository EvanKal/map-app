
const api = "https://maps.googleapis.com/maps/api";
//
// // const headers = {
// //   Access-Control-Allow-Origin: "http://localhost:3000/"
// // };
//
var myHeaders = new Headers({
  "Access-Control-Request-Headers": ["Access-Control-Allow-Origin"],
  'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
  "Access-Control-Request-Method": "GET"

});



export const getAPI = () =>


  fetch(
    `${api}/js?key=AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo&libraries=geometry,places`
    ,
  {
      credentials: "same-origin",
      destination: "",
      protocol: "http",
      origin: "127.0.0.1:3000",
      headers: new Headers({
        "Access-Control-Request-Headers": ["Access-Control-Allow-Origin"],
        "Access-Control-AlloW-Headers": true,
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
        "Access-Control-Request-Method": "GET",
        'Content-Type': 'text/javascript',

      }),
      // origin: 'http://127.0.0.1:3000',
      // {
      // // "accept": "*/*",
      // //   "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
      // //   "Access-Control-Request-Headers": ["Access-Control-Allow-Origin"],
      // //   'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'
      // },
      // integrity: "",
      // keepalive: false,
      method: "GET",
      mode: "no-cors",
      // redirect: "follow",
      // referrer: "http://127.0.0.1:3000/",
      // referrerPolicy: "no-referrer-when-downgrade",


    }


  )
  .then(response => {
  return response.text()
})


export const fourSquareAPI = (id) =>
  fetch(
    `https://api.foursquare.com/v2/venues/${id}?client_id=FAZ1GDAJBYLCNCZVGX5W0W3KRQ41ODDJ02WWNR510GTRKEYB&client_secret=ICVNM3KEBRUYYMRAYX20LRVNMNF2UZVTMXN0AO0NLVLENDM2&v=20180323&limit=1&intent=match`
  )
    .then(function(res) {
      return res.json();
    })
    .then(res => res.response.venue)
    .catch(function(error) {
      console.log(error);
    });
