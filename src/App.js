import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ImputForm from "./components/ImputForm";
import WeatherResult from "./components/WeatherResult";
import Error from "./components/Error";

const App = () => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [consulting, setConsulting] = useState(false);
  const [dataFetched, setDataFetched] = useState({});
  const [error, setError] = useState(false);

  // destructiring data
  const { city, country } = search;

  useEffect(() => {
    const fetchAPI = async () => {
      if (consulting) {
        const API_KEY = "0ded51f01bb0093760083b0c579963f2";
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;

        const response = await fetch(URL);
        const result = await response.json();

        setDataFetched(result);
        setConsulting(false);

        if (dataFetched.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    fetchAPI();
  }, [consulting, dataFetched, city, country]);

  let component;
  if (error) {
    component = <Error message="City not found" />;
  } else {
    component = <WeatherResult dataFetched={dataFetched} />;
  }

  return (
    <>
      <Header title="Weather App" />

      <div className="wrapper-form ">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <ImputForm
                search={search}
                setSearch={setSearch}
                consulting={consulting}
                setConsulting={setConsulting}
                setDataFetched={setDataFetched}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
