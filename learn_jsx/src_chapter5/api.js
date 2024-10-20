import axios from 'axios';

const searchImages = async (term)=>
    {
        console.log(term);
        const response=await axios.get('https://api.unsplash.com/search/photos',
        {
            headers:{Authorization:'Client-ID 19I2fHRRBKZmDnZNN4Uee-lPSaYEPakmTxhWWJv7b20'},
            params:{query:term }
        });
    console.log(response);
    return response;
}

export default searchImages;
