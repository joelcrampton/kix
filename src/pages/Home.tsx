import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Collection from '../components/Collection';
import { RemoveInterface } from '../utils/interfaces';
import { ShoeType } from '../utils/types';

interface Props {
  shoes: Array<ShoeType>;
  remove: RemoveInterface
}

const Home: React.FC<Props> = ({ shoes, remove }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Sneakers</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Collection shoes={shoes} remove={remove} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
