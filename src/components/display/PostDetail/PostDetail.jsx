import React, { useState,  useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostMain } from '../PostMain/PostMain';
import { Loading } from '../../ui/Loading/Loading';
import { PostService } from '../../../service/post.service';

export const PostDetail = () => {
    const { id } = useParams();

    const [postDet, setPostDet] = useState({})

    useEffect(() => {
        if(!id) return;

        const axiosPost = async () => {
          const response = await PostService.getPostId(id);
            console.log(response)
          setPostDet(response)
        }
  
        axiosPost()
    }, [id]);

    if(!postDet?.title) return <div className='hVh'><Loading /></div>

  return (
    <div>

        <PostMain post={postDet} />

    </div>
  )
}
