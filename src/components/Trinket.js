import React from "react";

import { Route, Link, NavLink } from "react-router-dom";
import Description from "./TrinketDescription"; 
import Shipping from "./TrinketShipping";

export default function(props) {
  const item = props.items.find(i => String(i.id) === props.match.params.id);

    if (!item) {
        return <div> Loading...</div>
    }


  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
        <nav className="trinket-nav"> 
            <NavLink to={`/trinket/${props.match.params.id}`}> Description </NavLink>
            <NavLink to={`${props.match.path}shipping`}>Shipping </NavLink>
        </nav> 
      
    <Route path={props.match.path} exact render={() => <Description description={item.description} />} /> 
    <Route path={`${props.atch.path}/shipping`} exact render={() => <Shipping shipping={item.shipping} />} /> 

    </div>
  );
}
