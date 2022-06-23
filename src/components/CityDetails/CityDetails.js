import React, { useEffect, useState } from "react";
import styles from "./CityDetails.module.css";
import facebook from "../../assets/facebook.svg";
const CityDetails = () => {
  const [cityList, setCityList] = useState([]);
  const [cityDetail, setCityDetail] = useState([]);
  const dataHandler = async () => {
    let response = await fetch("http://localhost:8080/data");
    let data = await response.json();
    setCityList(data.city_description);
    setCityDetail(data.city_description[0]);
  };
  useEffect(() => {
    dataHandler();
  }, []);
  const cityHandler = (city) => {
    setCityDetail(city);
  };
  return (
    <>
      <div className={styles.cityList}>
        {cityList.map((city) => {
          return (
            <div key={city.id} onClick={cityHandler.bind(this, city)}>
              <img src={city.image} alt={city.title}></img>
              <p>{city.name}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.container}>
        <div className={styles.cityDetail}>
          <div>
            <img src={cityDetail.image} alt={cityDetail.name}></img>
          </div>
          <div className={styles.cityDes}>
            <div>
              <span>
                <h1>{cityDetail.name}</h1>
              </span>
              <span>
                <img src={facebook} alt="facebook"></img>{" "}
                <p>Join our facebook</p>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar velit laoreet pretium, ornare ultricies donec ac,
                habitasse. Fusce urna dolor scelerisque at sit. Pharetra mollis
                cursus eu interdum. Pellentesque massa malesuada pulvinar urna
                diam et
              </p>
              <h6>{cityDetail.group_members_count} Group Members</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listing}>
        <div><h2>250+</h2><p>Total Listing</p></div>
        <div><h2>250</h2><p>New Listing</p></div>
        <div><h2>250</h2><p>Searches</p></div>
        <div><h2>250</h2><p>Featured</p></div>
      </div>
    </>
  );
};

export default CityDetails;
