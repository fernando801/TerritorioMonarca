import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Product from '@/components/Product'
import { getProducts } from '@/lib/api'

export async function getStaticProps() {
  const products = (await getProducts()) || []

  return {
    props: {
      products,
    },
  }
}

// const products = [
//   {
//     id: '1',
//     title: 'Bodem',
//     img: '/images/products/bodem.png',
//     icon: '/images/products/bodem.png',
//     price: 100.0,
//     description:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia animi eligendi est suscipit voluptatibus expedita harum optio? Dolor culpa tempore labore, nihil ut cumque vero beatae aut molestias consequatur.',
//     link: 'https://www.mercadolibre.com.mx',
//   },
//   {
//     id: '2',
//     title: 'Paquete Monarca',
//     img: '/images/products/paquete_monarca.png',
//     icon: '/images/products/paquete_monarca.png',
//     price: 200.0,
//     description:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia animi eligendi est suscipit voluptatibus expedita harum optio? Dolor culpa tempore labore, nihil ut cumque vero beatae aut molestias consequatur.',
//     link: 'https://www.mercadolibre.com.mx',
//   },
//   {
//     id: '3',
//     title: 'Especies Autorizadas',
//     img: '/images/products/especies_autorizadas.png',
//     icon: '/images/products/especies_autorizadas.png',
//     price: 300.0,
//     description:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quia animi eligendi est suscipit voluptatibus expedita harum optio? Dolor culpa tempore labore, nihil ut cumque vero beatae aut molestias consequatur.',
//     link: 'https://www.mercadolibre.com.mx',
//   },
// ]

export default function Productos({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id)

  const product = products.find((product) => product.id === selectedProduct)

  return (
    <>
      <div className='relative grid h-screen w-full grid-rows-[auto_1fr]'>
        <div>
          <Header />
        </div>
        <div className='container mx-auto grid grid-cols-[100px_1fr] overflow-hidden md:grid-cols-[1fr_4fr] lg:grid-cols-[240px_1fr] '>
          <div className='flex flex-col items-center justify-center overflow-hidden py-6'>
            <div className='h-fit w-full max-w-[200px] overflow-auto rounded-3xl bg-clay-300'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`aspect-square cursor-pointer rounded-3xl p-4 active:scale-95 ${
                    product.id === selectedProduct && 'bg-white'
                  }`}
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <figure className='relative h-full w-full'>
                    <Image
                      src={product.icon.url}
                      layout='fill'
                      objectFit='contain'
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <Product {...product} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
