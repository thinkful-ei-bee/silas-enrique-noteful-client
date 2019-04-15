import config from './config';

export default {
  getAll() {
    return fetch(config.API_ENDPOINT + '/all', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.API_KEY}`
      }
    }).then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json();
    })
  }
}