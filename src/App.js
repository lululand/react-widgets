import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate options={options} />;
  }
};

export default () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

// export default () => {
//   const [selected, setSelected] = useState(options[0]);
//   const [showDropdown, setShowDropdown] = useState(true);

//   return (
//     <div>
//       <br />
//       <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
//       <br /><br />
//       {showDropdown ?
//         <Dropdown
//         selected={selected}
//         onSelectedChange={setSelected}
//         options={options}
//          /> : null
//         }
//     </div>
//   );
// };
