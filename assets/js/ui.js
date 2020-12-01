class UI {
    constructor() {
        this.location = document.getElementById("w_location");
        this.desc = document.getElementById("w_desc");
        this.string = document.getElementById("w_string");
        this.icon = document.getElementById("w_icon");
        this.humidity = document.getElementById("w_humidity");
        this.pressure = document.getElementById("w_pressure");
        this.wind = document.getElementById("w_wind");
    }
	
	paint(weather){
		this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = Math.floor(weather.main.temp - 273.15) + ' \u00B0C';
        this.icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        this.humidity.textContent = "Humidity :"+ weather.main.humidity + " %";
        this.pressure.textContent = "Air Pressure :" + weather.main.pressure + " \u00B0";
        this.wind.textContent = "Wind Speed :" + weather.wind.speed + "km/h";
	}
	
	notFound(){
		this.location.textContent = "Not Found";
        this.desc.textContent = "";
        this.string.textContent = "";
        this.icon.src = ``;
        this.humidity.textContent = "";
        this.pressure.textContent = "";
        this.wind.textContent = "";
	}
}
