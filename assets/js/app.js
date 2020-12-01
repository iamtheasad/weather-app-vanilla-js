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
	
	weather.getWeather().then(data => {
		ui.paint(data);
	}).catch(err => {
		console.log(err);
		ui.notFound();
	});	
});

const city = document.getElementById("w_change_btn").addEventListener("click", ()=>{
	const city = document.getElementById("city").value;
	
	
	if(city === ""){
		alert("You must type a valid name. It can not be empty");
	}else {
		// Init Weather
		const weather = new Weather(city);
		weather.getWeather().then(data => {
			ui.paint(data);
		}).catch(err => {
			console.log(err);
			ui.notFound();
		});	
	}
});



















