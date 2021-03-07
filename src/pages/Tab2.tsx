import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import { IonButton } from '@ionic/react';
import React, { useState } from 'react';
import {
  useDispatch,
} from 'react-redux'
import { useTypedSelector } from '../reducers/rootReducer'
import { thunkAddColor } from '../actions/thunk'
import { Color } from '../actions/types';

const Tab2: React.FC = () =>{
  const colors = useTypedSelector(state => state.colors);
  const [text, setText] = useState<string>();
  const dispatch = useDispatch();

  function newColor() {
    const colorToAdd = text || '';
    if (colorToAdd === '') return
    dispatch(thunkAddColor(colorToAdd))
    setText('')
  }
  return (
     <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cavavin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cavavin</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          {
            colors.map((color: Color, index: number) =>
              <p key={index}>
                {color.color}
              </p>
            )
          }
        </div>
        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
        <IonButton onClick={newColor}>Add</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
