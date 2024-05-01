import axiosClinet from '../axiosClinet.js';
export function searchMeals({commit},keyword){
    axiosClinet.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setsearchMeals' , data.meals);
    })
}
export function searchletter({commit},letter){
    axiosClinet.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setletterMeals' , data.meals);
    })
}
export function randomMeals({commit}){
    axiosClinet.get(`randomselection.php`)
    .then(({data}) => {
        commit('randomMeals' , data.meals);
    })
}