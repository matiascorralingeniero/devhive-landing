import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from '../sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Devhive Landing',

  projectId: 'b4ofgm86',  // Tu Project ID real aquí
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),  // ← DEBE estar aquí
  ],

  schema: {
    types: schemaTypes,
  },
})