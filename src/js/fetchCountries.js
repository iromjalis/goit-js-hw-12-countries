// const refs= {
// searchFrom: document.querySelector('input'),
// countryContainer : document.querySelector('.countryContainer')
// }
// const searchQuery = refs.searchFrom.value;
// // refs.searchFrom.addEventListener('input', (e) => {

// // e.preventDefault()
// // const searchQuery = e.target.value;
// // console.log(searchQuery);
// // refs.countryContainer.innerHTML = ''
  
// // if(searchQuery !== ' ' || searchQuery.value.length >= 2){
// // fetchCountries (searchQuery).then(data=> updateMarkup(data))}
// // })


// const fetchCountries = function(searchQuery){  
//     return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
// .then(data=>data.json())
// .catch(text=> { error({
//      text: 'Too many matches found. Please enter a more specific query!',
//      styling:'brighttheme',
//    })}
//   )
// }

// export default fetchCountries(searchQuery)