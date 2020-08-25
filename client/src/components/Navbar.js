import React from "react";
import logo from "../spacex_logo_color.png";

export default function Navbar({}) {
  return (
    <div className="navbar-component">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 200, display: "block", margin: "auto" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#ships">
                Schiffe
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#launches">
                Starts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#rockets">
                Raketen
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
