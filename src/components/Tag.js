import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
  const [tag, setTag] = useState('');
  
  async function fetchData(){

    setLoading(true);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

  function changeHandler(event){

    setTag(event.target.value);
    
  }

  return (
    <div className=' flex flex-col items-center w-1/2   bg-yellow-300 border
     border-black rounded-lg mx-auto text-center gap-5 mt-[30px]'>

       <h1 className='text-xl font-bold underline cap '> Random Gif</h1>
       {

           loading ? (<Spinner/>) : (<img src={gif} width="450" />)

       }

       <input className='w-11/12 py-2 px-10 rounded-lg text-xl text-center' onChange={changeHandler} value={tag} />

       <botton onClick = {clickHandler} className= "bg-slate-300 w-11/12 py-1 text-lg font-semibold rounded-lg cursor-pointer">GENERATE</botton>

    </div>
  )
}

export default Tag;
