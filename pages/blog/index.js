import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/api'

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }) {
  return (
    <>
      <Header />
      <section>
        <div className='container mx-auto py-8 px-6 flex flex-col items-center gap-8'>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post}/>
          ))}
        </div>
      </section>
    </>
  )
}
