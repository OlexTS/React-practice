import { useState } from "react";

const Search = ({ handleSearch }) => {
  const { value, setValue } = useState("");
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  return (
    <>
      <form className="d-flex mt-2" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={value}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

// class Search extends Component{
//     state = {
//         value: ''
//     }
//     handleChange = ({ target:{value} }) => {
//         this.setState({value})
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.handleSearch(this.state.value)
//     }
//     render() {
// 		return (
// 			<>
// 				<form
// 					className='d-flex mt-2'
// 					role='search'
// 					onSubmit={this.handleSubmit}
// 				>
// 					<input
// 						className='form-control me-2 '
// 						type='search'
// 						placeholder='Search'
// 						aria-label='Search'
//                         onChange={this.handleChange}
//                         value={this.state.value}
// 					/>
// 					<button className='btn btn-outline-success' type='submit'>
// 						Search
// 					</button>
// 				</form>
// 			</>
// 		)
// 	}
// }

export default Search;
