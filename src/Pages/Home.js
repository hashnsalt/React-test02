export default function Home() {
  //화살표함수 사용할 수 없음. function을 생략할 수 없기 때문에
  return (
    <div>
      <h1>Home Page입니다.</h1>
      <img src={process.env.PUBLIC_URL+'/images/visual_main_01.jpg'} alt="" />
    </div>
  )
}