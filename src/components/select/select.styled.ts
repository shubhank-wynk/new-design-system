import styled from 'styled-components';


const SelectWrap = styled.ul`
      list-style:none;
      margin:0;
      padding:0;
      box-shadow: 12px 12px 60px rgba(59, 99, 112, 0.2);
      border-radius: 0.75rem;
      background:var(--white);
      max-width:20rem;
      padding-bottom:1rem;
`
const SelectSearch = styled.input`
    width: calc(100% - 4.5rem);
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    border: none;
    outline: none;
    color:var(--gray4);
    
`
const SelectSearchWrap = styled.div`
   padding: 1rem 1.5rem;
   display: inline-flex;
   width: calc(100% - 3rem);
   align-items: center;
   .icon{font-size:1rem; color:var(--gray5); margin-right:0.5rem;}
`;

const SelectList = styled.li`
   margin:0;
   padding:0.5rem 1.5rem;
   font-size:1rem;
   font-weight:400;
   line-height:1.5rem;
   color:var(--gray6);
   &:hover,&:focus{
      background:var(--teal1);
      color:var(--teal5);
      cursor: pointer;
   }

`;

export {
   SelectWrap,
   SelectList,
   SelectSearch,
   SelectSearchWrap,

}