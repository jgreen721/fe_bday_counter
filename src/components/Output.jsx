import React from 'react'
import CountUp from "react-countup"

const Output = ({value,label}) => {
  return (
   <div className="output-div">
    <h1 className="output-h1"> 
    {value >= 0 ? 
    <CountUp end={value}
             wind={2}
             run={false}
             duration={5}/>
     : "- -"}
     </h1>
    <h1> {label} </h1>
   </div>
  )
}

export default Output