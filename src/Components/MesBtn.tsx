import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize"
}

function nomeMes(n: number){
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return  new Intl.DateTimeFormat("pt-BR", {month: "long"}).format(date);
}

const MesBtn = ({n}: {n:number}) => {

  const {setInicio, setFinal} = useData();

  function setMes(n: number){
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInicio(firstDay);
    setFinal(lastDay);
  }

  return <button style={style}>{nomeMes(n)}</button>;
};

export default MesBtn;
