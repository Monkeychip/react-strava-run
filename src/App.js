const DateRange = () => {
  return React.createElement(
    "h3",
    { className: "text-slate-500 text-center m-5" },
    "Sunday, Feb 12 to Saturday, Feb 18",
  );
};
const Statistic = (props) => {
  return React.createElement(
    "div",
    { className: "flex justify-center items-center" },
    [
      React.createElement(
        "p",
        { className: "text-slate-500 mt-5 mb-5" },
        props.text,
      ),
    ],
  );
};
const Button = (props) => {
  return React.createElement(
    "button",
    {
      className:
        "bg-orange-500 text-slate-100 rounded-md p-2 mt-5 justify-center items-center",
    },
    props.buttonText,
  );
};
const ButtonCircle = (props) => {
  return React.createElement(
    "button",
    {
      className:
        "bg-orange-500 text-slate-100 rounded-full p-2 mt-5 justify-center items-center w-16 h-16",
    },
    props.buttonText,
  );
};
const Datum = () => {
  return React.createElement(
    "div",
    {
      className:
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-100 h-100 p-5",
    },
    React.createElement(DateRange),
    React.createElement(
      "div",
      { className: "bg-slate-100 rounded-md shadow-md" },
      React.createElement(
        "div",
        { className: "flex justify-center items-center" },
        React.createElement("img", {
          src: "../public/images/test_chart.png",
          alt: "shoe_image",
          className: "w-100 h-75",
        }),
      ),
    ),

    React.createElement(
      "div",
      { className: "bg-slate-100 rounded-md shadow-md mt-5" },
      React.createElement(Statistic, { text: "20 miles" }),
      React.createElement(Statistic, { text: "1,820 ft" }),
      React.createElement(Statistic, { text: "155 bpm" }),
      React.createElement(Statistic, { text: "12 min/mile" }),
    ),
    React.createElement(Button, { buttonText: "👟" }),
  );
};
const CompareGridColumn = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(ButtonCircle, { buttonText: "+" }),
  );
};
const SingleView = () => {
  return React.createElement(
    "div",
    { className: "grid grid-cols-2 gap-4", id: "single-view" },
    React.createElement(
      "div",
      { className: "bg-slate-100 rounded-md shadow-md mt-5" },
      React.createElement(Datum),
      React.createElement(CompareGridColumn),
    ),
  );
};

const App = () => {
  return React.createElement("div", {}, React.createElement(SingleView));
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
