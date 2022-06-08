import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Aplicacion() {
  return (
    <div>
      <Header />
      <section>
        <div className='container mx-auto px-4 py-16 pt-8 sm:pt-16'>
          <div className='mx-auto px-8 text-justify md:max-w-[800px]'>
            <h1 className='mx-auto py-4 text-center sm:mb-12'>Aplicacion</h1>
            <p className='py-2'>
              En la aplicación de Guardianes Monarca, además de registrarse como
              tal, es posible acumular puntos y obtener recompensas de los
              patrocinadores de la Fundación. Incluso, es posible ganar una
              visita a los Santuarios ubicados en Canadá. Dentro de esta
              aplicación se encuentran los siguientes beneficios:
            </p>
 
            <ul className='list-disc py-2 pl-6 my-4'>
              <li className='py-1'>
                Información acerca de las Mariposas Monarca.
              </li>
              <li className='py-1'>
                Calendario con los eventos de Fundación Territorio Monarca por
                ciudad.
              </li>
              <li className='py-1'>
                Un mapa con avistamientos de Mariposas Monarca.
              </li>
              <li className='py-1'>
                Posibilidad de poner un avistamiento de Mariposa Monarca.
              </li>
              <li className='py-1'>
                Información acerca de semillas y plantas que son beneficiosas
                para las Mariposas Monarca.
              </li>
              <li className='py-1'>
                Sistema de registro de puntos, recompensas y niveles.
              </li>
              <li className='py-1'>Contador de Guardianes Monarca</li>
            </ul>
            <p className='py-2'>
              Los puntos pueden obtenerse con diferentes actividades, tales como
              asistir a los eventos, adquirir Paquetes monarca, informarse sobre
              la Mariposa Monarca, educar a otros, acudir a jornadas
              ambientales, entre otras.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-8 text-center'>
          <h2>Está disponible en Google Play y Appstore</h2>
        </div>
      </section>
      <Footer />
    </div>
  )
}
