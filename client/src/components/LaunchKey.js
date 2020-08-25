import React from "react";

export default function LaunchKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success" /> = Erfolgreich
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Fehlgeschlagen
      </p>
      <p>
        <span className="px-3 mr-2 bg-info" /> = Zukünftig
      </p>
    </div>
  );
}
