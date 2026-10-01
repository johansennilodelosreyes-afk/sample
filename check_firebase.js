const https = require('https');

const url = 'https://banahaw-food-park-default-rtdb.firebaseio.com/banahaw_food_park.json';

https.get(url, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(body);
      console.log('--- Firebase Data Root Keys ---');
      console.log(Object.keys(data || {}));
      
      if (data && data.records) {
        console.log('--- Firebase Records Keys Count ---:', Object.keys(data.records).length);
        const keys = Object.keys(data.records);
        keys.forEach(k => {
          if (k.includes('tenant') || k.includes('foodtruck')) {
            console.log('Record key:', k);
          }
        });
      }
      if (data && data.data) {
        console.log('--- Firebase Legacy Data Keys Count ---:', Object.keys(data.data).length);
        Object.keys(data.data).forEach(k => {
          if (k.includes('tenant') || k.includes('foodtruck')) {
            console.log('Legacy key:', k);
          }
        });
      }
    } catch(e) {
      console.error('JSON parse error:', e.message);
    }
  });
}).on('error', (e) => console.error('Fetch error:', e));
