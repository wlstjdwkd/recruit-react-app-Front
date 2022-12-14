import "./App.css";
import React, { useState, useEffect } from "react";
import { retrieveMain } from "./service/ApiService";
import { Link } from "react-router-dom";

// 메인페이지

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    retrieveMain().then((items) => {
      setItems(items);
    });
  }, []);

  if (items) {
    return (
      <>
        <div className="container">
          <h2>모집글</h2>
          <div className="row">
            {items.map((item) => (
              <div className="col-3">
                <Link
                  className="nav-link btn btn-light"
                  to={`/postView/${item.id}`}
                >
                  <p className="d-block">{item.title}</p>
                  <p className="d-block">
                    {item.currentPerson === item.person ? "모집완료" : "모집중"}
                    {item.currentPerson}/{item.person}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
