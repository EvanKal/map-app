const api= "https://maps.googleapis.com/maps/api"

const headers = {
  key: "AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo",
  libraries: "geometry,places"
};

export const getAPI = () =>
  fetch(`${api}/js?key=AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo&libraries=geometry,places`)
  // fetch(`${api}/js`, { headers })
  .then(res => res.text())
  .catch((error) => {
    console.log(error)
  })

  ;
