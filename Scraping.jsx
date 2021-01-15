const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.adidas.com/us/shoes?grid=true').then((res) =>{


    const data = [];
    const $ = cheerio.load(res.data);

    $('.grid-item___3rAkS').each((index,element)=>{
        const info = ($(element).children('a').last().attr('href'));

        //const links =($(element).children('a').last().attr('href'));


        
        data[index] = {info }
    })
    console.log(data);
});
