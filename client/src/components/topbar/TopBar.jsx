import "./topbar.css";
import profilePic from "../../assets/profilePic.jpg";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" />
        <i className="topIcon fab fa-twitter-square" />
        <i className="topIcon fab fa-pinterest-square" />
        <i className="topIcon fab fa-instagram-square" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={profilePic} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search" />
      </div>
    </div>
  );
}
