import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function About() {
  return (
    <div>
      <main className="mt-32">
        <div className="max-w-screen-sm mx-auto">
          <h1>Compost Tutorials</h1>
          <p className="text-2xl mt-12 text-center text-green-600">
            <a
              className="block"
              href="https://compostrevolution.com.au/tutorials/"
              target="_blank"
            >
              Compost Revolution
            </a>
            <a
              className="block mt-8"
              href="https://www.urbancomposter.com.au/video-tutorials/"
              target="_blank"
            >
              Urban Composter
            </a>
            <a
              className="block mt-8"
              href="https://www.epa.gov/recycle/composting-home#:~:text=Enriches%20soil%2C%20helping%20retain%20moisture,a%20rich%20nutrient%2Dfilled%20material"
              target="_blank"
            >
              Composting At Home
            </a>
          </p>
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
