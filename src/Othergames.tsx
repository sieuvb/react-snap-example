import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Othergames() {
  return (
    <div>
      <main className="mt-32">
        <div className="max-w-screen-sm mx-auto">
          <h1>Other Games</h1>
          <div className="text-2xl mt-12 text-center text-green-600">
            <a
              className="block"
              href="https://cloud.protopie.io/p/3721921d94"
              target="_blank"
            >
              Whale Shark Adventure
            </a>
            <a
              className="block mt-8"
              href="https://zbdc9.csb.app/"
              target="_blank"
            >
              Sustainable Morning Routine
            </a>
            <a
              className="block mt-8"
              href="https://qsnd3.csb.app/"
              target="_blank"
            >
              The Bee Dream
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
