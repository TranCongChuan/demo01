import React, { useState } from "react"
import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

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
  return (
    <main>
      <h1>{stData.minrate} This blogs page</h1>
      <Link href="/"><a>Home page</a></Link>
    </main>
  )
}

export default Page