import React, { useState } from 'react'
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = ({ onPost }) => {

  const [search, setSerch] = useState('');
  
  onPost(search)


  return (
    <header className={styles.header}> 
        <div className="container">
            <div className={styles.content}>

               <div className={styles.logo}><Link to='/Kepler' >Kepler</Link></div>

                <form className={styles.form}>
                    <div className={styles.search_img}></div>
                    <input type="text" placeholder='Search...' className={styles.search} value={search} onChange={e => setSerch(e.target.value)} />
                </form>

            </div>
        </div>
    </header>
  )
}
