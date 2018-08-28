const api= "https://maps.googleapis.com/maps/api"

// const headers = {
//   key: "AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo",
//   libraries: "geometry,places"
// };

export const getAPI = () =>
  fetch(`${api}/js?key=AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo&libraries=geometry,places`)
  .then(res => res.text())  ;

  export const fourSquareAPI = (id) =>
  fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=FAZ1GDAJBYLCNCZVGX5W0W3KRQ41ODDJ02WWNR510GTRKEYB&client_secret=ICVNM3KEBRUYYMRAYX20LRVNMNF2UZVTMXN0AO0NLVLENDM2&v=20180323&limit=1&intent=match`)
    .then(function(res) {
        return res.json();
    })
    .then((res) => res.response.venue)
    .catch(function(error) {
        console.log(error);
    });
