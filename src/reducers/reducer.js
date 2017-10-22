const initialState = {
  username: '',
  password: '',
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  image_url: '',
  loan_amount: '',
  monthly_amount: '',
  desired_rent: '',
  user_id: '',
  onPage: ''
}

const PAGE_SELECTED1 = "PAGE_SELECTED1";
const PAGE_SELECTED2 = "PAGE_SELECTED2";
const PAGE_SELECTED3 = "PAGE_SELECTED3";
const PAGE_SELECTED4 = "PAGE_SELECTED4";
const PAGE_SELECTED5 = "PAGE_SELECTED5";
const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD"
const DESIRE = "DESIRE"
const PROPERTY_NAME = "PROPERTY_NAME"

function reducer( state = initialState, action){
  switch(action.type) {
    case PAGE_SELECTED1:
      let { page1 } = action
      return { ...state, onPage: 1}
    case PAGE_SELECTED2:
      let { page2 } = action
      return { ...state, onPage: 2}
    case PAGE_SELECTED3:
      let { page3 } = action
      return { ...state, onPage: 3}
    case PAGE_SELECTED4:
      let { page4 } = action
      return { ...state, onPage: 4}
    case PAGE_SELECTED5:
      let { page5 } = action
      return { ...state, onPage: 5}
    case LOGIN:
      let {home} = action
      return {...state, username: action.payload}
    case PASSWORD:
      let {pass} = action
      return {...state, password: action.payload}
    case DESIRE:
      let {desire} = action
      return {...state, desired_rent: action.payload}
    case PROPERTY_NAME:
      let {propertyName} = action
      return {...state, name: action.payload}
    default: return state;}

}

export function login(home) {
  return {
    type: LOGIN,
    payload: home
  }
}

export function password(pass) {
  return {
    type: PASSWORD,
    payload: pass
  }
}

export function desire(desire) {
  return {
    type: DESIRE,
    payload: desire
  }
}

export function propertyName(propertyName) {
  return {
    type: PROPERTY_NAME,
    payload: propertyName
  }
}

export function selectPage1(page1) {
  return {
    type: PAGE_SELECTED1,
    page1
  }
}

export function selectPage2(page2) {
  return {
    type: PAGE_SELECTED2,
    page2
  }
}

export function selectPage3(page3) {
  return {
    type: PAGE_SELECTED3,
    page3
  }
}

export function selectPage4(page4) {
  return {
    type: PAGE_SELECTED4,
    page4
  }
}

export function selectPage5(page5) {
  return {
    type: PAGE_SELECTED5,
  }
}

export default reducer;
