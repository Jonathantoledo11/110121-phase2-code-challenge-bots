import React from "react";
import BotCard from "./BotCard";

function BotCollection({robots, castRobots }) {
 


  return (
    <div className="ui four column grid">
      <div className="row">
        {robots.map(bot => <BotCard key={bot.id} bot={bot} castRobots={castRobots} />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
