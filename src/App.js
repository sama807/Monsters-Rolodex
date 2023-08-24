import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

// function App() {
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchString:'',
    };
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users) =>  this.setState(() => {
        return {monsters:users}
      },
      ()=>{
        console.log(this.state)
      }
      ))
      
  }
  onSearchChange = (event) =>{
    console.log(event.target.value)
    const searchString = event.target.value.toLocaleLowerCase();
   
    this.setState(()=>{
      return {searchString};
    });
  };
  
  render(){

    const {monsters, searchString} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

  return (
    
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBar className= {'monsters-search-box'} 
        onChnageHandler = {onSearchChange} placeholder = {'search monsters'} />
        
        {/* //PASS PROPS FROM ONE COMPONENT TO ANOTHER */}
        <CardList monsters = {filteredMonsters} />

        
       
    </div>
  );
}
}

export default App;

