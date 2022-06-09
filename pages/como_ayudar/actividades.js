import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PaqueteMonarca from '@/components/PaqueteMonarca'

export default function Paquetes() {
  return (
    <>
      <Header />
      <section>
        <article className='container mx-auto p-8 sm:p-12'>
          <h1 className='text-center'>Actividades</h1>
        </article>
      </section>
      <section className='mb-8'>
        <article className='container mx-auto p-4'>
          <h2 className='p-8'>Público en General</h2>
          <div className='flex justify-center rounded-3xl bg-clay-300'>
            <div className='flex gap-8 overflow-auto p-8 2xl:gap-20'>
              <PaqueteMonarca
                title={'Participar en eventos'}
                img='/images/mariposa_monarca.jpg'
              >
                La Fundación Territorio Monarca organiza o acude a eventos donde
                invita a sus colaboradores. Hay una gran variedad de estos.
                Pueden ser para ayudar directamente en la conservación de un
                área para la mariposa, una conmemoración, inauguraciones,
                campañas de concientización, entre otras. Dependiendo de las
                preferencias del Guardián Monarca, puede escoger a qué eventos
                asistir.
              </PaqueteMonarca>
              <PaqueteMonarca
                title={'Jornadas ambientales'}
                img='/images/mariposa_monarca.jpg'
                link='/como_ayudar/jornadas'
              >
                <p>
                  Todos los sábados Fundación Territorio Monarca invita a sus
                  aliados a sus jardines con el objetivo de darles mantenimiento
                  para que las mariposas puedan seguir utilizándolos y
                  mantenerlos en condiciones adecuadas. Cada sábado las
                  actividades son diferentes. Puede ser ir a sembrar plantas,
                  cuidados generales o simplemente regar.
                </p>
              </PaqueteMonarca>
              <PaqueteMonarca
                title='Aplicación'
                img='/images/mariposa_monarca.jpg'
                link='/como_ayudar/aplicacion'
              >
                En la aplicación de Guardianes Monarca, además de registrarse
                como tal, es posible acumular puntos y obtener recompensas de
                los patrocinadores de la Fundación. Incluso, es posible ganar
                una visita a los Santuarios ubicados en Canadá.
              </PaqueteMonarca>
            </div>
          </div>
        </article>
        <article className='container mx-auto p-4'>
          <h2 className='p-8'>Aliados y Empresas</h2>
          <div className='flex justify-center rounded-3xl bg-clay-300'>
            <div className='flex gap-8 overflow-auto p-8 2xl:gap-20'>
              <PaqueteMonarca
                title='Ser un aliado estratégico'
                img='/images/mariposa_monarca.jpg'
              >
                Los aliados estratégicos son las instituciones educativas,
                empresas, organizaciones de la sociedad civil y secciones del
                gobierno que desean contribuir con la Fundación. Pueden asistir
                a jornadas ambientales, dar donativos, ser patrocinadores,
                ayudar a la fundación a crecer y/o ayudar en la educación acerca
                de la mariposa monarca y su importancia.
              </PaqueteMonarca>
              <PaqueteMonarca
                title='Patrocinar un jardín'
                img='/images/mariposa_monarca.jpg'
              >
                Los jardines que hace la fundación, además de costosos,
                necesitan un terreno que sea fértil y apto para mantener las
                especies de plantas seleccionadas para las mariposas. Por lo
                tanto, es necesario la búsqueda de patrocinadores para poder
                poner más jardines. Si te gustaría saber cómo patrocinar un
                jardín, por favor contáctanos.
              </PaqueteMonarca>
              <PaqueteMonarca
                title='Tener un jardín monarca'
                img='/images/mariposa_monarca.jpg'
              >
                Los particulares pueden tener jardines monarca dentro de sus
                instalaciones, lo cual es una alternativa a patrocinar un nuevo
                jardín. El objetivo de estos jardines es que las mariposas
                tengan más espacios seguros a los cuales llegar durante su
                migración libres de insecticidas y fertilizantes. Estos deben
                ser certificados previamente por la Fundación.
              </PaqueteMonarca>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  )
}
