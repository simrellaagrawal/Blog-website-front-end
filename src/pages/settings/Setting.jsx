import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"

export default function Setting() {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
               <label>Profile Picture</label>
               <div className="settingPP">
                <img src="https://th.bing.com/th/id/R.204fc7f31cdaddc5c2d8693fe487cab9?rik=4GjSOTph4teHtw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f34700000%2fAnime-stuff-3-kawaii-anime-34761705-743-1024.jpg&ehk=Ar7c592S7ceN8LJEWEctBJgmP7nY3gHS1EZl7ID2SsI%3d&risl=&pid=ImgRaw&r=0"
                 alt="" />
                 <label htmlFor="fileInput">
                 <i className="settingPPIcon fa-regular fa-circle-user"></i>
                 </label>
                 <input type="file" id="fileInput" style={{display:"none"}}/>
               </div>
               <label htmlFor="">Username</label>
               <input type="text" placeholder="Safak"/>
               <label htmlFor="">Email</label>
               <input type="email" placeholder="Safak@gmail.com"/>             
               <label htmlFor="">Password</label>
               <input type="password" placeholder="Safak"/>
               <button className="settingSubmit">Update</button>
            </form>
        </div>
            <Sidebar />
        </div>
  )
}
