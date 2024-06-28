import React from "react";

export default function Alert(props){

  const capitalize = (word) => {
    if (!word) return ""; // Handling null or undefined case
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  if (!props.alert) return null; 

    return(
        <div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}  style={{minHeight:'50px', marginBottom:'10px'}} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            
          </div>
        </div>        
    )
}