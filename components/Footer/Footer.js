import { BsDot } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='overflow-x-hidden bg-amber-500 text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-between gap-4 p-8 lg:flex-row'>
          <div className='flex flex-col gap-2'>
            <Link href='/nosotros/'>
              <div className='font-bold cursor-pointer'>Nosotros</div>
            </Link>
            <ul className='hidden flex-col gap-2 lg:flex'>
              <li>- Misión y Visión</li>
              <li>- Nuestra Historia</li>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/mariposa_monarca/'>
              <div className='font-bold cursor-pointer'>Mariposa Monarca</div>
            </Link>
            <ul className='hidden lg:flex flex-col gap-2'>
              <li>- Ciclo de vida</li>
              <li>- Características</li>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/como_ayudar/'>
              <div className='font-bold cursor-pointer'>¿Cómo Ayudar?</div>
            </Link>
            <ul className='hidden lg:flex flex-col gap-2'>
              <li>- Guardianes Monarca</li>
              <li>- Donar</li>
              <li>- Productos</li>
              <li>- Paqutes Monarca</li>
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
