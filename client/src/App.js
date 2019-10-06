import React from 'react';
import ErrorBoundary from "./ErrorBoundary"
import Slide from "./components/Slide"

class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch("/api/questionnaire")
      .then(responsePromise => responsePromise.json())
      .then(response => this.setState({data: response}))
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { data } = this.state
    return (
      <ErrorBoundary>
        {data ?  <Slide survey={data} /> : <div>Loading...</div>}
      </ErrorBoundary>
    );
  }
}

export default App;

//render <Slide status> <Slide age> <Slide salary>

//error boundary ==> évite page blanche ou msg d'erreur dégueu - en prod très important (dans la doc de React)