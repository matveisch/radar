import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import App from '../App'
import Contact from '../pages/contact/Contact'
import Services from '../pages/services page/Services'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
