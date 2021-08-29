const countriesClicked = () =>{
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data => displayCountry(data))
}


const displayCountry = (countries) =>{

   const countryContainer = document.getElementById('countriesContainer');
   for(const country of countries){

      
      const div = document.createElement('div');
      div.classList.add('country-style')
      div.innerHTML = `
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onclick="countryFullDetails('${country.name}')">Details</button>
      `;
      countryContainer.appendChild(div);
   }
}

const countryFullDetails = (names) =>{
   // console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/ ${name}`;
   //  fetch('https://restcountries.eu/rest/v2/name/eesti')
   fetch(url)
   .then(res => res.json())
   .then(data => displayDetails(data))

}

const displayDetails = (Details) =>{
   const disDetails = document.getElementById('allDetails');
   for (const detail of Details) {

      console.log(detail)
      const img = document.createElement('img');
      div.innerHTML = `
      <img src=" ${detail.name.flag}"/>
      `
      disDetails.appendChild(img)
   }

}