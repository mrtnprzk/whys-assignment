const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="spinner space-x-3">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
