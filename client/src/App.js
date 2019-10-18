import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "./components/styles";
import ErrorBoundary from "./ErrorBoundary";
import Slide from "./components/Slide";
import Submit from "./components/Submit";

export const AppContext = React.createContext({}); // Creation of the context

class App extends React.Component {
  state = {
    survey: null,
    data: [],
    error: "",
  };
  componentDidMount() {
    fetch("/api/questionnaire")
      .then(responsePromise => responsePromise.json())
      .then(response => {
        const survey = Object.keys(response)
          .map(key => {
            response[key].name = key;
            return response[key];
          })
          .sort((a, b) => a.position < b.position);
        this.setState({
          survey,
        });
      })
      .catch(err => {
        this.setState({ err: err });
      });
    console.log("data", this.state.data);
  }
  setData = (newData, index) => {
    console.log("ND", newData);
    const { data } = this.state;
    const newState = [...data];
    newState[index] = newData;
    this.setState({ data: newState });
  };
  render() {
    const { survey } = this.state;
    return (
      <ErrorBoundary>
        {survey ? (
          <Container>
            {/* Context Provider (All children have access to this context) */}
            <AppContext.Provider
              value={{ ...this.state.data, setData: this.setData }}
            >
              <BrowserRouter>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Slide survey={survey} />}
                  />
                  <Route
                    exact
                    path="/submit"
                    render={() => <Submit survey={survey} />}
                  />
                </Switch>
              </BrowserRouter>
            </AppContext.Provider>
          </Container>
        ) : (
          <div>Loading...</div>
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
