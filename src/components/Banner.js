import React from 'react'

export default function Banner({ children, title, subtitle}) {
    return (
        <div className="banner">
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>

         
         {title}
         <div></div> 
          <p>{subtitle}</p>
          <div></div> 
          {children}
          </div>
        
    );
}
