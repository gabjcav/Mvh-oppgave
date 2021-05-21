import React from "react";
import ill1 from "../../img/ill-1.svg";
import ill2 from "../../img/ill-2.svg";
import ill3 from "../../img/ill-3.svg";
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
        {howItWorksArr.map((step) => {
          return (
            <article>
              <img src={step.image} alt="decoration" />
              <h5>{step.title}</h5>
              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksContainer;
