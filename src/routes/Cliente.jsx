import { useForm } from "react-hook-form"
import { FcRegisteredTrademark } from "react-icons/fc";

const Cliente = () => {
  // desestruturando o objeto
  const {register, setValue, setFocus} = useForm();

  // criando a função da API que vai consumir os dados
  function buscarCep(e){
    const cep = e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((dados) => {
      setValue("rua", dados.logradouro);
      setValue("bairro", dados.bairro);
      setFocus("numero");
    })
  }
  
  
  
  return (
    <div>
      <form>
        <fieldset>
          <legend>Dados Cliente</legend>
          <div>
            <label>Cep:</label>
            <input type="text" 
            {...register("cep")}
            onBlur={buscarCep}/>
          </div>

          <div>
            <label>Rua:</label>
            <input type="text"
            {...register("rua")} />
          </div>

          <div>
            <label>Bairro:</label>
            <input type="text"
            {...register("bairro")} />
          </div>

          <div>
            <label>Número:</label>
            <input type="text"
            {...register("numero")} />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Cliente