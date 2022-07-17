import axios from 'axios';

const result = axios.get(
  'http://api.mediastack.com/v1/news?access_key=755d8a8e2e53f396865281416825613b'
);
console.log(result);
