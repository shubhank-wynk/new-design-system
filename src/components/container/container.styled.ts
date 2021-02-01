import styled, { css } from "styled-components";

const Padding = (padding:number=2) => {
   return css `
   @media (min-width:768px){
      padding-left:${1.5*padding/2}rem;
      padding-right:${1.5*padding/2}rem;
   }
   @media (min-width:1024px){
      padding-left:${2*padding/2}rem;
      padding-right:${2*padding/2}rem;
   }
   
   @media (min-width:1280px){
      padding-left:${2*padding/2}rem;
      padding-right:${2*padding/2}rem;
   }
   @media (min-width:1440px){
      padding-left:${2.25*padding/2}rem;
      padding-right:${2.25*padding/2}rem;
   }
   @media (min-width:1920px){
      padding-left:${2.625*padding/2}rem;
      padding-right:${2.625*padding/2}rem;
   }
  
   `
}

 const Container =  styled.div<{
   padding?:number,
}>`
   display:block;
   width:100%;
   box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    ${(props) => Padding(props.padding)};
`
export  {
   Container
}