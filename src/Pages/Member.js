import { useParams } from "react-router-dom";
import memberList from "./memberdata";

export default function Member() {
  
  const {memberShip} = useParams();
  const member = memberList[memberShip]

  if(!member) {
    return <h3>404 Not Found!!</h3>
  }
  return(
    <div>
      <h2>νμ : {memberShip}({member.name}) </h2>
      <h3>μ£Όμ : {member.addr}</h3>
    </div>
  )
}