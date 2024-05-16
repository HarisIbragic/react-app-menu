import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// ***********************************************************

// function Greeting() {
//   return (
//     <div>
//       <h3>Pozdrav svima!</h3>
//     </div>
//   );
// }

// // NE RADITE NIKAD:  OVO JE DRUGI NACIN PRAVLJENJA KOMPONENATA
// ////ARROW Function:
// // const Greeting = () => {
// //   //Bukvalno sta se desava ispod haube (u pozadini):
// //   return React.createElement(
// //     'div',
// //     {},
// //     React.createElement('h3', {}, 'Hello world')
// //   );
// // };

// root.render(<Greeting />);

// ***********************************************************

//  <></>  ili  <React.Fragment></React.Fragment>  (ISTO)
// KOMPONENTE POCINJU VELIKIM SLOVOM
// function Greeting() {
//   return (
//     <React.Fragment>
//       <section>
//         <article>
//           <ul>
//             <li>
//               <a href='#'>Home</a>
//               <img src='' alt='' />
//               <input type='text' />
//             </li>
//           </ul>
//         </article>
//       </section>
//     </React.Fragment>
//   );
// }

// root.render(<Greeting />);

// ***********************************************************

// // Nested Components, React Tools

// //Ovde cemo spojiti dve razlicite komponente Person i Message u najsoj komponenti Greeting:
// function Header() {
//   return (
//     <div>
//       <Perosn />
//       <Message />
//     </div>
//   );
// }

// // NACIN 1: KAD JE JEDNA LINIJA KODA RADITE OVAKO:
// //Ovde vidimo kako lepo delimo nasu aplikaciju u odvojene komponente
// const Perosn = () => <h2 style={{ color: 'blue' }}>Asmir Pljakic</h2>;

// // NACIN 2:
// // Kad imate vise linija koda koristite ovu sa 'return':
// const Message = () => {
//   return (
//     <div>
//       <p>DENI I HARI!</p>
//       <p style={{ fontSize: '30px', fontFamily: 'verdana' }}>
//         this is my message
//       </p>
//     </div>
//   );
// };

// root.render(<Header />);

// **************************************************

// function Header() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }
// const Person = () => {
//   return (
//     <div>
//       <h2>Haris</h2>
//       <h2>Ibragic</h2>
//     </div>
//   );
// };
// const Message = () => (
//   <p>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
//     veritatis explicabo laudantium sapiente. Similique quasi velit non earum
//     facilis vero incidunt eligendi cumque doloremque exercitationem, cupiditate
//     pariatur fugiat impedit possimus.
//   </p>
// );

// root.render(<Header />);

// **************************************************

// function CarList() {
//   return (
//     <section className='carlist'>
//       <Car />
//       <Car />
//       <Car />
//     </section>
//   );
// }
// const Car = () => {
//   return (
//     <article className='car'>
//       {/* 1. NACIN : KAD HOCEMO DA IMA DECU KORISTICEMO OVAJ: */}
//       <Image></Image>
//       {/* 2. NACIN */}
//       <Title />
//       <Owner />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://files.porsche.com/filestore/image/multimedia/none/992-ta4-gts-modelimage-sideshot/thumbwhite/0919d2fa-d31f-11eb-80d9-005056bbdc38;sD;twebp/porsche-thumbwhite.webp'
//     alt='911 Targa 4 GTS'
//   />
// );

// const Title = () => <h2>911 Targa 4 GTS</h2>;
// const Owner = () => <h5>Denijal Kacapor</h5>;
// root.render(<CarList />);

// UCENIK:

// function Carlist() {
//   return (
//     <section className='carlist'>
//       <Car />
//       <Car />
//       <Car />
//     </section>
//   );
// }

// const Car = () => {
//   return (
//     <article className='car'>
//       <Image />
//       <Title />
//       <Owner />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelimage-sideshot/thumbwhite/64a99f81-d97f-11eb-80d9-005056bbdc38;sD;twebp/porsche-thumbwhite.webp'
//     alt='911 Carrera'
//   />
// );
// const Title = () => {
//   return <h2>911 Carrera</h2>;
// };
// const Owner = () => {
//   return <h5>Haris Ibragic</h5>;
// };

// root.render(<Carlist />);

// Vezba

function Carlist() {
  return (
    <section className='carlist'>
      <Car />
      <Car />
      <Car />
    </section>
  );
}

const Car = () => {
  return (
    <article className='car'>
      <Image />
      <Title />
      <Owner />
    </article>
  );
};

const Image = () => (
  <img
    src='https://configurator.porsche.com/model-start/pictures/992120/extcam03.webp'
    alt='911 Carrera'
  />
);
const Title = () => {
  return <h2>911 Carrera</h2>;
};

const Owner = () => {
  return <h5>Haris Ibragic</h5>;
};
root.render(<Carlist />);
