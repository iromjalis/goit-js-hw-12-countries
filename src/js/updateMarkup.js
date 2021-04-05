import templates from '../template/template.hbs'
import { error} from '@pnotify/core';

import "@pnotify/core/dist/PNotify.css" 
import "@pnotify/desktop/dist/PNotifyDesktop" ;
import '@pnotify/core/dist/BrightTheme.css';

const refs= {
  countryContainer : document.querySelector('.countryContainer')
  }


function updateMarkup (data){
    const markup = templates(data)
  
    if(!data.length){
      error({
        text: `Please enter a more specific query!`,
        styling:'brighttheme',
        delay: 500,
      });
      return
    }
    
    if(data && data.length >= 5){
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
  
  export default updateMarkup