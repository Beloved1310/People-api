import React from "react";
import { Link } from "react-router-dom";
export default function People({ image, name}) {
  return (
    <article className="people">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="people-footer">
        <Link to={`/person/${name}`}>
          <h3>{name}</h3>
        </Link>
        <Link to={`/person/${name}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}
