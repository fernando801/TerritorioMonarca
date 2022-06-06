import { BsList } from 'react-icons/bs'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='relative bg-amber-500'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between gap-2 py-3 text-white'>
          <BsList
            className='text-4xl active:scale-95 lg:hidden'
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          />
          <Link href='/'>
            <div className='relative aspect-square h-16 cursor-pointer'>
              <Image
                src='/images/territorio_monarca_logo.png'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </Link>
          <nav
            className={`${
              menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            } ${styles.menu}`}
          >
            <div>
              <Link href='/'>
                <div className={styles.menu__item}>Inicio</div>
              </Link>
            </div>
            <div>
              <Link href='/nosotros/'>
                <div className={styles.menu__item}>Nosotros</div>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/mariposa_monarca/'>
                <div className={styles.menu__item}>Mariposa Monarca</div>
              </Link>
              <div
                className={`${styles.dropdown} lg:group-hover:scale-y-100 lg:group-hover:opacity-100`}
              >
                <Link href='/mariposa_monarca/ciclo/'>
                  <div className={styles.menu__subitem}>Ciclo de vida</div>
                </Link>
              </div>
            </div>
            <div className='group relative'>
              <Link href='/como_ayudar/'>
                <div className={styles.menu__item}>¿Cómo ayudar?</div>
              </Link>
              <div
                className={`${styles.dropdown} lg:group-hover:scale-y-100 lg:group-hover:opacity-100`}
              >
                <Link href='/como_ayudar/guardianes/'>
                  <div className={styles.menu__subitem}>Guardianes Monarca</div>
                </Link>
                <Link href='/como_ayudar/donar/'>
                  <div className={styles.menu__subitem}>Donar</div>
                </Link>
                <Link href='/como_ayudar/productos/'>
                  <div className={styles.menu__subitem}>Productos</div>
                </Link>
                <Link href='/como_ayudar/paquetes/'>
                  <div className={styles.menu__subitem}>Paquetes Monarca</div>
                </Link>
              </div>
            </div>
            <div>
              <Link href='/jardines/'>
                <div className={styles.menu__item}>Jardines</div>
              </Link>
            </div>
            <div>
              <Link href='/contacto/'>
                <div className={styles.menu__item}>Contacto</div>
              </Link>
            </div>
            <div>
              <Link href='/blog/'>
                <div className={styles.menu__item}>Blog</div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
