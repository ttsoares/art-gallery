import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const BtnFwrd = () => {
  return (
    <IonRouterLink routerLink="/location">
      <button type="button" className="flex mt-10 group/btn">
        <div className=" bg-black group-hover/btn:bg-p_orange text-white justify-center items-center flex w-[180px] h-[72px]">
          <p className=" font-bsd  text-2xl tracking-widest font-bold">
            OUR LOCATION
          </p>
        </div>
        <div className="w-16 h-[72px] bg-p_orange flex justify-center items-center group-hover/btn:bg-black">
          <svg
            className="ml-1.5 w-6 h-6 fill-none stroke-slate-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m1 0 8 12-8 12" />
          </svg>
        </div>
      </button>
    </IonRouterLink>
  );
};

export default BtnFwrd;
