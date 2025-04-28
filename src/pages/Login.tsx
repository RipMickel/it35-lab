import { 
  IonAlert,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { logInOutline } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true); 
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };
  
  return (
    <IonPage>
      <IonContent className='ion-padding' fullscreen>
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
        <img 
src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXE2bmlkZjM3cTR6c2Q1cjFsa2ZpaXowYmZtN2lpMGE1aHNudTY0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AD9YKaY2vxTXO/giphy.gif" 
alt="Login Animation" 
style={{ 
  width: '80px', 
  height: '80px', 
  borderRadius: '50%',  // Makes it circular
  objectFit: 'cover',   // Ensures it fits within the circle
  border: '2px solid #555' // Optional border for aesthetics
}} 
/>

          <h2>Login</h2>
          <IonInput
            placeholder="Email"
            type="email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            fill="outline"
            style={{ marginBottom: '10px' }}
          />
          <IonInput
            placeholder="Password"
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            fill="outline"
          />
          <IonButton onClick={doLogin} expand="block" style={{ marginTop: '15px' }}>
            Login
          </IonButton>
          <IonButton routerLink="/it35-lab/register" expand="block" fill="clear">
            Register
          </IonButton>
        </div>
        
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message={alertMessage}
          buttons={['OK']}
        />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
