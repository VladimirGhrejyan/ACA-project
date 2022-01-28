export default function PasswordError(changedata){
    const errors = {};

    if(changedata.password !== changedata.againPassword){
        errors.password = "no smoot"
    }else if(changedata.password.length < 6 && changedata.password.length > 0){
        errors.password = "Password must be more than six characters"
    }
    return errors;
}