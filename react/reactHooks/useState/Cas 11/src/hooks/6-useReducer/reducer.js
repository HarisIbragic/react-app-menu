// export const reducer = (state, action) => {
//   if (action.type === 'ADD_PERSON') {
//     const newPeople = [...state.people, action.payload];

//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'Item added',
//     };
//   }
//   if (action.type === 'NO_VALUE') {
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: 'Enter value',
//     };
//   }
//   if (action.type === 'CLOSE_MODAL') {
//     return {
//       ...state,
//       isModalOpen: false,
//     };
//   }
//   throw new Error('no action type');
// };

// export const reducer = (state, action) => {
//   if (action.type === 'ADD_VALUE') {
//     const newPeople = [...state.people, action.payload];

//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'Item added',
//     };
//   }
//   if (action.type === 'NO_VALUE') {
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: 'Empty',
//     };
//   }
//   if (action.type === 'CLOSE_MODAL') {
//     return {
//       ...state,
//       isModalOpen: false,
//     };
//   }
//   throw new Error('no action type');
// };
