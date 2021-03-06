import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // useEffect for term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 800); // delay of seconds

    return () => {  // cleanup function to cancel timer
      clearTimeout(timerId);
    };
  }, [term]);   // dependency array

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });
  
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map(results => {
    return (
      <div key={results.pageid} className='item'>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org/wiki/${results.title}`}
            className='ui button'>
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{results.title}</div>
          <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label htmlFor=''>Enter Search Term</label>
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          type='text'
          className='input'
        />
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;