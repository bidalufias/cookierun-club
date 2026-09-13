import { useState } from "react";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import Filters from "./components/Filters";

type View = "home" | "directory";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [area, setArea] = useState("All");
  const [lateNightOnly, setLateNightOnly] = useState(false);

  return (
    <div className="app">
      <header className="site-header">
        <button
          type="button"
          className="logo"
          onClick={() => setView("home")}
          aria-label="Cookie Run Club home"
        >
          <span className="logo-mark" aria-hidden="true">
            🍪
          </span>
          <span className="logo-text">Cookie Run Club</span>
        </button>
        <nav className="nav">
          <button
            type="button"
            className={view === "home" ? "nav-link active" : "nav-link"}
            onClick={() => setView("home")}
          >
            Home
          </button>
          <button
            type="button"
            className={view === "directory" ? "nav-link active" : "nav-link"}
            onClick={() => setView("directory")}
          >
            Shops
          </button>
        </nav>
      </header>

      <main className="main">
        {view === "home" ? (
          <Home onBrowse={() => setView("directory")} />
        ) : (
          <section className="directory">
            <div className="directory-intro">
              <h1>Cookie shops near you</h1>
              <p>
                Browse bakeries and cookie counters across KL &amp; Klang
                Valley. Filter by area or late-night hours for that 10pm run.
              </p>
            </div>
            <Filters
              area={area}
              lateNightOnly={lateNightOnly}
              onAreaChange={setArea}
              onLateNightChange={setLateNightOnly}
            />
            <ShopList area={area} lateNightOnly={lateNightOnly} />
          </section>
        )}
      </main>

      <footer className="site-footer">
        <p>
          Cookie Run Club · KL &amp; Klang Valley · No delivery, just
          discovery.
        </p>
      </footer>
    </div>
  );
}
