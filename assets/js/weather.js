class Weather{
	constructor(city){
		this.city = city;
		this.appid = "de927a7716a653dcb1ac5b3a7e6eb85d";
	}
	
	async getWeather() {
    const resData = await(await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`)).json();

    return resData;
	}
}