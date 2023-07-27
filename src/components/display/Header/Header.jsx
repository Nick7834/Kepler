import React from 'react'
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}> 
        
        <div className={styles.logo}><a href="#">Kepler</a></div>

        <form className={styles.form}>
            <div className={styles.search_img}></div>
            <input type="text" placeholder='Search...' className={styles.search} />
        </form>

    </header>
  )
}
