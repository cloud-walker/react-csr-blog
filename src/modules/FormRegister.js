import React from 'react'
import {useForm} from 'react-hook-form'
import {useMutation} from 'react-query'
import {Navigate} from 'react-router'

import {Stack} from './Stack'
import {FormLabel} from './FormLabel'
import {Input} from './Input'
import {FormInlineError} from './FormInlineError'

const createUser = async data => {
  return fetch('http://localhost:4000/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}

export const FormRegister = () => {
  const [mutate, {data}] = useMutation(createUser)
  const {handleSubmit: createHandleSubmit, errors, register} = useForm()
  const handleSubmit = createHandleSubmit(values => {
    return mutate(values)
  })

  if (data) {
    return <Navigate to="/" />
  }

  return (
    <Stack as="form" onSubmit={handleSubmit} aria-label="form">
      <div>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          name="email"
          id="email"
          aria-invalid={!!errors.email || undefined}
          ref={register({required: 'Email is required.'})}
        />
        {!!errors.email && (
          <FormInlineError>{errors.email.message}</FormInlineError>
        )}
      </div>

      <div>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="text"
          name="password"
          id="password"
          aria-invalid={!!errors.password || undefined}
          ref={register({required: 'Password is required.'})}
        />
        {!!errors.password && (
          <FormInlineError>{errors.password.message}</FormInlineError>
        )}
      </div>

      <button type="submit">Register</button>
    </Stack>
  )
}
