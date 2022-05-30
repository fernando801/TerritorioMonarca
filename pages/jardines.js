import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Jardines () {
  return(
    <>
      <Header />
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wzSkRuCpl_l7bSAVULmSo8Gi1xs12Vu2&ehbc=2E312F" width="640" height="480"></iframe>
    </>
  )
}