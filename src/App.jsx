import { useEffect, useRef, useState } from "react";
import "./App.css";

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

  console.log(showSuccessfullyMessage);
  return (
    <div className="App">
      <div className="card">
        <div className="card__img__container">
          <img src="/images/illustration-sign-up-mobile.svg" alt="" />
        </div>

        <div className="card__content__container">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul className="list__items__container">
            <li>
              <img src="/images/icon-list.svg" alt="Check icon" />
              Product discovery and building what matters
            </li>
            <li>
              <img src="/images/icon-list.svg" alt="" /> Measuring to ensure
              updates are a success
            </li>
            <li>
              <img src="/images/icon-list.svg" alt="" /> And much more!
            </li>
          </ul>

          <form onSubmit={handleSubmit}>
            <div className="form__input__container">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                aria-required
                placeholder="email@company.com"
                value={inputValue}
                onChange={handleInputValue}
                ref={inputRef}
                autoComplete="true"
                style={{ borderColor: errorMessage && "var(--tomato)" }}
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

            <div className="form__button__container">
              <button type="submit" role="button" aria-label="Send form data">
                Suscribe to monthly newsletter
              </button>
            </div>
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
