const api= "https://maps.googleapis.com/maps/api"

const headers = {
  apiKey: "AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo"
};

export const getAPI = () =>
  fetch(`${api}/js?key=AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo&libraries=geometry,places`)
  .then(res => res.text())
  .catch((error) => {
    console.log(error)
  })

  ;
