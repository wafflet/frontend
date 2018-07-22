import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import style from './index.scss'

import { Main } from '@/App/Main'
import { Oops } from '@/App/Oops'

export const App: React.SFC = () => (
  <main className={style.App}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Main} />
        <Route path='/oops' exact={true} component={Oops} />
        <Redirect to='/oops' />
      </Switch>
    </BrowserRouter>
  </main>
)
