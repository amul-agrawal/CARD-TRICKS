import React, {Component} from 'react';
import axios from 'axios';

export default class GAME5 extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            cards1:[1,2,3,4],
            cards2:[4,3,2,1],
            total_count:0,
            limit:11
        }
    }
    // // componentDidMount() {
        
    // //     // axios.get('http://localhost:4000/a')
    // //     // .then(response => {
    // //     //     this.setState({cards1: response.data});
    // //     //     axios.get('http://localhost:4000/b')
    // //     //     .then(response => {
    // //     //         this.setState({cards2: response.data});
    // //     //     })
    // //     // })
    // // }
    Show_logic=() => {
        if(!window.confirm("UNLOCK LOGIC ?"))
            return 
        this.props.history.push({
            pathname:'/Play/Game5/Logic'
        });
    }
    // Shuffle_left=() => {
    //    this.setState({total_count:this.state.total_count+1})
    //    if(this.state.total_count >=  this.state.limit)
    //    {
    //         alert("Finished Shuffling,you can see first element of both are " + String(this.state.cards1[0]))

    //         this.state.cards1.shift();
    //         this.state.cards2.shift();
    //         this.setState({total_count:0});
    //         if(this.state.cards1.length == 1)
    //          {
    //              let check=window.confirm("Game Over \n Play again? ")
    //             if(check)
    //              {
    //                  this.setState({cards1:[1,2,3,4],cards2:[4,3,2,1],total_count:0,limit:11})
    //              }
    //              else
    //              {
    //                  this.props.history.push({pathname:'/'});
    //              }
    //          }
    //         return; 
    //    }
    //    else
    //    {
    //         this.state.cards1.push(this.state.cards1.shift())
    //    }
    // }
    // Shuffle_right=() => {
    //     this.setState({total_count:this.state.total_count+1})
    //     if(this.state.total_count >=  this.state.limit)
    //     {
    //          alert("Finished Shuffling,you can see first element of both are " + String(this.state.cards1[0]))
    //          this.state.cards1.shift();
    //          this.state.cards2.shift();
    //          this.setState({total_count:0});
    //          if(this.state.cards1.length == 1)
    //          {
    //              if(window.confirm("Game Over !! \n Play Again ? "))
    //              {
                     
    //                  this.setState({cards1:[1,2,3,4],cards2:[4,3,2,1],total_count:0,limit:11})
    //              }
    //              else
    //              {
    //                  this.props.history.push({pathname:'/'});
    //              }
    //          }
            
    //          return; 
    //     }
    //     else
    //     {
    //         this.state.cards2.push(this.state.cards2.shift())
    //     }
    //  }
    render() {
        return (
            <div>
            game5
            <button type="button" onClick={this.Show_logic} style={{float: 'right'}} > Show Logic </button>
    
          </div>
      )
    }
}