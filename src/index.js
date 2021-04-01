import { format } from 'core-js/core/date'
import './styles.css'
import templates from './template/template.hbs'

const refs= {
  searchFrom: document.querySelector('.input'),
  countryContainer : document.querySelector('.countryContainer')
  }
  
refs.searchFrom.addEventListener('input', (e) => {
 e.preventDefault()
 
//  refs.countryContainer.innerHTML = ''

 const inputValue = e.currentTarget.value;
fetchCountry (inputValue).then(data=> updateMarkup(data))
})

//~запрос
function fetchCountry (inputValue){
  return fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
.then(data=>data.json())
.catch(error=>console.log('No country founded, sorry'))
}

//~отриcовка карточек на странице
function updateMarkup (data){
  const markup = templates(data)
  if(data!== ''&& data!== null){
  refs.countryContainer.insertAdjacentHTML('afterbegin', markup)}
}



// refs.input.addEventListener('change', templateObj)

// function templateObj(e) {
//   e.preventDefault()

//   const searchCountry = e.currentTarget.value;
//   console.log(searchCountry);

//   fetch(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
//   .then(data=>data.json())
//   .then(data=>{
//      document.querySelector('.countryContainer').insertAdjacentHTML('beforeend', 
//        `<li>${data}</li>`)
  
// }
// )
//   }
