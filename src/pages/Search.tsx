import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonSearchbar, 
  IonButton, 
  IonIcon
} from '@ionic/react';
import './Search.css';
import { useEffect, useRef, useState } from 'react';
import { search } from 'ionicons/icons';
import Results from '../components/Results';
import { ShoeType } from '../utils/types';

interface Props{
  shoes: Array<ShoeType>;
}

const Search: React.FC<Props> = ({ shoes }) => {
  // States
  const [results, setResults] = useState<Array<ShoeType>>([...shoes]);
  const [query, setQuery] = useState<string>('');
  const [caption, setCaption] = useState<string>('Showing all your kix');
  // Refs
  const queryRef = useRef<any>();

  // Effects
  // Update results everytime search changes
  useEffect(() => {
    if(query !== ''){
      let matches: Array<ShoeType> = [];
      shoes.forEach(function (shoe) {
        if(shoe.brand.includes(query) || shoe.name.includes(query)){
          matches = [{id: shoe.id, brand: shoe.brand, name: shoe.name, image: shoe.image}, ...matches];
        }
      });


      setResults(matches);

      if(matches.length === 0){
        setCaption('No search results for "' + query + '"');
      }
      else setCaption(matches.length+' search result' + (matches.length === 1 ? '' : 's') + ' for "' + query + '"');
    }
  }, [shoes, query]);

  // Get query value from input
  function getQuery(){
    const input = queryRef.current?.value.trim();
    if(input === undefined) return '';
    return input;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Search</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="search">
            <IonSearchbar ref={queryRef}></IonSearchbar>
            <IonButton size="small" onClick={() => {setQuery(getQuery())}}>
              <IonIcon icon={search} />
            </IonButton>
          </div>
          <h3>{caption}</h3>
          <Results shoes={results} remove={undefined} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;