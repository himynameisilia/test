import React, { useEffect, useState } from "react";

function Person({ person, data }) {
  const [children, setChildren] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  // Получаем массив детей элемента
  useEffect(() => {
    setChildren(data.filter((child) => child.parentId === person.id));
  }, [data, person.id]);
  return (
    <div className={`row ${!person.isActive ? "isInactive" : null}`}>
      <div
        className="fields"
        style={{
          cursor: children.length > 0 ? "pointer" : "normal",
          color: children.length > 0 ? "black" : "gray",
        }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div>{person.id}</div>
        <div>{person.balance}</div>
        <div>{person.name}</div>
        <div>{person.email}</div>
      </div>
      <div
        className="children"
        style={{ display: collapsed ? "flex" : "none" }}
      >
        {/*Рекурсивно перебираем массив и если children пустой, вызова функции не происходит. Это является базовым случаем  */}
        {children.map((child) => (
          <Person person={child} key={child.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Person;
