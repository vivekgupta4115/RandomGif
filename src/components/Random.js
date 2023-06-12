import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
  
  async function fetchData(){

    setLoading(true);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);

    setLoading(false);
  }

  useEffect( () => {
        fetchData();
  }, [] )

  function clickHandler(){

    fetchData();
  }

  return (
    <div className=' flex flex-col items-center w-1/2 h-auto  bg-green-500 border
     border-black rounded-lg mx-auto text-center gap-5 mt-[25px]'>

       <h1 className='text-xl font-bold underline cap '>A Random Gif</h1>
       {

           loading ? (<Spinner/>) : (<img src={gif} width="400" />)

       }

       <botton onClick = {clickHandler} className= "bg-slate-300 w-11/12 py-1 text-lg font-semibold rounded-lg cursor-pointer">GENERATE</botton>

    </div>
  )
}

export default Random;
