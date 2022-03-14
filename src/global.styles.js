/** @format */

import { createGlobalStyle } from "styled-components/";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family:'Open Sans Condensed';
        padding: 20px 60px;

        @media only screen and (max-width: 800px){
            padding:10px;
        }
    }

    a,a:link,a:visited {
        text-decoration: none;
        color: black;
    }
    
    li {
        list-style: none;
    }
    
    *,*::after,*::before{
        box-sizing: border-box;
    }
`;
