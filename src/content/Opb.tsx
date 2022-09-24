/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Opb() {
  return (
    <div>
      <main className="box">
        <div className="asks">
          <h2 className="text-red-600">Tricky! You are murdering yourself!</h2>
          <p>
            Garbage goes into landfills. When food scraps like banana peels and
            other organic materials are sent to landfill, they begin to rot
            anaerobically (without oxygen) and release
            <span className="text-red-600">
              &nbsp;greenhouse gases, primarily methane (CH4).
            </span>
          </p>
        </div>
        <div className="awss">
          <div>
            <Link to="/opba">
              - Why would I care about greenhouse gas&methane
            </Link>
          </div>
          <div>
            <Link to="/opbb">- I wanna make a change</Link>
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
