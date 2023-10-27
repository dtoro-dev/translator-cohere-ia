import { type Action } from '../types/action'
import { AUTO_LANGUAGE } from '../types/constants'
import { type State } from '../types/state'

// 2. Create a reducer
const reducer = (state: State, action: Action): State => {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGE') {
    console.log(state)
    if (state.fromLanguage === AUTO_LANGUAGE) {
      return state
    }

    console.log({
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    })

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: true,
      result: action.payload
    }
  }

  return state
}

export default reducer
