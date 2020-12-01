// Init UI
const ui = new UI;

// Fetch city from API
async function getCity() {
    const city = await fetch("https://ipapi.co/103.230.104.16/json/");
    const data  = await city.json();

    return data;
}

getCity().then(data => {
	// Init Weather
	const weather = new Weather(data.city);
	
    console.log(data.city);
	weather.getWeather().then(data => {
		console.log(data)
		ui.paint(data);
	});
});

