import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FlagsmithBlock from "../components/FlagsmithBlock";
import flagsmith from "flagsmith";
import Script from 'next/script'
import {useState} from 'react';
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
                <FlagsmithBlock id="test"/>
                <FlagsmithBlock id="test2"/>
                <FlagsmithBlock id="test3"/>
                <FlagsmithBlock id="test4"/>
                <FlagsmithBlock id="test5"/>
                <FlagsmithBlock id="test6"/>
                <FlagsmithBlock id="test7"/>
                <FlagsmithBlock id="test8"/>
                <FlagsmithBlock id="test9"/>
                <FlagsmithBlock id="test10"/>
                <FlagsmithBlock id="test11"/>
                <FlagsmithBlock id="test12"/>
                <FlagsmithBlock id="test13"/>
                <FlagsmithBlock id="test14"/>
                <FlagsmithBlock id="test15"/>
                <FlagsmithBlock id="test16"/>
            </div>
        )}
    </div>
  )
}
