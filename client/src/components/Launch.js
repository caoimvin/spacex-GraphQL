import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <div className="item-info">
        <Fragment>
          <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);

              const {
                mission_name,
                flight_number,
                launch_year,
                launch_success,
                rocket: { rocket_id, rocket_name, rocket_type },
              } = data.launch;

              return (
                <div>
                  <h1 className="display-4 my-3">
                    <span className="text-dark">Mission:</span> {mission_name}
                  </h1>
                  <h4 className="mb-3">Start Details</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Flug Nummer: {flight_number}
                    </li>
                    <li className="list-group-item">
                      Start Jahr: {launch_year}
                    </li>
                    <li className="list-group-item">
                      Start Erfolgreich:{" "}
                      <span
                        className={`${
                          launch_success === true
                            ? "text-success"
                            : launch_success === false
                            ? "text-danger"
                            : "text-info"
                        }`}
                      >
                        {launch_success === true
                          ? "Js"
                          : launch_success === false
                          ? "Nein"
                          : "Wartet"}
                      </span>
                    </li>
                  </ul>

                  <h4 className="my-3">Rocket Details</h4>
                  <ul className="list-group">
                    <li className="list-group-item">Raketen ID: {rocket_id}</li>
                    <li className="list-group-item">
                      Raketen Name: {rocket_name}
                    </li>
                    <li className="list-group-item">
                      Raketen Type: {rocket_type}
                    </li>
                  </ul>
                  <hr />
                  <Link to="/" className="btn btn-outline-primary">
                    Zurück
                  </Link>
                </div>
              );
            }}
          </Query>
        </Fragment>
      </div>
    );
  }
}

export default Launch;
