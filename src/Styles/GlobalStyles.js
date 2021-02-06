import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*, ::before, ::after{
    box-sizing: border-box
}
*,body{
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
}
`