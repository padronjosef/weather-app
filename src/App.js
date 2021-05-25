import React, { useState } from "react";
import Header from "./components/Header";
import ImputForm from "./components/ImputForm";
import WeatherResult from "./components/WeatherResult";

const App = () => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [consulting, setConsulting] = useState(false);
  const [dataFetched, setDataFetched] = useState({});

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
            <div className="col m6 s12">
              <WeatherResult dataFetched={dataFetched}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
