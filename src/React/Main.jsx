import React from'react';
import { Switch, Route } from 'react-router-dom'

/* Components---------------------------*/
import welcome from './Pages/Welcome/Welcome.jsx';
import taplist from './Pages/Tap List/TapList.jsx';
import vendors from './Pages/Vendors.jsx';
import whatson from './Pages/WhatsOn/WhatsOn.jsx';
import contact from './Pages/Contact/Contact.jsx';



const Main = () => {
return (
    <main>
        <Switch>
            <Route path= '/taplist' component={ taplist } />
            <Route path= '/vendors' component={ vendors } />
            <Route path= '/whatson' component={ whatson } />
            <Route path= '/contact' component={ contact } />
            <Route path= '/' component={ welcome } />


        </Switch>
    </main>
)
}

export default Main;
