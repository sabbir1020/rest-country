import React from "react";
import "./Countries.css";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 20)));
  }, []);
  return (
    <div>
      <h1>All Countries:{countries.length} </h1>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.name.common} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
