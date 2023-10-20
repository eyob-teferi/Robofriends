import React, { Component } from "react";
import CardsArray from "../components/CardsArray";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";

class App extends Component{

    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }

    onSerachChange =(event)=>{
        console.log(event.target.value)
        this.setState({searchfield:event.target.value});
    }


    render(){
        const filterdrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={this.onSerachChange} />
                <Scroll>
                    <CardsArray robots={filterdrobots}/>
                </Scroll>
                
            </div>
            
        )
    }
    
}

export default App;