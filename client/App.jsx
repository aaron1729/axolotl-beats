import React, { useState, useContext } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './components/LoginPage.jsx';
import PlaylistPage from './components/PlaylistPage.jsx';
import EmbeddedPlayer from './components/EmbeddedPlayer.jsx';
import { AuthProvider, useAuth } from './components/AuthContext.jsx';
import Nav from './components/Nav.jsx';

import './stylesheets/styles.scss';
import './stylesheets/app.css';

// make App stateful -> class component
// define a handler that updates state (setState)
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       playlistId: 'Initial value',
//     };
//     // bind handler this component
//     this.updatePlaylistId = this.updatePlaylistId.bind(this);
//   }

// should this be tied in with a lifecycle method?
// define handler for playlistFormSubmit that will get passed down to PlaylistForm component
// this needs to be passed down to PlaylistPage then to PlaylistForm
// updatePlaylistId(id) {
//   console.log('argument id is:', id);
//   // should update state to set playlistId to the one returned from the form
//   this.setState({ playlistId: id });
//   // re-render?
//   console.log('this.state.playlistId is: ', this.state.playlistId);
// }

// render() {
//   console.log('this.state in render', this.state.playlistId);

function App() {
  const [playlistId, setplaylistId] = useState('Initial value');
  // AMG (wed. 5pm): could also include as state a 'custom_parameter_names' array, e.g. ['danciness', 'speechiness']. then, update the function definition remixBreakpointsAndSegmentDataIntoAnArrForServer to be a little cleaner.

  const [breakpointsArr, setbreakpointsArr] = useState([
    {
      minute: 0, // the starting breakpoint-object will ALWAYS have its minute-value equal to 0, and the user cannot change this
      bpm: 60,
      custom_params: { danciness: 0.5, speechiness: 0.5 },
    },
    {
      minute: 45,
      bpm: 120,
      custom_params: { danciness: 0.8, speechiness: 0.6 },
    },
    {
      minute: 80,
      bpm: 130,
      custom_params: { danciness: 0.9, speechiness: 0.7 },
    },
    {
      minute: 95,
      bpm: 150,
      custom_params: { danciness: 1, speechiness: 1 },
    },
  ]);

  const [segmentsArr, setSegmentsArr] = useState([
    {
      genres: ['rock', 'dance', 'funk'],
    },
    {
      genres: ['metal'],
    },
    {
      genres: ['metal', 'classical'],
    },
  ]);

  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  return (
    <Router>
      <AuthProvider>
        <div id='app'>
          <Nav />
          <div id='title'>
            <div id='name'>Axolotl Beats</div>
            <div id='slogan'>beats forEach</div>
          </div>
          <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route
              path='/player'
              element={<EmbeddedPlayer playlistId={playlistId} />}
            ></Route>
            <Route
              path='/playlistform'
              element={
                <PlaylistPage
                  setplaylistId={setplaylistId}
                  loading={loading}
                  setLoading={setLoading}
                  breakpointsArr={breakpointsArr}
                  setbreakpointsArr={setbreakpointsArr}
                  segmentsArr={segmentsArr}
                  setSegmentsArr={setSegmentsArr}
                />
              }
            ></Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
