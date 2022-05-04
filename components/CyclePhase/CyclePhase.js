import { useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import Image from 'next/image'
import Modal from '@/components/Modal'

export default function CyclePhase({ title, img }) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div
        className='flex w-full max-w-[400px] flex-col justify-between rounded-3xl bg-white p-10 shadow'
        onClick={() => setModal(true)}
      >
        <h2 className='mb-8 text-center'>{title}</h2>
        <div className='aspect-square rounded-3xl bg-amber-500 p-6'>
          <div className='relative h-full w-full'>
            {img && <Image src={img} layout='fill' objectFit='contain' />}
          </div>
        </div>
      </div>
      {modal && (
        <Modal>
          <div className='max-w-5xl relative h-full rounded-3xl bg-white p-4 pt-16 md:pt-20'>
            <div
              className='absolute top-4 right-4 rounded-2xl bg-amber-500 p-2 text-white'
              onClick={() => setModal(false)}
            >
              <BsXLg className='text-2xl md:text-3xl' />
            </div>

            <div className='h-full overflow-auto '>
              <h1>{title}</h1>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur recusandae, repellat odio ipsum modi, facere
                perspiciatis iusto fugit quaerat molestias provident
                voluptatibus odit cupiditate. Ab rerum accusamus ipsum neque
                nostrum? Atque saepe repellat numquam! Facilis rerum, autem
                alias dolore est aspernatur distinctio architecto cum dolores
                iure mollitia, reiciendis nobis dolorum, repudiandae corrupti
                commodi? Est eum exercitationem labore dolore nisi veritatis,
                doloremque beatae tempora rem. Nihil, impedit delectus magnam
                dolor doloremque eaque omnis nobis obcaecati repellat voluptas
                debitis quas natus harum numquam dicta fugit quam neque ducimus
                inventore consequuntur facere voluptatem dolore in beatae.
                Deserunt praesentium inventore nesciunt cupiditate aspernatur
                odio, minus aliquid aut iusto voluptas ex eum libero natus
                reprehenderit. Distinctio illo doloremque expedita quidem
                quisquam iste voluptatibus repudiandae, beatae mollitia
                voluptates vel reiciendis, debitis deserunt deleniti hic nisi
                aliquid possimus earum tenetur repellat nemo alias tempora
                magnam! Voluptatum, veniam dolor suscipit ducimus vero enim
                architecto commodi aliquid, iusto, reprehenderit ratione velit
                aut perferendis earum odit voluptates. In voluptates odit earum
                impedit inventore non iste vitae voluptatum voluptatem
                necessitatibus recusandae fugit soluta distinctio nam, minima
                dolor deserunt quos obcaecati eaque, cumque dolorum aliquam?
                Aliquid culpa porro quia fuga exercitationem, sed cupiditate
                voluptatum quod minima eaque unde numquam. Dolore, est
                obcaecati?
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
