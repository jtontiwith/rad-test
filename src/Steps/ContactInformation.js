import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useStateValue } from '../state';

const ContactInformation = () => {
  const [{ employee }, dispatch] = useStateValue();
  
  const handleChange = event => {
    const { name, value } = event.target
    dispatch({
      type: 'changeEmployee',
      updateEmployeeField: { ...employee, [name]: value }
    })
  };
  console.log(employee)
  return (
    <>
    <div>
      <TextField
        id="first-name"
        label="First Name"
        name="firstName"
        value={employee.firstName}
        onChange={handleChange}
        margin="normal"
      />
    </div>
    <div>
      <TextField
        id="last-name"
        label="Last Name"
        name="lastName"
        value={employee.lastName}
        onChange={handleChange}
        margin="normal"
      />
    </div>
    <div>
      <TextField
        id="email"
        label="Email"
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        margin="normal"
      />
    </div>
    <div>
      <TextField
        id="standard-full-width"
        label="Address"
        name="address"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        fullWidth
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
    <div>
      <InputLabel shrink htmlFor="age-native-label-placeholder">
        Gender
      </InputLabel>
      <NativeSelect
        value={employee.gender}
        name='gender'
        onChange={handleChange}
      >
        <option value={'Male'}>Male</option>
        <option value={'Female'}>Female</option>
      </NativeSelect>
      </div>
    </>
  )
}

export default ContactInformation;