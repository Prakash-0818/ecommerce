import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = ()=> {
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");
    return (
        <div className="login">
            <main>
                <h1 className="heading">
                    Login
                </h1>

                <div>
                    <label>Gender</label>
                    <select onChange={(e)=> setGender(e.target.value)}>
                        <option value="Select gender">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                    </select>
                </div>

                <div>
                    <label> Date of birth</label>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>

                <div>
                    <p>Already Signed In once</p>
                    <button>
                        <FcGoogle/><span>Sign In with google</span>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Login;