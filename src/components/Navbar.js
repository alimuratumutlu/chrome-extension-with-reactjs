import React, { Component } from "react";
import { Box, Card, Avatar, Link, Button, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="custom-menu">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary"
          >
            <i className="fa fa-home "></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        <div className="p-4 pt-5">
          <Box maxWidth={236} padding={2} column={12}>
            <Card
              image={
                <Avatar name="James Jones" src="https://i.pravatar.cc/300" />
              }
            >
              <Text align="center" size="xl" weight="bold">
                <Link href="https://pinterest.com">
                  <Box paddingX={3} paddingY={2}>
                    James Jones
                  </Box>
                </Link>
              </Text>
              <Button
                accessibilityLabel="Follow James Jones"
                color="red"
                text="Follow"
              />
            </Card>
          </Box>

          <ul className="list-unstyled components mb-5">
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Home
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="/">Home 1</a>
                </li>
                <li>
                  <a href="/">Home 2</a>
                </li>
                <li>
                  <a href="/">Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Pages
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="/ ">Page 1</a>
                </li>
                <li>
                  <a href="/">Page 2</a>
                </li>
                <li>
                  <a href="/">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>

          <div className="footer">
            <p>
              <Text align="justify">
                Copyright &copy; All rights reserved | This template is made
                with
              </Text>
              <i className="icon-heart" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </nav>
    );
  }
}
