import React, { Component } from "react";
import { Box, Avatar, IconButton, SegmentedControl } from "gestalt";
import "gestalt/dist/gestalt.css";

import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange({ activeIndex }) {
    this.setState(prevState => ({ itemIndex: activeIndex }));
  }

  render() {
    const items = [
      "Affiliate Marketing",
      "Adsense",
      "DevOps",
      "Front End Development",
      "Machine Learning"
    ];

    return (
      <div className="App">
        <div className="wrapper d-flex align-items-stretch">
          <Navbar />
          <div id="content" className="p-4 p-md-5">
            <SegmentedControl
              items={items}
              selectedItemIndex={this.state.itemIndex}
              onChange={this.handleItemChange}
            />
            <div className="card-columns pt-5">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://source.unsplash.com/random"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Card title that wraps to a new line
                  </h4>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>

              <div className="card bg-primary text-white text-center p-3">
                <blockquote className="blockquote mb-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat.
                  </p>
                  <footer className="blockquote-footer">
                    <small>
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src="https://source.unsplash.com/random"
                  alt="Card  cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <Box
                      alignItems="center"
                      direction="row"
                      display="flex"
                      marginStart={-1}
                      marginEnd={-1}
                    >
                      <Box paddingX={1}>
                        <Avatar name="chrislloyd" size="md" />
                      </Box>
                      <Box paddingX={1} flex="grow"></Box>
                      <Box paddingX={1}>
                        <IconButton
                          accessibilityLabel="Love"
                          bgColor="transparentDarkGray"
                          icon="heart"
                          iconColor="white"
                          onClick={() => {
                            console.log("❤️");
                          }}
                        />
                      </Box>
                    </Box>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
