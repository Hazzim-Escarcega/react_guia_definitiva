import { useState } from "react";
import "./App.css";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";

interface Usuarios{
  name: string;
  lastname:string;
  email:string;
  reset: () => void;
}
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });
  const submit = (e: Usuarios) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };
  console.log(formulario);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              label="Nombre"
              name="name"
              value={formulario.name}
              onChange={handleChange}
            />
            <Input
              label="Apellido"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
            />
            <Button>Ok</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
