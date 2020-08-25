import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RocketItem from "./RocketItem";
import RocketKey from "./RocketKey";
import image1 from "../rocket.jpg";

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
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

export class Rockets extends Component {
  render() {
    return (
      <div id="rockets" className="objects-div">
        <div className="objects">
          <Fragment>
            <h1 className="display-4 my-3">Raketen</h1>
            <RocketKey />
            <Query query={ROCKETS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>;
                if (error) console.log(error);

                return (
                  <Fragment>
                    {data.rockets.map((rocket) => (
                      <RocketItem key={rocket.rocket_id} rocket={rocket} />
                    ))}
                  </Fragment>
                );
              }}
            </Query>
          </Fragment>
        </div>
        <img className="image" src={image1} />
      </div>
    );
  }
}

export default Rockets;
