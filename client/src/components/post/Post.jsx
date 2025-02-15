import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF = "https://5000-ogagaakpowe-mernstackbl-96nf2ga4bi6.ws-eu117.gitpod.io/images/"
  console.log(post.photo)
  return (
    <div className="post">
      {post.photo && <img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat">{category}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link"><span className="postTitle">{post.title}</span></Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}
