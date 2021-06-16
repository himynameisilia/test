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
          return sortStatus.balance === "asc"
            ? Number(a.balance.slice(1).replace(",", "")) -
                Number(b.balance.slice(1).replace(",", ""))
            : Number(b.balance.slice(1).replace(",", "")) -
                Number(a.balance.slice(1).replace(",", ""));
        });
      }
    }
    setSortStatus({
      email: false,
      balance: sortStatus.balance === "asc" ? "desc" : "asc",
    });
    setChildrenDict(sorted);
  };

  const sortByEmail = () => {
    let sorted = {};
    for (const key in childrenDict) {
      if (Object.hasOwnProperty.call(childrenDict, key)) {
        sorted[key] = childrenDict[key].sort((a, b) => {
          return sortStatus.email === "asc"
            ? ("" + a.email).localeCompare(b.email)
            : ("" + b.email).localeCompare(a.email);
        });
      }
    }
    setSortStatus({
      balance: false,
      email: sortStatus.email === "asc" ? "desc" : "asc",
    });
    setChildrenDict(sorted);
  };
  return (
    <div>
      <span>Sort by</span>
      <button
        className={`${sortStatus.balance && "active"}`}
        onClick={sortByBalance}
      >
        {sortStatus.balance === "asc" ? "↓ " : "↑ "}Balance
      </button>
      <button
        className={`${sortStatus.email && "active"}`}
        onClick={sortByEmail}
      >
        {sortStatus.email === "desc" ? "↓ " : "↑ "}Email
      </button>
    </div>
  );
}

export default Sort;
