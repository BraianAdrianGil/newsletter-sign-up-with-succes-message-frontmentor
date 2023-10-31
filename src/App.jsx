import { useRef, useState } from "react";
import { animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./App.css";
import { useAnimations } from "./Hooks/useAnimations";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showSuccessfullyMessage, setShowSuccessfullyMessage] = useState(false);

  const inputRef = useRef(null);

  const handleInputValue = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const emailRegex = /^\S[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+\S$/;

    if (!inputRef.current && !inputValue.length) {
      setErrorMessage("Please enter a email direction");
    } else if (!emailRegex.test(inputValue)) {
      setErrorMessage("Enter a valid email direction");
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid || errorMessage || !inputRef.current || !inputValue)
      setErrorMessage("Enter a valid email address");
    else {
      setShowSuccessfullyMessage(true);
    }
  };

  const handleCloseBtn = () => {
    setShowSuccessfullyMessage(false);
    const timer = setTimeout(() => {
      setInputValue("");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Detectar la entrada solo una vez
    threshold: 0, // Porcentaje del elemento visible para activar la animación
  });

  const {
    animationImage,
    animationH1,
    animationP,
    animationItem,
    animationContainerOne,
    animationContainerTwo,
    animationLabel,
  } = useAnimations(inView);

  return (
    <div className="App">
      <div className="card" ref={ref}>
        <animated.div className="card__img__container" style={animationImage}>
          <img src="/images/illustration-sign-up-mobile.svg" alt="" />
        </animated.div>

        <div className="card__content__container" ref={ref}>
          <animated.h1 style={animationH1}>Stay updated!</animated.h1>
          <animated.p style={animationP}>
            Join 60,000+ product managers receiving monthly updates on:
          </animated.p>

          <ul className="list__items__container" ref={ref}>
            <animated.li style={animationItem}>
              <img src="/images/icon-list.svg" alt="Check icon" />
              Product discovery and building what matters
            </animated.li>
            <animated.li style={animationItem}>
              <img src="/images/icon-list.svg" alt="" /> Measuring to ensure
              updates are a success
            </animated.li>
            <animated.li style={animationItem}>
              <img src="/images/icon-list.svg" alt="" /> And much more!
            </animated.li>
          </ul>

          <form onSubmit={handleSubmit}>
            <div className="form__input__container" ref={ref}>
              <animated.label htmlFor="email" style={animationLabel}>
                Email address
              </animated.label>
              <animated.input
                id="email"
                type="email"
                aria-required
                placeholder="email@company.com"
                value={inputValue}
                onChange={handleInputValue}
                ref={inputRef}
                autoComplete="true"
                style={{
                  ...animationContainerOne,
                  borderColor: errorMessage && "var(--tomato)",
                }}
              />

              {errorMessage ? (
                <div className="input__error__message__container">
                  <p>{errorMessage}</p>
                </div>
              ) : (
                <div className="input__error__message__container false">
                  <p>{errorMessage}</p>
                </div>
              )}
            </div>

            <animated.div
              className="form__button__container"
              style={animationContainerTwo}
            >
              <button type="submit" role="button" aria-label="Send form data">
                Suscribe to monthly newsletter
              </button>
            </animated.div>
          </form>
        </div>

        {showSuccessfullyMessage ? (
          <div className="form__message__general__container">
            <div className="form__message__img__container">
              <img src="/images/icon-success.svg" alt="Correct tick image" />
            </div>

            <h2>Thanks for subscribing!</h2>
            <p>
              A confirmation email has been sent to <b>{inputValue}</b>. Please
              open it and click the button inside to confirm your subscription
            </p>

            <div className="form__message__close__btn__container">
              <button onClick={handleCloseBtn}>Dismiss message</button>
            </div>
          </div>
        ) : (
          <div className="form__message__general__container false">
            <div className="form__message__img__container">
              <img src="/images/icon-success.svg" alt="Correct tick image" />
            </div>

            <h2>Thanks for subscribing!</h2>
            <p>
              A confirmation email has been sent to <b>{inputValue}</b>. Please
              open it and click the button inside to confirm your subscription
            </p>

            <div className="form__message__close__btn__container">
              <button onClick={handleCloseBtn}>Dismiss message</button>
            </div>
          </div>
        )}
      </div>

      <div className="attribution">
        <p>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Front Mentor challenges page"
          >
            Frontend Mentor
          </a>
          . <br />
          Coded by
          <a
            href="https://www.linkedin.com/in/braian-adrian-gil-gagliardo-a10042266/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to my profile in Linkedin platform"
          >
            Braian Adrian
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
