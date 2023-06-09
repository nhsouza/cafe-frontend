import { MdAddCircle } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Input from "./Input";
import styles from "./InputOpcoes.module.css";

function InputOpcoes({ opcao, opcaoList, setterOpcaoList, onChange }) {
  function isOpcaoExistente(opcao, opcoes) {
    for (const current of opcoes) {
      if (current.toUpperCase() === opcao.toUpperCase()) {
        return true;
      }
    }

    return false;
  }

  return (
    <div>
      <div className={styles.container}>
        <Input
          label="Opção"
          id="opcao"
          type="text"
          placeholder="Pão"
          value={opcao}
          onClick={(e) => (e.target.value = "")}
          onChange={onChange}
        />
        <MdAddCircle
          className={styles.botaoAdicionar}
          onClick={() => {
            if (opcao && !isOpcaoExistente(opcao, opcaoList)) {
              setterOpcaoList([...opcaoList, opcao]);
            }
          }}
        />
      </div>

      <div>
        <ul className={styles.listaOpcoes}>
          {opcaoList &&
            opcaoList.map((item, i) => (
              <li key={i}>
                {item}{" "}
                <MdClose
                  className={styles.remover}
                  onClick={() => {
                    const arr = [];
                    for (const opcaoNome of opcaoList) {
                      if (item !== opcaoNome) {
                        arr.push(opcaoNome);
                      }
                    }
                    setterOpcaoList(arr);
                  }}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default InputOpcoes;
