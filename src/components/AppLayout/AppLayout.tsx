import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Header from '../Header/Header';
import { Content} from 'antd/lib/layout/layout';


interface AppLayoutProps {
    children: ReactNode;
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
