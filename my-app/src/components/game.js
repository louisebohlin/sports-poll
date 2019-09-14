import React from "react"
import "./game.css"

class Game extends React.Component {
  render() {


    return (
      <div className="game-container">
        <div className="game">
              <h4>{this.props.sport}</h4>
        </div>
      </div>
    )
  }
}

export default Game