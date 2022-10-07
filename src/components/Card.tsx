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
import { toTitleCase } from '../utils/format';
import { ShoeType } from '../utils/types';

interface Props {
  shoe: ShoeType
  remove: any
}

const Card: React.FC<Props> = ({ shoe, remove }) => {
  return (
    <IonCard className="shoe">
      <IonImg src={shoe.image.webpath} />
      <IonCardHeader>
        <IonCardSubtitle>{toTitleCase(shoe.brand)}</IonCardSubtitle>
        <IonCardTitle>{toTitleCase(shoe.name)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {remove !== undefined ? <IonButton className="remove" color="danger" onClick={() => remove(shoe.id)}>Remove</IonButton> : null }
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
