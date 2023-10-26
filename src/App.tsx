import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import './App.css'
import { ArrowIcons } from './components/Icons'
import LanguageSelector from './components/LanguageSelector'
import TextArea from './components/TextArea'
import useStore from './hooks/useStore'
import { translate } from './services/translate'
import { AUTO_LANGUAGE } from './types/constants'
import { SectionType } from './types/sectionType.d'

const App = () => {
  // 3. useReducer Hooks
  const {
    fromLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    toLanguage,
    result,
    setResult,
    fromText,
    setFromText,
    loading
  } = useStore()

  const handleTranslations = () => {
    if (fromText === '') return false

    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result: any) => {
        if (result == null) return false

        setResult(result.text)
      })
      .catch((error) => {
        console.error(error)
        setResult('Error')
      })
  }

  // useEffect(() => {
  //   if (fromText === '') return

  //   translate({ fromLanguage, toLanguage, text: fromText })
  //     .then(result => {
  //       if (result == null) {
  //         return
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }, [fromText])

  return (
    <Container className='container-custom bg-gizmo-gray-600 text-white p-3 rounded shadow' style={{}}>
      <div>
        <h1 className='text-center'>DTranslate</h1>
        <Row>
          <Col xs="12" md='auto'>
            <Stack gap={3}>
              <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage} />
              <TextArea
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
              />
            </Stack>
          </Col>
          <Col xs="12" md='auto' className='text-center my-3'>
            <Button
              variant='Link'
              disabled={fromLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguages}
              style={{ backgroundColor: 'rgb(25, 195, 125)' }}
            >
              <ArrowIcons />
            </Button>
          </Col>
          <Col xs="12" md='auto'>
            <Stack gap={3}>
              <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
              <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
                loading={loading}
              />
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Button className='mt-3 w-100' onClick={handleTranslations}>
              Translate
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default App
