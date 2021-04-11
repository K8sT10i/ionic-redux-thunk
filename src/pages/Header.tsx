import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonMenu } from '@ionic/react';
import{
  IonGrid, IonRow, IonCol,
  IonTabBar,
  IonTabButton,
    IonTabs,
    IonIcon
} from '@ionic/react';
import { ellipse, square, triangle, reorderFourOutline, key } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import './menu.css';
import { useHistory } from 'react-router';

const HeaderMenu: React.FC = () =>
{
    const history = useHistory();
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    <IonGrid>
                        <IonRow>
                            <IonCol  className="ion-float-start ion-align-self-start">
                                <IonTabButton tab="tab1" className="icon-menu-left" href="/">
                                    <IonIcon icon={reorderFourOutline} />
                                </IonTabButton>
                                <IonLabel>HomePage</IonLabel>
                            </IonCol>
                            <IonCol  className="ion-float-start ion-align-self-start">
                                <IonTabButton tab="tab1" href="/tabs">
                                    <IonLabel>Home</IonLabel>
                                </IonTabButton>
                               
                            </IonCol>
                            <IonCol >
                                <IonLabel className="icon-menu-right">Logout</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};
export default HeaderMenu;