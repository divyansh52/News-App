import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={6}
              country="in"
              category="general"
              color="primary"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={6}
              country="in"
              category="business"
              color="secondary"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={6}
              country="in"
              category="entertainment"
              color="warning"
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={6}
              country="in"
              category="general"
              color="primary"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={6}
              country="in"
              category="health"
              color="danger"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={6}
              country="in"
              category="science"
              color="success"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={6}
              country="in"
              category="sports"
              color="secondary"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={6}
              country="in"
              category="technology"
              color="info"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
