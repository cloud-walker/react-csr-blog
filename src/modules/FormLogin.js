import React from 'react'
import {useForm} from 'react-hook-form'

import {Stack} from './Stack'
import {FormLabel} from './FormLabel'
import {Input} from './Input'
import {FormInlineError} from './FormInlineError'

export const FormLogin = () => {
  const {handleSubmit: createHandleSubmit, errors, register} = useForm()
  const handleSubmit = createHandleSubmit(values => {
    console.log(values)
  })

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

      <button type="submit">Login</button>
    </Stack>
  )
}
