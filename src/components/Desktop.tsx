import { IonContent, IonPage } from "@ionic/react";
import BtnFwrd from "./pieces/BtnFwrd";
import TextOne from "./pieces/TextOne";
import TextTwo from "./pieces/TextTwo";
import TextTree from "./pieces/TextTree";
import Footer from "./Footer";

const Desktop = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="w-full h-[800px] bg-slate-200 relative flex">
          <div className="top-0 left-0 w-[32%] h-full bg-black"></div>
          <h1 className="text-[112px] w-[514px] h-[176px] text-white font-bsd font-extrabold absolute top-[18%] left-[13.1%] mix-blend-difference tracking-wide">
            <span>MODERN</span> <span>ART GALLERY</span>
          </h1>
          <div className="w-[640px] h-[800px] bg-[url('/images/desktop/image-hero.jpg')] bg-cover bg-center"></div>
          <div className="absolute w-[320px] h-[280px] top-[18%] right-[4%]">
            <TextOne />
            <BtnFwrd />
          </div>
        </div>
        <div className="w-[1110px]  m-auto my-32">
          <div className="flex  w-full ">
            <div className="w-[43%] h-[400px] flex flex-col justify-center items-center">
              <h1 className="text-[70px] text-black font-bsd font-extrabold w-[70%]">
                <span>YOUR DAY AT</span> <span>THE GALLERY</span>
              </h1>
              <TextTwo />
            </div>
            <div className="w-[57%] h-[400px] bg-[url('/images/desktop/image-grid-1.jpg')]"></div>
          </div>
          <div className="flex w-full mt-20">
            <div className="w-[635px] bg-cover bg-center bg-[url('/images/desktop/image-grid-2.jpg')]"></div>
            <div className="w-[475px]">
              <div className="ml-8 w-[445px] h-[313px] bg-[url('/images/desktop/image-grid-3.jpg')] bg-cover bg-center"></div>
              <div className="ml-8 w-[445px] h-[337px] bg-black text-white flex flex-col justify-center items-center mt-8">
                <h1 className="text-[70px] font-bsd font-extrabold w-[70%]">
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

export default Desktop;
