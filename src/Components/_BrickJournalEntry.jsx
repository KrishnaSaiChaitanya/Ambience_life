import React from "react";
import "./AnimatedCard.css";

function AnimatedCard() {
  return (
    <div className="main">
      <h1 className="md:text-3xl sm:text-2xl text-3xl font-semibold mt-7">
        week <span className="text-[#671277]">20</span>of 2023
      </h1>
      <div className="flex justify-center align-center" id="card">
        <div class="tag-container">
          <div class="tag">
            <div class="tag-side tag-1-side">
              <div class="tag-text tag-1-text">
                <img
                  id="prompt-image"
                  src="prompt-icon.svg"
                  style={{ height: "100px", margin: "5px" }}
                />
                <p>
                  By the end of this year, what is one achievable goal you'd
                  like to reach in your personal life? What is one in your
                  professional life?
                </p>
              </div>
            </div>

            <div class="tag-side tag-1-side is-back">
              <div
                class="tag-text tag-1-text px-3 p-1"
                style={{ textAlign: "left" }}
              >
                <p>
                  For reading: <br /> 1) Set aside 30 minutes daily for reading
                  <br /> 2) Join a book club <br /> 3) Reduce screen time before
                  bed. <br />
                  For certification: <br />
                  1) Research best courses <br />
                  2) Dedicate weekends for study <br /> 3) Join study groups
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="tag-container">
          <div class="tag">
            <div class="tag-side tag-1-side">
              <div class="tag-text tag-1-text">
                <img
                  id="prompt-image"
                  src="prompt-icon.svg"
                  style={{ height: "100px", margin: "5px" }}
                />
                <p>
                  Advanced Prompt: "What is one challenging but achievable goal
                  you'd like to reach in your personal life? Professional life?"
                </p>
              </div>
            </div>

            <div class="tag-side tag-1-side is-back">
              <div class="tag-text tag-1-text">
                <p>Introducing the ambience.LIFE app!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedCard;
