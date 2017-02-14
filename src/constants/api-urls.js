const SWAPI_URLS = {
  base: 'https://swapi.co/api/',
  vehicles: 'vehicles/',
  people: 'people/',  
  starships: 'starships/',
  films: 'films/',
  search: '?search=',  
}

export default function makeSWAPIurl(attr, query) {
  const makeQueryParam = query => `${SWAPI_URLS.search}${query}`;
  return `${SWAPI_URLS.base}${SWAPI_URLS[attr]}${query ? makeQueryParam(query) : ''}`;
}