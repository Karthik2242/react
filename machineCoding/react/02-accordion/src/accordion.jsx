import { useState } from "react";
import "./accordion.css";
import { accordionData } from "./accordionData";

function Accordion() {
  const [activeId, setActiveId] = useState(null);

  function handleAccordion(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <>
      <div>
        <ul>
          {accordionData.map((item) => (
            <li className="list-items" key={item.id}>
              <div>
                <p onClick={() => handleAccordion(item.id)}>{item.title}</p>
                {activeId === item.id ? <p>{item.content}</p> : ""}
              </div>
              <button
                className="button"
                onClick={() => handleAccordion(item.id)}
              >
                {activeId === item.id ? "▲" : "▼"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Accordion;
