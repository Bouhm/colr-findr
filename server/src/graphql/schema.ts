import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Color {
    hex: String!
    hue: String!
  }

  type Query {
    colors: [Color!]!
  }
`)

export default schema
