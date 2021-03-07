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
      <IonReactRouter>
        <IonTabs>
        <IonRouterOutlet ionPage={true}>
          <Route exact path="/home" component={Tab1}>
          </Route>
          <Route exact path="/hello" component={Tab2}>
          </Route>
          <Route path="/wold" component={Tab4}>
          </Route>
          <Route exact path="/" render={() => <Redirect to="/wold" />}>
          </Route>
          </IonRouterOutlet>
      <IonTabBar slot="top">
            <IonTabButton tab="tab1" href="/home">
              <IonIcon icon={reorderFourOutline}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/hello">
              <IonIcon icon={ellipse} />
              <IonLabel>Hello</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Tab4" href="/wold">
              <IonIcon icon={square} />
              <IonLabel>Wold</IonLabel>
          </IonTabButton>
        </IonTabBar>
        </IonTabs>
         </IonReactRouter>
   </IonContent>
  </IonApp>
);

export default App;
