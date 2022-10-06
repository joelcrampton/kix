import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonGrid, 
  IonRow, 
  IonCol 
} from '@ionic/react';
import './Profile.css';
import Card from '../components/Card';
import { person } from 'ionicons/icons';
import { ShoeType } from '../utils/types';

interface Props {
  shoes: Array<ShoeType>;
}
const Profile: React.FC<Props> = ({ shoes }) => {
  let recent = null;
  if(shoes.length > 0){
    recent = (
      <IonRow style={{ marginTop: 20 }}>
        <IonCol>
          <h3 style={{ width: '100%', margin: 0, textAlign: 'left' }}>Most recent pair of kix</h3>
          <Card shoe={shoes[0]} remove={undefined} />
        </IonCol>
      </IonRow>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Profile</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonIcon className="person" icon={person}></IonIcon>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h2 style={{ margin: 0 }}>johnsmith</h2>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h4 style={{ marginTop: 0 }}>Member since 06/10/2022</h4>
              </IonCol>
            </IonRow>
            {recent}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
