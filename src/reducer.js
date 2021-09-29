export const initialState = {
  basket: [],
  user: null,
};


export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => Number(item.price) + amount, 0);





function reducer(state, action) {
  switch (action.type) {
      case "SET_USER":
          return {
              ...state,
              user: action.user,
          };
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // LOGIC FOR REMOVING ITEM FROM BASKET
      //copy the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.title === action.title
      );
      if (index >= 0) {
        // item exists in basket

        // slplice the item
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id})`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}

export default reducer;
