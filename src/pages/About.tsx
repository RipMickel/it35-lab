import { 
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { personCircleOutline, codeSlashOutline, mailOutline, logoGithub, logoLinkedin } from 'ionicons/icons';
  
  const About: React.FC = () => {
    return (
      <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>About Me</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">
                {/* Profile Section */}
                <IonCard>
                    <IonCardHeader className="ion-text-center">
                        <IonIcon icon={personCircleOutline} style={{ fontSize: '80px', color: '#3880ff' }} />
                        <IonCardTitle>RipMickel</IonCardTitle>
                        <p>Wanna be App Developer</p>
                    </IonCardHeader>
                    <IonCardContent>
                    Passionate about building efficient and scalable applications.  
                        Always exploring new technologies and frameworks.  
                        Currently studying **Ionic Framework** to enhance cross-platform development skills.
                  
                    </IonCardContent>
                </IonCard>

                {/* Skills Section */}
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            <IonIcon icon={codeSlashOutline} slot="start" style={{ marginRight: '8px' }} />
                            Skills & Technologies
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        ⚡ JavaScript | TypeScript | Python | Java <br />
                        ⚡ React | Ionic |  | Node.js <br />
                        ⚡  | PhP | MySQL <br />
                    </IonCardContent>
                </IonCard>

                {/* Contact Section */}
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            <IonIcon icon={mailOutline} slot="start" style={{ marginRight: '8px' }} />
                            Contact Me
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        📧 Email: gaudicosmickelangelo@gmail.com <br />
                        <IonIcon icon={logoGithub} style={{ marginRight: '8px' }} />
                        <a href="https://github.com/RipMickel" target="_blank" rel="noopener noreferrer">GitHub</a> <br />
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
  };
  
  export default About;