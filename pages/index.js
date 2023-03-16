import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FlagsmithBlock from "../components/FlagsmithBlock";
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isReady, setReady] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Flagsmith Realtime Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script onLoad={()=>{setReady(true)}} src="https://js.pusher.com/7.0/pusher.min.js"></Script>
        {isReady && (
            <div style={{display:"flex", justifyContent:'center', flexWrap:"wrap"}}>
                {
                    new Array(16).fill(0).map((_,v)=>(
                        <FlagsmithBlock key={v} id={`test${v+1}`}/>
                    ))
                }
            </div>
        )}
    </div>
  )
}
