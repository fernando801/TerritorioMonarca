import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TablaJornadas from '@/components/TablaJornadas'

export default function Jornadas() {
  return (
    <div>
      <Header />
      <section>
        <div className='container mx-auto px-4 py-8 sm:pt-16'>
          <div className='mx-auto px-8 text-justify md:max-w-[800px]'>
            <h1 className='mx-auto py-4 text-center sm:mb-12'>
              Jornandas Ambientales
            </h1>
            <p className='py-2'>
              La Fundación Territorio Monarca invita todos los sábados a hacer
              Jornadas ambientales a sus diferentes jardines. En cada ocasión
              las actividades son diferentes, puesto que el jardín tiene
              necesidades diferentes. Esto con la intención de que la comunidad
              conozca los jardines, se interese por cuidarlos y utilizarlos, ya
              que son por y para la sociedad.
            </p>
            <p className='mt-8 py-2'>
              Hay 4 maneras de vivir la jornada ambiental:
            </p>
            <ul className='list-disc py-2 pl-6'>
              <li className='py-1'>
                De manera individual. Esta visita no tiene costo, incluye una
                visita guiada por el parque y herramientas de trabajo para
                ayudar a regar, mover o plantar.{' '}
              </li>
              <li className='py-1'>
                Paquete 1. Tiene un costo de $50 por persona y se necesita un
                mínimo de 10 personas. Esta visita incluye guía, herramientas de
                trabajo, un mentor, actividades y dinámicas y centros de
                hidratación.
              </li>
              <li className='py-1'>
                Paquete 2. Tiene un costo de $200 por persona y se necesita un
                mínimo de 10 personas. Esta visita incluye guía, herramientas de
                trabajo, un mentor, actividades y dinámicas, centros de
                hidratación y Paquetes monarca individuales.
              </li>
              <li className='py-1'>
                Paquete 3. Tiene un costo de $350 por persona y se necesita un
                mínimo de 10 personas. Esta visita incluye guía, herramientas de
                trabajo, un mentor, actividades y dinámicas, centros de
                hidratación, Paquetes monarca individuales, comida de medio día
                y una playera de la Fundación.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto flex flex-col p-8 text-center gap-8'>
          <h2>Tabla de los paquetes de jornada ambiental</h2>
          <div className='overflow-auto py-4 lg:mx-auto'>
            <TablaJornadas />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
