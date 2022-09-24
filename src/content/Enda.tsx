/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Enda() {
  return (
    <div>
      <main className="box">
        <div className="asks">
          <h2>
            Great! <br />
            You are regenerating our planet!
          </h2>
          <p>
            Composting closes the loop on our food system, creating a healthy
            harmonious and sustainable system for all of us to thrive.
          </p>
          <a
            className="mt-4 block text-green-600"
            href="https://compostrevolution.com.au/tutorials/"
            target="_blank"
          >
            Here's a tip for composting
          </a>
        </div>
        <div className="awss">
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

        <div className="flex items-center justify-center mt-2">
          <Link to="/">
            <button className="btn01">
              <span>Play again </span>
            </button>
          </Link>
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
