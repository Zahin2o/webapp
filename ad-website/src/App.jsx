
import { useState } from "react";
import "./App.css";

const matches = [
  { sport: "Football", league: "FOOTBALL · FRIENDLY", home: "Red City", away: "Blue United", homeIcon: "🔴", awayIcon: "🔵", score: "2 - 1", status: "FULL TIME" },
  { sport: "Cricket", league: "CRICKET · T20", home: "Bangla XI", away: "Lanka XI", homeIcon: "🇧🇩", awayIcon: "🇱🇰", score: "156/6", status: "20 OVERS" },
  { sport: "Football", league: "FOOTBALL · LEAGUE", home: "United FC", away: "City FC", homeIcon: "⚽", awayIcon: "⚽", score: "1 - 1", status: "DEMO SCORE" },
];

const articles = [
  { category: "FOOTBALL", title: "What makes a great matchday? The moments beyond the score", description: "Explore the tactics, teamwork and moments that make football special.", icon: "⚽", color: "green" },
  { category: "CRICKET", title: "Cricket match analysis: what fans should watch", description: "A closer look at batting, bowling and the key moments of a game.", icon: "🏏", color: "gold" },
  { category: "FITNESS", title: "Simple training habits every sports fan should know", description: "Practical ideas for building fitness, consistency and better habits.", icon: "🏃", color: "purple" },
];

const sports = [
  { name: "Football", icon: "⚽" },
  { name: "Cricket", icon: "🏏" },
  { name: "Tennis", icon: "🎾" },
  { name: "Basketball", icon: "🏀" },
];

function AdBanner({ large = false }) {
  return (
    <div className={`ad-banner ${large ? "ad-large" : ""}`}>
      <span className="ad-label">ADVERTISEMENT</span>
      <span>Ad placement · Reserved for future advertising</span>
    </div>
  );
}

