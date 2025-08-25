import React, { useState } from "react";

const starTypes = {
  empty: "☆",
  full: "★",
  half: "⯪",
};

const StarRating = ({ rating, onChange, label }) => {
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    onChange(index);
  };

  return (
    <div className="star-rating" aria-label={label}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star-button ${
            (hover || rating) >= star ? "active" : "inactive"
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          aria-pressed={rating === star}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          {starTypes.full}
        </button>
      ))}
      <style jsx>{`
        .star-rating {
          display: flex;
          gap: 0.25rem;
          justify-content: center;
          margin-top: 0.25rem;
          font-size: 1.5rem;
          color: #f6aa1c;
        }

        .star-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          outline-offset: 2px;
          color: #cacaca;
          transition: color 0.2s ease;
        }

        .star-button.active {
          color: #f6aa1c;
        }

        .star-button:focus-visible {
          outline: 2px solid #f34256;
          outline-offset: 4px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

const FeedbackForm = () => {
  const [visitFrequency, setVisitFrequency] = useState("");
  const [foodQuality, setFoodQuality] = useState(0);
  const [serviceQuality, setServiceQuality] = useState(0);
  const [overallExperience, setOverallExperience] = useState(0);
  const [recommend, setRecommend] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [followUp, setFollowUp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const visitOptions = [
    "First time",
    "Occasionally",
    "Frequently",
    "Regularly",
    "This visit only",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation example:
    if (
      !visitFrequency ||
      foodQuality === 0 ||
      serviceQuality === 0 ||
      overallExperience === 0 ||
      !recommend
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    // Could send data to server here

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <h2 className="thanks">Thank you for your feedback!</h2>
      </div>
    );
  }

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

      * {
        box-sizing: border-box;
      }

      body {
        font-family: 'Poppins', sans-serif;
        background-color: #fff;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 400px;
        margin: 1rem auto 2rem;
        border: 1px solid #337ab7;
        border-radius: 4px;
        box-shadow: rgba(50,50,93,0.1) 0px 2px 5px 0px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .header {
        background: #fff;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 20px;
      }

      .header svg {
        width: 105px;
        height: auto;
      }

      .hero-image {
        width: 100%;
        max-height: 160px;
        object-fit: cover;
      }

      .image-wrapper {
        overflow: hidden;
        max-height: 160px;
      }

      .image-wrapper img {
        width: 100%;
        height: auto;
        object-fit: cover;
        display: block;
      }

      .content {
        flex-grow: 1;
        padding: 1rem 1.25rem 1.25rem;
        font-size: 0.85rem;
        color: #333;
        text-align: center;
      }

      .content p {
        margin: 0 0 1rem 0;
        font-weight: 500;
      }

      label {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        margin-top: 1rem;
        display: block;
        color: #222;
      }

      select,
      textarea {
        margin-top: 4px;
        width: 100%;
        border: 1px solid #b3b3b3;
        border-radius: 4px;
        padding: 8px 10px;
        font-size: 0.85rem;
        font-family: 'Poppins', sans-serif;
      }

      select:focus,
      textarea:focus {
        outline: 2px solid #2f87e3;
        border-color: #2f87e3;
      }

      textarea {
        resize: vertical;
        min-height: 70px;
        max-height: 150px;
      }

      .inline-label {
        font-weight: 600;
        font-size: 0.65rem;
        margin-top: 10px;
        margin-bottom: 4px;
        text-transform: uppercase;
        color: #444;
      }

      .radio-group {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 6px;
      }

      .radio-group label {
        font-weight: 600;
        font-size: 0.75rem;
        cursor: pointer;
      }

      input[type="radio"] {
        margin-right: 6px;
        cursor: pointer;
      }

      .checkbox-container {
        display: flex;
        align-items: center;
        margin-top: 10px;
        gap: 6px;
        font-size: 0.7rem;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 600;
      }

      input[type="checkbox"] {
        transform: scale(0.75);
        margin: 0;
        cursor: pointer;
      }

      .submit-button {
        margin-top: 12px;
        width: 100%;
        padding: 10px 0;
        background-color: #cc324b;
        border: none;
        border-radius: 4px;
        color: white;
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .submit-button:hover,
      .submit-button:focus-visible {
        background-color: #a62a3f;
        outline: none;
      }

      .thanks {
        padding: 40px 10px;
        font-weight: 700;
        font-size: 1.1rem;
        color: #444;
      }
      `}</style>

      <div className="container" role="form" aria-label="Customer feedback form">
        <header className="header">
          <svg
            width="105"
            height="40"
            viewBox="0 0 131 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M23.758 7.371 0 39.889h23.721l6.26-9.8-6.225-22.718ZM87.942 7.371l-22.725 32.518h23.727l6.258-9.8-6.26-22.718ZM58.589 26.376 40.835 6.9 20.647 30.053v9.836l18.188 18.786 19.469-19.334v-10.96l.285-.006Zm0-7.912 12.886-17.562L90.191 22.981v4.715l-19.522 19.308L57.13 30.93l1.459-12.466Z"
              fill="#CC324B"
            />
            <path
              d="M104.257 21.069c0-3.411-2.4-5.776-6.534-5.776-3.991 0-6.609.01-6.609 5.11a3.56 3.56 0 0 0 .695 2.39 2.639 2.639 0 0 0 2.108 1.049 2.614 2.614 0 0 0 1.68-.647l.573.753a3.827 3.827 0 0 1-2.147.763 4.8 4.8 0 0 1-3.831-1.894 5.028 5.028 0 0 1-.862-3.128c0-4.694 3.653-7.14 8.851-7.14 5.738 0 8.45 3.233 8.45 7.574 0 4.907-3.45 7.083-7.706 7.083a10.4 10.4 0 0 1-3.27-.563l-.069-.03v-2.313h-.034c1.026.03 1.95.03 2.735.03a3.425 3.425 0 0 0 3.353-2.165 4.454 4.454 0 0 0 .379-1.867Z"
              fill="#2B2B2B"
            />
            <path
              d="M117.254 21.253c0-4.399 3.388-7.063 7.933-7.063 5.151 0 7.935 3.361 7.935 7.063 0 4.24-3.502 7.077-8.076 7.077-4.516 0-7.792-2.896-7.792-7.077Zm11.662 0c0-2.303-1.096-4.239-3.546-4.239-2.54 0-3.555 1.889-3.555 4.239 0 2.479 1.073 4.376 3.592 4.376 2.024 0 3.509-1.597 3.509-4.376Z"
              fill="#2B2B2B"
            />
            <path
              d="M128.463 16.19h2.66v13.241H128.46V18.865h-.034l-4.05 10.566h-2.928l-3.992-10.566h-.034v10.566h-2.669V16.19h4.572l3.61 9.59h.035l3.574-9.59ZM84.082 16.19h-2.658v9.055l-5.65-9.055h-2.553v13.241h2.66v-9.1l5.575 9.1h2.57v-13.239ZM70.333 16.19H68.016l-7.93 13.24h2.794l7.04-11.697 7.03 11.697h2.794l-7.895-13.239ZM35.805 29.956v-3.49a2.856 2.856 0 0 1-2.566 1.35 2.763 2.763 0 0 1-1.988-.835 2.76 2.76 0 0 1-.832-2.04 2.672 2.672 0 0 1 1.153-2.24 3.15 3.15 0 0 1 1.849-.587 3.839 3.839 0 0 1 2.965 1.397L39 21.95a6.646 6.646 0 0 0-4.889-2.244 6.079 6.079 0 0 0-4.529 1.8 5.7 5.7 0 0 0-1.577 4.002 5.671 5.671 0 0 0 1.773 4.308 6.247 6.247 0 0 0 4.517 1.766 7.506 7.506 0 0 0 3.38-.75 7.326 7.326 0 0 0 2.667-2.11l-2.303-1.907a4.259 4.259 0 0 1-2.474 1.768 3.59 3.59 0 0 1-1.77.43Z"
              fill="#2B2B2B"
            />
          </svg>
        </header>

        <div className="image-wrapper" aria-label="Restaurant interior image">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e5265938-22a7-45f9-9978-35a955da80d5.png"
            alt="Cozy restaurant interior with wooden tables, green plants and warm lighting"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        <form onSubmit={handleSubmit} className="content" noValidate>
          <p>
            <strong>HELLO, THANKS FOR VISITING</strong>
            <br />
            Please help us improve our cafe services by filling in our feedback
            form. Thank you!
          </p>

          <label htmlFor="visitFrequency">HOW OFTEN DO YOU VISIT HERE?</label>
          <select
            id="visitFrequency"
            name="visitFrequency"
            value={visitFrequency}
            onChange={(e) => setVisitFrequency(e.target.value)}
            required
            aria-required="true"
          >
            <option value="" disabled>
              Select frequency
            </option>
            {visitOptions.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>

          <label className="inline-label">QUALITY OF THE FOOD</label>
          <StarRating
            rating={foodQuality}
            onChange={setFoodQuality}
            label="Quality of the Food rating"
          />

          <label className="inline-label">SERVICE QUALITY</label>
          <StarRating
            rating={serviceQuality}
            onChange={setServiceQuality}
            label="Service Quality rating"
          />

          <label className="inline-label">OVERALL EXPERIENCE</label>
          <StarRating
            rating={overallExperience}
            onChange={setOverallExperience}
            label="Overall Experience rating"
          />

          <label>WOULD YOU RECOMMEND OUR RESTAURANT TO OTHERS?</label>
          <div className="radio-group" role="radiogroup" aria-required="true" aria-labelledby="recommendQuestion">
            <label htmlFor="recommendYes">
              <input
                type="radio"
                id="recommendYes"
                name="recommend"
                value="yes"
                checked={recommend === "yes"}
                onChange={(e) => setRecommend(e.target.value)}
                required
              />
              YES
            </label>
            <label htmlFor="recommendNo">
              <input
                type="radio"
                id="recommendNo"
                name="recommend"
                value="no"
                checked={recommend === "no"}
                onChange={(e) => setRecommend(e.target.value)}
              />
              NO
            </label>
          </div>

          <label htmlFor="suggestions">YOUR SUGGESTIONS TO IMPROVE</label>
          <textarea
            id="suggestions"
            name="suggestions"
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            placeholder="Please write your suggestions here..."
            rows={4}
            aria-multiline="true"
          />

          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={followUp}
              onChange={(e) => setFollowUp(e.target.checked)}
              aria-checked={followUp}
            />
            RECEIVE PERSONAL FOLLOW UP TO YOUR FEEDBACK
          </label>

          <button type="submit" className="submit-button" aria-label="Submit Feedback">
            SUBMIT FEEDBACK
          </button>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
