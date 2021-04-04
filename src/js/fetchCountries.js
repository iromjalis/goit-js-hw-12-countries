const fetchCountries = (searchQuery) => {
    const DATA_URL = 'https://restcountries.eu/rest/v2/name/'
    let url = `${DATA_URL}${searchQuery}`
     return fetch(url).then(res => res.json()).catch(err => console.log(err))
  }
  
  export default fetchCountries