import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Tab1: React.FC = () =>
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!username) {
      setUsernameError(true);
    }
    if(!password) {
      setPasswordError(true);
    }

    if(username && password) {
      history.push('/tabs', {direction: 'none'});
    }
  };
  return (
    <IonPage id="login-page">
      <IonHeader id="login-page-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        {/* <div className="login-logo">
          <img src="../assets/img/appicon.svg" alt="Ionic logo" />
        </div> */}
      <form noValidate onSubmit={login} >
          <IonList id="page-form-login">
            <IonItem  className="input-style">
              <IonInput
                name="username"
                type="text"
                value={username}
                spellCheck={false}
                autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)}
                placeholder="Username"
                inputMode="text"
                required>
                </IonInput>
              </IonItem>
              {formSubmitted && usernameError && <IonText color="danger">
                <p className="ion-padding-start">
                  Username is required
                </p>
              </IonText>}

              <IonItem>
                {/* <IonLabel position="stacked" color="primary">Password</IonLabel> */}
              <IonInput name="password" type="password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
                placeholder="Password"
              >
                </IonInput>
              </IonItem>

              {formSubmitted && passwordError && <IonText color="danger">
                <p className="ion-padding-start">
                  Password is required
                </p>
                </IonText>}
          </IonList>
          <IonRow className="butom-style">
            <IonButton type="submit" expand="block" id="submit-style">Login</IonButton>
            <IonButton routerLink="/signup" color="light" expand="block">Signup</IonButton>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
