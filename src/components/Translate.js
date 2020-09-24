import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Dutch',
    value: 'nl'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='label'>Enter Text</label>
          <input
            type='text'
            value={text}
            onChange={event => setText(event.target.value)}
          />
          <br />
          <br />
        </div>
      </div>

      <Dropdown
        label='Select a Language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <br />
      <hr />

      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;