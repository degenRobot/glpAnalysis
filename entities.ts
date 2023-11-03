import { createEntity } from './deps.ts'

interface IGLP {
  account: string
  amount: number
  chain: string
  timestamp: number
  type : string
}

export const glpChanges = createEntity<IGLP>('glpChanges', {
  account: String,
  type: String,
  amount: {
    type: Number,
    index: true,
  },
  chain: String,
  timestamp: {
    type: Number,
    index: true,
  },
})
