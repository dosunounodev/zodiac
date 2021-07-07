import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProgressBar from 'components/ProgressBar';
import Button from 'components/Button';
import Form from 'components/Form';
import { DataFormPageWrapper, StyledTitle } from './style';

const DataForm = () => {
  const selectedGender = useSelector((state) => state.gender.selectedGender);

  return (
    <DataFormPageWrapper>
      {selectedGender === null && <Redirect to="/Gender"></Redirect>}
      <div>
        <ProgressBar step={2}></ProgressBar>
        <StyledTitle>Ingresa Tus Datos</StyledTitle>
      </div>
      <Form>
        <Button secondary={true} isLink to="/Gender">
          Volver
        </Button>
      </Form>
    </DataFormPageWrapper>
  );
};

export default DataForm;
