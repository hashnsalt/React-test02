// import {Form} from "react-router-dom"
import {Routes, Route, Link} from 'react-router-dom'
import Member from './Member'


export default function Members() {
  const style = {
    fontSize: 24,
    color: 'blue'
  }
  //객체 형식의 변수를 사용해서 넣어줄 수 있음.
  return (
    <div>
      <h2>회원리스트</h2>
      <ul className='sub_lnb'>
        <li><Link to='/members/family' style={style}>family</Link></li>
        <li><Link to='/members/silver' style={
          {color: 'red', fontSize:30, fontWeight: 'bold', textDecoration: 'none'}
          }>silver</Link></li>
        <li><Link to='/members/gold'>gold</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/*' element={<div>등급을 클릭하시면 해당 회원을 볼 수 있습니다.</div>}/>
        <Route path=':memberShip' element={<Member />}/>
      </Routes>
    </div>
  )
}