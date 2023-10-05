import { Carousel } from "@material-tailwind/react";
// import { PieChart } from "@mui/icons-material";
import  BasicPie  from "./PieCharts";
import BasicLineChart from "./LineCharts";
import BasicBars from "./BarCharts";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-x1">
      <div className='flex justify-center items-center h-full'>
        <BasicBars
          xAxis={[{id: 'barCategories', data: ['bar A', 'bar B', 'bar C'],scaleType: 'band',}]}
          series={[{data: [2, 5, 3]}]}
          width={600} height={320}
        />
      </div>
      <div className='flex justify-center items-center h-full'>
        <BasicPie
        colors={['green', 'blue', 'red']}
        series={[{data: [{ id: 0, value: 50, label: 'series A' },{ id: 1, value: 10, label: 'series B' },{ id: 2, value: 20, label: 'series C' },],},]}
        width={400} height={230}
        />
      </div>
      <div className='flex justify-center items-center h-full'>
        <BasicLineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[{data: [2, 5.5, 2, 8.5, 1.5, 5],},]}
          width={400} height={320}
        />
      </div>
    </Carousel>
  );
}