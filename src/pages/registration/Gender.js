import React from 'react'

function Gender(props) {

    const user = props.user;
    const handleChange = props.handleChange;
    

    return (
    <>
    <span className="globalSpan">
           <span className="span1">
              <label htmlFor="male">
                  male
              </label>
            <input type="radio" id="male"
               name="gender" value="male"
               onChange={handleChange}
            />
           </span> 
           
           <span className="span2">
               <label htmlFor="female">
                   female
               </label>
            <input id="female" type="radio"
                name="gender" value="female"
                onChange={handleChange}
            />
           </span> 
    </span>
    </>    
    )
}

export default Gender;