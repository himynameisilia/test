import React from "react";

function Sort({ setElements, elements }) {
  const sortFunction = (event) => {
    event.target.value === "balance"
      ? setElements(
          [...elements].sort((a, b) => {
            return (
              Number(a.balance.slice(1).replace(",", "")) -
              Number(b.balance.slice(1).replace(",", ""))
            );
          })
        )
      : setElements(
          [...elements].sort((a, b) => {
            return ("" + a.email).localeCompare(b.email);
          })
        );
  };

  return (
    <div>
      <span>Sort by</span>
      <select onChange={sortFunction}>
        <option disabled selected>
          Select field
        </option>
        <option value="balance">Balance</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
}

export default Sort;
