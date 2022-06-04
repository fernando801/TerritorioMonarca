import { BsDot } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='overflow-x-hidden bg-amber-500 text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-between gap-4 p-8 lg:py-12 lg:flex-row'>
          <div className='flex flex-col gap-2'>
            <Link href='/nosotros/'>
              <div className='font-bold cursor-pointer'>Nosotros</div>
            </Link>
            <ul className='hidden flex-col gap-2 lg:flex'>
              <Link href='/nosotros#nosotros'><li className='cursor-pointer'>- Misión y Visión</li></Link>
              <Link href='/nosotros#nuestra-histoia'><li className='cursor-pointer'>- Nuestra Historia</li></Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/mariposa_monarca/'>
              <div className='font-bold cursor-pointer'>Mariposa Monarca</div>
            </Link>
            <ul className='hidden lg:flex flex-col gap-2'>
              <Link href='/mariposa_monarca/ciclo/'><li className='cursor-pointer'>- Ciclo de vida</li></Link>
              <Link href='/mariposa_monarca#caracteristicas'><li className='cursor-pointer'>- Características</li></Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/como_ayudar/'>
              <div className='font-bold cursor-pointer'>¿Cómo Ayudar?</div>
            </Link>
            <ul className='hidden lg:flex flex-col gap-2'>
              <Link href='/como_ayudar/guardianes/'><li className='cursor-pointer'>- Guardianes Monarca</li></Link>
              <Link href='/como_ayudar/donar/'><li className='cursor-pointer'>- Donar</li></Link>
              <Link href='/como_ayudar/productos/'><li className='cursor-pointer'>- Productos</li></Link>
              <Link href='/como_ayudar/paquetes/'><li className='cursor-pointer'>- Paqutes Monarca</li></Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/jardines/'>
              <div className='font-bold cursor-pointer'>Jardines</div>
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/blog/'>
              <div className='font-bold cursor-pointer'>Blog</div>
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            <Link href='/jardines/'>
              <div className='font-bold cursor-pointer'>Contáctanos</div>
            </Link>
            <div>contacto@fundacionterritoriomonarca.org</div>
            <div className='flex items-center justify-center gap-4'>
              <BsDot className='text-4xl' />
              <div className='relative aspect-square h-12'>
                <Image
                  src='/images/social_networks/instagram.png'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='relative aspect-square h-12'>
                <Image
                  src='/images/social_networks/facebook.png'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='relative aspect-square h-12'>
                <Image
                  src='/images/social_networks/tiktok.png'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <BsDot className='text-4xl' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
