import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF =
    "https://5000-ogagaakpowe-mernstackbl-96nf2ga4bi6.ws-eu117.gitpod.io/images/";
     const {user} = useContext(Context)

    const handleDelete = async () => {
      try {
        await axios.delete(`/api/posts/${post._id}`, {data : {username: user.username}})
        window.location.replace("/")  
      } catch (error) {
        console.log(error)
      }
      
    }

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path);

      setPost(res.data);
    };

    getPost();
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit" />
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete} />
            </div>
          )}
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <b>
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
