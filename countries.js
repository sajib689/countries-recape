const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then (data => displayCountries(data))
}

const displayCountries = countries => {
    
   const allCountries = countries.map(country => getCountryHTML(country))
   
    const container = document.getElementById('container')
    container.innerHTML = allCountries.join('')
}
const getCountryHTML = country => {
  const {name,coatOfArms} = country
    console.log(country)
    return `
    <div class='sub-container'>
    <h2>Name: ${name.common}</h2>
    <img src=${coatOfArms.png}/>
    </div>
    `
  }
loadCountries()