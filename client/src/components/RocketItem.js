import React from "react";
import classNames from "classnames";
// import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  rocket: {
    rocket_id,
    rocket_name,
    rocket_type,
    first_flight,
    active,
    success_rate_pct,
    description,
  },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Raketen Name:{" "}
            <span
              //   className={classNames({
              //     "text-success": active,
              //     "text-danger": !active,
              //   })}
              className={`${
                active === "true" ? "text-success" : "text-danger"
              }`}
            >
              {rocket_name}
            </span>
          </h4>
          <p>Erster Flug: {first_flight}</p>
          <p>{description}</p>
        </div>
        {/* <div className="col-md-3">
          <Link to={`/rocket/${rocket_id}`} className="btn btn-secondary">
            Ship Details
          </Link>
        </div> */}
      </div>
    </div>
  );
}
