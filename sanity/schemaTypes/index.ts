import { type SchemaTypeDefinition } from 'sanity'
import { Author } from './author'
import { Startup } from './startup'
import {playlist} from './playlist'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Author, Startup, playlist],
}
