import React from 'react'
import styles from './PostMain.module.scss';
import { Link } from 'react-router-dom';

export const PostMain = ({ post }) => {
  return (
    <div className={styles.post}>
        <div className="container">
            <div className={styles.content}>

                <Link to='/' className={styles.link}>Back</Link>

                <div className={styles.main}>
                    <div className={styles.title}>{post.title}</div>

                    <img className={styles.img} src={post.img} alt="img" />

                    <div className={styles.description}>{post.text}</div>
                </div>

                <div className={styles.background} style={{backgroundImage: `url(${post.img})`}}></div>

            </div>
        </div>
    </div>
  )
}
