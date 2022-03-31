import { useState } from "react";
interface Formulario{
    name: string;
    lastname: string;
    email: string;
}
interface e extends Formulario{
    target: any;
}


const useFormulario = (inicial: Formulario) => {
    const [formulario, setFormulario] = useState(inicial);
    const handleChange = (e: e) => {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,
      });
    };
    const reset = () => {
      setFormulario(inicial);
    }
    return [formulario, handleChange, reset];
}


export default useFormulario;