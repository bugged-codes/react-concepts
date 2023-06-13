// FIXME - write redux for react
/* eslint-disable no-unused-vars */
// Redux in simple javascript app
// installed plain redux library from npm
// to run this file use command node comp after traversing to ./src/components

import { createStore } from 'redux';
import { combineReducers } from 'redux';
/*
//* 1 state & 1 reducer store. 
// simple Application store
const initialState = {
	cakeCount: 10,
	iceCreamCount: 5,
	moneyCount: 100,
	isShopOpen: true,
};

// Actions
const buy_cake = 'buy_cake_so_reduce-1';
const made_new_cake = 'made_new_cake_so_add-1';
// action creator function
function buyCake() {
	return {
		type: buy_cake,
		info: 'First redux action.',
	};
}

const buy_iceCream = 'buy_iceCream';
const made_new_iceCream = 'made_new_iceCream';
function buyIceCream() {
	return {
		type: buy_iceCream,
	};
}

// Reducer functions
const reducer = (state = initialState, action) => {
	//  are cakes available condition
	if (state.isShopOpen) {
		// reducer function convention to use switch statement
		switch (action.type) {
			case buy_cake:
				return {
					...state,
					cakeCount: state.cakeCount - 1,
					moneyCount: state.moneyCount + 50,
				};
			case buy_iceCream:
				return {
					...state,
					iceCreamCount: state.iceCreamCount - 1,
					moneyCount: state.moneyCount + 25,
				};

			default:
				return state;
		}
	}
};

// store with createStore method of redux
const store = createStore(reducer);
console.log('initial state: ', store.getState()); // getting access to current state, before any action
const unsubscribe = store.subscribe(() => console.log('updated state: ', store.getState()));
store.dispatch(buyCake()); // updating the state based on action creator function
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
*/

//* Multiple States & Multiple Reducer store
// Initial States
const initialCakeState = {
	countCakes: 10,
};
const initialIceCreamState = {
	countIceCream: 5,
};
// as cakeStore & iceCreamStore are different & separately use initialMoney state, hence two instances of money states are created.
const initialMoney = {
	countMoney: 100,
};

// Actions with action-creator functions
const buy_one_cake = 'buy_one_cake';
const buy_one_iceCream = 'buy_one_iceCream';
const made_one_cake = 'made_one_cake';
const made_one_iceCream = 'made_one_iceCream';
const increment_money = 'increment_money';
const decrement_money = 'decrement_money';

const buyOneCake = () => {
	return {
		type: buy_one_cake,
		value: 1,
	};
};
const buyOneIceCream = () => {
	return {
		type: buy_one_iceCream,
		value: 1,
	};
};

const madeOneCake = () => {
	return {
		type: made_one_cake,
		value: 1,
	};
};
const madeOneIceCream = () => {
	return {
		type: made_one_iceCream,
		value: 1,
	};
};

const incrementMoney = (val) => {
	return {
		type: increment_money,
		value: val || 100,
	};
};
const decrementMoney = (val) => {
	return {
		type: decrement_money,
		value: val || 100,
	};
};

const cakeReducer = (state = { initialCakeState, initialMoney }, action) => {
	switch (action.type) {
		case buy_one_cake:
			return {
				// returning a complete new object.
				...state,
				initialCakeState: {
					countCakes: state.initialCakeState.countCakes - action.value,
				},
				initialMoney: {
					countMoney: state.initialMoney.countMoney + 50,
				},
			};
		case made_one_cake:
			return {
				...state,
				initialCakeState: {
					countCakes: state.initialCakeState.countCakes + action.value,
				},
				initialMoney: {
					countMoney: state.initialMoney.countMoney - 20,
				},
			};
		default:
			return state;
	}
};

const iceCreamReducer = (state = { initialIceCreamState, initialMoney }, action) => {
	switch (action.type) {
		case buy_one_iceCream:
			return {
				...state,
				initialIceCreamState: {
					countIceCream: state.initialIceCreamState.countIceCream - action.value,
				},
				initialMoney: {
					countMoney: state.initialMoney.countMoney + 25,
				},
			};
		case made_one_iceCream:
			return {
				...state,
				initialIceCreamState: {
					countIceCream: state.initialIceCreamState.countIceCream + action.value,
				},
				initialMoney: {
					countMoney: state.initialMoney.countMoney - 10,
				},
			};
		default:
			return state;
	}
};
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log('Initial Store State: ', store.getState());
const unsubsribe = store.subscribe(() => console.log('Updated state: ', store.getState()));
store.dispatch(buyOneCake());
store.dispatch(buyOneCake());
store.dispatch(madeOneCake());
store.dispatch(buyOneIceCream());
store.dispatch(madeOneIceCream());
store.dispatch(madeOneIceCream());
unsubsribe();
