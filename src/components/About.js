
import React,{ useContext,useState } from 'react'
import alertContext from '../context/alerts/alertContext'


const  About = (props)=> {
    
    

  let myStyle = {
    color: props.mode==='dark'?'white':'#042743',
    backgroundColor : props.mode==='dark'?'#203d67':'white'
  }
  const context = useContext(alertContext);
  const {displayAlert} = context;
  console.log("context : ",context);
  // eslint-disable-next-line
  const [alrt, setalrt] = useState({type:'success',msg:"this is alert"})

  const showAlertHandle = ()=>{
    console.log("alert data: ",alrt)
    displayAlert(alrt);

  }

//   color :#42679e #203d67
//  backgroundColor : props.mode==='dark'?'#42679e':'white'
return (
    <>
        <div className="container" >
        <h1 style ={{color: props.mode==='dark'?'white':'#042743'}} >About Us </h1>
        <div className="accordion" id="accordionPanelsStayOpenExample" >
            <div className="accordion-item" style={{backgroundColor : props.mode==='dark'?'#42679e':'white'}}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
                    Accordion Item #1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor : props.mode==='dark'?'#42679e':'white'}}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor : props.mode==='dark'?'#42679e':'white'}}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        </div>
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={showAlertHandle} >Show Alert</button>
            </div>
    </>
    
  )

}
export default About;
