import { Link } from "react-router-dom";
import { UserService } from "../Keycloak";
import Styles from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={Styles.container}>
            <h2 className={Styles.logo}>Company Logo</h2>
            <div className={Styles.menu}>
                <div className={Styles.menuItem}>
                    <Link to="/">Home</Link>
                </div>
                <div className={Styles.menuItem}>
                    <Link to="/products">Products</Link>
                </div>
            </div>
            <div className={Styles.logout}>
                <span onClick={() => UserService.doLogout()}>Logout</span>
            </div>
        </div>
    );
};

export default Nav;
