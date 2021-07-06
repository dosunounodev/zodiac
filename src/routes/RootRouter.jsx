import React from 'react'
import { Route, Switch } from 'react-router-dom';
import PageWrapper from 'components/PageWrapper';
import Home from 'pages/Home';
import Gender from 'pages/Gender';
import DataForm from 'pages/DataForm';
import Horoscope from 'pages/Horoscope';
import NotFound from 'pages/NotFound';

const RootRouter = () => {
  return (
    <PageWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ZodiacApp" component={Home} />
        <Route exact path="/Gender" component={Gender} />
        <Route exact path="/DataForm" component={DataForm} />
        <Route exact path="/Horoscope" component={Horoscope} />
        <Route path="*" component={NotFound} />
      </Switch>
    </PageWrapper>  
  )
}

export default RootRouter
