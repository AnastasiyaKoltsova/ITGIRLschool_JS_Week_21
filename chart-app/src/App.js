import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Учеба", 8],
  ["Прием пищи", 3],
  ["Чтение", 1],
  ["Web-серфинг", 3],
  ["Сон", 7],
  ["Общение", 2]
];

export const options = {
  title: "Мои ежедневные активности",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
