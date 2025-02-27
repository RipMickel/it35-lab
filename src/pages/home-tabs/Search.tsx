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
                  <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2e676wQCGEng55n2qIqB4J-CCKmavFDVeA&s" />
                </IonAvatar>
                <IonLabel>
                  <h2>Roronoa Zoro</h2>
                  <p>Chief executive of Sword Industry</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://i1.sndcdn.com/avatars-UidYWfW20bjki8Ub-GJKpBQ-t1080x1080.jpg" />
                </IonAvatar>
                <IonLabel>
                  <h2>Monkey D. Luffy</h2>
                  <p>Chief of Strawhats</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="data:image/jpeg;base64,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" />
                </IonAvatar>
                <IonLabel>
                  <h2>Shanks Figarland</h2>
                  <p>Chief of Redhair</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <IonImg src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/roger-optc-1.jpg" />
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