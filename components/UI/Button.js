const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} "m-2 mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out hover:bg-gray-300 rounded px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700"`}
    >
      {props.children}
    </button>
  );
};

export default Button;
