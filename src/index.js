import './styles.css';

import {  defaultModules,error} from '@pnotify/core/dist/PNotify.js';
import * as PNotifyDesktop from '@pnotify/desktop/dist/PNotifyDesktop';

import "@pnotify/core/dist/PNotify.css" 
// import "@pnotify/mobile/dist/PNotifyMobile.css" ;
import "@pnotify/desktop/dist/PNotifyDesktop" ;
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';


defaultModules.set(PNotifyDesktop, {});

error('Too many matches found. Please enter a more specific query!');
// error('Error!');

//&=================
// const refs= {
//   searchFrom: document.querySelector('.input'),
//   countryContainer : document.querySelector('.countryContainer')
//   }
  
// refs.searchFrom.addEventListener('input', (e) => {
//  e.preventDefault()

//  refs.countryContainer.innerHTML = ''

//  const inputValue = e.currentTarget.value;
//  if(inputValue !== ' ' || inputValue.value.length >= 2){
// fetchCountry (inputValue).then(data=> updateMarkup(data))}
// })

// //~запрос
// function fetchCountry (inputValue){
//   return fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
// .then(data=>data.json())
// .catch(error=>console.log('No country founded, sorry'))
// }

// //~отриcовка карточек на странице
// function updateMarkup (data){
//   const markup = templates(data)
//   if(data!== ''&& data!== null){
//   refs.countryContainer.insertAdjacentHTML('afterbegin', markup)}
// }

//counrties.forEach(country=> document.quearySelector('.container').innerHTML += `<li>${country.name}</li>`)
