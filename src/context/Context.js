

// import { createContext, useReducer } from "react";

// export const Cartcontext = createContext();
// export const Context = (props) => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD":
//         const tempstate = state.filter((item) => action.payload.id === item.id);
//         if (tempstate.length > 0) {
//           return state;
//         } else {
//           return [...state, action.payload];
//         }
//       case "INCREASE":
//         const tempstate1 = state.map((item) => {
//           if (item.id === action.payload.id) {
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             return item;
//           }
//         });
//         return tempstate1;
//       case "DECREASE":
//         const tempstate2 = state.map((item) => {
//           if (item.id === action.payload.id) {
//             return { ...item, quantity: item.quantity - 1 };
//           } else {
//             return item;
//           }
//         });
//         return tempstate2;
//       case "REMOVE":
//         const tempstate3 = state.filter(
//           (item) => item.id !== action.payload.id
//         );

//         return tempstate3;

//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(reducer, []);
//   const info = { state, dispatch };
//   return (
//     <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
//   );
// };

import { createContext, useReducer } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        // eslint-disable-next-line no-case-declarations
        const tempstate = state.filter((item) => action.payload.id === item.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        // eslint-disable-next-line no-case-declarations
        const tempstate1 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate1;
      case "DECREASE":
        // eslint-disable-next-line no-case-declarations
        const tempstate2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      case "REMOVE":
        // eslint-disable-next-line no-case-declarations
        const tempstate3 = state.filter(
          (item) => item.id !== action.payload.id
        );

        return tempstate3;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};
