import React from "react";

export default function RocketKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success" /> = Aktiv
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Inaktiv
      </p>
    </div>
  );
}
