export const initialState = {
  basket: [
    {
      id: "123123354",
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24",
      price: "550",
      rating: 5,
      title: "amaxone Echo (3rd generation) | smart speaker with Alexa",
    },
    {
        id: "123123354",
        image:
          "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24",
        price: "550",
        rating: 5,
        title: "amaxone Echo (3rd generation) | smart speaker with Alexa",
      },
  ],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
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
        (basketItem) => basketItem.item_id === action.id
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
