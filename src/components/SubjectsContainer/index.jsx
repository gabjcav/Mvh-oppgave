import React from "react";
import "./index.scss";
import iconArrow from "../../img/icon-arrow.svg";
import { subjectData } from "../../config/subjectData";
import { v4 as uuidv4 } from "uuid";
const SubjectsContainer = () => {
  return (
    <section id="subjects">
      <h3>Mest etterspurte tema</h3>
      <div id="subjects-container">
        {subjectData.map((subject) => {
          return (
            <article key={uuidv4()}>
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
