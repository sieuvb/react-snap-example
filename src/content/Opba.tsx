/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Opba() {
  return (
    <div>
      <main className="box">
        <div className="asks">
          <h2>The impact of methane...</h2>
          <p>
            on climate change is around 25 times greater than carbon dioxide
            (CO2). <br />
            <br />
            And greenhouse gases trap the sun’s heat in our atmosphere and warm
            up our planet. Hotter temperatures can lead to melting icecaps,
            rises in sea level and animals losing their homes, so do you.
          </p>
        </div>
        <div className="awss">
          <div>
            <Link to="/opbb">- That’s horrible. I wanna make a change</Link>
          </div>
          <div>
            <Link to="/endb">- I don’t care</Link>
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