function App() {
  const [activeSport, setActiveSport] = useState("All");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const filteredMatches = matches.filter((match) => {
    const sportMatches =
      activeSport === "All" || match.sport === activeSport;

    const searchMatches = `${match.home} ${match.away} ${match.sport}`
      .toLowerCase()
      .includes(search.toLowerCase());

    return sportMatches && searchMatches;
  });

  const filteredArticles = articles.filter((article) =>
    `${article.category} ${article.title} ${article.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function handleSubscribe(event) {
    event.preventDefault();
    setMessage("Demo form only. Email collection is not connected yet.");
    setEmail("");
  }

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">🏆</span>
          SPORTS<span className="logo-highlight">Zahin faisal.com</span>
        </a>

        <nav className="nav-links">
          <a href="#scores">Scores</a>
          <a href="#news">News</a>
          <a href="#sports">Sports</a>
        </nav>

        <a href="#newsletter" className="nav-button">
          Join Us ↗
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">YOUR DAILY SPORTS DESTINATION</span>
            <h1>
              Every game.
              <br />
              Every story<span className="yellow-dot">.</span>
            </h1>
            <p>
              Match updates, sports stories and analysis.
              Everything a sports fan needs, all in one place.
            </p>

            <form
              className="search-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="search"
                placeholder="Search teams, sports or news..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search sports"
              />
              <button type="submit">Search ↗</button>
            </form>

            <div className="hero-stats">
              <span>⚽ Football</span>
              <span>🏏 Cricket</span>
              <span>🌍 Sports Worldwide</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-circle circle-one"></div>
            <div className="hero-circle circle-two"></div>
            <div className="hero-ball">⚽</div>
            <div className="floating-card">
              <span className="floating-icon">🏆</span>
              <div>
                <strong>THE GAME NEVER STOPS</strong>
                <small>Stay in the action</small>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <AdBanner large />

          <section className="section" id="scores">
            <div className="section-heading">
              <div>
                <span className="section-kicker">MATCHDAY</span>
                <h2>Match Centre</h2>
                <p>Explore the latest match layouts.</p>
              </div>
              <span className="live-badge">● DEMO DATA</span>
            </div>

            <div className="filter-tabs">
              {["All", "Football", "Cricket"].map((sport) => (
                <button
                  key={sport}
                  className={activeSport === sport ? "tab active" : "tab"}
                  onClick={() => setActiveSport(sport)}
                >
                  {sport === "All" ? "All Sports" : sport}
                </button>
              ))}
            </div>

            <div className="match-grid">
              {filteredMatches.map((match, index) => (
                <article className="match-card" key={match.home}>
                  <div className="match-top">
                    <span>{match.league}</span>
                    <span className="match-number">0{index + 1}</span>
                  </div>

                  <div className="teams">
                    <div className="team">
                      <div className="team-icon">{match.homeIcon}</div>
                      <strong>{match.home}</strong>
                    </div>

                    <div className="score-area">
                      <span className="score">{match.score}</span>
                      <span className="match-status">{match.status}</span>
                    </div>

                    <div className="team">
                      <div className="team-icon">{match.awayIcon}</div>
                      <strong>{match.away}</strong>
                    </div>
                  </div>

                  <div className="match-bottom">
                    <span>Illustrative match</span>
                    <span>SportsHub ↗</span>
                  </div>
                </article>
              ))}

              {filteredMatches.length === 0 && (
                <p className="empty-state">No matching matches found.</p>
              )}
            </div>
          </section>

          <AdBanner />

          <section className="section" id="news">
            <div className="section-heading">
              <div>
                <span className="section-kicker">THE LATEST</span>
                <h2>Top Sports Stories</h2>
                <p>Stories, insights and guides for every fan.</p>
              </div>
            </div>

            <div className="news-grid">
              {filteredArticles.map((article, index) => (
                <article className="news-card" key={article.title}>
                  <div className={`news-image ${article.color}`}>
                    <span className="news-category">{article.category}</span>
                    <span className="news-emoji">{article.icon}</span>
                    <span className="image-number">0{index + 1}</span>
                  </div>

                  <div className="news-body">
                    <span className="article-meta">SPORTSHUB · SAMPLE ARTICLE</span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <button
                      className="read-link"
                      onClick={() =>
                        setMessage(
                          "This is a sample article. You can add a full article page later."
                        )
                      }
                    >
                      Read Story <span>↗</span>
                    </button>
                  </div>
                </article>
              ))}

              {filteredArticles.length === 0 && (
                <p className="empty-state">No matching stories found.</p>
              )}
            </div>
          </section>

          <AdBanner />

          <section className="section" id="sports">
            <div className="section-heading">
              <div>
                <span className="section-kicker">FIND YOUR GAME</span>
                <h2>Explore Sports</h2>
                <p>Pick your favourite category.</p>
              </div>
            </div>

            <div className="sports-grid">
              {sports.map((sport) => (
                <button
                  className="sport-card"
                  key={sport.name}
                  onClick={() => {
                    setActiveSport(
                      sport.name === "Tennis" || sport.name === "Basketball"
                        ? "All"
                        : sport.name
                    );
                    document
                      .getElementById("scores")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="sport-icon">{sport.icon}</span>
                  <strong>{sport.name}</strong>
                  <span className="sport-arrow">↗</span>
                </button>
              ))}
            </div>
          </section>

          <section className="newsletter" id="newsletter">
            <div>
              <span className="section-kicker">JOIN THE COMMUNITY</span>
              <h2>Sports updates, your way.</h2>
              <p>Build your audience with a sports newsletter.</p>
            </div>

            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit">Subscribe ↗</button>
            </form>
            {message && <p className="form-message">{message}</p>}
          </section>

          <p className="disclaimer">
            Demo website: scores and stories are illustrative, not live sports
            data. Advertisement spaces are placeholders, not real ads.
          </p>
        </div>
      </main>

      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          🏆 SPORTS<span className="logo-highlight">HUB.</span>
        </a>
        <p>Made for the love of sports.</p>
        <span>© {new Date().getFullYear()} SportsHub</span>
      </footer>
    </div>
  );
}

export default App;
