interface ButtonProps {
  isMore: boolean;
  onClick: () => void;
}

const Button = ({ isMore, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#4863FE] text-white px-4 py-2 rounded-md hover:bg-[#5B72FB] duration-500 "
    >
      {!isMore ? "Show All" : "Show Less"}
    </button>
  );
};

export default Button;
