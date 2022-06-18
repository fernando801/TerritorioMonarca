import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export async function getPartners() {
  const query = gql`
    query MyQuery {
      partners {
        id
        name
        image {
          id
          url
          height
          width
        }
        website
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.partners
}

export async function getPosts() {
  const query = gql`
    query MyQuery {
      posts(orderBy: date_DESC) {
        id
        title
        slug
        date
        excerpt
        coverImage {
          id
          url
        }
        tags
        author {
          id
          name
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts
}

export async function getRecentPosts() {
  const query = gql`
    query MyQuery {
      posts(orderBy: date_DESC, first: 5) {
        id
        title
        slug
        date
        excerpt
        coverImage {
          id
          url
        }
        tags
        author {
          id
          name
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts
}

export async function getRelatedPosts(slug) {
  const query = gql`
    query getRelatedPosts($slug: String!) {
      posts(where: { slug_not: $slug }, orderBy: date_DESC, first: 10) {
        id
        title
        slug
        date
        excerpt
        coverImage {
          id
          url
        }
        tags
        author {
          id
          name
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.posts
}

export async function getPostSlugs() {
  const query = gql`
    query MyQuery {
      posts {
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)

  const paths = result.posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })

  return paths
}

export async function getPostData(slug) {
  const query = gql`
    query GetPostData($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        date
        author {
          id
          name
        }
        coverImage {
          id
          height
          width
          fileName
          url
        }
        content {
          raw
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

export async function getProducts() {
  const query = gql`
    query MyQuery {
      products {
        id
        name
        image {
          url
        }
        icon {
          url
        }
        price
        description {
          raw
        }
        url
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.products
}

export async function getContadorGuadianes() {
  const query = gql`
    query MyQuery {
      contador(where: { name: "Contador Guardianes" }) {
        id
        name
        count
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.contador
}

export async function getDonarInfo() {
  const query = gql`
    query MyQuery {
      donacion(where: { name: "Donar" }) {
        id
        name
        description
        url
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.donacion
}
