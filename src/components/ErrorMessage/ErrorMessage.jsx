const ErrorMessage = ({ children }) => {
  return (
    
      <div className="card text-center bg-danger">

        <div className="card-body">
          <p className="card-text">{children}</p>
        </div>
      </div>
    
  );
};

export default ErrorMessage