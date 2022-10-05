import { 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent,
  IonImg, 
  IonButton
} from '@ionic/react';
import './Card.css';
import { RemoveInterface } from '../utils/interfaces';
import { ShoeType } from '../utils/types';

interface Props {
  shoe: ShoeType
  remove: RemoveInterface
}

const Card: React.FC<Props> = ({ shoe, remove }) => {
  return (
    <IonCard className="shoe">
      <IonCardHeader>
        <IonCardSubtitle>{shoe.brand}</IonCardSubtitle>
        <IonCardTitle>{shoe.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonImg src={shoe.image.webpath} />
        <IonButton className="remove" color="danger" onClick={() => remove(shoe.id)}>Remove</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
