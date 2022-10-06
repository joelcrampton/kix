import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import './App.css';
import { IonReactRouter } from '@ionic/react-router';
import { camera, home, person, search } from 'ionicons/icons';
import Home from './pages/Home';
import Search from './pages/Search';
import Post from './pages/Post';
import Profile from './pages/Profile';
import { useEffect, useState } from 'react';
import { ImageType, ShoeType } from './utils/types';
import { v4 as uuidv4 } from 'uuid';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  // States
  const [shoes, setShoes] = useState<Array<ShoeType>>([
    {
      id: uuidv4(), 
      brand: 'jordan', 
      name: 'jordan 1 chicago', 
      image: {
        filename: 'jordan-1-chicago.png', 
        webpath: 'https://blog.klekt.com/wp-content/uploads/2020/05/Air-Jordan-1-Chicago-On-Foot.jpg.webp'
      }
    },
    {
      id: uuidv4(), 
      brand: 'jordan', 
      name: 'jordan 4 military black', 
      image: {
        filename: 'jordan-4-military-black.png', 
        webpath: 'https://cdn.sanity.io/images/c1chvb1i/production/fc764a161902f06207a15a16dfbab6775ed00f07-1100x735.jpg'
      }
    },
    {
      id: uuidv4(), 
      brand: 'adidas', 
      name: 'yeezy 350 turtle dove', 
      image: {
        filename: 'yeezy-350-turtle-dove.png', 
        webpath: 'https://sneakernews.com/wp-content/uploads/2016/02/yeezy-boost-50-turtle-dove-2016-release.jpg?w=780&h=550&crop=1'
      }
    },  
    {
      id: uuidv4(), 
      brand: 'nike', 
      name: 'air max 1 patta noise aqua', 
      image: {
        filename: 'air-max-1-patta-noise-aqua.png', 
        webpath: 'https://cdn.sanity.io/images/c1chvb1i/production/e0ee61c9c41e5b93f08ef527aa86625a71224671-1100x735.jpg/Air-Max-1-.jpg?fm=webp'
      }
    }
  ]);
  const [results, setResults] = useState<Array<ShoeType>>([...shoes]);

  // Effects
  useEffect(() => {}, [shoes]);

  // Post shoe
  function post(brand: string, name: string, image: ImageType){
    setShoes([{id: uuidv4(), brand: brand, name: name, image: image}, ...shoes]);
  };

  // Remove from shoes and results
  function remove(id: string){
    removeShoes(id);
    removeResults(id);
  }
  // Remove shoe
  function removeShoes(id: string){
    const copy = [...shoes];
    const index = copy.findIndex(shoe => shoe.id === id);
    copy.splice(index, 1);
    setShoes(copy);
  }
  // Remove results
  function removeResults(id: string){
    const copy = [...results];
    const index = copy.findIndex(shoe => shoe.id === id);
    copy.splice(index, 1);
    setResults(copy);
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home shoes={shoes} remove={remove} />
            </Route>
            <Route path="/search">
              <Search shoes={shoes} results={results} setResults={setResults} />
            </Route>
            <Route exact path="/post">
              <Post post={post}/>
            </Route>
            <Route path="/profile">
              <Profile shoes={shoes} />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
            </IonTabButton>
            <IonTabButton tab="post" href="/post">
              <IonIcon icon={camera} />
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
