const reducer = (state, action) =>{
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart:[]}

    case 'REMOVE_ITEM':
      return { ...state, cart: state.cart.filter( item => item.id !== action.payload)}

    case 'INCREASE_ITEM':
      let tempCartItem = state.cart.map( item => {
        if( item.id === action.payload){
          let totQuantity = item.quantity + 1
          return { ...item, quantity: totQuantity }
        }
        return item
      })

     return { ...state, cart:tempCartItem}

    case 'DECREASE_ITEM':
      let tempCartItem1 = state.cart.map( item => {
        if( item.id === action.payload){
          let totQuantity = item.quantity - 1
          return { ...item, quantity: totQuantity }
        }
        return item
      })
     return { ...state, cart:tempCartItem1 }

     case 'SET_TOTAL_QUANTITY':
     return { ...state, totalQuantity:state.cart.reduce((acc,item) => acc = acc + item.quantity ,0) }

     case 'SET_TOTAL_PRICE':
     return { ...state, totalPrice:state.cart.reduce((acc,item) => acc = acc + (item.price * item.quantity) ,0) }
    default:
      return state
  }
  
}


export default reducer

/**
 * if( ){
            console.log('index',index)
            console.log('item quantity ',item.quantity + 1)
            console.log('all item',{ ...item, quantity: item.quantity + 1 })
            return { ...item, quantity: item.quantity + 1 }
          
        } )
 */