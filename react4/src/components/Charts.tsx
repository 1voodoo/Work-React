import { FC, useEffect, useState } from "react";
import Api, { IgetApi} from "./Api";
import { Chart } from "react-google-charts";

const Charts: FC = () => {
  const [covid, setCovid] = useState<IgetApi | null>(null);
 
  const getApi = async () => {
    const answerApi = await Api();
    setCovid(answerApi); 
  }
  
  useEffect (() => {
    getApi();
  },[]);
  const data = [
    ["Task", "Hours per Day"],
    [`Всего подтверждено ${covid?.Global.TotalConfirmed ? covid?.Global.TotalConfirmed: 0}`, 19.03],
    [`Новое Подтверждение ${covid?.Global.NewConfirmed ? covid?.Global.NewConfirmed: 0}`, 0.06],
    [`Новые Смерти ${covid?.Global.NewDeaths ? covid?.Global.NewDeaths: 0}`, 0.1],
    [`Всего смертей ${covid?.Global.TotalDeaths ? covid?.Global.TotalDeaths: 0}`,0.25],
  ];
  
  const options = {
    title: "Coronavirus COVID19 Данные о всех жителях земли",
  };

  return (
    <Chart 
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"1000px"}
    />
  );
};

export default Charts;