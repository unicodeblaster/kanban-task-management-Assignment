import styles from "./Avatar.module.css"
function Avatar({currentUser}) {
    const getName = (name) => {
        const nameArray = name.split(" ");
        if(nameArray.length > 1){
            return nameArray[0][0] + nameArray[1][0];
        }else{
            return nameArray[0][0];
        }
    }
    const name = getName(currentUser.name);
    const className = currentUser.available ? `${styles.active} ${styles.available}` : `${styles.available} ${styles.notActive}`;
    return ( 
        <div className={styles.avatar}>
            {name}
            <span className={`${className}`}></span>
        </div>
     );
}

export default Avatar;