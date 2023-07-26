import Lottie from "lottie-react";
import partyLottie from "../../public/assets/lottie/party.json";

export function PartyLottie(props: any) {
  return <Lottie animationData={partyLottie} {...props}></Lottie>;
}
