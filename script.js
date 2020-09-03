window.addEventListener("load", () => {
  let long;
  let lat;
  const city = document.querySelector(".location h1");
  const temp = document.querySelector(".degree h2");
  const des = document.querySelector(".discreption");
  const apiKey = "3542ee0ddcbbb1cfbd57fa83bcf46f0f";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          temp.innerText = data.main.temp;
          city.innerText = data.name;
          des.innerText = data.weather[0].description;
        });
    });
  }
});
