import { 
  IonAvatar,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonImg, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonSearchbar, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Search: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonSearchbar placeholder="Search"></IonSearchbar>
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Roronoa Zoro</h2>
                  <p>Chief executive of Sword Industry</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Monkey D. Luffy</h2>
                  <p>Chief of Strawhats</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Shanks</h2>
                  <p>Chief of Redhair</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Gol D Roger</h2>
                  <p>CEO of Laughtale</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Search;