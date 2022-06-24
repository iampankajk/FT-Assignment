import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Crousel.module.css";
const Crousel = () => {
  const [properties, setProperties] = useState([]);
  const dataHandler = async () => {
    let response = await fetch("http://localhost:8080/data");
    let data = await response.json();
    setProperties(data.propeties_card_data)
    
  };
  useEffect(() => {
    dataHandler();
  }, []);

  console.log(properties)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={styles.crousel}>
      
      <Slider {...settings}>
        {
            properties.map((property)=>{
                return (
                    <div className={styles.box} key={property.id}>
                        <div><img src={property.property_image} alt={property.id}></img></div>
                        <h4>{property.bedrooms} BHK Independent House</h4>
                        <div><p>{property.area}</p>
                        <h6>${property.expected_rent}/month</h6>
                        </div>
                        
                        
                    </div>
                )
            })
        }
      </Slider>
    </div>
  );
};
export default Crousel;
