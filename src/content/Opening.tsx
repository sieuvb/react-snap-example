/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Page1() {
  return (
    <div>
      <main className="box">
        <div className="asks">
          <h2>It's a lazy afternoon</h2>
          <p>
            After finishing your banana, what are you gonna do with those banana
            peels?
          </p>
        </div>
        <div className="awss">
          <div>
            <Link to="/opa">- Eat it</Link>
          </div>
          <div>
            <Link to="/opb">- Just throw it in whatever garbage cans</Link>
          </div>
          <div>
            <Link to="/opc">- Put it into the wet waste bin</Link>
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
