import React from 'react';
import reactDom from 'react-dom';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function Breakpoint(props) {
  const { id, timeDisabled, breakpointsArr, setbreakpointsArr } = props;

  // Get the changing value of time and set its state on change

  let minuteZeroOrEntry;

  if (id === 0) {
    minuteZeroOrEntry = <h3 className='py-3'>Minute: 0</h3>;
  } else {
    minuteZeroOrEntry = (
      <div>
        <label className='py-3' for='minute'>
          Minute:{' '}
        </label>
        <input
          className='w-10'
          id='minute'
          name='minuteInput'
          value={breakpointsArr[id].minute}
          type='text'
          onChange={(e) => {
            const updateState = [...breakpointsArr];
            updateState[id].minute = e.target.value * 1;
            setbreakpointsArr(updateState);
          }}
        ></input>
      </div>
    );
  }

  // // this was previously written by AL, and is being replaced by CV and AMG on thursday around 4:40pm

  //   <input
  //     className='shadow appearance-none rounded border border-borderColor w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
  //     name='minuteInput'
  //     min={
  //       breakpointsArr[id - 1] !== undefined
  //         ? breakpointsArr[id - 1].minute + 15
  //         : 0
  //     }
  //     value={breakpointsArr[id].minute}
  //     type='number'
  //     onChange={(e) => {
  //       const updateState = [...breakpointsArr];
  //       updateState[id].minute = e.target.value;
  //       setbreakpointsArr(updateState);
  //     }}
  //     disabled={timeDisabled}
  //   ></input>

  return (
    <div className='m-5 rounded border border-borderColor w-11/12 lg:w-3/12 p-5'>
      {minuteZeroOrEntry}
      <br></br>
      <div className='m-3'>
        <label>
          <strong>BPM</strong>
        </label>
        <Slider
          type='number'
          onChange={(e) => {
            const updateState = [...breakpointsArr];
            updateState[id].bpm = e.target.value;
            setbreakpointsArr(updateState);
          }}
          value={breakpointsArr[id].bpm}
          min={30}
          max={200}
          valueLabelDisplay='on'
        />
      </div>
      <div className='m-3'>
        <label>
          <strong>Danciness</strong>
        </label>
        <Slider
          type='number'
          onChange={(e) => {
            const updateState = [...breakpointsArr];
            updateState[id].custom_params.danciness = e.target.value / 100;
            setbreakpointsArr(updateState);
          }}
          value={breakpointsArr[id].custom_params.danciness * 100}
          min={0}
          max={100}
          step={1}
          valueLabelDisplay='on'
        />
      </div>
      <div className='m-3'>
        <label>
          <strong>Speechiness</strong>
        </label>
        <Slider
          type='number'
          onChange={(e) => {
            const updateState = [...breakpointsArr];
            updateState[id].custom_params.speechiness = e.target.value / 100;
            setbreakpointsArr(updateState);
          }}
          value={breakpointsArr[id].custom_params.speechiness * 100}
          min={0}
          max={100}
          step={1}
          valueLabelDisplay='on'
        />
      </div>
    </div>
  );
}
export default Breakpoint;
