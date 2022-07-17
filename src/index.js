import axios from 'axios';

const result = axios.get(
  'https://api.mediastack.com/v1/news?access_key=755d8a8e2e53f396865281416825613b'
);
result.then(res => {
  console.log(res.data);
});
