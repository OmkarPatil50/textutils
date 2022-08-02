import React from 'react'

function Alert(props) {





  return (
   props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show mb-0`} role="alert">
   <strong>{props.alertMessage.msg}</strong>
   
  </div>
  )
}

export default Alert
