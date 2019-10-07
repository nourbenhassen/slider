import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ErrorBoundary from "./ErrorBoundary"
import Slide from "./components/Slide"
import Submit from "./components/Submit"

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
      { data ? 
    
              <BrowserRouter>
                <div className="container">
    
                <Route
                    exact path='/'
                    render={() => ( <Slide survey={data} /> )}
                 /> 
                 <Route
                    exact path='/submit'
                    render={() => ( <Submit survey={data} /> )}
                 />  
                </div>
              </BrowserRouter> 
    
      :<div>Loading...</div>
      }
      </ErrorBoundary>

    );
  }
}

export default App;