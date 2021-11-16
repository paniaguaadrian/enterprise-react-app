import React from 'react';

// Material UI Components
import { Container, makeStyles } from '@material-ui/core';

// Custom Components
import Header from './Header';
import ProductCreateForm from './ProductCreateForm';

const useStyles = makeStyles(theme => ({}));

const ProductCreateView = () => {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <ProductCreateForm />
    </Container>
  );
};

export default ProductCreateView;
