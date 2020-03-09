import React, { useEffect, useState } from "react";

// Component Import
import Card from "../../components/Card";
import Header from "../../components/Header";

// Pinterest Gestalt import
import { Box, Avatar, IconButton } from "gestalt";

const Home = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const handleItemChange = ({ activeIndex }) => {
    setItemIndex(prevState => ({ itemIndex: activeIndex }));
  };

  useEffect(() => {
    console.log(window.location.hostname);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="wrapper d-flex align-items-stretch">
        <div id="content" className="p-4 p-md-5">
          <div className="card-columns pt-5">
            <Card
              title="Card title that wraps to a new line"
              excerpt="This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer."
            />
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
};

export default Home;
