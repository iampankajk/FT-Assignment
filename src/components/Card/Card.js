import CityDetails from "../CityDetails/CityDetails";
import Crousel from "../Crousel/Crousel";
import styles from "./Card.module.css";

const Card = ()=>{
    return(
        <div className={styles.card}>
            <CityDetails></CityDetails>
            <Crousel></Crousel>
        </div>
    )
};

export default Card;