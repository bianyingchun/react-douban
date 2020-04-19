import React from "react";
import TopNav from "src/components/TopNav";
import './style.scss'
export default function Error() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <TopNav />
      <div className="content">
        <h2>404</h2>
        <a href="/home" className="back_btn">回到首页</a>
      </div>
    </div>
  );
}
