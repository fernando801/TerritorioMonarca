import { BsList } from 'react-icons/bs'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {

  const [ menuOpen, setMenuOpen ] = useState(false)

  return (
    <header className='relative bg-amber-500'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between gap-2 py-4 text-white'>
          <BsList className='text-4xl active:scale-95 lg:hidden' onClick={() => { setMenuOpen(!menuOpen) }}/>
          <Link href='/'><div className='aspect-square h-14 rounded-md bg-amber-700 cursor-pointer'></div></Link>
          <nav className={`${ menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0' } ${styles.menu}`}>
            <div><Link href='/'><a className={styles.menu__item}>Home</a></Link></div>
            <div className='group relative'><Link href='/mariposa_monarca/'><a className={styles.menu__item}>Mariposa Monarca</a></Link>
              <div className={`${styles.dropdown} lg:group-hover:scale-y-100 lg:group-hover:opacity-100`}>
                <div><Link href='/mariposa_monarca/ciclo/'><a className={styles.menu__subitem}>Ciclo de vida</a></Link></div>
              </div>
            </div>
            <div className='group relative'><Link href='/como_ayudar/'><a className={styles.menu__item}>¿Cómo ayudar?</a></Link>
              <div className={`${styles.dropdown} lg:group-hover:scale-y-100 lg:group-hover:opacity-100`}>
                <div><Link href='/como_ayudar/guardianes/'><a className={styles.menu__subitem}>Guardianes Monarca</a></Link></div>
                <div><Link href='/como_ayudar/donar/'><a className={styles.menu__subitem}>Donar</a></Link></div>
              </div>
            </div>
            <div><Link href='/productos/'><a className={styles.menu__item}>Productos</a></Link></div>
            <div><a className={styles.menu__item}>Jardínes</a></div>
            <div><a className={styles.menu__item}>Contacto</a></div>
            <div><a className={styles.menu__item}>Blog</a></div>
          </nav>
        </div>
      </div>
    </header>
  )
}
