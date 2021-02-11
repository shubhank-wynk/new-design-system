import React from 'react';
interface Props {
   style?:object,
   onClick?:() => void,
}

const SvgIcon = (WrappedComponent:React.FC) => {
   return class extends React.Component <Props> {
    
      render() {
        
         let {style,onClick} = this.props;
         const _Style = {verticalAlign: 'middle', margin:"0.236em",...style}
        return(
           <>
         <span style={ _Style} onClick={ onClick}>
           <WrappedComponent {...this.props} />
           </span>
           </>
        );
      }
    }
}

export default SvgIcon;