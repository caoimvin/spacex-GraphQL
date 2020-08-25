import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ShipItem from "./ShipItem";
import ShipKey from "./ShipKey";
import image1 from "../ship.jpg";

const SHIPS_QUERY = gql`
  query SHIPSQuery {
    ships {
      ship_name
      ship_type
      active
      home_port
    }
  }
`;

export class Ships extends Component {
  render() {
    return (
      <div id="ships" className="objects-div">
        <div className="objects">
          <Fragment>
            <h1 className="display-4 my-3">Schiffe</h1>
            <ShipKey />
            <Query query={SHIPS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>;
                if (error) console.log(error);

                return (
                  <Fragment>
                    {data.ships.map((ship) => (
                      <ShipItem key={ship.ship_id} ship={ship} />
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

export default Ships;
