import { useEffect, useState } from "react";
import "../styles/login.css";

const slides = [
  {
    image: "/students1.jpg",
    title: "Your Best School Website",
    description:
      "A modern school management portal connecting administrators, teachers, students and parents.",
  },
  {
    image: "/students2.jpg",
    title: "Building Brighter Futures",
    description:
      "Learn, grow and achieve your goals with a school community built around you.",
  },
  {
    image: "/students3.jpg",
    title: "Education That Connects Us",
    description:
      "One secure platform for learning, communication and academic success.",
  },
];

const phrases = [
  "Your Best School Website",
  "Welcome To Our School",
  "Building Brighter Futures",
  "Education That Connects Us",
];

function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === slides.length - 1 ? 0 : previous + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((previous) =>
        previous === phrases.length - 1 ? 0 : previous + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="login-page">
      <div className="login-background">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`background-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
      </div>

      <div className="page-overlay"></div>

      <main className="portal-container">
        <section className="hero-section">
          <div className="brand">
            <div className="logo-wrapper">
              <img
                src="/logo.png"
                alt="Bokamoso jwa Rona School Logo"
                className="logo-image"
              />
            </div>

            <div className="brand-text">
              <strong>Bokamoso jwa Rona</strong>
              <span>School Portal</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="welcome-label">
              WELCOME TO OUR SCHOOL
            </div>

            <h1 key={currentPhrase}>
              {phrases[currentPhrase]}
            </h1>

            <p key={`description-${currentSlide}`}>
              {currentSlideData.description}
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <span className="feature-icon"></span>
                <span>Quality Education</span>
              </div>

              <div className="hero-feature">
                <span className="feature-icon"></span>
                <span>Connected Community</span>
              </div>

              <div className="hero-feature">
                <span className="feature-icon"></span>
                <span>Safe and Secure</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="left-footer">
              © 2026 Bokamoso jwa Rona
            </div>

            <div className="slider-controls">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  className={`slider-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="login-section">
          <div className="login-card">
            <div className="login-brand">
              <div className="login-logo-wrapper">
                <img
                  src="/logo.png"
                  alt="Bokamoso jwa Rona"
                  className="login-logo"
                />
              </div>

              <div className="login-brand-text">
                <strong>Bokamoso jwa Rona</strong>
                <span>School Portal</span>
              </div>
            </div>

            <div className="login-header">
              <h2>Welcome back</h2>
              <p>Sign in to your account to continue.</p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="form-group">
                <label htmlFor="username">
                  Email or Username
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your email or username"
                  required
                />
              </div>

              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">
                    Password
                  </label>

                  <a href="#">
                    Forgot password?
                  </a>
                </div>

                <div className="password-input">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="remember">
                <label>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                className="login-button"
              >
                Sign In
              </button>
            </form>

            <div className="login-help">
              <p>Need help accessing your account?</p>

              <a href="#">
                Contact School Administration
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;