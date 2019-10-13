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
    data: {
      status: null,
      age: null,
      salaire: null,
    },
  };
  // useEffect can be used instead of componentDidMount
  componentDidMount() {
    fetch("/api/questionnaire")
      .then(responsePromise => responsePromise.json())
      .then(response => this.setState({ survey: response }))
      .catch(err => {
        console.error(err);
      });
  }
  setData = newData => {
    this.setState({ data: { ...this.state.data, ...newData } });
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
