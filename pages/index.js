import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'
// console.log(process.env.SUPABASE_KEY)


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}
