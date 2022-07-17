import axios from 'axios';

const result = axios.get(
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=7V2Mdku3K6jAwbEoNcKctzHC7q7RRQcQ'
);
result.then(res => {
  console.log(res.data);
});
