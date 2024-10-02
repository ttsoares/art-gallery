import { IonContent, IonItem, IonPage } from "@ionic/react";

import Desktop from "../components/Desktop";
import Tablet from "../components/Tablet";
import Mobile from "../components/Mobile";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="hidden lg:block">
          <Desktop />
        </div>
        <div className="hidden md:block lg:hidden">
          <Tablet />
        </div>
        <div className="md:hidden">
          <Mobile />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
