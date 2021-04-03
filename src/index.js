import './styles.css';

import templates from './template/template.hbs'
import {  defaultModules,error} from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop/dist/PNotifyDesktop';

import "@pnotify/core/dist/PNotify.css" 
import "@pnotify/desktop/dist/PNotifyDesktop" ;
import '@pnotify/core/dist/BrightTheme.css';


// defaultModules.set(PNotifyDesktop, {});
// error({
//   text: 'Too many matches found. Please enter a more specific query!',
//   styling:'brighttheme',

// });


//&=================
const refs= {
  searchFrom: document.querySelector('.input'),
  countryContainer : document.querySelector('.countryContainer')
  }
  
refs.searchFrom.addEventListener('input', (e) => {
 e.preventDefault()

 refs.countryContainer.innerHTML = ''

 const inputValue = e.currentTarget.value;
 if(inputValue !== ' ' || inputValue.value.length >= 2){
fetchCountry (inputValue).then(data=> updateMarkup(data))}
})

//~запрос

function debounce(fetchCountry, timeout = 500){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fetchCountry, timeout);
  };
}

function fetchCountry (inputValue){
return fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
.then(data=>data.json())
.catch(text=> { error({
     text: 'Too many matches found. Please enter a more specific query!',
     styling:'brighttheme',
   })}
  )
}

//~отриcовка карточек на странице
function updateMarkup (data){
  const markup = templates(data)

  if(data.length === 0 || data.length === 'undefined'){
    error({
      text: `Please enter a more specific query!`,
      styling:'brighttheme',
      delay: 500,
    });
    return
  }
  
  if(data.length >= 5  ){
    error({
      title: `Too many matches found.`,
      text: `We found ${data.length} countries. Please enter a more specific query!`,
      styling:'brighttheme',
      delay: 500,

    });
    return data.forEach(country=>refs.countryContainer.innerHTML += `<li>${country.name}</li>`);
  }

  if(data.length === 1){
  refs.countryContainer.insertAdjacentHTML('afterbegin', markup)}
}

