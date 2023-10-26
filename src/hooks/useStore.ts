import { useReducer } from 'react'
import initialState from '../reducers/initialState'
import reducer from '../reducers/intex'
import { type FromLanguage, type Language } from '../types/languaje'

const useStore = (): any => {
  // 3. usar el hook useReducer
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  const interchangeLanguages = (): void => {
    dispatch({ type: 'INTERCHANGE_LANGUAGE' })
  }

  const setFromLanguage = (payload: FromLanguage): void => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language): void => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string): void => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string): void => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}

export default useStore
