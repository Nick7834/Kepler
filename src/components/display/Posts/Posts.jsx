import React from 'react'
import styles from './Posts.module.scss';
import { Link } from 'react-router-dom';

export const Posts = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className={styles.post}>
        <div className={styles.img} style={{backgroundImage: `url(${post.img})`}}></div>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.text}>{`${(post.text).slice(0, 250) + '...'}`}</div>
    </Link>
  )
}
