import React from 'react';

const SvgIcon = (WrappedComponent:React.FC) => {
   return class extends React.Component <{style?:{}}> {
    
      render() {
        
         let {style} = this.props;
         const _Style = {verticalAlign: 'middle', margin:"0.236em",...style}
        return(
           <>
         <span style={ _Style}>
           <WrappedComponent {...this.props} />
           </span>
           </>
        );
      }
    }
}

export default SvgIcon;