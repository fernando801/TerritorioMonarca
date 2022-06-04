import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ComoAyudar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-clay-300' id='nosotros'>
        <div className='container relative mx-auto py-8 px-4 sm:py-16'>
          <h1 className='mx-auto py-4 text-center '>Nosotros</h1>
        </div>
      </section>
      <section id='mision-vision'>
        <div className='container mx-auto px-4 py-20'>
          <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 rounded-3xl bg-white p-8 xl:max-w-6xl'>
            <div className='p-8'>
              <div className='relative h-72 lg:h-full'>
                <Image 
                  src='/images/territorio_monarca_logo.png'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <div>
              <div className='p-4'>
                <h2 className='text-center'>Misión</h2>
                <div className='my-2 rounded-full bg-black py-[2px]'></div>
                <p className='text-justify'>
                  Contribuyendo a la conservación del hábitat migratorio
                  mexicano de la mariposa monarca.
                </p>
              </div>
              <div className='p-4'>
                <h2 className='text-center'>Visión</h2>
                <div className='my-2 rounded-full bg-black py-[2px]'></div>
                <p className='text-justify'>
                  En 2030 haber plantado los 3600 jardines en los 12 Estados de
                  la República por los que pasa la mariposa y hacerlos
                  sustentables en 30 años. Esto se pretende con jardines con
                  área de 1 hectárea donde existan 600 m^2 para crear una zona
                  de reforestación para la mariposa monarca y los otros 400 m^2
                  sean zonas exclusivamente de cultivo orgánico. Entonces, dar
                  el espacio a las poblaciones de alto riesgo para que cuiden
                  del cultivo, vendan los productos y se alimenten de él, a
                  cambio de mantener en buen estado la vegetación para las
                  mariposas monarcas. Mientras que la Fundación se hace cargo de
                  generar una ruta de intercambio económico para vender los
                  productos orgánicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='nuestra-historia'>
        <div className='container mx-auto px-6 py-12 lg:py-20'>
          <h1 className='mx-auto px-8 text-center'> Nuestra Historia</h1>
          <div className='mx-auto mt-8 rounded-3xl bg-white p-8 text-justify sm:mt-16 xl:max-w-6xl'>
            <p className='p-2'>
              En el año 2007, el Instituto Correo Real se encargó de contar el
              número de mariposas que había, así como también las hectáreas que
              dichas mariposas ocupaban, reportando así que existía la cantidad
              de 200 millones de mariposas y que utilizaban alrededor de 19.5
              hectáreas.
            </p>
            <p className='p-2'>
              En 2014 se realizó el mismo conteo y posteriormente se reportó que
              ese año solo habían llegado 6 millones de mariposas y que ocupaban
              menos de media hectárea. Al hacer público dicho informe, se
              despliegan las alertas internacionales y se contrata al ingeniero
              Fluvio, quien se encarga de recorrer de manera completa la ruta de
              la mariposa monarca.
            </p>
            <p className='p-2'>
              En 2015, el ingeniero encuentra el problema principal, y declara
              que aquellos lugares donde la mariposa monarca descansaba,
              alimentaba, reproducía y dejaba sus huevecillos ya no existen,
              ahora esos lugares están siendo empleados por fábricas e
              industrias, entre muchos otros actores que perjudican el recorrido
              de esta mariposa. Durante su viaje, las mariposas llegan a
              recorrer hasta 4500 km, y su viaje por lo general dura de 4 a 5
              meses, donde irán dejando sus huevecillos, alimentándose y
              descansando, pero al no encontrar estos espacios, terminan
              muriendo.{' '}
            </p>
            <p className='p-2'>
              Debido a esto se decide tomar acción e instalar 3600 jardines por
              los 12 estados que la mariposa atraviesa. El proyecto en sí
              consiste en generar 300 jardines sustentables en cada estado de la
              República por el que la mariposa pasa. Y así es como dicho
              proyecto se transforma en la Fundación Territorio Monarca.
            </p>
            <p className='p-2'>
              En 2017 se comienzan operaciones con 5 fundadores, los cuales son
              el zootécnico veterinario Rodrigo Porfirio Mendoza, el MAGIC
              maestro ingeniero en agronomía Leonel Heat Moncada, el Ingeniero
              Francisco Hurtado Mendoza, la licenciada Berenice Vélez y por
              último el ingeniero Héctor Muñoz. Para el 2021 se añade el
              licenciado Eduardo Reyes.
            </p>
            <p className='p-2'>
              El primer convenio fue hecho con la asociación de desarrollo
              regional de Amealco (ADERSA), buscando fortalecerse mediante una
              asociación de 8 años. También se suma la Universidad Politécnica
              de Santa Rosa Jauregui. Y así es como se instalan los primeros
              Jardines monarca y el primer vivero de la Fundación en 2017.
            </p>
            <p className='p-2'>
              En 2018, en la misma Universidad se abre el centro de
              investigación de la Fundación Territorio Monarca. En donde se han
              escrito varios artículos y un libro.
            </p>
            <p className='p-2'>
              En 2019 en unión con la ONU se firma la Carta para la Tierra en la
              cual participaron 62 países. Asimismo, en este año se obtuvo una
              mención honorífica por SAGARPA y SEDESU, ya que la Fundación no
              solo se detuvo la pérdida de la mariposa, sino que aumentó en un
              3.5% de la población que llegó a los santuarios.
            </p>
            <p className='p-2'>
              El primer patrocinador de un Jardín Monarca es la empresa
              Michelin, posteriormente se le unen Harman, Parque Bicentenario y
              50 empresas más. Así como hay alianzas con empresas, también se
              pueden encontrar alianzas estratégicas con escuelas como ITESM,
              UTEQ, Colegio Keller Williams, Universidad Politécnica, Colegio
              Franloid Right y Escuela Kennedy. Además de la Cámara Nacional de
              la Industria de la Transformación (CANACINTRA) y la Confederación
              patronal de la república Mexicana (Coparmex).
            </p>
            <p className='p-2'>
              Debido a que los Jardines Monarca son demasiado costosos, en 2020
              se crea el programa de Guardianes Monarca, teniendo así una
              ampliación de la Fundación y se impulsa con la creación de una
              aplicación. Este programa pretende involucrar a la sociedad en
              general en el proyecto, por lo que cualquier empresa, institución,
              sociedad civil o persona que quiera apoyar, directamente se
              convierte en un Guardián Monarca.
            </p>
            <p className='p-2'>
              Actualmente, se tienen 70 jardines instalados en Querétaro, y se
              tiene una alianza con el Fideicomiso para la Prevención del Medio
              Ambiente del Estado de Querétaro (FIGMA).
            </p>
            <p className='p-2'>
              Se espera en los años de 2022-2023 instalar nuevos jardines de la
              fundación en ITESM Toluca, San Luis Potosí y en el Viñedo Puerto
              de Lobos.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
