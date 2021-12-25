import Layout, { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { Outlet } from 'react-router'
import MyHeader from './header'

const MainLayout = () => {
    return (
        <Layout>
            <MyHeader />
            <Layout>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout
