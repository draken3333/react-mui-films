import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Favorite</Button>
      <Button>Watch</Button>
      <Button>Details</Button>
    </ButtonGroup>
  );
}