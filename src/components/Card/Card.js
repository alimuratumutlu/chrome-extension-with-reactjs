import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import tw from "tailwind.macro";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.excerpt}</p>
      </div>
    </div>
  );
}

Card.propTypes = { children: PropTypes.object };

export default Card;
