// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  Text,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const errMsg = password.length < 8

  const onPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <BgContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Input type="password" value={password} onChange={onPassword} />
        {errMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </BgContainer>
  )
}

export default PasswordValidator
