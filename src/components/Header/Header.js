import headerImage from "../../assets/headerImage.png";
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./Header.module.css";

const Header = ()=>{
    return(
        <div>
            <NavigationBar></NavigationBar>
            <img className={styles.headerImage} src={headerImage} alt="headerImage"></img>

        </div>
    );
};
export default Header;