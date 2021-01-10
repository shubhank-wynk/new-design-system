import React from 'react';

const SvgIcon = (WrappedComponent:React.FC) => {
   return class extends React.Component <{style?:{}}> {
    
      render() {
        
         let {style} = this.props;
         const _Style = {verticalAlign: 'middle', margin:"0.236em",...style}
        return(
           <>
            
      <span style={ _Style}>
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <WrappedComponent {...this.props} />
           </svg>
           </span>
           </>
        );
      }
    }
}

export default SvgIcon;