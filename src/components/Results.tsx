import { 
  IonGrid, 
  IonRow, 
  IonCol 
} from '@ionic/react';
import Card from './Card';
import { ShoeType } from '../utils/types';

interface Props {
  shoes: Array<ShoeType>;
  remove: any
}

const Results: React.FC<Props> = ({ shoes, remove }) => {
  const rows =  (
    shoes.map(shoe => {
      return (
      <IonRow key={shoe.id}>
        <IonCol>
          <Card shoe={shoe} remove={remove} />
        </IonCol>
      </IonRow>
      )
    })
  );

  return (
    <IonGrid>
      {rows}
    </IonGrid>
  );
};

export default Results;
