import React, {useState} from "react"
import CreateAccount from "./CreateAccount";
import CreateMessage from "./CreateMessage";
function OnCreated() {
   
    const [isSubmit, setIsSubmit] = useState(false);
  
    const submited = () => {
      setIsSubmit(true)
    }
  
    return (
      <div>
        {!isSubmit ? <CreateAccount submited = {submited} /> : <CreateMessage />}
      </div>
    )

}

export default OnCreated
