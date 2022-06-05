import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'
import PostCard from '@/components/PostCard'
import { getPosts, getRecentPosts } from '@/lib/api'

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  const recentPosts = (await getRecentPosts()) || []

  return {
    props: {
      posts,
      recentPosts
    },
  }
}

export default function Blog({ posts, recentPosts }) {
  const sliderElements = recentPosts.map((post) => (
    <Link href={`/blog/posts/${post.slug}`}>
      <div key={post.id} className='h-full'>
        <div
          className='relative h-full p-8 brightness-75'
        >
          <Image src={post.coverImage.url} layout='fill' objectFit='cover' />
          
        </div>
        <div className='absolute top-0 right-0 bottom-0 left-0 flex items-end justify-end p-10 sm:p-20'>
            <h2 className='text-white text-right text-3xl sm:text-4xl'>{post.title}</h2>
        </div>
      </div>
    </Link>
  ))

  return (
    <>
      <Header />
      <Slider>{sliderElements}</Slider>
      <section>
        <div className='container mx-auto flex flex-col items-center gap-8 py-8 px-6'>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
