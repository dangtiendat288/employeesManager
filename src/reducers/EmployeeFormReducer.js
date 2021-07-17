import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_SAVE} from '../const';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  // employee: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEES_SAVE:
      return INITIAL_STATE;
    // case CREATE_EMPLOYEE:
    //   const {name, phone, shift} = action.payload;
    //   return {...state, employee: [...state.employee, {name, phone, shift}]};

    default:
      return state;
  }
};

// key interpolation
