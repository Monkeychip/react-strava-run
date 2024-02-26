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
      className: "col-span-3 flex flex-col w-100 h-100 p-5",
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
const AddSingleView = () => {
  return React.createElement(
    "div",
    { className: "self-center" },
    React.createElement(ButtonCircle, { buttonText: "+" }),
  );
};
const SingleView = () => {
  return React.createElement(
    "div",
    { className: "grid grid-cols-4 gap-4 w-1/3", id: "single-view" },
    [React.createElement(Datum), React.createElement(AddSingleView)],
  );
};

const App = () => {
  return React.createElement(
    "div",
    {
      id: "react-app",
      className: "flex justify-center bg-slate-800 h-screen w-screen p-5",
    },
    React.createElement(SingleView),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
