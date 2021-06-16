import React, { useState } from "react";

function Sort({ setChildrenDict, childrenDict }) {
  const [sortStatus, setSortStatus] = useState({
    balance: false,
    email: false,
  });

  const sortByBalance = () => {
    let sorted = {};
    for (const key in childrenDict) {
      if (Object.hasOwnProperty.call(childrenDict, key)) {
        sorted[key] = childrenDict[key].sort((a, b) => {
          return sortStatus.balance
            ? Number(a.balance.slice(1).replace(",", "")) -
                Number(b.balance.slice(1).replace(",", ""))
            : Number(b.balance.slice(1).replace(",", "")) -
                Number(a.balance.slice(1).replace(",", ""));
        });
      }
    }
    setSortStatus({ email: false, balance: !sortStatus.balance });
    setChildrenDict(sorted);
  };

  const sortByEmail = () => {
    let sorted = {};
    for (const key in childrenDict) {
      if (Object.hasOwnProperty.call(childrenDict, key)) {
        sorted[key] = childrenDict[key].sort((a, b) => {
          return sortStatus.email
            ? ("" + a.email).localeCompare(b.email)
            : ("" + b.email).localeCompare(a.email);
        });
      }
    }
    setSortStatus({ balance: false, email: !sortStatus.email });
    setChildrenDict(sorted);
  };
  return (
    <div>
      <span>Sort by</span>
      <button className={`${sortStatus.balance && "active"}`} onClick={sortByBalance}>
        {sortStatus.balance ? "↓ " : "↑ "}Balance
      </button>
      <button className={`${sortStatus.email && "active"}`} onClick={sortByEmail}>
        {sortStatus.email ? "↓ " : "↑ "}Email
      </button>
    </div>
  );
}

export default Sort;
