// import components
import React from "react";
import BookResults from "./BookResults";

// def function for resultscontainers
function ResultsContainer(props) {
	// def and init route for book search results 
	if (props.path === "/") {
		return (
			<div className="container" id="resultsContainer">
			<h3>Books Found</h3>
			{props.bookData.map((result) => {
				const bookData = result.volumeInfo;
				return <BookResults
				title = {bookData.title}
				authors = {bookData.authors}
				description = {bookData.description}
				link = {bookData.canonicalVolumeLink}
				image = {bookData.imageLinks}
				path = {props.path}
				key = {result.id}/>
			})}
			</div>
			);
		// def and init route for saved books 
	} else if (props.path === "/saved") {
		if (props.savedBooks.length > 0) {
			return (
				<div className="container" id="resultsContainer">
				  <h3>Reading List</h3>
				  {props.savedBooks.map((result) => {
				  	return <BookResults
				  	title={result.title}
				  	authors={result.authors}
				  	description={result.description}
				  	link={result.link}
				  	image={result.image}
				  	id={result._id}
				  	path={props.path}
				  	key={result._id} />
				  })}
				  </div>
				);
		} else {
			// render empty message if saved books array is empty
			return (
				<div id="resultsContainer" className="container">
				<h3>Reading List</h3>
				<p>Whoops. Nothing found.</p>
				</div>
				);
		}	
	}
}

export default ResultsContainer;