async function getWeather(){

const city = document.getElementById("city").value;
const result = document.getElementById("result");

try{

console.log("Before Fetch");

const res = await fetch(
`https://wttr.in/${city}?format=j1`
);

const data = await res.json();

console.log("After Fetch");

result.innerHTML = `
<h2>${city}</h2>
<p>Temp: ${data.current_condition[0].temp_C}°C</p>
<p>${data.current_condition[0].weatherDesc[0].value}</p>
`;

localStorage.setItem("lastCity", city);

}catch(error){
result.innerHTML = "City not found!";
}

}