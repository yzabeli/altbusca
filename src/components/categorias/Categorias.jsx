import React, { useRef } from "react";
import { Container } from 'react-bootstrap';
import { categorias } from "../../assets/assets";
import "./Categorias.css";

export default function Categorias({ categoria, setCategoria }) {
  const categoriaRefs = useRef({});

  const handleClick = (menu_id) => {
    setCategoria(menu_id.toLowerCase());

    if (categoriaRefs.current[menu_id]) {
      categoriaRefs.current[menu_id].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="categorias">
      <Container>
        <h2 className="p-5 text-center">Categorias</h2>
        <div className="categorias-list">
          {categorias.map((item, index) => (
            <div
              key={index}
              className="categorias-list-item"
              onClick={() => handleClick(item.menu_id)}
              ref={(el) => (categoriaRefs.current[item.menu_id] = el)}
            >
              <img
                className={categoria === item.menu_id.toLowerCase() ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};