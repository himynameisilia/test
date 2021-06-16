import React, { useState } from "react";

function Person({ person, childrenDict }) {
  // Получаем массив детей из словаря
  const children = childrenDict[person.id];
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={`${collapsed ? "collapsed" : ""} row ${
        !person.isActive ? "isInactive" : ""
      }`}
    >
      <div
        className={`fields ${
          children?.length > 0 ? "have-children" : "no-children"
        } 
        `}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div>{person.id}</div>
        <div>{person.balance}</div>
        <div>{person.name}</div>
        <div>{person.email}</div>
      </div>
      <div className="children">
        {/*Рекурсивно перебираем массив и если children пустой, вызова функции не происходит. Это является базовым случаем  */}
        {children?.length > 0 &&
          children.map((child) => (
            <Person person={child} key={child.id} childrenDict={childrenDict} />
          ))}
      </div>
    </div>
  );
}

export default Person;
