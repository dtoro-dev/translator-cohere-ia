import { ChangeEvent, type FC } from 'react'
import { Form } from 'react-bootstrap'
import { SectionType } from '../types/sectionType.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Enter Text'
  if (loading === true) return 'Translating...'

  return 'Translate'
}

const commonStyles = {
  height: '150px',
  width: '100%',
  border: 0,
  resize: 'none'
}

const TextArea: FC<Props> = ({ type, loading, value, onChange }) => {
  const styles = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as="textarea"
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      style={styles}
      disabled={type === SectionType.To}
      value={value}
      onChange={handleChange}/>
  )
}

export default TextArea
