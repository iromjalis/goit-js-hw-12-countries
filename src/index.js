import './styles.css';

import { debounce } from "debounce";
// const debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries.js'
import updateMarkup from './js/updateMarkup.js'

import {  defaultModules,error} from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop/dist/PNotifyDesktop';

import "@pnotify/core/dist/PNotify.css" 
import "@pnotify/desktop/dist/PNotifyDesktop" ;
import '@pnotify/core/dist/BrightTheme.css';

const refs= {
  searchForm: document.querySelector('input'),
  countryContainer : document.querySelector('.countryContainer')
  }
  

const onInputChange = (e) => {
  e.preventDefault()

 refs.countryContainer.innerHTML = ''

 const inputValue = e.target.value;

 if(inputValue){
fetchCountries(inputValue.trim()).then(data=> updateMarkup(data))
.catch(error=>console.log('error'))}
}

refs.searchForm.addEventListener('input', debounce(onInputChange, 500))
// refs.searchForm.addEventListener('input', onInputChange)

