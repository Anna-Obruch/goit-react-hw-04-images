import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { SearchbarHeader, Form, Button, Input, Search } from './Searchbar.module';

export const Searchbar =({onSubmit})=>{
  const [searchQuery, setSearchQuery] = useState('')
  

  const handleQueryChange = ({ currentTarget: { value } }) => {
    setSearchQuery (value.toLowerCase());
  };

  const handleSubmit = e => {
    const trimSearchQuery = searchQuery.trim();
    e.preventDefault();

    if (trimSearchQuery === '') {
      toast.info('Please, enter search word!');
      return;
    }

    onSubmit(trimSearchQuery);
    setSearchQuery('');
  };


  
    return (
      <SearchbarHeader className="searchbar">
        <Form className="form" onSubmit={handleSubmit}>
          <Input
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={searchQuery}
            onChange={handleQueryChange}
          />

          <Button type="submit" className="button">
            <Search className="button-label">Search</Search>
          </Button>
        </Form>
      </SearchbarHeader>
    );
  }

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};