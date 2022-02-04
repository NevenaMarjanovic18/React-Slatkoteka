import React from "react";
import { BsPatchPlus, BsPatchMinus } from "react-icons/bs";

function Proizvod({ product, onAdd, inCart, onRemove }) {
  return (
    <div className="card" style={{ margin: 15 }}>
      <img src={product.url} alt="image" className="img-sneakers" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price"> {product.price} RSD</p>
      </div>
      {inCart === 0 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPatchPlus />
          </button>
          <button
            className="btn"
            onClick={() => onRemove(product.title, product.id)}
          >
            <BsPatchMinus />
          </button>
        </>
      ) : (
        <>
          <h3>Amount: {product.amount}</h3>

          <button
            className="btn"
            onClick={() => onRemove(product.title, product.id)}
            style={{ color: "red" }}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
}

export default Proizvod;
