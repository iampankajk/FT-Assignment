import React,{useEffect,useState} from "react";
import styles from "./CityDetails.module.css";

const CityDetails = ()=>{

    const [cityList,setCityList] = useState([]);
    const dataHandler = async ()=>{
        let response = await fetch("http://localhost:8080/data");
        let data = await response.json();
        setCityList(data.city_description);
    }
    useEffect(()=>{
        dataHandler();
    },[])
    return (

        <div>
            <div className={styles.cityList}>
                {cityList.map((city)=>{
                    return (
                        <div>
                            <img src={city.image} alt={city.title}></img>
                            <p>{city.name}</p>
                        </div>
                    )
                })}
            </div>
            {/* <div className={cityDetails}></div> */}
        </div>
    )
};

export default CityDetails;