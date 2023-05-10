import React from "react";
import Card from '../components/card';
import channel_list from "../data/channel_list.json" ;
import './channels.css'

const Channels = () => {
  
  return (
    <div>
      <h1>
        實況列表
      </h1>
      <div className="channel-cards">
      {channel_list.map((channel) => (
          <Card key={channel.id} imageUrl={channel.image_url} title={channel.name} body={channel.description} />
      ))}
      </div>
    </div>
  );
};
  
export default Channels;