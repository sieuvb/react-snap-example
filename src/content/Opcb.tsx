/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Opcb() {
  return (
    <div>
      <main className="box">
        <div className="asks">
          <h2>Compost can..</h2>
          <p>
            - Enrich soil, helping retain moisture and suppress plant diseases
            and pests. <br />- Reduce the need for chemical fertilizers. <br />-
            Encourages the production of beneficial bacteria and fungi that
            break down organic matter to create humus, a rich nutrient-filled
            material. <br />- Reduces methane emissions from landfills and
            lowers your carbon footprint.
          </p>
        </div>
        <div className="awss">
          <div>
            <Link to="/enda">- Can't wait to compost</Link>
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
