var ans = null;
const axios = require('axios');
const dJSON = require('dirty-json');
axios.get('http://localhost:8007?counter=8765')
    .then((d) => {
        ans = dJSON.parse(d.data);
        console.log(ans['Abstractness']);
    })
    .catch((err) => {
        console.log(err)
    });

console.log(ans);


