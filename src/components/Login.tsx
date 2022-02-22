import React from 'react';
import {
    IonItem,
    IonButton,
    IonContent,
    IonPage,
    IonInput} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


interface ContainerProps {
  name: string;
  password: string;
}

const LoginPage: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (e: any) => {
      e.preventDefault();
      if (name && password) {
        if (name === "admin" && password === "admin") {
          console.log("you're login");
        }
        /** reset input value */
        setName("");
        setPassword("");
      }
      window.location.href = "/tab3";
    };

    return (
      <IonPage>
        <IonContent className="ion-padding ion-text-center">
          <h1 className="main-title">APP LOGIN</h1>
          <form onSubmit={handleLogin}>
            <IonItem color="dark" fill="solid" className="ion-margin-vertical">
              <IonInput
                value={name}
                placeholder="Username"
                onIonChange={(e) => setName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem color="dark" fill="solid" className="ion-margin-vertical">
              <IonInput
                value={password}
                type="password"
                placeholder="Password"
                size={32}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
  
            <IonButton
              type="submit"
              expand="block"
              fill="solid"
              color="dark"
              size="large"
              className="ion-margin-vertical ion-text-capitalize"
            >
              Login
            </IonButton>
            <IonButton
              type="button"
              fill="clear"
              expand="block"
              color="dark"
              size="large"
              className="ion-margin-vertical ion-text-capitalize"
              href="/tab2"
            >
              Sign Up
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    );
  };

  export default LoginPage;

