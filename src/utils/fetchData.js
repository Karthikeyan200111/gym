export const options = {
    method: 'GET',
   // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export  const youtubeOptions = {
    method: 'GET',
  //  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    // params: {
    //   id: 'UCE_M8A5yxnLfW0KghEeajjw'
    // },
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

  export const fetchUrl=async(url,options)=>{
    const response=await fetch(url,options);
    const data= await response.json();

    return data
  }