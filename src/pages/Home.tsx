import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Results from '../components/Results';
import { ShoeType } from '../utils/types';

interface Props {
  shoes: Array<ShoeType>;
  remove: any
}

const Home: React.FC<Props> = ({ shoes, remove }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kix</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Kix</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Results shoes={shoes} remove={remove} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
