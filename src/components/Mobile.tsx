import { IonContent, IonPage } from "@ionic/react";
import BtnFwrd from "./pieces/BtnFwrd";
import TextOne from "./pieces/TextOne";
import TextTree from "./pieces/TextTree";
import TextTwo from "./pieces/TextTwo";
import Footer from "./Footer";

const Mobile = () => {
  return (
    <IonPage>
      <IonContent className="ion-no-padding">
        {/* Hero */}
        <div className="w-full  flex flex-col">
          <div className="w-[375px] h-[240px] mb-4 bg-[url('/assets/images/mobile/image-hero.jpg')] bg-cover bg-center "></div>

          <div className="w-full px-4 flex flex-col">
            <h1 className="text-[60px] text-black font-bsd font-extrabold tracking-wide mb-4">
              <span>MODERN</span> <span>ART GALLERY</span>
            </h1>
            <TextOne />
            <BtnFwrd />
          </div>
        </div>
        {/* Midle */}
        <div className="w-full  px-4 my-6 ">
          <div className="flex  flex-col w-full ">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full h-[320px] bg-[url('/assets/images/mobile/image-grid-1.jpg')]"></div>
              <h1 className="mt-6 text-[60px] text-black font-bsd font-extrabold">
                <span>YOUR DAY AT</span> <span>THE GALLERY</span>
              </h1>
              <TextTwo />
            </div>
          </div>
          <div className="flex flex-col w-full mt-6 ">
            <div className="w-full h-[480px] bg-cover bg-center bg-[url('/assets/images/mobile/image-grid-2.jpg')]"></div>
            <div className="flex flex-col place-content-center">
              <div className="mt-6 w-full h-[200] bg-[url('/assets/images/mobile/image-grid-3.jpg')] bg-cover bg-center"></div>
              <div className="mt-6 p-6 bg-black text-white flex flex-col justify-center items-center">
                <h1 className="text-[60px] font-bsd font-extrabold">
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

export default Mobile;
