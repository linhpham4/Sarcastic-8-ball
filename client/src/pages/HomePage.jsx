import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./HomePage.scss";

import Ball from "../component/Ball/Ball";
import Input from "../component/Input/Input";
import video from "../assets/stars1.mp4";

const HomePage = () => {
  const { id } = useParams();

  const [answer, setAnswer] = useState(8);
  const [isActive, setActive] = useState(null);

  const getAnswers = async () => {
    const response = await axios.get(`http://localhost:8080/answers/`);
    return response.data;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    const answerArr = await getAnswers();
    const foundAnswerObject = answerArr.find((answer) => answer.id == randomId);
    const foundAnswer = foundAnswerObject.answer;
    setTimeout(() => {
      setAnswer(foundAnswer);
    }, 1200);

    event.target.question.value = "";
  };

  const toggleClass = () => {
    setActive(!isActive);
    setTimeout(() => {
      setActive(isActive);
    }, 2000);
  };

  return (
    <>
      <div className="page">
        <Ball answer={answer} isActive={isActive} />
        <div className="page__container">
          <h1 className="title">Sarcastic <br/> 8-Ball</h1>
          <Input handleSubmit={handleSubmit} toggleClass={toggleClass} />
        </div>
      </div>
      <video className="video" autoPlay muted loop>
        <source type="video/mp4" src={video} />
      </video>
    </>
  );
};

export default HomePage;
