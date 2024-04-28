import React, {ReactNode} from 'react';
import {Layout} from 'antd';
import {Content} from 'antd/lib/layout/layout';
import {Header, Footer} from '../../components';
import {useLocation} from "react-router-dom";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
    const location = useLocation();
    return (
        <Layout className="layout">
            <Header/>
            <Content>
                <div>
                    {children}
                </div>
            </Content>
            {location.pathname !== '/reservations' && <Footer />}
        </Layout>
    );
};

export default AppLayout;
