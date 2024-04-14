import React, { ReactNode } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Content, Footer } from 'antd/lib/layout/layout';

// Define an interface for the component props
interface AppLayoutProps {
    children: ReactNode;  // This will allow any valid React children
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <Layout className="layout">
            <Header />
            <Content >
                <div >
                    {children}
                </div>
            </Content>
        </Layout>
    );
};

export default AppLayout;
