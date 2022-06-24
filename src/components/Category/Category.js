import category from "../../assets/category.svg";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_box}>
        <div className={styles.main_box_i}>
          <img src={category} alt="building"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mauris id diam sollicitudin.
          </p>
        </div>
        <div>
          <h4>Rent</h4>
        </div>
      </div>
      <div className={styles.main_box}>
        <div className={styles.main_box_i}>
          <img src={category} alt="building"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mauris id diam sollicitudin.
          </p>
        </div>
        <div>
          <h4>PG/Hostel</h4>
        </div>
      </div>
      <div className={styles.main_box}>
        <div className={styles.main_box_i}>
          <img src={category} alt="building"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mauris id diam sollicitudin.
          </p>
        </div>
        <div>
          <h4>Flatmates</h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
