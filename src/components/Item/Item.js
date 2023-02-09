import React from "react";

const Item = ({ title, img }) => {
  return (
    <div className="card mb-3" style={{ width: "60%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-thumbnail rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
// <div className="card">
{
  /* <div className="card" style={{ width: "80%" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div> */
}
//   return <div>{title}</div>;
