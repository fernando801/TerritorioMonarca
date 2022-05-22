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
