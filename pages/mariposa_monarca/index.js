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
        />
      </div>
      <section>
        <div className='container relative mx-auto rounded-3xl bg-silver-200 py-16 px-4 pt-8 sm:pt-16 lg:-top-40 lg:pb-0'>
          <h1 className='mb-6 p-2 sm:mb-12 lg:p-4'>Mariposa Monarca</h1>
          <div className='grid gap-4 lg:grid-cols-2'>
            <KeyFact title='Mariposa' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
            <KeyFact title='Territorio' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
            <KeyFact title='Números' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
            <KeyFact title='Vegetación' img='/images/guardianes_logo_bw.png'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nesciunt quibusdam sint. Voluptate facilis adipisci
              magni. Repudiandae quibusdam quam earum, amet voluptatibus tempore
              adipisci nesciunt molestiae expedita unde placeat culpa!
            </KeyFact>
          </div>
          <div className='bg-whiete mx-auto mt-16 w-5/6 rounded-3xl bg-white p-8 text-center shadow'>
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
