// import { useState } from "react";


const FormFilterToDo = ({ setSearchParams, filterText }) => {
   
  const handleChange = ({ target }) => {
     
      setSearchParams({filter: target.value})
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Filter todo
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
                  onChange={handleChange}
                  value={filterText}
        />
      </div>
    </form>
  );
};

export default FormFilterToDo;
