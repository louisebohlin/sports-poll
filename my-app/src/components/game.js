import React from "react"
import "./game.css"

class Game extends React.Component {
  render() {


    return (
      <div className="game-container">
        <div className="game">
              <div className="game-info">
              <h4>{this.props.sport}</h4>
              <h2>{this.props.group}</h2>
              <h1>{this.props.name}</h1>
              <h2>Who will win?</h2>
              <button>{this.props.homeName}</button>
              <button>{this.props.awayName}</button>
              <button>Draw</button>
              </div>
        </div>
      </div>
    )
  }
}

export default Game