import React, { useEffect, useState } from "react";
import styles from "./Whyus.module.css";
const Whyus = () => {
  const [whyus, setWhyus] = useState([]);
  const dataHandler = async () => {
    let response = await fetch("http://localhost:8080/data");
    let data = await response.json();
    setWhyus(data.whyus);
  };
  useEffect(() => {
    dataHandler();
  }, []);

  console.log(whyus);
  return (
    <div className={styles.box}>
      <h2>Why Choose Us?</h2>
      <div className={styles.main}>
        {whyus.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.title}></img>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whyus;