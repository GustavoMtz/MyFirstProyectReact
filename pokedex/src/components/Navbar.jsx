import { Logo } from "./icons"
import '../Navbar.css'
const Navbar = ()=>{
    return (
        <nav>
            <Logo/>
            <div>
                <label>
                    <input type="checkbox"/>
                    <span></span>
                </label>
            </div>
        </nav>
    )

}

export default Navbar