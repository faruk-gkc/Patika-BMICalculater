import React, { useState } from "react";
import { Button } from "./Button";
import Weak from "./DietLists/Weak";
import NormalWeight from "./DietLists/NormalWeight";
import OverWeight from "./DietLists/OverWeight";
import Obese from "./DietLists/Obese";
import MorbidlyObese from "./DietLists/MorbidlyObese";
import "./BmiCalc.css";

const BmiCalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dietList, setDietList] = useState();
  const [info, setInfo] = useState("");
  const [bmi, setBmi] = useState();

  const handleChangeHeight = (e) => {
    console.log(e);
    setHeight(e.target.value);
  };
  const handleChangeWeight = (e) => {
    console.log(e);
    setWeight(e.target.value);
  };
  const handleCalculateBMI = () => {
    const getValBMI = (
      Number(weight) /
      (Number(height * height) / 10000)
    ).toFixed(2);

    setBmi("Vücut Kitle İndeksiniz:" + getValBMI);

    if (height === "" && weight === "") {
      setInfo("Lütfen Boyunuzu ve Kilonuzu giriniz!");
    } else {
      if (getValBMI < 18.5) {
        setInfo("Zayıf");
        setDietList(<Weak />);
      } else if (getValBMI > 18.5 && getValBMI < 24.9) {
        setInfo("Normal Kilolu");
        setDietList(<NormalWeight />);
      } else if (getValBMI > 25 && getValBMI < 28.9) {
        setInfo("Fazla Kilolu");
        setDietList(<OverWeight />);
      } else if (getValBMI > 30 && getValBMI < 39.9) {
        setInfo("Obez");
        setDietList(<Obese />);
      } else if (getValBMI > 40) {
        setInfo("İleri derecede obez");
        setDietList(<MorbidlyObese />);
      }
    }
  };
  // console.log(height)
  // console.log(weight)
  return (
    <div className="container custom-bg">
      <div className="row mt-4">
        <div className="col-6 offset-3">
          <h1 className="display-5 text-center">Vücut Kitle İndeksi Hesaplama</h1>
          <div className="inputs">
            <input
              type="number"
              placeholder="Boyunuzu Giriniz"
              onChange={handleChangeHeight}
              className="mt-4 mx-4"
            />
            <input
              type="number"
              placeholder="Kilonuzu Giriniz"
              onChange={handleChangeWeight}
              className="mt-4 mx-4"
            />
          </div>
        </div>
        <Button onClick={handleCalculateBMI}>Hesapla</Button>
      </div>
      
      {info ? (
        <h3 className="alert alert-danger text-center">{info}</h3>
      ) : null}

      {bmi ? <h3 className="alert alert-danger text-center">{bmi}</h3> : null}

      <h3>{dietList}</h3>
    </div>
  );
};

export default BmiCalc;
