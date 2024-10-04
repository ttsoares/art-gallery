import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import BtnBck from "../components/pieces/BtnBck";
import Footer from "../components/Footer";

const Location = () => {
  return (
    <IonPage>
      <IonContent>
        <div
          className="relative top-0 left-0 h-[550px] md:h-[768px] lg:h-[800px] w-full
        bg-[url('/images/mobile/image-map@2x.png')]
        md:bg-[url('/images/tablet/image-map@2x.png')]
        lg:bg-[url('/images/desktop/image-map@2x.png')]
        bg-cover bg-center"
        >
          <div className="absolute top-0 left-0 md:left-[130px]">
            <BtnBck />
          </div>
        </div>
        <div className="w-full md:h-[548px] bg-black flex justify-center items-center">
          <div className="w-full md:w-[80%] md:h-72 flex flex-col md:flex-row p-4 md:p-0">
            <div className="w-full md:w-1/2 h-full ">
              <h1 className="text-white font-bsd font-extrabold text-[60px] flex flex-row md:flex-col">
                <p className="pr-4">OUR</p>
                <p>LOCATION</p>
              </h1>
            </div>
            <div className="w-full md:w-1/2 h-full p-4 md:p-0 ">
              <div className="w-full md:w-[70%] flex flex-col space-y-3 text-white">
                <h3 className="text-p_orange font-bold text-3xl">
                  99 KING STREET
                </h3>
                <div className="my-6">
                  <p>Newport</p>
                  <p>RI 02840</p>
                  <p>United States of America</p>
                </div>
                <p>
                  Our newly opened gallery is located near the Edward King House
                  on 99 King Street, the Modern Art Gallery is free to all
                  visitors and open seven days a week from 8am to 9pm.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer bgcolor="orange" />
      </IonContent>
    </IonPage>
  );
};

export default Location;
