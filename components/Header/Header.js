import { BsList } from 'react-icons/bs'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {

  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <header className='relative bg-amber-500'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between gap-2 py-4 text-white'>
          <BsList className='text-4xl active:scale-95 lg:hidden' onClick={() => { setMenuOpen(!menuOpen) }}/>
          <div className='aspect-square h-14 rounded-md bg-amber-700'></div>
          <nav className={`${ menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0' } ${styles.menu}`}>
            <div><a href="/" className={styles.menu__item}>Mariposa Monarca</a></div>
            <div className='group relative'><a href="/" className={styles.menu__item}>¿Cómo ayudar?</a>
              <div className={`${styles.dropdown} lg:group-hover:scale-y-100 lg:group-hover:opacity-100`}>
                <div><a href="/" className={styles.menu__subitem}>Guardianes Monarca</a></div>
                <div><a href="/" className={styles.menu__subitem}>Donar</a></div>
              </div>
            </div>
            <div><a href="/" className={styles.menu__item}>Productos</a></div>
            <div><a href="/" className={styles.menu__item}>Jardínes</a></div>
            <div><a href="/" className={styles.menu__item}>Contacto</a></div>
            <div><a href="/" className={styles.menu__item}>Blog</a></div>
          </nav>
        </div>
      </div>
    </header>
  )
}
