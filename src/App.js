import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';


class App extends React.Component {
  render() {
    return (
      <Form>
        <legend>Todo Manager </legend>
        <Input placeholder="Title" required="required" />
        <Input placeholder="Description" required="required" />
        <input type="date" name="Due Date" ></input> 
        <Dropdown color="primary" label="Status"> 
        <DropdownItem >ToDo</DropdownItem> 
        <DropdownItem>Ongoing</DropdownItem> 
        <DropdownItem>Stalled</DropdownItem> 
        <DropdownItem>Done</DropdownItem>
      </Dropdown>
        <Button variant="raised">Submit</Button>
      </Form>
    );
  }
}

export default App ; 
