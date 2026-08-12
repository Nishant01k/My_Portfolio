import { ArrowUpRight, Home, Mail } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <Helmet>
        <title>404 | Portfolio</title>
        <meta name="description" content="The requested portfolio page could not be found." />
      </Helmet>

      <div className="not-found-grid" aria-hidden="true" />

      <header className="not-found-topbar">
        <p>PORTFOLIO / PAGE NOT FOUND</p>
      </header>

      <section className="not-found-content">
        <p className="not-found-kicker"><span /> ROUTE NOT FOUND</p>
        <div className="not-found-code" aria-hidden="true">404</div>
        <h1 id="not-found-title">This page is <em>off the grid.</em></h1>
        <p className="not-found-copy">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Return home to explore engineering projects, research, software development, and digital experiences.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-button not-found-button-primary">
            <Home size={15} strokeWidth={1.8} /> Return home <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
          <a className="not-found-button" href="mailto:santoshkchaudhary@ieee.org">
            <Mail size={15} strokeWidth={1.8} /> Mail <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
        </div>
      </section>

      <footer className="not-found-footer">
        <p>BASED IN NEPAL &middot; OPEN TO GLOBAL OPPORTUNITIES</p>
      </footer>
    </main>
  );
}

export default NotFound;
