import React, {ReactNode} from 'react';
import {Layout} from 'antd';
import {Content} from 'antd/lib/layout/layout';
import {Header, Footer} from '../../components';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
    return (
        <Layout className="layout">
            <Header/>
            <Content>
                <div>
                    {children}
                </div>
            </Content>
            <Footer/>
        </Layout>
    );
};

export default AppLayout;
