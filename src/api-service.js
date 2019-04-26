import config from './config';

export default {
  getAll() {
    return fetch(config.API_ENDPOINT + '/all', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
  }
}