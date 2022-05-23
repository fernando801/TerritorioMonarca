import { RichText } from '@graphcms/rich-text-react-renderer'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import RelatedPost from '@/components/RelatedPost'
import { getPostSlugs, getPostData, getPosts } from '@/lib/api'

export async function getStaticPaths() {
  const paths = await getPostSlugs()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug)
  const relatedPosts = (await getPosts()) || []

  return {
    props: {
      post,
      relatedPosts,
    },
  }
}

export default function Blog({ post, relatedPosts }) {
  return (
    <>
      <Header />
      <div className='relative aspect-video sm:h-72 sm:w-full md:h-80 lg:h-96'>
        <Image
          src={post.coverImage.url}
          layout='fill'
          objectFit='cover'
          alt={post.title}
          priority={true}
        />
      </div>
      <section className='overflow-x-hidden'>
        <div className='container mx-auto sm:mt-8 sm:px-8 xl:max-w-6xl'>
          <div className='py-12 px-8 sm:px-0'>
            <h2>{post.title}</h2>
            <div className='mt-4'>
              <p>Por: {post.author.name}</p>
              <p>{post.date}</p>
            </div>
          </div>
          <div className='rich_text mx-auto flex flex-col gap-6 bg-clay-300 p-8 text-justify'>
            <RichText content={post.content.raw} />
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto py-12 px-8 xl:max-w-6xl'>
          <p className='text-2xl py-4'>Te Recomendamos:</p>
          <div className='mx-auto flex mt-4 w-fit max-w-full gap-12 overflow-auto'>
            {relatedPosts.map((post) => (
              <RelatedPost key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
