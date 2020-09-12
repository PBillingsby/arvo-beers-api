import React from "react";
import { Link } from "react-router-dom";
const Beer = props => {
  console.log(props);
  const { id, name, brewery_name, avatar_url } = props.beer;
  let imgSrc = avatar_url
    ? avatar_url[0]
    : "https://yw553ftvhw1iqegz29fycoyw-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/beer-16-9.jpg";
  return (
    <div className="card m-3 mx-auto" style={{ width: "20vw" }} key={id}>
      <Link className="text-center" to={`/beers/${id}`}>
        <img
          src={imgSrc}
          alt="beer"
          style={{ maxWidth: "75%", maxHeight: "20vh" }}
          className="img-fluid mt-3 img-thumbnail card-image-top"
        />
      </Link>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Brewery: {brewery_name}</p>
        <div className="text-center">
          <button id={id} onClick={() => props.handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Beer;
