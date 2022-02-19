import React from 'react';
import {
    IonItem,
    IonButton,
    IonContent,
    IonPage,
    IonInput} from '@ionic/react';
import { useEffect, useState } from 'react';


interface ContainerProps {
  name: string;
  password: string;
}

const Register: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [tel, setTel]= useState<number>();
    const [username, setUsername]= useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("submit");
        window.location.href = "/tab3";
    };

    return (
      <IonPage>
        <IonContent className="ion-padding ion-text-center">
          <h1 className="main-title">FDCP APP REGISTER</h1>
          <form onSubmit={handleSubmit}>
            <IonItem color="dark" fill="solid" className="ion-margin-vertical">
              <IonInput
                value={name}
                placeholder="Name"
                onIonChange={(e) => setName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem color="dark" fill="solid" className="ion-margin-vertical">
              <IonInput
                value={lastname}
                placeholder="Last Name"
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
            <IonItem color="dark" fill="solid" className="ion-margin-vertical">
              <IonInput
                value={username}
                placeholder="Username"
                onIonChange={(e) => setName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem color="dark" fill="solid" className="ion-margin-vertical">
              <IonInput
                value={tel}
                placeholder="Telephone"
                onIonChange={(e) => setName(e.detail.value!)}
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
              Submit
            </IonButton>
          </form>
        </IonContent>
        
      </IonPage>
    );
  };

  export default Register;

