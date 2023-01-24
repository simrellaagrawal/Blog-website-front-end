import { useEffect } from "react";
import { useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [cats, setCat]=useState([]);


  useEffect(()=>{
    const getCats =async()=>{
      const res= await axios.get("/categories");
      setCat(res.data);
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://th.bing.com/th/id/OIP.oLaakmHYwZ9YkeGkBFM-yAHaFj?w=243&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
      <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: 
         </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>{
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
