import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis porro
        consectetur dolorem eius? Maiores quam eligendi saepe harum nemo, atque
        animi illo doloremque libero aliquam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Fugit eius modi quae iste! Eaque ipsum
        consectetur ipsam dicta distinctio eum officia quisquam. Minus sunt
        obcaecati facere dignissimos atque nulla laboriosam pariatur sed
        deserunt adipisci voluptate itaque, aspernatur perspiciatis eveniet
        voluptates corporis perferendis dolorum, vero praesentium illo a
        laborum. Assumenda non temporibus, est beatae fugit labore placeat odit
        ut autem.
        Fugit eius modi quae iste! Eaque ipsum
        consectetur ipsam dicta distinctio eum officia quisquam. Minus sunt
        obcaecati facere dignissimos atque nulla laboriosam pariatur sed
        deserunt adipisci voluptate itaque, aspernatur perspiciatis eveniet
        voluptates corporis perferendis dolorum, vero praesentium illo a
        laborum. Assumenda non temporibus, est beatae fugit labore placeat odit
        ut autem.
        Fugit eius modi quae iste! Eaque ipsum
        consectetur ipsam dicta distinctio eum officia quisquam. Minus sunt
        obcaecati facere dignissimos atque nulla laboriosam pariatur sed
        deserunt adipisci voluptate itaque, aspernatur perspiciatis eveniet
        voluptates corporis perferendis dolorum, vero praesentium illo a
        laborum. Assumenda non temporibus, est beatae fugit labore placeat odit
        ut autem.
      </p>
    </div>
  );
}
