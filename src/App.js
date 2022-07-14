import {useState} from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Admin'
// import Testing from './components/Testing'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  // const [testing, setTesting] = useState(true)

  const setAuth = (bool) => {
    setAuthenticated(bool)
  }

  
  // return (
  //   <>
  //     <Testing />
  //   </>
  // )

  return (
    <div className="App">
      <Router>
        <h1>Test application</h1>
        <Switch>
        <Route
              exact
              path="/login"
              render={props =>
                !authenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admin" />
                )
              }
            />
            <Route 
                exact
                path="/register"
                render={(props) => !authenticated ? (
                  <Register {...props} setAuth={setAuth}/>
                ) : (
                  <Redirect to="/login" setAuth={setAuth}/>
                )
              }
            />
          <Route exact path='/admin' render={props => authenticated ? (
              <Admin {...props} setAuth={setAuth}/>
            ) : (
              <Redirect to="/login" setAuth={setAuth}/>
            )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
