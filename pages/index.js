import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FlagsmithBlock from "../components/FlagsmithBlock";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flagsmith Realtime Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div style={{display:"flex", justifyContent:'center', flexWrap:"wrap"}}>
            {
                new Array(16).fill(0).map((_,v)=>(
                    <FlagsmithBlock key={v} id={`test${v+1}`}/>
                ))
            }
        </div>
    </div>
  )
}
