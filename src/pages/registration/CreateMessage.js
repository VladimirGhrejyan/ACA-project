import { Link } from "react-router-dom"

function CreateMessage() {

    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="c">Thanks Your Account created!</h1>
                <Link to="/login">
                <button className="nextbtn">Go</button>
                </Link>
            </div>
        </div>
    )
}
export default CreateMessage