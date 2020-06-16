import {createGlobalStyle} from 'styled-components'

export const Style = createGlobalStyle`
  :root {
    line-height: 1.5;
    font-size: calc(15px + 0.3vw);
    font-family: sans-serif;
    min-height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  * {
    &,
    ::before,
    ::after {
      box-sizing: border-box;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  body,
  h1,
  h2,
  p,
  figure,
  figcaption,
  blockquote,
  dl,
  dd,
  pre,
  li,
  ul,
  ol {
    margin: 0;
  }

  ul[class],
  ol[class] {
    list-style: none;
    padding: 0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
