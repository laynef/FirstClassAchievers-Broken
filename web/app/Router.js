import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// Pages
import MasterPage from './pages/MasterPage'
import MainPage from './pages/MainPage/MainPage'
import TestimonialPage from './pages/TestimonialPage/TestimonialPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'


export default (
    <Route>

        <Route path="/" component={MasterPage}>
            <IndexRoute component={MainPage} />
            <Route path="testimonials" component={TestimonialPage} />
            <Route path="about" component={AboutUsPage} />
            <Route path="profile" component={ProfilePage} />
        </Route>

    </Route>
)
