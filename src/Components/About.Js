import React from 'react'

function About(props) {
  return (
    <div className="container my-5">


      <div className="accordion" style={{ backgroundColor: props.mode === "light" ? "white" : "black" }} id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={{ backgroundColor: props.mode === "light" ? "white" : "black" }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
            <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }}>
              TextUtils App
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body " style={{ color: props.mode === "dark" ? "white" : "black" }}>
              <div className="p-3">
              <strong >This is an app which is built with "React" and is able to do some operations with Text which includes </strong>
              </div>
              <ol className="list-group list-group-numbered" >
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Converting text to Uppercase</div>
                    
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Converting text to Lowercase</div>
                    
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Count Number of Words in Text</div>
                    
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Count Number of Characters in Text</div>
                    
                  </div>
                </li>
              
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Measure Reading Time of Text</div>
                    
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Copy Text</div>
                    
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Cut Text</div>
                    
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} >
                  <div className="ms-2 me-auto">
                    <div className="fw  ">Remove Extra Spaces in the Text</div>
                    
                  </div>
               </li>
              </ol>
            </div>
          </div>
        </div>



      </div>
    </div>






  )
}

export default About
