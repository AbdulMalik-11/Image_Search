import axios from 'axios'
async function getimages(term)
{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID eXhibq3ii-XTn2uNWEwMZgBijd3jFgsdkLYQcWlv2AQ'
        },
        params:{
            query:term
        }
    });
    return response.data.results;
}
export default getimages;