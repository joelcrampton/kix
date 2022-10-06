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
import { ShoeType } from '../utils/types';

interface Props {
  shoe: ShoeType
  remove: any
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
        {remove !== undefined ? <IonButton className="remove" color="danger" onClick={() => remove(shoe.id)}>Remove</IonButton> : null }
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
