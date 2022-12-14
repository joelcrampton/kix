import { 
  IonButton, 
  IonContent, 
  IonHeader, 
  IonImg, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonInput,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './Post.css';
import { camera } from 'ionicons/icons';

import {Camera, CameraResultType} from '@capacitor/camera';
import { useRef, useState } from 'react';
import { PostInterface } from '../utils/interfaces';
import { ImageType } from '../utils/types';

interface Props{
  post: PostInterface
}

const Post: React.FC<Props> = ({ post }) => {
  // States
  const [image, setImage] = useState<ImageType>();
  const [success, setSuccess] = useState<boolean>(false);

  // Refs
  const brandRef = useRef<any>();
  const nameRef = useRef<any>();

  // Dynamic components
  // Take
  const take = (
    <IonButton className="take" onClick={() => takePhoto()}>
      <IonIcon icon={camera} />
    </IonButton>
  );
  // Img
  const img = ( <IonImg src={image?.webpath} onClick={() => takePhoto()} /> );
  // Notification
  const notification = (
    <IonRow>
      <IonCol className="success">
        Your kix have been posted!
        <IonButton color="success" onClick={() => close()}>Close</IonButton>
      </IonCol>
    </IonRow>
  );

  // Take photo
  async function takePhoto(){
    const photo = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    
    const filename = getName().toLowerCase()+'.'+photo.format;
    const webpath = photo.webPath;
    if(webpath !== undefined){
      setImage({filename: filename, webpath: webpath}); // Set image to URI
    }
  }

  // Get brand value from input
  function getBrand(){
    const brand = brandRef.current?.value.trim().toLowerCase();
    if(brand === undefined) return '';
    return brand;
  }

  // Get name value from input
  function getName(){
    const name = nameRef.current?.value.trim().toLowerCase();
    if(name === undefined) return '';
    return name;
  }

  // Check post for correct fields
  function check(){
    const brand = getBrand();
    const name = getName();

    if(brand !== '' && name !== '' && image !== undefined){
      post(brand, name, image);
      brandRef.current.value = '';
      nameRef.current.value = '';
      setImage(undefined);
      setSuccess(true);
    }
  }

  function close(){
    setSuccess(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Post</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid className="post">
            <IonRow>
              <IonCol>
                {image === undefined ? take : img}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput ref={brandRef} placeholder="Brand" clearInput></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput ref={nameRef} placeholder="Name" clearInput></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton color="dark" onClick={() => check()}>Post</IonButton>  
              </IonCol>
            </IonRow>
            {success ? notification : null}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Post;
