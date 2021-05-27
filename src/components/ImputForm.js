import React, { useState } from "react";
import PropTypes from 'prop-types';

const ImputForm = ({ search, setSearch, setConsulting }) => {
  const [error, setError] = useState(false);

  // destructuring city and country
  const { city, country } = search;

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
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }

    setError(false);
    setConsulting(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <p className="red darken-4 error">fields are required</p> : null}
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

      <div className="input-field col s12 search">
        <input type="submit" value="search weather" className=" btn-large btn-block  waves-effect waves-light yellow accent-4"/>
      </div>
    </form>
  );
};

ImputForm.prototype = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsulting: PropTypes.func.isRequired,
}

export default ImputForm;
