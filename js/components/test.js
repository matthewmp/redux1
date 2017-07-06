import store from '../store';



store.subscribe(()=>{
const state = store.getState();
 	console.log(state);
})

store.dispatch(actions.addRepository('New Repo'));
store.dispatch(actions.rateRepository('New Repo', 5));