const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      // This component allows for all buttons to look identical, but allows for minor stylistic changes
      // to be made to each button if needed. Styles declared in each button will be added to the
      // universal styles here
      className={`m-2 mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out hover:bg-gray-300 rounded px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
