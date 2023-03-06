import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const FavoriteItem = (props) => {
  const { store, actions } = useContext(Context);

  function remove(event) {
    event.stopPropagation();
    actions.removeFavoriteItem(props.i);
  }

  return (
    <div className="button-container">
      <a>{props.name}</a>
      <button className="btn btn-dark" onClick={remove}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
