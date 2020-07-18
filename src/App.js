import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

const marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
    };
  }

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      overflow: "scroll",
    };
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col md-6">
              <div className="col text-center">
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
                <div className="mark-input mt-3">
                  <textarea
                    name="mark"
                    id="mark"
                    className="input"
                    style={inputStyle}
                    value={this.state.markdown}
                    onChange={(e) => this.updateMarkdown(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col md-6">
              <div className="col text-center">
                <Badge className="text-align-center" variant="secondary">
                  Preview
                </Badge>
                <div
                  className="mt-3"
                  style={outputStyle}
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
    console.log(this.state.markdown);
  }
}

export default App;
