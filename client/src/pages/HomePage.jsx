import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./HomePage.scss";

import Ball from "../component/Ball/Ball";
import Input from "../component/Input/Input";

const HomePage = () => {
  const { id } = useParams();

  const [answer, setAnswer] = useState("8");

  const getAnswers = async () => {
    const response = await axios.get(`http://localhost:8080/answers/`);
    return response.data;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    const answerArr = await getAnswers();
    const foundAnswerObject = answerArr.find((answer) => answer.id == randomId);
    const foundAnswer = foundAnswerObject.answer;
    setAnswer(foundAnswer);
    console.log(answer);
  };

  return (
    <>
      <div className="page">
        <Ball answer={answer} />
        <Input handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default HomePage;
