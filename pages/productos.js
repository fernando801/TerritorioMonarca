import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Product from '@/components/Product'

const products = [
  {
    id: '1',
    title: 'Bodem 1',
    img: '/images/products/bodem.png',
    icon: '/images/products/bodem.png',
    price: 200.00,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia animi eligendi est suscipit voluptatibus expedita harum optio? Dolor culpa tempore labore, nihil ut cumque vero beatae aut molestias consequatur.',
    link: 'https://www.mercadolibre.com.mx',
  },
  {
    id: '2',
    title: 'Bodem 2',
    img: '/images/products/bodem.png',
    icon: '/images/products/bodem.png',
    price: 200.00,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia animi eligendi est suscipit voluptatibus expedita harum optio? Dolor culpa tempore labore, nihil ut cumque vero beatae aut molestias consequatur.',
    link: 'https://www.mercadolibre.com.mx',
  },
  {
    id: '3',
    title: 'Bodem 3',
    img: '/images/products/bodem.png',
    icon: '/images/products/bodem.png',
    price: 200.00,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia animi eligendi est suscipit voluptatibus expedita harum optio? Dolor culpa tempore labore, nihil ut cumque vero beatae aut molestias consequatur.',
    link: 'https://www.mercadolibre.com.mx',
  },
]

export default function Productos() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id)

  const product = products.find( product => product.id === selectedProduct )

  return (
    <div className='relative grid h-screen w-full grid-rows-[auto_1fr]'>
      <div>
        <Header />
      </div>
      <div className='grid grid-cols-[100px_1fr] overflow-hidden md:grid-cols-[1fr_4fr] lg:grid-cols-[240px_1fr]'>
        <div className='flex flex-col items-center justify-center overflow-hidden bg-red-500 py-4'>
          <div className='h-fit w-full max-w-[200px] overflow-auto rounded-3xl bg-zinc-200'>
            {products.map((product) => (
              <div
                key={product.id}
                className={`aspect-square rounded-3xl p-4 cursor-pointer active:scale-95 ${product.id === selectedProduct && 'bg-white'}`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <figure className='relative h-full w-full'>
                  <Image
                    src={product.icon}
                    layout='fill'
                    object-fit='contain'
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className='relative overflow-hidden bg-cyan-500'>
          <Product {...product}/>
        </div>
      </div>
    </div>
  )
}
