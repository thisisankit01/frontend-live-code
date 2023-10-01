import { useState } from "react";
import "./styles.css";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState();

  const handleSelect = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    const countryExists = countries.some((s) => s.name === selectedCountry);
    if (countryExists) {
      const getCity = countries.find((c) => c.name === selectedCountry);
      setCity(getCity.cities);
    }
  };

  console.log(city);

  console.log(country);

  return (
    <div>
      <select name="countries" onChange={handleSelect}>
        <option>Please choose an Country</option>
        {countries.map((country) => {
          return (
            <option key={country.value} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>

      {country && (
        <select name="counties">
          <option>Please choose an City</option>
          {city.map((city, index) => {
            return <option key={index}>{city}</option>;
          })}
        </select>
      )}
    </div>
  );
}
