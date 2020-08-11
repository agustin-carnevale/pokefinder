import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ErrorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #eb9e98;
  padding: 15px;
  border-radius: 15px;
`

export default ({url, method, body, onSuccess}) => {
  const [errors, setErrors] = useState(null)

  const doRequest = async (props = {})=>{
    try {
      setErrors(null)
      const response = await axios[method](url,{...body,...props})
      onSuccess(response.data)
      return response.data;
    } catch (err) {
      setErrors(
          <ErrorsContainer>
            <ul className="my-0">
              {err?.response?.data?.errors?.map(e => <li key={e.message}>{e.message}</li>)}
            </ul>
          </ErrorsContainer>
      )
    }
  }
  return [doRequest, errors]
}