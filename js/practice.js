function countryNames (){
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data => AllCountryName(data))
}

const AllCountryName = (names) =>{
   const countryContainer = document.getElementById('country-container');

   for (const value of names) {
       
      const div = document.createElement('div')
       div.innerHTML = `
       <p>${value.name}</p>
       <p>${value.capital}</p>
       `
       countryContainer.appendChild(div);  
   }
   

}