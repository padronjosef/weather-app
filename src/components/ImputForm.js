import React, { useState, useEffect } from "react";

const ImputForm = ({
  search,
  setSearch,
  consulting,
  setConsulting,
  setDataFetched,
}) => {
  const [error, setError] = useState(false);

  // destructuring city and country
  const { city, country } = search;

  useEffect(() => {
    const fetchAPI = async () => {
      if (consulting) {
        const API_KEY = "0ded51f01bb0093760083b0c579963f2";
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;

        const response = await fetch(URL);
        const result = await response.json();

        setDataFetched(result);
      }
    };
    fetchAPI();
  }, [city, country, consulting, setDataFetched]);

  // fuction that handle the state elements
  const handleChange = (e) => {
    // update the state
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  // fuction that handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!city.trim() || !country.trim()) {
      setError(true);
      return;
    }
    setError(false);

    setConsulting(true);
    // pass it to the principal component
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error"> All the fields are required </p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option>Select a country</option>
          <option value="US">United States</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
          <option value="VE">Venezuela</option>
        </select>
        <label htmlFor="country">Country</label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="search weather"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        ></input>
      </div>
    </form>
  );
};

export default ImputForm;
