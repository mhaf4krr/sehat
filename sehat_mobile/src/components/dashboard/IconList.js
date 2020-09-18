import React from "react";

import Icon from "./Icon";

export default function IconList({ icon_list, handleSubViewChange }) {
  return (
    <div className='dashboard_iconlist_wrapper'>
      {icon_list.map((icon) => {
        console.log(icon.src + "");
        return (
          <Icon
            src={icon.src}
            key={icon.label}
            label={icon.label}
            view={icon.view}
            handleSubViewChange={handleSubViewChange}
          />
        );
      })}
    </div>
  );
}
