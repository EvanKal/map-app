const api= "https://maps.googleapis.com/maps/api"

const headers = {
  apiKey: "AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo"
};

export const getPlace = (place_id) =>
  fetch(`${api}/place/details/json?placeid=${place_id}&key=AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo`);
