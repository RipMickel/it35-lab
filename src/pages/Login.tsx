import { 
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonInput, 
      IonItem, 
      IonLabel, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';
import { useState } from 'react';
  
const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
      console.log('Username:', username);
      console.log('Password:', password);
      navigation.push('/it35-lab/app', 'forward', 'replace');
  };
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent 
  fullscreen 
  className="ion-padding" 
  style={{ backgroundColor: '#f4f4f4' }}
>
  <div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      width: '100%',
    }}
  >
    <div 
      style={{
        width: '90%',
        maxWidth: '400px',
        padding: '20px',
        background: 'white',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        textAlign: 'center'
      }}
    >
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Welcome</h2>
      <IonItem style={{ marginBottom: '15px' }}>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput 
          value={username} 
          onIonChange={e => setUsername(e.detail.value!)} 
          clearInput
        />
      </IonItem>
      <IonItem style={{ marginBottom: '15px' }}>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput 
          type="password" 
          value={password} 
          onIonChange={e => setPassword(e.detail.value!)} 
          clearOnEdit
        />
      </IonItem>
      <IonButton 
        onClick={doLogin} 
        expand="full"
        style={{
          marginTop: '15px',
          backgroundColor: '#3880ff',
          borderRadius: '5px'
        }}
      >
        Login
      </IonButton>
    </div>
  </div>
</IonContent>

    </IonPage>
    );
  };
  
  export default Login;