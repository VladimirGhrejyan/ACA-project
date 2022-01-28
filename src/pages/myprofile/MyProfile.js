import { useState } from "react";
import MyProfileStep1 from "./MyProfileStep1"
import PasswordForEdit from "./PaswordForEdit";

const MyProfile = () => {

    const [edit, setEdit] = useState(false);
    
    const stepPage = () => {
        setEdit(!edit)
    }

  return (
      (edit) ? <PasswordForEdit  /> : <MyProfileStep1  stepPage={stepPage} />
  )
}
export default MyProfile