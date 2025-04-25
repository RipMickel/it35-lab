import {  
  IonAlert,
  IonButton,
  IonContent, 
  IonInput, 
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import './Login.css'; // Import the CSS file

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Apply background on the Login page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      ion-content {
        --background: transparent;
        background-image: url('https://cdn.dribbble.com/userupload/42197344/file/original-ca38e602be31110c65910ab190294b99.gif');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    `;
    document.head.appendChild(style);

    // Cleanup: Remove the style when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
        <div className="login-container">
          <div className="login-card">
            <img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmp1Z3lvY2ZzNXF2bTRkOWZsbHU1ODN3d3E0bHVydGF1aG1pcnoyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13twUEuUnCrEju/giphy.gif" 
              alt="Login Animation" 
              className="login-icon"
            />
            <h2>Login</h2>
            <IonInput
              placeholder="Email"
              type="email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
              fill="outline"
              className="input-field"
            />
            <IonInput
              placeholder="Password"
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              fill="outline"
              className="input-field"
            />
            <IonButton onClick={doLogin} expand="block" className="login-button">
              Login
            </IonButton>
            <IonButton routerLink="/it35-lab/register" expand="block" fill="clear" className="login-register-button">
              Register
            </IonButton>
          </div>
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
