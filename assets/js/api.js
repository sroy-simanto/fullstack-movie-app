'use strict';

const api_key = '9166d9d946fd650c67cba1de1d30cb25';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/**
 * - fetch data form a server using the `url` and passes
 * - the result in JSON data to a `callback` function,
 * - along with an optional parameter if has `optionalParam`.
 * 
 */


const fetchDataFormServer = function(url, callback, optionalParam) {
    fetch(url)
        .then(res => res.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFormServer };