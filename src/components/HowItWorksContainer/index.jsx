import React from "react";
import "./index.scss";
import ill1 from "../../img/ill-1.svg";
import ill2 from "../../img/ill-2.svg";
import ill3 from "../../img/ill-3.svg";
import { v4 as uuidv4 } from "uuid";
const HowItWorksContainer = () => {
  let howItWorksArr = [
    {
      image: ill1,
      title: "Lorem Ipsum",
      description:
        "Elle melle deg fortelle, skipet går ut i år, rygg i rann, to i spann, snipp, snapp, snute, du er ute.",
    },
    {
      image: ill2,
      title: "Dolor sit amet",
      description:
        "Elle melle deg fortelle, skipet går ut i år, rygg i rann, to i spann, snipp, snapp, snute, du er ute.",
    },
    {
      image: ill3,
      title: "Lorem Ipsum",
      description:
        "Elle melle deg fortelle, skipet går ut i år, rygg i rann, to i spann, snipp, snapp, snute, du er ute.",
    },
  ];

  return (
    <section id="how-it-works">
      <h4>Slik fungerer det for deg</h4>
      <div id="hiw-container">
        {howItWorksArr.map((info) => {
          return (
            <article key={uuidv4()}>
              <img src={info.image} alt="decoration" />
              <h5>{info.title}</h5>
              <p>{info.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksContainer;
