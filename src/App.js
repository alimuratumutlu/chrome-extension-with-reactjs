import React, { Component } from "react";

import GridLayout from "react-grid-layout";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import "./App.css";
let width = window.innerWidth;

class App extends Component {
  state = {
    widgets: [
      {
        id: "1",
        layout: {
          x: 0,
          y: 0,
          w: 9,
          h: 3,
          minW: 4,
          maxW: 12
        }
      },
      {
        id: "2",
        layout: {
          x: 9,
          y: 0,
          w: 3,
          h: 9,
          minW: 3,
          maxW: 12
        }
      },
      {
        id: "3",
        layout: {
          x: 0,
          y: 7,
          w: 3,
          h: 11,
          minW: 3,
          maxW: 12
        },
        draggableHandle: ".dragMe"
      }
    ],
    oldWidgets: [],
    edit: true
  };

  handleEditStart = () => {
    this.setState(state => ({
      edit: true,
      oldWidgets: state.widgets
    }));
  };

  handleEditDone = () => {
    this.setState(state => ({
      edit: false
    }));
  };

  handleEditCancel = () => {
    this.setState(state => ({
      edit: false,
      widgets: state.oldWidgets
    }));
  };

  handleLayoutChange = layouts => {
    // TODO : Navbarda çalışma alanım yanında kaydedildi butonu çıkıp kaybolacak

    this.setState(state => {
      return {
        widgets: layouts.map(layout => {
          return {
            ...state.widgets.find(widget => widget.id === layout.i),
            layout: {
              x: layout.x,
              y: layout.y,
              w: layout.w,
              h: layout.h
            }
          };
        })
      };
    });
  };

  render() {
    const { widgets, edit } = this.state;

    const styles = {
      locationInfo: {
        fontSize: 10
      }
    };

    let location = widgets.map(widget => (
      <div
        key={widget.id}
        className="alert alert-primary"
        role="alert"
        style={styles.locationInfo}
      >
        <strong>Widget {widget.id} : </strong>X Konumu {widget.layout.x} / Y
        Konumu {widget.layout.y} / Yüksekliği {widget.layout.h} / Genişliği{" "}
        {widget.layout.w}
      </div>
    ));

    const layouts = {
      md: widgets.map(widget => {
        return {
          i: widget.id,
          ...widget.layout
        };
      })
    };

    return (
      <div className="App">
        <div className="wrapper d-flex align-items-stretch">
          <nav id="sidebar">
            <div className="custom-menu">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-primary"
              >
                <i className="fa fa-bars"></i>
                <span className="sr-only">Toggle Menu</span>
              </button>
            </div>
            <div className="p-4 pt-5">
              <h1>
                <a href="index.html" className="logo">
                  MuradJS
                </a>
              </h1>
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
                      <a href="#">Home 1</a>
                    </li>
                    <li>
                      <a href="#">Home 2</a>
                    </li>
                    <li>
                      <a href="#">Home 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">About</a>
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
                      <a href="#">Page 1</a>
                    </li>
                    <li>
                      <a href="#">Page 2</a>
                    </li>
                    <li>
                      <a href="#">Page 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="mb-5">
                <h3 className="h6">Subscribe for newsletter</h3>
                <form action="#" className="colorlib-subscribe-form">
                  <div className="form-group d-flex">
                    <div className="icon">
                      <span className="icon-paper-plane"></span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </form>
              </div>
              <div className="footer">
                <p>
                  Copyright &copy;
                  <script type="ceb84aea9338b5d89061f518-text/javascript">
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  All rights reserved | This template is made with{" "}
                  <i className="icon-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib.com
                  </a>
                </p>
              </div>
            </div>
          </nav>

          <div id="content" className="p-4 p-md-5 pt-5">
            <div className="card-columns">
              <GridLayout
                layouts={layouts}
                onLayoutChange={this.handleLayoutChange}
                isDraggable={edit}
                isResizable={edit}
                autoSize={edit}
                width={width}
                cols={12}
                rowHeight={30}
                draggableCancel="input,textarea,checkbox"
              >
                <div
                  key={this.state.widgets[0].id}
                  data-grid={this.state.widgets[0].layout}
                  style={{ overflow: "auto" }}
                  className="scrollbar-thin"
                >
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
                </div>

                <div
                  key={this.state.widgets[1].id}
                  data-grid={this.state.widgets[1].layout}
                >
                  <div className="card p-3">
                    <blockquote className="blockquote mb-0 card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Someone famous in{" "}
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                  {location}
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://source.unsplash.com/random"
                      alt="Card  cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  key={this.state.widgets[2].id}
                  data-grid={this.state.widgets[2].layout}
                  style={{ overflow: "hidden" }}
                  className="scrollbar-thin"
                >
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
                </div>
              </GridLayout>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
