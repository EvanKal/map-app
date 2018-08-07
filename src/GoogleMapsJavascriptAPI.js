const api= "https://maps.googleapis.com/maps/api/js"

const headers = {
  apiKey: "AIzaSyDGq10MXHRFvjFmCRXKANM5yMZk6dXaGAo"
};

export const getAll = () =>
  fetch(`${api}`, { headers });
