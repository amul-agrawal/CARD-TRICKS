import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";
import '../App.css';
import Alert from 'react-s-alert';
var lt = new Array(11).fill(false);
export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards1: [
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                //  '0', '0', '1', '1', '0', '1', '1', '0'
            ],
            selected_indices: [],
            Player: "Player1",
            // cards2:"",
            total_count: 0,
            limit: 11,
            // hintArr:[null,null]
        }
    }
    componentDidMount() {
        $(".play").show();
        $(".loose").hide();
    }
    Show_logic = () => {
        if (!window.confirm("UNLOCK LOGIC ?"))
            return
        this.props.history.push({
            pathname: '/Play/Game2/Logic'
        });
    }
    Erase = () => {

        var arr = this.state.selected_indices.slice()

        if (arr.length != 2 || (arr[0] != arr[1] - 1) || (this.state.cards1[arr[0]] == this.state.cards1[arr[1]])) {
            Alert.error("Invalid Move",
                {
                    beep: true,
                    offset: '100',
                    timeout: 1000
                });
            // for (var i = 0; i < 10; i++) {
            //     $("." + String(i)).css("background-color", "white")
            //     $("." + String(i)).css("box-shadow", "none");
            //     $("." + String(i)).css("transform", "none");
            //     // $("." + String(i)).addClass("kingqueen-card");

            //     lt = new Array(11).fill(false);

            // }
            this.setState({
                selected_indices: [],
            })

            return;
        }

        Alert.success("Successfully Married off.", {
            beep: true,
            offset: '100',
            timeout: 1000
        })
        var cards2 = []
        for (var i = 0; i < this.state.cards1.length; i++) {
            if (arr.indexOf(i) == -1)
                cards2.push(this.state.cards1[i]);
        }
        console.log(arr);
        console.log(cards2);

        this.setState({ cards1: cards2, selected_indices: [] });
        lt = new Array(11).fill(false);
        if (this.state.Player == "Player1") {
            this.setState({ Player: "Player2" });
        }
        else
            this.setState({ Player: "Player1" });
        var possible = false;
        for (var i = 0; i < cards2.length - 1; i++) {
            if (cards2[i] != cards2[i + 1]) {
                possible = true;
                break;
            }
        }
        if (possible)
            return;
        $(".play").hide();
        $(".loose").show();
    }
    Loose = () => {

        if (this.state.Player == "Player1")
            Alert.success("Player2 Wins",
                {
                    beep: true,
                    offset: '100',
                    timeout: 1000
                });
        else
            Alert.success("Player1 Wins",
                {
                    beep: true,
                    offset: '100',
                    timeout: 1000
                });

        // this.props.history.push({pathname:'/Play/Game2'})
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Alert stack={{ limit: 10, spacing: 50 }} />

                <button type="button" onClick={this.Show_logic} style={{ float: 'right' }} className='btn btn-outline-danger'> Show Logic </button>


                <div className="container" style={
                    {
                        marginBottom: '25px',
                        //   backgroundColor:'white',
                        //   color:'white'
                        // borderRadius:'10px',
                        // boxShadow:'0 0 5px black'
                    }
                }>
                    <br></br>
                    <h1><strong> King-Queen Game</strong></h1>
                    <br></br>
                    <p>
                        Player1 and Player2 are playing a game <br></br>
                        There are some kings and queens in the order given below. <br></br>
                        Player1 and Player2 make alternating moves: Player1 makes the first move, Player2 makes the second move,
                        Player1 makes the third one, and so on. During each move, the current player must choose an adjacent pair of king and queen and marry them off.
                <br></br>
                        If a player can't make any move, they lose. Both players play optimally.
                    </p>

                </div>



                <div className="container" style={
                    {
                        marginBottom: '18px'
                    }
                }>
                    {
                        (() => {
                            if (this.state.Player === "Player2")
                                return <img src={require('../assets/man.png')} width='40px'></img>
                            else return <img src={require('../assets/woman.png')} width='40px'></img>

                        })()
                    }
                    {this.state.Player}'s Turn
            </div>
                <div className="container" style={{ 
                    display: "flex", flexWrap: "wrap"
                     }}>
                    {this.state.cards1.map((char, index) => {
                        if (this.state.selected_indices.indexOf(index) != -1) {
                            return <div className='kingqueen-card' class={`${index} kingqueen-card `} style={{ boxShadow: "0 0 20px yellow" }} >
                                <img src={char == '0' ? require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`) : require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`)} width="100px"></img>
                            </div>;
                        }
                        return (
                            //   <span class = {index} style={
                            //     {
                            //      border: '1px solid black',
                            //      padding: '11.4px 12px',

                            //     }
                            //   } > {char} </span>

                            <button style={{ border: 'none', backgroundColor:'transparent' }} onClick={() => {
                                if (this.state.selected_indices.indexOf(index) == -1)
                                    this.setState({
                                        selected_indices: [...this.state.selected_indices, index],
                                    })

                            }}><div className='kingqueen-card' class={`${index} kingqueen-card`} >
                                    <img src={char == '0' ? require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`) : require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`)} width="100px"></img>
                                </div></button>
                        )
                    }
                    )}
                </div>


                <div className="container" style={
                    {
                        marginTop: '18px'
                    }
                }>
                    {/* <nav className="navbar navbar-expand-lg navbar-light "> */}
                    {/* <div className="collapse navbar-collapse"> */}
                    <ul className="navbar-nav mr-auto">
                        <li class="play"><button type="button" onClick={this.Erase} className='btn btn-outline-danger'>Marry them off</button></li>
                        <li class="loose"><button type="button" onClick={this.Loose} className='btn btn-outline-danger'>Finish</button></li>

                    </ul>
                    {/* </div> */}
                    {/* </nav> */}
                    <br />
                    <button className='btn btn-warning' onClick={
                        () => {
                            for (let i = 1; i < this.state.cards1.length; i++) {
                                let a = this.state.cards1[i - 1];
                                let b = this.state.cards1[i];
                                if (a != b) {
                                    console.log(i - 1, i);
                                    this.setState({
                                        selected_indices: [i - 1, i],
                                    })
                                    break;
                                }


                            }

                        }
                    }>Hint</button>
                </div>
                <br />
                <br />

            </div>
        )
    }
}