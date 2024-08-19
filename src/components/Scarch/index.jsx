// SearchInput.js

import { Form } from "react-bootstrap";

const SearchInput = () => {
  return (
    <Form.Group className="has-search border-search-border rounded">
      <span className="fa fa-search form-control-feedback "></span>
      <Form.Control type="text" className="form-control" placeholder="Search" />
    </Form.Group>
  );
};

export default SearchInput;
