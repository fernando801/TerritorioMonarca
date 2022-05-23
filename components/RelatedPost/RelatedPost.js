import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <div className='cursor-pointer w-80 p-8 text-center bg-amber-400 shrink-0 active:bg-amber-300'>
        <div className='relative mx-auto overflow-hidden aspect-square w-52 rounded-full'>
          <Image
            src={post.coverImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            priority={true}
          />
        </div>
        <div className='cursor-pointer pt-6 py-4'>
          <h5 className='hover:underline'>{post.title}</h5>
          <p className='mt-6'>Por: {post.author.name}</p>
          <p>{post.date}</p>
        </div>
      </div>
    </Link>
  )
}