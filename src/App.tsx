import { Formik, Form } from "formik";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
interface FormValues {
  deposit: number;
  contribution: number;
  years: number;
  rate: number;

}

const compoundInterest = ({deposit, contribution, years, rate}: FormValues) => {

}
function App () {
  const handleSubmit = () => {};
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
        >
          <Form>
            <Input name="deposit" label="Deposito inicial"></Input>
            <Input name="contribution" label="Contribucioon anual"></Input>
            <Input name="years" label="Periodo"></Input>
            <Input name="rate" label="Interes"></Input>
            <Button>Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
