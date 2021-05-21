import React from "react";
import "./index.scss";
import iconArrow from "../../img/icon-arrow.svg";

const SubjectsContainer = () => {
  let subjects = ["Design", "Reklame", "Backend", "Frontend", "UX"];

  return (
    <section id="subjects">
      <h3>Mest etterspurte tema</h3>
      <div id="subjects-container">
        {subjects.map((subject) => {
          return (
            <article>
              <p>{subject}</p>
              <button className="subject-btn">
                <img src={iconArrow} alt={`Arrow icon for ${subject}`} />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SubjectsContainer;
