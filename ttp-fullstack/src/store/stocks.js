import axios from "axios";
import history from "../history";
var config = require("../../secrets");
// const request = require('request')
// const convert = require('xml-js')

// // request.mode = 'no-cors'

const GOT_STOCK_LIST = "GOT_STOCK_LIST";
const GOT_CURRENT_STOCK = "GOT_CURRENT_STOCK";
// const GOT_QUOTES = 'GOT_QUOTES'
// const GOT_DATES = 'GOT_DATES'
// const ADDED_DATES = 'ADDED_DATES'

const gotStockList = list => ({
  type: GOT_USER_LIST,
  list
});
const gotCurrentStock = stock => ({
  type: GOT_CURRENT_STOCK,
  stock
});
// const gotQuotes = quotes => ({
//   type: GOT_QUOTES,
//   quotes
// })
// const gotDates = dates => ({
//   type: GOT_DATES,
//   dates
// })

export const getStock = id => dispatch => {
  request.get(
    `https://www.goodreads.com/series/show?key=0PwPMvqFRKns4bpgBnkRg&id=${id}.xml`,
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      console.log(body.url);
      console.log(body.explanation);
      const stock = res.body;
      console.log(stock);
      dispatch(gotCurrentStock(stock));
    }
  );
};

export const getStockList = id => dispatch => {
  request.get(
    `https://www.goodreads.com/review/list/${id}.xml?shelf=demo&key=0PwPMvqFRKns4bpgBnkRg&v=2?`,
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(body.url);
      console.log(body.explanation);
      const list = res.list;

      dispatch(gotStockList(list));
      // return result1
    }
  );
};

// const initialState = {
//   books: [],
//   userList: [],
//   currentSeries: [],
//   quotes: [],
//   dates: []
// }

// const booksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GOT_USER_LIST:
//       return {...state, userList: action.list}
//     case GOT_CURRENT_SERIES:
//       return {
//         ...state,
//         currentSeries: [...state.currentSeries, action.series]
//       }
//     case GOT_QUOTES:
//       return {
//         ...state,
//         quotes: action.quotes
//       }
//     case GOT_DATES:
//       return {
//         ...state,
//         dates: action.dates
//       }
//     case ADDED_DATES:
//       return {
//         ...state,
//         dates: [...state.dates, action.dates]
//       }
//     default:
//       return state
//   }
// }

// export default booksReducer
