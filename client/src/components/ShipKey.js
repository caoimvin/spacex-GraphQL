import React from "react";

export default function ShipKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success" /> = Aktiv im Dienst
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Außer Dienst
      </p>
    </div>
  );
}
