import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cat, setCat] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories/")
      console.log(res.data)
      setCat(res.data)
      console.log(res.data)
    }

    getCats()
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/24778714/pexels-photo-24778714/free-photo-of-back-view-of-a-person-walking-on-a-boardwalk-on-a-field-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          quisquam in sunt quaerat neque excepturi ex est alias delectus
          dolores.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}><li className="sidebarListItem">{c.name}</li></Link>
          
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square" />
          <i className="sidebarIcon fab fa-twitter-square" />
          <i className="sidebarIcon fab fa-pinterest-square" />
          <i className="sidebarIcon fab fa-instagram-square" />
        </div>
      </div>
    </div>
  );
}
