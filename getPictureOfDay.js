axios = require('axios');
function PictureOfDay(){
    return new Promise(function (resolve){
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY\n' + '\n')
            .then(function (a){
                resolve(a.data)
            })
    })
}
PictureOfDay().then( resolve => {
    console.log(resolve);
})