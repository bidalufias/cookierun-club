import { useCallback, useEffect, useState } from "react";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

type Route = "home" | "directory" | "privacy" | "terms";

function pathToRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/directory" || path === "/shops") return "directory";
  if (path === "/privacy") return "privacy";
  if (path === "/terms") return "terms";
  return "home";
}

function routeToPath(route: Route): string {
  switch (route) {
    case "directory":
      return "/directory";
    case "privacy":
      return "/privacy";
    case "terms":
      return "/terms";
    default:
      return "/";
  }
}

function usePath(): [Route, (route: Route) => void] {
  const [route, setRouteState] = useState<Route>(() =>
    pathToRoute(window.location.pathname),
  );

  useEffect(() => {
    const onPop = () => setRouteState(pathToRoute(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((next: Route) => {
    const path = routeToPath(next);
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setRouteState(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return [route, navigate];
}

export default function App() {
  const [route, navigate] = usePath();
  const [area, setArea] = useState("All");
  const [lateNightOnly, setLateNightOnly] = useState(false);

  return (
    <div className="app">
      <header className="site-header">
        <button
          type="button"
          className="logo"
          onClick={() => navigate("home")}
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
            className={route === "home" ? "nav-link active" : "nav-link"}
            onClick={() => navigate("home")}
          >
            Home
          </button>
          <button
            type="button"
            className={route === "directory" ? "nav-link active" : "nav-link"}
            onClick={() => navigate("directory")}
          >
            Shops
          </button>
        </nav>
      </header>

      <main className="main">
        {route === "home" && (
          <Home onBrowse={() => navigate("directory")} />
        )}
        {route === "directory" && (
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
        {route === "privacy" && <Privacy />}
        {route === "terms" && <Terms />}
      </main>

      <Footer
        onPrivacy={() => navigate("privacy")}
        onTerms={() => navigate("terms")}
      />
    </div>
  );
}
