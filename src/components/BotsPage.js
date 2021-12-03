import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots";

function BotsPage() {
  //start here with your code for step one
const [robots, setRobots] =useState([]);


useEffect(() => {
  fetch(API)
  .then((res) => res.json())
  .then((json) => setRobots(json))


}, []);

function castRobots(bot) {
  console.log(bot);
  setRobots(robots.map((b) => b.id === bot.id ? {...b, cast:true} : b));
}

  return (
    <div>
      <YourBotArmy />
      <BotCollection robots={robots}  castRobots={castRobots} />
    </div>
  );
}

export default BotsPage;
