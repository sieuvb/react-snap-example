import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Home() {
  return (
    <div>
      <main className="box">
        <div className="mb-12">
          <div className="img01 animate-bounce"></div>
          <h1>Compost Revolution</h1>
          <p className="text-2xl mt-2 p-2 text-center">
            Banana peels matter. Why?
          </p>
          <Link to="/opening" className="flex items-center justify-center my-8">
            <button className="btn01">
              <span>Explore </span>
            </button>
          </Link>
        </div>
      </main>
      <div className="fixed bottom-0 inset-x-0 py-4 text-center text-xs">
        Designed by Liran Qin
      </div>
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
