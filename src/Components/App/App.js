import "./App.css";
import data from "../../default.json";
import Person from "../Person/Person";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import { useState } from "react";

function App() {
  const [elements, setElements] = useState(data);
  const [hide, setHide] = useState(false);

  return (
    <section className={`container ${hide ? "filtered" : null}`}>
      <div className="control">
        <Sort elements={elements} setElements={setElements} />
        <Filter data={data} setHide={setHide} />
      </div>
      <div className="persons">
        <div className="headers">
          <div className="fieldHeader id">Id</div>
          <div className="fieldHeader balance">Balance</div>
          <div className="fieldHeader">Name</div>
          <div className="fieldHeader">Email</div>
        </div>
        {elements.map((el) =>
          el.parentId === 0 ? (
            <Person person={el} key={el.id} data={elements} />
          ) : null
        )}
      </div>
    </section>
  );
}

export default App;
