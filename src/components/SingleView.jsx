import Chart from "./Chart";
import Statistic from "./Statistic";
import DateRange from "./DateRange";
import AddView from "./AddView";

const SingleView = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-1/3" id="single-view">
      <div className="col-span-3 flex flex-col w-100 h-100 p-5">
        <DateRange text="Sunday, Feb 12 to Saturday, Feb 18" />
        <Chart imageSrc="./assets/test_chart.png" imageName="test chart" />
        <div className="bg-slate-100 rounded-md shadow-md mt-5">
          <Statistic text="20 miles" />
          <Statistic text="1,820 ft" />
          <Statistic text="155 bpm" />
          <Statistic text="12 min/mile" />
        </div>
        <button class="outline text-slate-100 rounded-md p-2 mt-5 justify-center items-center">
          Adjust miles
        </button>
      </div>
      <AddView />
    </div>
  );
};

export default SingleView;
