/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Opca() {
  return (
    <div>
      <main className="box">
        <div className="asks">
          <h2>Compost is..</h2>
          <p>
            a pile of green organic matter like food garden waste or manure that
            has been mixed with brown organic matter such as leaves, straw or
            wood chips. When we compost our food scraps instead of sending them
            to the landfill, we reduce greenhouse gas but also we conserve space
            in our limited landfills.
          </p>
        </div>
        <div className="awss">
          <div>
            <Link to="/opcb">- Tell me more!</Link>
          </div>
          <div>
            <a href="javascript:history.back(-1)" className="back">
              <img
                width="40"
                height="40"
                className="py-0 px-0"
                src="static/back.svg"
                alt="Back"
              />
            </a>
          </div>
        </div>
      </main>

      <Menu width={240} className="p-4">
        <nav className="flex flex-col p-4">
          <Link to="/">Home</Link>
          <Link to="/about">Compost Tutorials</Link>
          <Link to="/othergames">Other Games</Link>
        </nav>
      </Menu>
    </div>
  );
}
