import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props);
  const { name, flags, population, region } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Name: {name.common}</h3>
      <h4>Population: {population}</h4>
      <p>
        <span>Region :{region}</span>
      </p>
    </div>
  );
};

export default Country;
