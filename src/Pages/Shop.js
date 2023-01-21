import styled from 'styled-components';
import bests from './shopData';
import './page.css'
import {useState} from 'react';

const Button = styled.button`
  display: inline-block;
  width: 50%;
  height: 50px;
  background-color: #eee;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:hover {
    background-color: #999;
  }
`


export default function Shop() {

  const [popup, setPopup] = useState(false) //popup이 true면 popup open
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <div>
      <h2 className='shop_title'>BEST 상품</h2>
      <section className='best_section'>
        {
          bests.map((best, index) => {
            return(
              <>
              <div className='best' onClick={() => {
                setPopup(true);
                setIndex(index);
                setCount(0);
                setPrice(0);
              }}>
                <img src={best.image} alt="" style={{width:280,height:280}} />
                <div className="product_info">
                  <p style={{fontSize: 18}}>{best.desc}</p>
                  <p>{best.title}</p>
                  <p>{best.price}원</p>
                </div>
                <div>
                  <Button>찜하기</Button>
                  <Button>장바구니</Button>
                </div>
              </div>
            </>
            )
          })
        }
      </section>
        {popup === true ? <Popup setPopup={setPopup} bests={bests} index={index} setCount={setCount} count={count} setPrice={setPrice} price={price}/> : null}
                                                                          
    </div>
  )
}

// function Counter(props) {
//   const {index} = props
//   const [count, setCount] = useState(0);
//   const [price, setPrice] = useState(0);

//   return(
//     <>
//         <div class="price_sec">
//           <button onClick={() => setCount(count + 1)}>증가</button>
//           <h3>{count}</h3>
//           <button onClick={() => setCount(count - 1)}>감소</button>
//         </div>
//         <button onClick={() => setPrice(count * bests[index].price)}>장바구니에 담기</button>
//         <h3>총액: {price}</h3>
//     </>
//   )
// }


function Popup(props) {
  //popup component, 따로 폴더를 만들어서 파일을 생성해줘도 됨.
  //React에서는 if문이 들어가면 안됨. React 조건문은 다른 식으로 써야함.

  const {setPopup, index, setCount, count, setPrice, price} = props;


  return (
    <>
      <div className="product">
        <div className="product_popup" onClick={() => {setPopup(false);}}>
          <h2>상품명 : {bests[index].title}</h2>
          <img
            src={bests[index].image}
            alt=""
            style={{ width: 280, height: 280 }}
          />
          <p>가격 : {bests[index].price}</p>
        </div>
        <div class="price_sec">
            <button onClick={() => setCount(count + 1)}>증가</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count - 1)}>감소</button>
          </div>
          <button onClick={() => setPrice(count * props.bests[index].price)}>장바구니에 담기</button>
          <h3>총액: {price}</h3>
      </div>
    </>
  );
}