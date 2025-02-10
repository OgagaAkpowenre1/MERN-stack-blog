import './topbar.css'
import profilePic from "../../assets/profilePic.jpg"


export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className='topIcon fab fa-facebook-square' />
            <i className='topIcon fab fa-twitter-square' />
            <i className='topIcon fab fa-pinterest-square' />
            <i className='topIcon fab fa-instagram-square' />
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>Logout</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg' src={profilePic} alt="" />
            <i className='topSearchIcon fas fa-search' />
        </div>
    </div>
  )
}
