import { IonContent, IonPage } from "@ionic/react";
import BtnFwrd from "./pieces/BtnFwrd";
import TextOne from "./pieces/TextOne";
import TextTree from "./pieces/TextTree";
import TextTwo from "./pieces/TextTwo";
import Footer from "./Footer";

const Tablet = () => {
  return (
    <IonPage className="ion-no-padding">
      <IonContent>
        {/* Hero */}
        <div className="w-full bg-slate-200 relative flex ">
          <div className="w-[437px] h-[700px] top-0 left-0 bg-[url('/assets/images/tablet/image-hero.jpg')] bg-cover bg-center "></div>

          <div className="w-[400px] h-[380px] absolute top-[20%] right-0  flex flex-col">
            <h1 className="text-[70px] text-black font-bsd font-extrabold tracking-wide mb-6">
              <span>MODERN</span> <span>ART GALLERY</span>
            </h1>
            <TextOne />
            <BtnFwrd />
          </div>
        </div>
        {/* Midle */}
        <div className="w-[689px]  m-auto my-20 ">
          <div className="flex  w-full ">
            <div className="w-[43%] h-[400px] flex flex-col justify-center items-center">
              <h1 className="text-[60px] text-black font-bsd font-extrabold w-[70%]">
                <span>YOUR DAY AT</span> <span>THE GALLERY</span>
              </h1>
              <TextTwo />
            </div>
            <div className="w-[57%] bg-[url('/assets/images/tablet/image-grid-1.jpg')]"></div>
          </div>
          <div className="flex w-full mt-20 ">
            <div className="w-[398px] h-[720px] bg-cover bg-center bg-[url('/assets/images/tablet/image-grid-2.jpg')]"></div>
            <div className="flex flex-col place-content-center">
              <div className="ml-8 w-[280px] h-[300px] bg-[url('/assets/images/tablet/image-grid-3.jpg')] bg-cover bg-center"></div>
              <div className="ml-8 w-[280px] h-[385px] bg-black text-white flex flex-col justify-center items-center mt-8">
                <h1 className="text-[60px] font-bsd font-extrabold w-[70%]">
                  <span>COME & BE</span> <span>INSPIRED</span>
                </h1>
                <TextTree />
              </div>
            </div>
          </div>
        </div>
        <Footer bgcolor="black" />
      </IonContent>
    </IonPage>
  );
};

export default Tablet;
