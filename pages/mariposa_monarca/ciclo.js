import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import CyclePhase from '@/components/CyclePhase'

const phases = [
  {
    title: 'Fase de Huevo',
    thumbnail: '/images/guardianes_logo_bw.png',
    img: '/images/mariposa_monarca.jpg',
    description: [
      'La hembra se encarga de depositar más de 500 huevecillos en el revés de las hojas de las plantas del género Asclepias, las cuales fueron llamadas así en honor al hijo de Apolo,  Asclepius pues tiene propiedades tanto tóxicas como medicinales y son hierbas perennes, que van desde  60 centímetros a metro y medio de altura.',
      'Estos huevecillos son del tamaño de la cabeza de un alfiler, con un color blanco cremoso y una forma cónica. Normalmente, son puestos unos cuantos huevecillos por planta para reducir la competencia entre larvas por la disponibilidad de alimentos. Esta fase dura de 3 a 6 días dependiendo de las condiciones ambientales.',
    ],
  },
  {
    title: 'Fase de Larva',
    thumbnail: '/images/guardianes_logo_bw.png',
    img: '/images/mariposa_monarca.jpg',
    description: [
      'De los huevecillos de color blanco nacen las larvas u orugas de color blanco con unas finas estrías de color negro y amarillo anaranjado. Su cuerpo cilíndrico está conformado por trece segmentos. En su cabeza posee un par de antenas las cuales se encargan de guiarla, además de que posee seis pares de ojos; sin embargo, su visión es demasiado pobre.',
      'En esta fase se alimentan de las hojas de la planta Asclepias, las cuales si bien son venenosas para la mayoría de los animales, no lo son para las orugas e incluso este veneno se acumula en sus cuerpos y les sirve como una protección de sus depredadores.',
      'Al crecer la larva muda su piel cinco veces, pues su desarrollo en las dos semanas que pasan es demasiado rápido, ya que aumenta su tamaño 300 veces, y una vez que la oruga alcanza el tamaño y madurez necesarios se prepara para la siguiente etapa.',
    ],
  },
  {
    title: 'Fase de Crisalida',
    thumbnail: '/images/guardianes_logo_bw.png',
    img: '/images/mariposa_monarca.jpg',
    description: [
      'En esta fase la oruga deja de comer y abandona la planta donde nació para poder buscar un lugar apropiado para convertirse en crisálida. Para esto, limpia sus intestinos y teje una pequeña almohadilla bajo una rama de la cual se cuelga de la parte posterior del abdomen formando así una “J” con su cuerpo. Aquí cambia una última vez de piel y de su boca saca un hilo de seda con la cual forma la cubierta que se encargará de protegerla. Aproximadamente en una hora se convierte en una crisálida que gradualmente se endurece volviéndose de color azul verdoso con puntos dorados. Después de ocho a diez días, la crisálida se vuelve traslúcida pudiendo así observar las alas de la mariposa.'
    ],
  },
  {
    title: 'Fase de Adulto',
    thumbnail: '/images/guardianes_logo_bw.png',
    img: '/images/mariposa_monarca.jpg',
    description: [
      'Una vez que la mariposa se ha formado dentro del capullo, la envoltura se rasga y comienza a salir el adulto. Al momento de salir del capullo, primero comienza liberando las patas y antenas. La mariposa se cuelga con sus alas hacia abajo, y empieza a bombear fluidos a sus alas para que estas se extiendan y se sequen, para que así cuando estas alcancen su firmeza y tamaño normal, pueda realizar su vuelo e incluso reproducirse.'
    ],
  },
]

export default function ComoAyudar() {
  return (
    <div>
      <Header />
      <section className='rounded-b-3xl bg-clay-300'>
        <div className='container relative mx-auto py-16 px-4 pt-8 sm:pt-16'>
          <h1 className='mx-auto py-4 text-center sm:mb-12'>Ciclo de vida</h1>
          <p className='px-6 py-2 text-justify'>
            Ciclo de vida (oruga, crisálida, mariposa, matusalén) La mariposa
            monarca es un lepidóptero, lo cual significa que pasa por varias
            etapas de desarrollo antes de llegar al estado adulto, o mejor
            conocido como metamorfosis. Esta metamorfosis dura aproximadamente
            de tres a cinco semanas, dependiendo completamente de las
            condiciones ambientales.
          </p>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-8 py-16'>
          <h2 className='text-center'>Etapas del cilco</h2>
          <div className='mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:gap-y-16 xl:grid-cols-4'>
            {phases.map( phase => (
              <CyclePhase key={phase.title} {...phase} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
