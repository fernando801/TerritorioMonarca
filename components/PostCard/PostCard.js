import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <div className='flex w-full cursor-pointer max-w-5xl flex-col items-center overflow-hidden rounded-3xl bg-amber-400 md:flex-row md:gap-8 p-6 md:p-8 active:bg-amber-300'>
        <div className='relative aspect-video w-full shrink-0 overflow-hidden rounded-lg md:aspect-square md:h-auto md:w-52 md:rounded-full'>
          <Image
            src={post.coverImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            priority={true}
          />
        </div>
        <div className='grow cursor-pointer self-stretch pt-6 py-4'>
          <h3 className='hover:underline'>{post.title}</h3>
          <p className='mt-6'>Por: {post.author.name}</p>
          <p>{post.date}</p>
        </div>
      </div>
    </Link>
  )
}
