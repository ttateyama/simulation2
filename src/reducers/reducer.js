const initialState = {
  page1: 'unselected',
  page2: 'unselected',
  page3: 'unselected',
  page4: 'unselected',
  page5: 'unselected',
  onPage: ''
}

const PAGE_SELECTED1 = "PAGE_SELECTED1";
const PAGE_SELECTED2 = "PAGE_SELECTED2";
const PAGE_SELECTED3 = "PAGE_SELECTED3";
const PAGE_SELECTED4 = "PAGE_SELECTED4";
const PAGE_SELECTED5 = "PAGE_SELECTED5";
const PAGE_UNSELECTED1 = "PAGE_UNSELECTED1";
const PAGE_UNSELECTED2 = "PAGE_UNSELECTED2";
const PAGE_UNSELECTED3 = "PAGE_UNSELECTED3";
const PAGE_UNSELECTED4 = "PAGE_UNSELECTED4";
const PAGE_UNSELECTED5 = "PAGE_UNSELECTED5";


function reducer( state = initialState, action){
  console.log("1")
  switch(action.type) {
    case PAGE_SELECTED1:
      let { page1 } = action
      return { ...state, page1: 'selected', onPage: 1, bar: 1}
    case PAGE_SELECTED2:
      let { page2 } = action
      return { ...state, page2: 'selected', onPage: 2}
    case PAGE_SELECTED3:
      let { page3 } = action
      return { ...state, page3: 'selected', onPage: 3}
    case PAGE_SELECTED4:
      let { page4 } = action
      return { ...state, page4: 'selected', onPage: 4}
    case PAGE_SELECTED5:
      let { page5 } = action
      return { ...state, page5: 'selected', onPage: 5}
    case PAGE_UNSELECTED1:
      page1  = action
      return { ...state, page1: 'unselected'}
    case PAGE_UNSELECTED2:
      page2  = action
      return { ...state, page2: 'unselected'}
    case PAGE_UNSELECTED3:
      page3  = action
      return { ...state, page3: 'unselected'}
    case PAGE_UNSELECTED4:
      page4  = action
      return { ...state, page4: 'unselected'}
    case PAGE_UNSELECTED5:
      page5  = action
      return { ...state, page5: 'unselected'}
    default: return state;}

}

export function addBar() {
    return {
      type: 'ADD_BAR'
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
    page5
  }
}

export function unselectPage1(page1) {
  return {
    type: PAGE_UNSELECTED1,
    page1
  }
}

export function unselectPage2(page2) {
  return {
    type: PAGE_UNSELECTED2,
    page2
  }
}

export function unselectPage3(page3) {
  return {
    type: PAGE_UNSELECTED3,
    page3
  }
}

export function unselectPage4(page4) {
  return {
    type: PAGE_UNSELECTED4,
    page4
  }
}

export function unselectPage5(page5) {
  return {
    type: PAGE_UNSELECTED5,
    page5
  }
}


export default reducer;
