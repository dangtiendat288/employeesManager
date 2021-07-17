import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  CREATE_EMPLOYEE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_SAVE,
} from '../const';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => dispatch({type: EMPLOYEE_CREATE}));
  };
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const createEmployee = ({name, phone, shift}) => {
  return {
    type: CREATE_EMPLOYEE,
    payload: {
      name: name,
      phone: phone,
      shift: shift,
    },
  };
};

export const employeeSave = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEES_SAVE});
      });
  };
};
