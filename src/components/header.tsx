import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaSignInAlt,FaUserAlt, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

const user = {_id: "785858", role: "admin"};

const Header = () =>{
    const [isOpen, setOpen] = useState<boolean>(false);
    const logoutHandler = ()=>{
        setOpen(false)
    }
    return(
        <nav className="header">
            <Link onClick={()=> setOpen(false)} to={"/"}><FaHome/></Link>
            <Link onClick={()=> setOpen(false)} to={"/search"}><FaSearch/></Link>
            <Link onClick={()=> setOpen(false)} to={"/cart"}><FaShoppingCart/></Link>

            {
                user?._id ? (
                    <>
                        <button onClick={()=>setOpen((prev)=>!prev)}>
                            <FaUserAlt/>
                        </button>
                        <dialog open={isOpen}>
                            {
                                user.role === "admin" && (
                                    <Link onClick={()=>setOpen(false)} to={"admin/dashboard"}>Admin</Link>
                                )
                            }
                            <Link onClick={()=>setOpen(false)} to={"/orders"}>Orders</Link>
                        </dialog>
                        <button onClick={logoutHandler}>
                            <FaSignOutAlt/>
                        </button>
                    </>
                ): <Link to={"/login"}><FaSignInAlt/>Login</Link>

            }
        </nav>
    )

}

export default Header;