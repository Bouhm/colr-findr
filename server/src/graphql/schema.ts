import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Color {
    hex: String!
    hue: String!
  }

  type RootQuery {
    colors: [Color]
  }

  schema {
    query: RootQuery
  }
`)

export default schema
