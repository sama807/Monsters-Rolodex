import { Component } from "react"
import './search-box.style.css'

class SearchBar extends Component{
    render(){


        return(
            <input className= {'search-box ${this.props.classNam } '}
             type='search' placeholder= {this.props.placeholder} 
             onChange= {this.props.onChnageHandler} />

            );
    }
}

export default SearchBar;