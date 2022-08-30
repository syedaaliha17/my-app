import React from 'react'

function Alert(props) {
  const capitalize = (word) =>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }  
  
  
    return (
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissable show fade `} role="alert">
    <strong> {capitalize(props.alert.type)}</strong>:{props.alert.msg}
    <button type="button"  data-bs-dismiss="alert" arial-label="Close" className='btn-close'></button>
    </div>

  )
}

export default Alert
