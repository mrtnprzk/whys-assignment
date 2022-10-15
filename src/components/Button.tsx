interface ButtonProps {
  showMore: boolean;
  onClick: () => void;
}

const Button = ({ showMore, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="p-3 bg-red-300">
      {!showMore ? "Show More" : "Show Less"}
    </button>
  );
};

export default Button;
