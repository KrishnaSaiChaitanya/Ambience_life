import React, { useState } from "react";
import "./_BrickJournalEntry.css";

function AnimatedCard({
  weekOfYear,
  year,
  prompt,
  entry,
  advancedPrompt,
  advancedEntry,
}) {
  const entryHtml = { __html: entry };
  const advancedEntryHtml = { __html: advancedEntry };
  const [isRotated1, setIsRotated1] = useState(false);
  const [isRotated2, setIsRotated2] = useState(false);

  const handleCard1 = () => {
    setIsRotated1(!isRotated1);
  };
  const handleCard2 = () => {
    setIsRotated2(!isRotated2);
  };
  return (
    <div className="main">
      <h1 className="md:text-3xl sm:text-2xl text-3xl font-semibold mt-7">
        week <span className="text-[#671277]">{weekOfYear}</span> of {year}
      </h1>
      <div className="flex justify-center align-center" id="card">
        <div class="tag-container">
          <div className={`tag ${isRotated1 ? "rotated_one" : ""}`}>
            <div class="tag-side tag-1-side">
              <div class="tag-text tag-1-text">
                <img
                  id="prompt-image"
                  src="prompt-icon.svg"
                  style={{ height: "100px", margin: "5px" }}
                />
                <p>{prompt}</p>
                <svg
                  onClick={handleCard1}
                  width="50px"
                  style={{ margin: "10px" }}
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="rotate(-5, 12, 12)">
                    <path
                      d="M3.93751 7.996C5.41098 5.03473 8.46787 3 12 3C16.629 3 20.4418 6.49474 20.9439 10.9898M3.05493 13C3.55236 17.4999 7.36744 21 12 21C15.5328 21 18.5902 18.9645 20.0634 16.0023"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  <path
                    d="M3.138 5.375V8.625H6.625M20.862 18.625V15.375H17.375"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect
                    x="8.5"
                    y="6.5"
                    width="7"
                    height="11"
                    rx="1.1"
                    ry="1.1"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div class="tag-side tag-1-side is-back">
              <div
                class="tag-text tag-1-text px-3 p-1"
                style={{ textAlign: "left" }}
              >
                <p dangerouslySetInnerHTML={entryHtml}></p>
                <svg
                  onClick={handleCard1}
                  width="50px"
                  style={{ margin: "10px" }}
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="rotate(-5, 12, 12)">
                    <path
                      d="M3.93751 7.996C5.41098 5.03473 8.46787 3 12 3C16.629 3 20.4418 6.49474 20.9439 10.9898M3.05493 13C3.55236 17.4999 7.36744 21 12 21C15.5328 21 18.5902 18.9645 20.0634 16.0023"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  <path
                    d="M3.138 5.375V8.625H6.625M20.862 18.625V15.375H17.375"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect
                    x="8.5"
                    y="6.5"
                    width="7"
                    height="11"
                    rx="1.1"
                    ry="1.1"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="tag-container">
          <div className={`tag ${isRotated2 ? "rotated_two" : ""}`}>
            <div class="tag-side tag-1-side">
              <div class="tag-text tag-1-text">
                <img
                  id="prompt-image"
                  src="prompt-icon.svg"
                  style={{ height: "100px", margin: "5px" }}
                />
                <p>{advancedPrompt}</p>
                <svg
                  style={{ margin: "10px" }}
                  onClick={handleCard2}
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="rotate(-5, 12, 12)">
                    <path
                      d="M3.93751 7.996C5.41098 5.03473 8.46787 3 12 3C16.629 3 20.4418 6.49474 20.9439 10.9898M3.05493 13C3.55236 17.4999 7.36744 21 12 21C15.5328 21 18.5902 18.9645 20.0634 16.0023"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  <path
                    d="M3.138 5.375V8.625H6.625M20.862 18.625V15.375H17.375"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect
                    x="8.5"
                    y="6.5"
                    width="7"
                    height="11"
                    rx="1.1"
                    ry="1.1"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div class="tag-side tag-1-side is-back">
              <div class="tag-text tag-1-text">
                <p dangerouslySetInnerHTML={advancedEntryHtml}></p>
                <svg
                  style={{ margin: "10px" }}
                  onClick={handleCard2}
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="rotate(-5, 12, 12)">
                    <path
                      d="M3.93751 7.996C5.41098 5.03473 8.46787 3 12 3C16.629 3 20.4418 6.49474 20.9439 10.9898M3.05493 13C3.55236 17.4999 7.36744 21 12 21C15.5328 21 18.5902 18.9645 20.0634 16.0023"
                      stroke="#F1F1F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>

                  <path
                    d="M3.138 5.375V8.625H6.625M20.862 18.625V15.375H17.375"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect
                    x="8.5"
                    y="6.5"
                    width="7"
                    height="11"
                    rx="1.1"
                    ry="1.1"
                    stroke="#F1F1F1"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedCard;
