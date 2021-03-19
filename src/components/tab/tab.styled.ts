import styled from 'styled-components';
const Tab  = styled.div`
  width:100;
  margin:0;
  padding:0;
`
const TabHeader = styled.div`
  padding:1rem;
  background:${props => props.theme._white};
  position:relative;
` 
const TabFilter = styled.div`
position:relative;
float:right;
display:block;
`
const TabConentWrapper = styled.div`

`
const TabConent = styled.div`
  display:none;
  transition:0.3s ease-in;
  &.active{display:block}
`
const TabMenu =  styled.ul`
list-style:none;
margin:0;
padding:0;
`
const TabMenuItem =  styled.li`
display:inline-block;
margin:0 2px;
font-weight: 600;
font-size: 1rem;
line-height: 1.5rem;
text-decoration:none;
background:transparent;
padding:0.4rem 1rem;
border-radius:0.5rem;
color:var(--teal5);
&:hover,&:focus{cursor: pointer;}
.icon{color:var(--teal3);}
&.active{background-color:var(--teal1);
.icon{color:var(--teal5);}
}
`

export {Tab,
TabHeader,
TabMenu,
TabMenuItem,
TabFilter,
TabConentWrapper,
TabConent,
};
