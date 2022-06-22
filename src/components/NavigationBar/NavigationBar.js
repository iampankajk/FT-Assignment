import styles from "./NavigationBar.module.css";
import logo from "../../assets/logo.png";
const NavigationBar = () => {
    const clickHandler = ()=>{
        console.log("Yes");
    }
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
            <img src={logo} alt="logo"></img>
        </div>
        <div className={styles.lists}>
            <ul>
                <li>Home</li>
                <li>For Tenants</li>
                <li>For Flatmates</li>
                <li>For Owners</li>
            </ul>
        </div>
        <div className={styles.buttons}>
            <button className={styles.firstButton} onClick={clickHandler}>Create Your Listing</button>
            <button className={styles.loginAction}>Login/Signup</button>
        </div>
    </div>
  );
};

export default NavigationBar;
