import { Formik, Form } from "formik";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Balance from "./components/Balance/Balance";
import { useState } from "react";
import * as Yup from "yup";

const compoundInterest = (
  deposit: number,
  contribution: number,
  years: number,
  rate: number
) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }
  return Math.round(total);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function App() {
  const [balance, setBalance] = useState("");
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    setBalance(formatter.format(val));
  };
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
          //Validcion usando yup
          validationSchema={Yup.object({
            deposit: Yup.number().required("Ingresa una cantidad valida").typeError("Por favor ingresa un numero"),
            contribution: Yup.number().required("Ingresa una cantidad valida").typeError("Por favor ingresa un numero"),
            years: Yup.number().required("Ingresa una periodo valida").typeError("Por favor ingresa un numero"),
            rate: Yup.number().required("Ingresa una tasa valida").typeError("Por favor ingresa un numero desde .01 hasta 1").min(0, "El valor minimo es 0").max(1, "El valor maximo es 1"),
          })}
        >
          <Form>
            <Input name="deposit" label="Deposito inicial"></Input>
            <Input name="contribution" label="Contribucioon anual"></Input>
            <Input name="years" label="Periodo"></Input>
            <Input name="rate" label="Interes"></Input>
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== "" ? <Balance>Balance final: {balance}</Balance> : null}
      </Section>
    </Container>
  );
}

export default App;
