import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { ProfileManager } from './pages/ProfileManager';

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home} />  
            <Route path="/profile-manager" exact component={ProfileManager} /> 
         </Switch>
      </BrowserRouter>
   );
}

export default App;
