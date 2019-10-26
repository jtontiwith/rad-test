import React from 'react';
import BioAndSSN from './Steps/BioAndSSN';
import ContactInformation from './Steps/ContactInformation';
import HorizontalLabelPositionBelowStepper from './HorizontalLabelPositionBelowStepper';
import Paper from '@material-ui/core/Paper';
import ProfessionalInformation from './Steps/ProfessionalInformation';
import Typography from '@material-ui/core/Typography';
import { StateProvider, StateContext } from './state';

const App = () => {
  
  const initialState = {
    step: 0,
    employee: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      gender: ''
    },
    proInfo: {
      trade: '',
      skill: ''
    },
    bioAndSSN: {
      bio: '',
      ssn: ''
    }
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeStep':
      return {
        ...state,
        step: action.step
      }
      case 'changeEmployee':
      return {
        ...state,
        employee: action.updateEmployeeField
      };
      case 'changeProInfo':
        return {
          ...state,
          proInfo: action.updateProInfoField
        }
      case 'changeBioAndSSNInfo':
          return {
            ...state,
            bioAndSSN: action.updateBioAndSSNField
          }
      default:
        return state;
    }
  };

  const steps = [
                  <ContactInformation />, 
                  <ProfessionalInformation />,
                  <BioAndSSN />
                ];

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <>
        <Typography variant="h5" component="h1">
          New Employee
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Please complete the form below and fill out all the necessary information.
        </Typography>
        <HorizontalLabelPositionBelowStepper />
        <Paper>
          <StateContext.Consumer>
            {value => {
              const { step } = value[0];
              return steps[step]
            }}
          </StateContext.Consumer>
        </Paper>
      </>
    </StateProvider>
  );
}

export default App;
