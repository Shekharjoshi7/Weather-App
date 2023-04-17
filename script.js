const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe08d5d2d7mshad518ffb58968c6p140bf0jsneceb3091b67d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
cityName.innerText = city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response)=> {

		let Sunrise = new Date(response.sunrise).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15);
		let Sunset = new Date(response.sunset ).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15);
		          a = Sunrise/1000;
				  b= a/60;
				  c=b/60;
				
		// console.log(Rtime,Stime);

		cloud_pct.innerText =response.cloud_pct 
		cloud_pct2.innerText =response.cloud_pct 
		temp.innerText =response.temp 
		temp2.innerText =response.temp 
		// feels_like.innerHtml =response.feels_like 
		humidity.innerText =response.humidity 
		min_temp.innerText = response.min_temp 
		wind_speed.innerText =response.wind_speed
		wind_speed2.innerText =response.wind_speed
		max_temp.innerText = response.max_temp 
		wind_degrees.innerText =response.wind_degrees 
		sunrise.innerText = Sunrise
		sunset.innerText = Sunset
		
}).catch(err => console.error(err));
};
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value);
});
getWeather("Dehli")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then((response)=> {
		let Sunrise = new Date(response.sunrise).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15);
		let Sunset = new Date(response.sunset ).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15)
		kcloud_pct.innerText =response.cloud_pct  
		ktemp.innerText =response.temp  
		// feels_like.innerHtml =response.feels_like 
		khumidity.innerText =response.humidity 
		kmin_temp.innerText = response.min_temp 
		kwind_speed.innerText =response.wind_speed
		kmax_temp.innerText = response.max_temp 
		kwind_degrees.innerText =response.wind_degrees 
		ksunrise.innerText = Sunrise
		ksunset.innerText = Sunset
	}).catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
	.then(response => response.json())
	.then((response)=> {
		
		let Sunrise = new Date(response.sunrise).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15);
		let Sunset = new Date(response.sunset ).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15)
		ccloud_pct.innerText =response.cloud_pct  
		ctemp.innerText =response.temp  
		// feels_like.innerHtml =response.feels_like 
		chumidity.innerText =response.humidity 
		cmin_temp.innerText = response.min_temp 
		cwind_speed.innerText =response.wind_speed
		cmax_temp.innerText = response.max_temp 
		cwind_degrees.innerText =response.wind_degrees 
		csunrise.innerText = Sunrise
		csunset.innerText = Sunset
		
	}).catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then((response)=> {
		
		let Sunrise = new Date(response.sunrise).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15);
		let Sunset = new Date(response.sunset ).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15)
		lcloud_pct.innerText =response.cloud_pct  
		ltemp.innerText =response.temp  
		// feels_like.innerHtml =response.feels_like 
		lhumidity.innerText =response.humidity 
		lmin_temp.innerText = response.min_temp 
		lwind_speed.innerText =response.wind_speed
		lmax_temp.innerText = response.max_temp 
		lwind_degrees.innerText =response.wind_degrees 
		lsunrise.innerText = Sunrise
		lsunset.innerText = Sunset

		
	}).catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad', options)
	.then(response => response.json())
	.then((response)=> {
		
		let Sunrise = new Date(response.sunrise).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15);
		let Sunset = new Date(response.sunset ).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).slice(10, 15)
		hcloud_pct.innerText =response.cloud_pct  
		htemp.innerText =response.temp  
		// feels_like.innerHtml =response.feels_like 
		hhumidity.innerText =response.humidity 
		hmin_temp.innerText = response.min_temp 
		hwind_speed.innerText =response.wind_speed
		hmax_temp.innerText = response.max_temp 
		hwind_degrees.innerText =response.wind_degrees 
		hsunrise.innerText = Sunrise
		hsunset.innerText = Sunset
		
	}).catch(err => console.error(err));
