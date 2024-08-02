import React from 'react'
import ReactStars from "react-rating-stars-component";

const Filter = (props) => {

  return (

    <div>
      <input  type="text" placeholder='search by title' onChange={(event)=>props.settitleSearch(event.target.value)} />

      <ReactStars
      name="rate1" 
      starCount={10}
      value={props.searchRate}
      onStarClick={(value)=>{props.setsearchRate(value)}}
       />
      
    </div>
  )
}

export default Filter