import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStateValue } from '../state';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

const BioAndSSN = () => {
  const [{ bioAndSSN }, dispatch] = useStateValue();
  
  const handleChange = event => {
    const { name, value } = event.target
    dispatch({
      type: 'changeBioAndSSNInfo',
      updateBioAndSSNField: { ...bioAndSSN, [name]: value }
    })
  };

  return (
    <>
      <div>
        <TextField
          id="first-name"
          label="SSN"
          name="ssn"
          value={bioAndSSN.ssn}
          onChange={handleChange}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="last-name"
          label="Confirm SSN"
          name="confirm-ssn"
          value={bioAndSSN.ssn}
          onChange={handleChange}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="standard-full-width"
          label="Employee Bio"
          name="bio"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          onChange={handleChange}
          margin="normal"
          value={bioAndSSN.bio}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            onChange={handleChange}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      </div>
      <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            onChange={handleChange}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      </div>
      <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            onChange={handleChange}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      </div>      
    </>
  )
}

export default BioAndSSN;