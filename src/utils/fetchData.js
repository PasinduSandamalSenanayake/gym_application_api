export const exerciseOptions= {
    method: 'GET',
    //params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    //try {
      const response = await fetch(url, options);
      const data = await response.json();
      //console.log("aa",data); // Log the data to see what is being received
      return data;
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   throw error;
    // }
  }
  