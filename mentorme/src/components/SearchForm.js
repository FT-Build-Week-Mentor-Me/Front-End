import React from "react";




const SearchForm = props => {

    return(

        <div className="searchForm">
<form>
    <input
    type="text"
    name="search"
    placeholder="search question by title"
    value={props.query}
    onChange={props.changeHandler}
    />
</form>

        </div>
    )
}
export default SearchForm;