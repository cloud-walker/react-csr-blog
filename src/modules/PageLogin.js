import React from 'react'
import {Link} from 'react-router-dom'

import {Center} from './Center'
import {Stack} from './Stack'
import {FormLogin} from './FormLogin'

export const PageLogin = () => {
  return (
    <Center>
      <Stack>
        <h1>Login</h1>

        <FormLogin />

        <Link to="/register">Dont have an account? Register!</Link>
      </Stack>
    </Center>
  )
}
