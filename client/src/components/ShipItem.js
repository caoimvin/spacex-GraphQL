import React from "react";
import classNames from "classnames";
// import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  ship: { ship_id, ship_name, ship_type, active, home_port },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Schiff Name:{" "}
            <span
              //   className={classNames({
              //     "text-success": active,
              //     "text-danger": !active,
              //   })}
              className={`${
                active === "true" ? "text-success" : "text-danger"
              }`}
            >
              {ship_name}
            </span>
          </h4>
          <p>Typ: {ship_type}</p>
          <p>Heimathafen: {home_port}</p>
        </div>
        {/* <div className="col-md-3">
          <Link to={`/ship/${ship_id}`} className="btn btn-secondary">
            Ship Details
          </Link>
        </div> */}
      </div>
    </div>
  );
}
