import Head from 'next/head'
import chrome from 'chrome'
import axios from 'axios';
import { useEffect } from 'react';
export default function Home() {
  const GetChrome = () =>{
    console.log(chrome)
    
  }
  useEffect(()=>{
    GetChrome();
  })

  
  return (
    <div>

    </div>
  )
}
