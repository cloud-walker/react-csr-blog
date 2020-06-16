import React from 'react'

import {Center} from './Center'
import {Stack} from './Stack'
import {FormRegister} from './FormRegister'

export const PageRegister = () => {
  return (
    <Center>
      <Stack>
        <h1>Register</h1>

        <FormRegister />
      </Stack>
    </Center>
  )
}
