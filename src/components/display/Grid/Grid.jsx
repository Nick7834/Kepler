import React, { useEffect, useState } from 'react'
import { Posts } from '../Posts/Posts'
import styles from './Grid.module.scss';
import axios from 'axios';
import { PostService } from '../../../service/post.service';
import { Loading } from '../../ui/Loading/Loading';

export const Grid = ({ props }) => {

  const [post, SetPost] = useState([]);

  useEffect(() => {
      const axiosPost = async () => {
        const response = await PostService.getAll();

        SetPost(response)
      }
      
      axiosPost()
  }, []);

  const searchPost = post.filter(post => {
    return post.title.toLowerCase().includes(props.toLowerCase())
  })

  return (
      <div className={styles.grid}>
        <div className="container">
              <div className={styles.content}>

                    {searchPost.length ? searchPost.map(post => (
                        <Posts key={post.id} post={post} />
                         )) : <Loading />}

              </div>
        </div>
      </div>
  )
}
