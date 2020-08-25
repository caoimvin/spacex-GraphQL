import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const ROCKET_QUERY = gql`
  query RocketQuery($rocket_id: Int!) {
    rocket(rocket_id: $rocket_id) {
      rocket_id
      rocket_name
      rocket_type
      first_flight
      active
      success_rate_pct
      description
    }
  }
`;

export class Rocket extends Component {
  render() {
    let { rocket_id } = this.props.match.params;
    rocket_id = parseInt(rocket_id);
    return (
      <div className="item-info">
        <Fragment>
          <Query query={ROCKET_QUERY} variables={{ rocket_id }}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);

              const {
                rocket_name,
                rocket_type,
                first_flight,
                active,
                success_rate_pct,
                description,
              } = data.rocket;

              return (
                <div>
                  <h1 className="display-4 my-3">
                    <span className="text-dark">Mission:</span> {rocket_name}
                  </h1>
                  <h4 className="mb-3">Launch Details</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Flight Number: {first_flight}
                    </li>
                    <li className="list-group-item">
                      Launch Year: {first_flight}
                    </li>
                    <li className="list-group-item">
                      Launch Successful:{" "}
                      <span
                        className={`${
                          active === "true"
                            ? "text-success"
                            : active === "false"
                            ? "text-danger"
                            : "text-info"
                        }`}
                      />
                    </li>
                  </ul>

                  <h4 className="my-3">Rocket Details</h4>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Rocket ID: {rocket_type}
                    </li>
                    <li className="list-group-item">
                      Rocket Name: {success_rate_pct}
                    </li>
                    <li className="list-group-item">
                      Rocket Type: {description}
                    </li>
                  </ul>
                  <hr />
                  <Link to="/" className="btn btn-outline-primary">
                    Back
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

export default Rocket;
