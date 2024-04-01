import React, { useEffect } from "react";
import { SelectorContainer } from "./styles";
import Select from "../select";
import { Country, State, City } from "country-state-city";
export type SelectedArea = {
  city: string;
  state: string;
  country: string;
};
type SelectOptionWithCode = {
  label: string;
  value: string;
  code?: string;
};

type setSelectedAreaType = (data: SelectedArea) => void;
type selectorProps = {
  setSelectedArea: setSelectedAreaType;
};
const Selectors = (props: selectorProps) => {
  const { setSelectedArea } = props;
  const [selectedList, setSelectedList] = React.useState([]);
  const [countries, setCountries] = React.useState<SelectOptionWithCode[]>();
  const [states, setStates] = React.useState<SelectOptionWithCode[]>();
  const [cities, setCities] = React.useState<SelectOptionWithCode[]>();
  const [selectedCountry, setSelectedCountry] =
    React.useState<SelectOptionWithCode>({
      label: "",
      value: "",
    });
  const [selectedState, setSelectedState] =
    React.useState<SelectOptionWithCode>({
      label: "",
      value: "",
    });
  const [selectedCity, setSelectedCity] = React.useState<SelectOptionWithCode>({
    label: "",
    value: "",
  });

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      fontSize: "13px",
      width: "120px",
      fontWeight: 500,
      padding: "8px 0px",
    }),
    option: (base: any, state: any) => ({
      ...base,
      fontSize: "13px",
    }),
    menuList: () => ({
      maxHeight: "400px",
      overflow: "scroll",
      padding: "0px",
    }),
    height: "300px",
  };

  useEffect(() => {
    let country =
      Country.getAllCountries().map((el) => ({
        label: el?.name,
        value: el?.name,
        code: el?.isoCode,
      })) || [];
    setCountries(country);
  }, []);

  useEffect(() => {
    if (selectedCity.value || selectedState.value || selectedCountry.value) {
      setSelectedArea({
        city: selectedCity.value,
        state: selectedState.value,
        country: selectedCountry.value,
      });
    }
  }, [selectedCountry, selectedCity, selectedState]);

  useEffect(() => {
    if (selectedCountry) {
      let state =
        State.getStatesOfCountry(selectedCountry?.code).map((el) => ({
          label: el?.name,
          value: el?.name,
          code: el?.isoCode,
        })) || [];
      setStates(state);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      let city =
        City.getCitiesOfState(selectedCountry.code!, selectedState.code!).map(
          (el) => ({
            label: el?.name,
            value: el?.name,
          })
        ) || [];
      setCities(city);
    }
  }, [selectedState]);

  return (
    <SelectorContainer>
      <Select
        placeholder="Country"
        options={countries}
        styles={customStyles}
        onChange={(e: any) => {
          setSelectedCountry(e);
        }}
      />
      <Select
        placeholder="State"
        options={states}
        styles={customStyles}
        onChange={(e: any) => {
          setSelectedState(e);
        }}
      />
      <Select
        placeholder="City"
        options={cities}
        styles={customStyles}
        onChange={(e: any) => {
          setSelectedCity(e);
        }}
      />
    </SelectorContainer>
  );
};

export default Selectors;
