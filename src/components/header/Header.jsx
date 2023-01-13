import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://th.bing.com/th/id/OIP.6TP5SMrcOQpgMt9c-OpEeQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="headerImg" />
    </div>
  );
}
