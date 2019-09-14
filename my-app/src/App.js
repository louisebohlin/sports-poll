import React from "react"
import Game from "./game.js"

class App extends React.Component {

    state = {
      game: []
    }
 
    componentDidMount() {
      fetch("src/games.json").then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          game: json.games
        })
      })
    }
 
    render() {
      if (this.state.game.length > 0) {
        return (
          <div>
            {this.state.game.map((item) => {
              return (
                <Game
                  awayName={item.awayName}
                  group={item.group}
                  homeName={item.homeName}
                  name={item.name}
                  sport={item.sport} />
              )
            })}
          </div>
        )
      } else {
        return <div>Loading...</div>
      }
    }
 
 }
 
 export default App