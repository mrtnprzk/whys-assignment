interface ButtonProps {
  showMore: boolean;
  onClick: () => void;
}

const Button = ({ showMore, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#4863FE] text-white px-4 py-2 rounded-md hover:bg-[#5B72FB] duration-500 "
    >
      {!showMore ? "Show All" : "Show Less"}
    </button>
  );
};

export default Button;
