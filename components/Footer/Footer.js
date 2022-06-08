import { BsDot } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='overflow-x-hidden bg-amber-500 text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-between gap-4 p-8 lg:flex-row lg:py-12'>
          <div className='flex flex-col gap-2'>
            <Link href='/nosotros/'>
              <div className='cursor-pointer font-bold'>Nosotros</div>
            </Link>
            <ul className='hidden flex-col gap-2 lg:flex'>
              <Link href='/nosotros#nosotros'>
                <li className='cursor-pointer'>- Misión y Visión</li>
              </Link>
              <Link href='/nosotros#nuestra-histoia'>
                <li className='cursor-pointer'>- Nuestra Historia</li>
              </Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/mariposa_monarca/'>
              <div className='cursor-pointer font-bold'>Mariposa Monarca</div>
            </Link>
            <ul className='hidden flex-col gap-2 lg:flex'>
              <Link href='/mariposa_monarca/ciclo/'>
                <li className='cursor-pointer'>- Ciclo de vida</li>
              </Link>
              <Link href='/mariposa_monarca#caracteristicas'>
                <li className='cursor-pointer'>- Características</li>
              </Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/como_ayudar/'>
              <div className='cursor-pointer font-bold'>¿Cómo Ayudar?</div>
            </Link>
            <ul className='hidden flex-col gap-2 lg:flex'>
              <Link href='/como_ayudar/guardianes/'>
                <li className='cursor-pointer'>- Guardianes Monarca</li>
              </Link>
              <Link href='/como_ayudar/donar/'>
                <li className='cursor-pointer'>- Donar</li>
              </Link>
              <Link href='/como_ayudar/productos/'>
                <li className='cursor-pointer'>- Productos</li>
              </Link>
              <Link href='/como_ayudar/actividades/'>
                <li className='cursor-pointer'>- Actividades</li>
              </Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/jardines/'>
              <div className='cursor-pointer font-bold'>Jardines</div>
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/blog/'>
              <div className='cursor-pointer font-bold'>Blog</div>
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            <Link href='/jardines/'>
              <div className='cursor-pointer font-bold'>Contáctanos</div>
            </Link>
            <div>contacto@fundacionterritoriomonarca.org</div>
            <div className='flex items-center justify-center gap-4'>
              <BsDot className='text-4xl' />
              <a
                className='relative aspect-square h-12'
                href='https://www.facebook.com/fundacionterritoriomonarca/'
                target='_blank'
              >
                <Image
                  src='/images/social_networks/instagram.png'
                  layout='fill'
                  objectFit='contain'
                />
              </a>
              <a
                className='relative aspect-square h-12'
                href='https://www.facebook.com/fundacionterritoriomonarca/'
                target='_blank'
              >
                <Image
                  src='/images/social_networks/facebook.png'
                  layout='fill'
                  objectFit='contain'
                />
              </a>
              <a
                className='relative aspect-square h-12'
                href='https://www.facebook.com/fundacionterritoriomonarca/'
                target='_blank'
              >
                <Image
                  src='/images/social_networks/tiktok.png'
                  layout='fill'
                  objectFit='contain'
                />
              </a>
              <BsDot className='text-4xl' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
