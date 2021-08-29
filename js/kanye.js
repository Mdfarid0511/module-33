
const getData = () =>{

   fetch('https://api.kanye.rest/')
   .then(res => res.json())
   .then (data => loadData(data) );
}
// function loadData(quotes){
// }

const loadData = (words) =>{
   const quotesContainer = document.getElementById('quote-container');
   quotesContainer.innerText = words.quote;  
   
}


