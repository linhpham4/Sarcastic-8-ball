import express from "express";
import fs from "fs";

const answers = express.Router();

const readData = () => {
  const answersData = fs.readFileSync("./data/data.json");
  const parsedData = JSON.parse(answersData);
  return parsedData;
};

answers.get("/", (_request, response) => {
  const read = readData();
  response.json(read);
});

answers.get("/:id", (request, response) => {
  const id = request.params.id;
  const read = readData();
  const foundAnswer = read.find((answer) => answer.id === Number(id));
  response.json(foundAnswer);
});

export default answers;
