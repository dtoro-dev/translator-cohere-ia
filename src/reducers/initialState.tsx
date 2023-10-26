// 1. Create a initial state object

import { type State } from '../types/state.d'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

export default initialState
