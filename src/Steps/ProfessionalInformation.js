import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useStateValue } from '../state';

const ProfessionalInformation = () => {
  const [{ proInfo }, dispatch] = useStateValue();

  const handleChange = event => {
    const { name, value } = event.target
    dispatch({
      type: 'changeProInfo',
      updateProInfoField: { ...proInfo, [name]: value }
    })
  };

  return (
    <>
      <div>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Trade
        </InputLabel>
        <NativeSelect
          value={proInfo.trade}
          name='trade'
          onChange={handleChange}
        >
          <option value={'electrician'}>electrician</option>
          <option value={'finish carpenter'}>finish carpenter</option>
        </NativeSelect>
      </div>
      <div>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Skill Level
        </InputLabel>
        <NativeSelect
          value={proInfo.skill}
          name='skill'
          onChange={handleChange}
        >
          <option value={'level 1'}>level 1</option>
          <option value={'level 2'}>level 2</option>
        </NativeSelect>
      </div>
    </>
  )
}

export default ProfessionalInformation;