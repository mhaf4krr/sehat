import React from "react";

import { Link } from "react-router-dom";

export default function Icon({ src, label, handleSubViewChange, view }) {
  return (
    <Link
      className='dashboard_icon_wrapper'
      onClick={(e) => {
        e.preventDefault();
        console.log(src);
        handleSubViewChange(view);
      }}
      style={{ textDecoration: "none", outline: "none" }}>
      <div className='dashboard_icon_img'>
        <img className='dashboard_icon_img_icon' src={src} alt='' />
      </div>
      <p className='dashboard_icon_label'> {label} </p>
    </Link>
  );
}
