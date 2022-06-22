import styles from "./SearchBar.module.css";


const SearchBar = ()=>{
    return (
        <div className={styles.searchBox}>
            <div className={styles.filter}>
                <div className={styles.orange}>Full House</div>
                <div>PG/Hostel</div>
                <div>Flatmates</div>
                <div>
                    <select>
                        <option>Apartment Type</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option>Availability</option>
                    </select>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.search}>
                <div className={styles.location}>
                    <select>
                        <option>Delhi</option>
                    </select>
                </div>
                <div className={styles.searchBar}>
                    <img src=""></img>
                    <input></input>
                </div>
                <div className={styles.orange}>Search</div>
            </div>
        </div>
    )
};

export default SearchBar;