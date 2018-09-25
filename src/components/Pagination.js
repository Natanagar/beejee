import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PaginationItem, PaginationLink } from 'reactstrap';

class Pagination extends Component {
  render() {
    return (
      <Pagination aria-label="Page navigation">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}
export default Pagination;
