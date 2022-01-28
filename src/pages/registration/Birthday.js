import React from "react"

function Birthday(props) {
    
    const minYear = new Date().getFullYear() - 12
    const handleChange = props.handleChange
    const user = props.user
    
    return (
    <div > 
        <input type="date"
          className="input"
          min="1960-01-01"
          name="dataBirthday"
          value = {user.dataBirthday}
          max={`${minYear}-01-01`}
          onChange={handleChange}
        />
    </div>
    )
}

export default Birthday;