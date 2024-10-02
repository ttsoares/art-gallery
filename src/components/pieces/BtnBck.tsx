import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const BtnBck = () => {
  return (
    <IonRouterLink routerLink="/home">
      <button type="button" className="flex group/btn">
        <div className="w-16 h-[72px] bg-p_orange flex justify-center items-center group-hover/btn:bg-black">
          <svg
            className="ml-1.5 w-6 h-6 fill-none stroke-slate-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 24 1 12 9 0" />
          </svg>
        </div>
        <div className=" bg-black group-hover/btn:bg-p_orange text-white justify-center items-center flex w-[180px] h-[72px]">
          <p className=" font-bsd  text-2xl tracking-widest font-bold">
            BACK TO HOME
          </p>
        </div>
      </button>
    </IonRouterLink>
  );
};

export default BtnBck;
