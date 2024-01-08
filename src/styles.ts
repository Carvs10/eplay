import { createGlobalStyle } from 'styled-components'

const colors = {
  white: '#EEEEEE',
  green: '#10AC84',
  grey: '#333',
  black: '#111'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }

`
