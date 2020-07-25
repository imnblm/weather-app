window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(position);
      const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=74913cd6ec927a299e7fd99534e17b5f`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
    });



  } else {
    h1.textContent = "If you want to use our service, turn on geolocalisation !"
  }
})