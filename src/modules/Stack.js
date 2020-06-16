import styled from 'styled-components'

export const Stack = styled('div')`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 1rem;
  }
`
