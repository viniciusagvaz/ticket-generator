import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
     @font-face {
          font-family: 'Inconsolata';
          src: url('src/assets/fonts/Inconsolata-VariableFont_wdth,wght.ttf');
     }

     * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-size: 62.5%;
          font-family: 'Inconsolata','Poppins', sans-serif;
          color: #fff;
          
     }
     
     body {
          background: 
          url('src/assets/images/pattern-lines.svg') no-repeat local center / cover padding-box border-box,
          url('src/assets/images/pattern-circle.svg') no-repeat local left -2.5rem top -4rem / 12.5rem padding-box border-box,
          url('src/assets/images/pattern-circle.svg')  no-repeat local right -50% bottom 0 / 50% padding-box border-box,
          url('src/assets/images/pattern-squiggly-line-top.svg') no-repeat local top 7.5% right / 35%,
          url('src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg') no-repeat local bottom 0 left / 50%,
          url('src/assets/images/background-mobile.png') no-repeat fixed left / cover; 
          
          @media (width >= 768px){
               background: 
               url('src/assets/images/pattern-lines.svg') no-repeat fixed center / cover padding-box border-box,
               url('src/assets/images/pattern-circle.svg') no-repeat fixed left 5% top -10rem / 20rem padding-box border-box,
               url('src/assets/images/pattern-circle.svg') no-repeat fixed right 25rem top 60%  / 10% padding-box border-box,
               url('src/assets/images/pattern-squiggly-line-top.svg') no-repeat fixed top 7.5% right / 35%,
               url('src/assets/images/pattern-squiggly-line-bottom-desktop.svg') no-repeat fixed bottom 0 left / 50%,
               url('src/assets/images/background-desktop.png') no-repeat fixed center / cover; 
     }


     }
`;
