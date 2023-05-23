import { MainMensage } from "../MainMensage"
import { SetProfile } from "../SetProfile"
import { SocialMedia } from "../SocialMedia"

export const Main = ()=>{
  return(
    <div>
      <MainMensage/>
      <SetProfile/>
      <SocialMedia/>
    </div>
  )
}