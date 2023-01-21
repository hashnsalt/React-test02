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
      <h2>회원 : {memberShip}({member.name}) </h2>
      <h3>주소 : {member.addr}</h3>
    </div>
  )
}