import { useAppState } from "@/hooks/AppStateContext"; 

const CompraRapidaBtn = () => {
  const { globalState, setGlobalState } = useAppState();

  const confirmarCompraBtn = () => {
    setGlobalState((prevState: any) => ({
      ...prevState,
      Confirmacao: true,
    }));
  };

  return (
    <div>
      <button
        onClick={confirmarCompraBtn}
        style={{
          display: globalState.Cadastrado ? "block" : "none",
          background: "green",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        COMPRA RÁPIDA
      </button>
    </div>
  );
};

export default CompraRapidaBtn;
