let cache = new Map();
let pending = new Map();

export const fetchMovieDetails = (url) => {
  if (cache.has(url)) {
    console.log('cache.has',  cache.get(url));
    return cache.get(url);
  }
  if (pending.has(url)) {
    throw pending.get(url);
  }
  let promise = mockFetch(url)
    .then(
      text => {
        console.log('promise resolved');
        pending.delete(url);
        cache.set(url, text);
      }
    );
  pending.set(url, promise);
  throw promise;
};

function mockFetch(){
  return new Promise((res) => {
    setTimeout(() => {
      res({title: '12 angry men', director: 'Sidney Lumet'});
    }, 1000)
  })
};
