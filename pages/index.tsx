import React from "react";
import { InferGetServerSidePropsType } from 'next'

type Data = { }

export const getServerSideProps = async () => {
  const res = await fetch('https://beta-api.busodevelopers.com/api/v1/products?domain_name=buso5.busodevelopers.com&lang=en&sort[]=position,desc')
  const resJson = await res.json()
  const data = resJson.data
  return {
    props: {
      data,
    },
  }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <main>
    {data.map((item: any, index: number) => (
      <p key={index}>{item.name}</p>
    ))}
  </main>
}

export default Page