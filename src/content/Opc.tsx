/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Opc() {
  return (
    <div>
      <main className="box">
        <div className="asks">
          <h2>Well done!!!</h2>
          <p>
            Waste sorting is very important! Peels and scrapings from fruit and
            vegetables like banana peels are belongs wet waste which are very
            rich in nutrients and can be composted to grow crops and to heal
            soil.
          </p>
        </div>
        <div className="awss">
          <div>
            <Link to="/opca">- What is compost? </Link>
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
