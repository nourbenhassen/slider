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

  let 
  /*
        <ErrorBoundary>
  { data ?

          <BrowserRouter>
            <div className="container">

                  <Route exact path="/" component={Slide} />  
                  <Route exact path="/submit" component={Submit} /> 
            </div>
          </BrowserRouter> 

  :<div>Loading...</div>
  }
  </ErrorBoundary>


                   


  */


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

//render <Slide status> <Slide age> <Slide salary>

//error boundary ==> évite page blanche ou msg d'erreur dégueu - en prod très important (dans la doc de React)