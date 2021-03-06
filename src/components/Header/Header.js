import React, { useState, useContext } from "react";

import { motion } from "framer-motion";
import { Languages } from "../../Consts";
import "./Header.css";
import LangContext from "../../context/LangContext";
import { headerText } from "../../Consts";
export default function Header() {
  const [langsToDisplay, setLangsToDisplay] = useState(0);

  const { lang, setLang } = useContext(LangContext);

  console.log("Description: " + headerText[lang].description);
  return (
    <>
      <header>
        <section>
          <article>
            <div className="langsContainer">
              <span
                className="langs"
                onClick={() => {
                  setLang(Languages[0]);
                  setLangsToDisplay(0);
                }}
              >
                {Languages[langsToDisplay * 3]}
              </span>
              <span
                className="langs"
                onClick={() => {
                  setLang(Languages[1]);
                  setLangsToDisplay(1);
                }}
              >
                {Languages[langsToDisplay * 3 + 1]}
              </span>
              <span
                className="langs"
                onClick={() => {
                  setLang(Languages[2]);
                  setLangsToDisplay(2);
                }}
              >
                {Languages[langsToDisplay * 3 + 2]}
              </span>
            </div>
            <h1>{headerText[lang].title}</h1>
            <h3>{headerText[lang].description}</h3>
          </article>
          <article className="descriptionAndImage">
            <div className="avatar">
              <a href="/">
                <motion.img
                  className="meinPhoto"
                  src={`images/me.webp`}
                  alt="Me"
                  initial={false}
                />
              </a>
            </div>
          </article>
        </section>
      </header>
    </>
  );
}
