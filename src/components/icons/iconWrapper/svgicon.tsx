import React from 'react';
import styled from 'styled-components';
interface Props {
   style?:object,
   onClick?:() => void,
}
const IconWrapper = styled.span`
   vertical-align: middle;
   display:inline-block;
   margin:0.236em;
`
const SvgIcon = (WrappedComponent:React.FC) => {
   return class extends React.Component <Props> {
    
      render() {
        
         let {style,onClick} = this.props;
         const _Style = {...style}
        return(
           <>
         <IconWrapper className="icon" style={ _Style} onClick={ onClick}>
           <WrappedComponent {...this.props} />
           </IconWrapper>
           </>
        );
      }
    }
}

export default SvgIcon;