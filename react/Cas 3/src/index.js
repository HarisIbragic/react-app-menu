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

// const owner = 'Haris Ibragic';

// const Car = () => {
//   const title = '911 Carrera';
//   return (
//     <article className='car'>
//       <Image />
//       <h2>{title}</h2>
//       <h5>{owner.toUpperCase()}</h5>
//       {/* NE MOZE STATEMENT (GRANE) */}
//       {/* <h2>{if (condition) {

//       }}</h2> */}

//       {/* MOZE IZRAZ - VREDNOST (FUNKCIJE, 6+6, TERNARNI , VAZNO: I MOGU DA SE DODAJU METODE NA VREDNOSTIMA) */}
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelimage-sideshot/thumbwhite/64a99f81-d97f-11eb-80d9-005056bbdc38;sD;twebp/porsche-thumbwhite.webp'
//     alt='911 Carrera'
//   />
// );

// root.render(<Carlist />);

//*********************************************** */

// const firstCar = {
//   img: 'https://files.porsche.com/filestore/image/multimedia/none/992-c4-gts-modelimage-sideshot/thumbwhite/7315cc10-d3f3-11eb-80d9-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
//   title: '911 Carrera',
//   owner: 'Haris Ibragic',
// };

// const secondCar = {
//   img: 'https://files.porsche.com/filestore/image/multimedia/none/992-ta4-gts-modelimage-sideshot/thumbwhite/0919d2fa-d31f-11eb-80d9-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
//   title: '911 Targa 4 GTS',
//   owner: 'Denijal Kacapor',
// };

// function Carlist() {
//   return (
//     <section className='carlist'>
//       <Car img={firstCar.img} title={firstCar.title} owner={firstCar.owner} />
//       <Car
//         img={secondCar.img}
//         title={secondCar.title}
//         owner={secondCar.owner}
//       />
//     </section>
//   );
// }

// const Car = props => {
//   console.log(props);

//   return (
//     <article className='car'>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h5>{props.owner.toUpperCase()}</h5>
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelimage-sideshot/thumbwhite/64a99f81-d97f-11eb-80d9-005056bbdc38;sD;twebp/porsche-thumbwhite.webp'
//     alt='911 Carrera'
//   />
// );

// root.render(<Carlist />);

// UCENIK:
// const firstCar = {
//   img: 'https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-coupe-modelimage-sideshot/thumbwhite/a0528981-8859-11ee-810c-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
//   title: 'Cayenne Coupé',
//   owner: 'Denijal Kacapor',
// };

// const secondCar = {
//   img: 'https://files.porsche.com/filestore/image/multimedia/none/pa3-gts-modelimage-sideshot/thumbwhite/53c319ab-de44-11eb-80d9-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
//   title: 'Macan GTS',
//   owner: 'Denijal Kacapor',
// };

// const thirdCar = {
//   img: 'https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/thumbwhite/d5f44326-1a15-11ed-80f5-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
//   title: '911 GT3 RS',
//   owner: 'Denijal Kacapor',
// };

// const Carlist = () => {
//   return (
//     <section className='carlist'>
//       <Car img={firstCar.img} title={firstCar.title} owner={firstCar.owner} />
//       <Car
//         img={secondCar.img}
//         title={secondCar.title}
//         owner={secondCar.owner}
//       />
//       <Car img={thirdCar.img} title={thirdCar.title} owner={thirdCar.owner} />
//     </section>
//   );
// };

// const Car = props => {
//   return (
//     <article className='car'>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h5>{props.owner}</h5>
//     </article>
//   );
// };
// root.render(<Carlist />);
// const Carlist = () => {
//   return (
//     <section className='carlist'>
//       <Car img={firstCar.img} title={firstCar.title} owner={firstCar.owner} />
//       <Car
//         img={secondCar.img}
//         title={secondCar.title}
//         owner={secondCar.owner}
//       />
//       <Car img={thirdCar.img} title={thirdCar.title} owner={thirdCar.owner} />
//     </section>
//   );
// };

// const Car = props => {
//   return (
//     <article className='car'>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h5>{props.owner}</h5>
//     </article>
//   );
// };
// root.render(<Carlist />);

// M0JA VEZBA

// const firstCar = {
//   img: `https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-s-modelimage-sideshot/thumbwhite/215f09d3-8864-11ee-810c-005056bbdc38;sD;twebp/porsche-thumbwhite.webp`,
//   title: `Cayenne S`,
//   owner: `Haris Ibragic`,
// };
// const secondCar = {
//   img: `https://files.porsche.com/filestore/image/multimedia/none/972-g3-4-modelimage-sideshot/thumbwhite/cb330632-b137-11ee-8112-005056bbdc38;sD;twebp/porsche-thumbwhite.webp`,
//   title: `Panamera 4`,
//   owner: `Haris Ibragic`,
// };
// const thirdCar = {
//   img: `https://files.porsche.com/filestore/image/multimedia/none/pa3-t-modelimage-sideshot/thumbwhite/8cecf74d-7868-11ec-80e7-005056bbdc38;sD;twebp/porsche-thumbwhite.webp`,
//   title: `Macan T`,
//   owner: `Haris Ibragic`,
// };

// 1.NACIN
// const Car = props => {
//   return (
//     <article className='car'>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.owner}</h4>
//       {props.children}
//     </article>
//   );
// };

// 2.NACIN

// const Car = props => {
//   const { img, title, owner, children } = props;
//   return (
//     <article className='car'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h5>{owner}</h5>
//       {children}
//     </article>
//   );
// };

const data = [
  {
    id: 1,
    img: `https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-s-modelimage-sideshot/thumbwhite/215f09d3-8864-11ee-810c-005056bbdc38;sD;twebp/porsche-thumbwhite.webp`,
    title: `Cayenne S`,
    owner: `Haris Ibragic`,
  },

  {
    id: 2,
    img: `https://files.porsche.com/filestore/image/multimedia/none/972-g3-4-modelimage-sideshot/thumbwhite/cb330632-b137-11ee-8112-005056bbdc38;sD;twebp/porsche-thumbwhite.webp`,
    title: `Panamera 4`,
    owner: `Haris Ibragic`,
  },

  {
    id: 3,
    img: `https://files.porsche.com/filestore/image/multimedia/none/pa3-t-modelimage-sideshot/thumbwhite/8cecf74d-7868-11ec-80e7-005056bbdc38;sD;twebp/porsche-thumbwhite.webp`,
    title: `Macan T`,
    owner: `Haris Ibragic`,
  },
];

const Carlist = () => {
  return (
    <section className='carlist'>
      {data.map(car => {
        const { id, img, title, owner } = car;
        return <Car {...car} key={id} />;
      })}
    </section>
  );
};

// 3.NACIN

const Car = ({ img, title, owner, children }) => {
  return (
    <article className='car'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{owner}</h5>
      {children}
    </article>
  );
};

root.render(<Carlist />);
