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
import HeaderBar from './Header'

export const Tab4: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
      <IonPage>
          <IonHeader>
            <HeaderBar/>
          </IonHeader>
      <IonContent>
          <IonList>
        <IonGrid>
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            <IonRow>
                <IonCol >
                    <IonItemDivider>input1</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input2</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol >
                    <IonItemDivider>input3</IonItemDivider>
                    <IonItem>
                        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow> 
            
        </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Tab4;