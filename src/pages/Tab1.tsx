import { IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>REINA TEST 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">REINA TEST1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="REINA TEST TITLE" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
