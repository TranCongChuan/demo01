import React, { useState } from "react"
import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'

type Data = { }

export const getServerSideProps = async () => {
  const data: any = {}
  const res = await fetch('https://beta-api.busodevelopers.com/api/v1/products?domain_name=buso5.busodevelopers.com&lang=en&sort[]=position,desc')
  const resJson = await res.json()
  data.list = resJson.data
  data.minrate = 2020
  data.xtr = ''
  return {
    props: {
      data
    },
  }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [stData, setstData] = useState(data)
  const randString = (size : number) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < size; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    setstData({...stData, xtr: result})
  }
  return (
    <main>
      <h1>{stData.minrate} greender html layout</h1>
      <div><b>Is string randome: {stData.xtr}</b></div>
      <div><button onClick={() => randString(stData.minrate)}>Reset data</button></div>
      <div><Link href="/blogs"><a>Blogs page {process.env.NEXT_PUBLIC_ANALYTICS_ID}</a></Link></div>
      <input type="text" value={stData.minrate} onChange={(e) => setstData({...stData, minrate: e.target.value})}/>
      {stData.list.map((item: any, index: number) => (
        <div key={index}>
          <p>{item.name}</p>
          <div className="images">
            <Image
              src={item.avatar}
              layout="responsive"
              alt="Landscape picture"
              width={300}
              height={300}
            />
          </div>
        </div>
      ))}
    </main>
  )
}

export default Page