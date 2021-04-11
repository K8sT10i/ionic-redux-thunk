import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonHeader,
  IonContent
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, reorderFourOutline, key } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import MenuBar from './pages/MenuBar';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import HeaderMenu from './pages/Header'
import { IonModal } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonContent>
      <HeaderMenu/>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* <Route path="/edit-tea-category/:id" render={() => isLoggedIn ? <EditTeaCategory /> : <Redirect to="/login" />} /> */}
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
          <Route path="/tabs" render={() => <Tab2/>} />
          <Route path="/login" render={() => <Tab1/>} />
        </IonRouterOutlet>
         </IonReactRouter>
   </IonContent>
  </IonApp>
);

export default App;
