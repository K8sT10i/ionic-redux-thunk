import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import{
  IonGrid, IonRow, IonCol,
  IonTabBar,
  IonTabButton,
    IonTabs,
    IonIcon
} from '@ionic/react';
import { ellipse, square, triangle, reorderFourOutline, key } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

const HeaderMenu: React.FC = () =>
{
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    <IonGrid>
                        <IonRow>
                            <IonCol  className="ion-float-start ion-align-self-start">
                                <IonTabButton tab="tab1" href="/home">
                                    <IonIcon icon={reorderFourOutline} />
                                    <IonLabel>Home</IonLabel>
                                </IonTabButton>
                               
                            </IonCol>
                            <IonCol className="ion-align-self-end">
                                 <IonTabButton tab="tab2" href="/hello">
                                    <IonIcon icon={reorderFourOutline} />
                                    <IonLabel>Account</IonLabel>
                                </IonTabButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};
export default HeaderMenu;