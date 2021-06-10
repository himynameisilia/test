import React from "react";

function Filter({ setHide, data }) {
  return (
    <div>
      <label>Hide inactive</label>
      <input
        onChange={(event) => {
          event.target.checked ? setHide(true) : setHide(false);
        }}
        type="checkbox"
      />
    </div>
  );
}

export default Filter;
