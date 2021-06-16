import "./App.css";
import data from "../../default.json";
import Person from "../Person/Person";
import Sort from "../Sort/Sort";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [elements, setElements] = useState(data);
  const [childrenDict, setChildrenDict] = useState({});
  useEffect(() => {
    let dict = {};
    elements.forEach((el) => {
      // Создаём словарь детей за один перебор массива
      dict[el.parentId] = dict[el.parentId] ? [...dict[el.parentId], el] : [el];
    });
    setChildrenDict(dict);
  }, [elements]);

  const filterCB = useCallback((elements) => {
    return elements.filter((el) => el.isActive);
  }, []);

  return (
    <section className="container">
      <div className="control">
        <Sort childrenDict={childrenDict} setChildrenDict={setChildrenDict} />
        <div>
          <label>Hide inactive</label>
          <input
            onChange={(event) => {
              event.target.checked
                ? setElements(filterCB(elements))
                : setElements(data);
            }}
            type="checkbox"
          />
        </div>
      </div>
      <div className="persons">
        <div className="headers">
          <div className="fieldHeader id">Id</div>
          <div className="fieldHeader balance">Balance</div>
          <div className="fieldHeader">Name</div>
          <div className="fieldHeader">Email</div>
        </div>
        {childrenDict[0]?.map((el) => (
          <Person person={el} key={el.id} childrenDict={childrenDict} />
        ))}
      </div>
    </section>
  );
}

export default App;
