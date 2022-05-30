import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Jardines () {
  return(
    <>
      <Header />
      <iframe src="https://www.google.com/maps/d/embed?mid=1WWQQD6UCvWWIm-WK9yMvGl935k1zm6JC&ehbc=2E312F" width="640" height="480"></iframe>
    </>
  )
}