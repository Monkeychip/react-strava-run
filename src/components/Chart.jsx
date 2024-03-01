const Chart = (props) => {
  return (
    <div className="bg-slate-100 rounded-md shadow-md">
      <div className="flex justify-center items-center">
        <img
          src={props.imageSrc}
          alt={props.imageName}
          className="w-100 h-75"
        />
      </div>
    </div>
  );
};

export default Chart;
