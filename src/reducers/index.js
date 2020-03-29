import { combineReducers } from 'redux';

import appReducer from './appReducer';
import authReducer from './authReducer';
import controlReducer from './controlReducer';
import hospitalReducer from './hospitalReducer';
import infectionReducer from './infectionReducer';
import monitoringReducer from './monitoringReducer';
import notificationReducer from './notificationReducer';
import patientReducer from './patientReducer';
import pickupReducer from './pickupReducer';
import profileReducer from './pickupReducer';
import reportedReducer from './reportedReducer';
import securityReducer from './securityReducer';
import admissionReducer from './admissionReducer';
import userReducer from './userReducer';
import organizationReducer from './organizationReducer';

export default combineReducers({
    application: appReducer,
    token: authReducer,
    notification: notificationReducer,
    organization: organizationReducer,
    security: securityReducer,
    hospital: hospitalReducer,
    monitoring: monitoringReducer,
    patients: patientReducer,
    pickup: pickupReducer,
    reported: reportedReducer,
    admission: admissionReducer,
    infection: infectionReducer,
    users: userReducer,
    profile: profileReducer,
    control: controlReducer
});