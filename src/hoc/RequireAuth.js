import { Navigate } from "react-router-dom";
// import { useAuth } from '../hook/useAuth';

function RequireAuth( {children} ) {
    // const {user} = useAuth();
    
    if (!localStorage.id) {
        return <Navigate to="/login" />
    }

    return children;
}

export default RequireAuth;