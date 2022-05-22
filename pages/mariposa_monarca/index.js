import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import KeyFact from '@/components/KeyFact'

export default function MariposaMonarca() {
  return (
    <>
      <Header />
      <div className='relative h-52 sm:h-72 md:h-80 lg:h-[32rem]'>
        <Image
          src='/images/mariposa_monarca.jpg'
          layout='fill'
          objectFit='cover'
          alt='mariposa monarca'
          priority={true}
        />
      </div>
      <section>
        <div className='container relative mx-auto rounded-3xl bg-silver-200 py-16 px-4 pt-8 sm:pt-16 lg:-top-40 lg:pb-0'>
          <h1 className='mb-6 p-2 sm:mb-12 lg:p-4'>Mariposa Monarca</h1>
          <div className='grid gap-4 lg:grid-cols-2'>
            <KeyFact title='Importancia' img='/images/guardianes_logo_bw.png'>
              <ol className='list-decimal pl-4'>
                <li className='py-1'>
                  La mariposa monarca es un bioindicador demasiado importante,
                  puesto que reconoce cuando la tierra y las plantas contienen
                  pesticidas o están muriendo, por lo cual no hacen sus paradas,
                  ya que la tierra está enferma y muerta.
                </li>
                <li className='py-1'>
                  Se alimentan del polen y llegan a fertilizar 4500 km de
                  plantas, lo cual provoca que muchos de nuestros alimentos sean
                  el producto de la fertilización hecha por las mariposas.
                </li>
                <li className='py-1'>
                  Podría incluso decirse que el equilibrio de la naturaleza en
                  México se basa en la travesía que llevan las mariposas.
                </li>
              </ol>
            </KeyFact>
            <KeyFact title='Migración' img='/images/guardianes_logo_bw.png'>
              <p className='py-1'>
                La mariposa que sale de EUA y Canadá no es la misma que llega a
                México. En realidad quien llega es la 5ta generación, la cual
                deja huevos y mueren. Esta 5ta es conocida como matusalén, y es
                de un tamaño más grande.
              </p>
              <p className='py-1'>
                Esta generación de mariposas llega a México, descansa en los
                santuarios y posteriormente hace el viaje de regreso . En
                comparación de la otras mariposas que solo viven 28 días, las
                matusalén llegar a vivir de 4 a 6 meses.
              </p>
              <p className='py-1'>
                Este fenómeno migratorio solo está en EUA, Canadá y México; por
                lo que no está en extinción la especie, está en extinción el
                fenómeno.
              </p>
            </KeyFact>
            <KeyFact title='Problema' img='/images/guardianes_logo_bw.png'>
              <p className='py-1'>
                En 2014 se manda una alerta internacional, ya que comienza a
                disminuir la población de mariposas monarcas de 200 millones a
                tan solo 6 millones, por lo cual el fenómeno que solo sucede en
                México, Estados Unidos y Canadá, se encontraba en peligro.
              </p>
              <p className='py-1'>
                Debido a esta situación se decide contratar al ingeniero Fluvio
                quien después de realizar una travesía por el recorrido de la
                mariposa, llega a la conclusión de que ya no existen lugares
                donde la mariposa pueda descansar, reproducirse y dejar sus
                huevecillos, ya que todos estos lugares han sido contaminados
                por fábricas industriales, contaminación y la población en
                general, y la mariposa monarca no se posará en lugares cuya
                tierra se encuentre muerta.
              </p>
            </KeyFact>
            <KeyFact
              title='Generación Matusalén'
              img='/images/guardianes_logo_bw.png'
            >
              <p className='py-1'>
                Normalmente, las mariposas adultas reproductivas viven de cuatro
                a cinco semanas, no obstante una de las maravillas de la
                mariposa Monarca es la producción de la llamada “generación
                Matusalén”.
              </p>
              <p className='py-1'>
                Cuando el otoño se acerca en los sitios donde provienen las
                mariposas migratorias, nace esta generación especial, las cuales
                no son iguales a sus ancestros, ya que a diferencia de sus
                padres, abuelos, bisabuelos e incluso tatarabuelos, quienes
                tuvieron una vida efímera de unas semanas e incluso hasta un
                mes, estas mariposas migratorias vivirán hasta siete u ocho
                meses. Esta es la generación que efectúa la increíble proeza de
                volar desde Canadá y Estados Unidos, hasta el centro de México y
                de regreso.
              </p>
            </KeyFact>
          </div>
          <div className='bg-whiete sm:mx-auto mt-16 mx-4 sm:w-5/6 rounded-3xl bg-white p-8 text-justify sm:text-center shadow'>
            <h2 className='mb-8 text-center'> Ciclo de Vida</h2>
            <p>
              Ciclo de vida (oruga, crisálida, mariposa, matusalén) La mariposa
              monarca es un lepidóptero, lo cual significa que pasa por varias
              etapas de desarrollo antes de llegar al estado adulto, o mejor
              conocido como metamorfosis. Esta metamorfosis dura aproximadamente
              de tres a cinco semanas, dependiendo completamente de las
              condiciones ambientales.
            </p>
            <Link href='/mariposa_monarca/ciclo/'>
              <div className='pill mx-auto mt-12 cursor-pointer px-8 py-2 font-serif text-xl hover:bg-amber-400 active:scale-95'>
                Más Información
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className='relative rounded-t-3xl bg-clay-300'>
        <div className='container mx-auto py-12 px-6'>
          <div className='grid items-center gap-8 lg:grid-cols-[1fr_2fr]'>
            <h2 className='py-4 lg:col-start-2'>Características</h2>
            <ul className='list-disc pl-6 text-xl'>
              <li>Mariposa</li>
              <li>Mariposa</li>
              <li>Mariposa</li>
              <li>Mariposa</li>
            </ul>
            <div className='text-justify'>
              <p className='py-2'>
                Las mariposas monarcas son reconocidas por tener una coloración
                de color naranja ladrillo con el borde de sus alas negro y dos
                hileras de pequeñas manchas blancas, con una envergadura de 8 a
                12 cm
              </p>
              <p className='py-2'>
                Mientras que los machos son un poco más grandes que las hembras,
                y presentan un punto negro, también conocido como stigmata en
                las vénulas de las alas, las cuales son escamas que producen
                feromonas para atraer a las hembras, aunque parece que estas no
                son usadas por las mariposas monarca migratorias.
              </p>
              <p className='py-2'>
                El cuerpo de la mariposa Monarca consta básicamente de la
                cabeza, tórax y abdomen, todos ellos de color negro. Tanto el
                tórax como la cabeza presentan manchas blancas, al igual que las
                alas, mientras que su abdomen contiene dos franjas alargadas de
                color blanco en ambos lados. Su cabeza cuenta con dos antenas
                las cuales le permiten orientarse, mientras que sus dos ojos
                captan la luz e imágenes.
              </p>
              <p className='py-2'>
                Si bien las mariposas poseen tres pares de patas como todos los
                insectos, en la familia de la mariposa Monarca el par de patas
                delanteras es muy pequeño, por lo cual puede llegar a aparentar
                tener solo dos pares.
              </p>
              <p className='py-2'>
                Además de esto las mariposas adultas tiene el cuerpo cubierto de
                fluido, el cual les da un sabor desagradable y esto les permite
                estar más protegidos de sus depredadores.
              </p>
              <p className='py-2'>
                Así como con la mayoría de los animales, existe una forma de
                reconocer cuando es una mariposa monarca hembra o un macho, pues
                en las hembras las venas son más anchas, así como también el
                reverso de las alas posteriores, su color naranja es sustituido
                por un color más amarillo opaco con el mismo patrón de
                nervaduras y de manchas. Su tamaño es de 11 centímetros y su
                peso va de un cuarto a tres cuartos de gramo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
