import React from 'react';
import { Tabs } from 'antd';
import './Menu.css';
import {useLocation} from "react-router-dom";
import divider from "../../assets/divider-b.png"
const { TabPane } = Tabs;

interface MenuItem {
    key: string;
    name: string;
    description: string;
    price: string;
}

interface MenuData {
    [category: string]: MenuItem[];
}

interface FoodMenuProps {
    menuData: MenuData;
    bgClassName: string;
    title: string;
}

const FoodMenu: React.FC<FoodMenuProps> = ({ menuData, bgClassName, title }) => {
    const location = useLocation();
    return (
        <div className="foodMenu">
            <div key={location.pathname} className={bgClassName}>
            <h1 className="food-menu-title">{title}</h1>
                <div className="food-menu-overlay"></div>
                <div className="food-menu-bg"></div>
            </div>
            <Tabs className="menuTabs" defaultActiveKey="1" centered>
                {Object.entries(menuData).map(([key, items], index) => (
                    <TabPane className="menu-pane" tab={key.charAt(0).toUpperCase() + key.slice(1)} key={index + 1}>
                        <table className="menuTable">
                            <tbody>
                            {items.map(item => (
                                <tr key={item.key}>
                                    <td className="menu-item">
                                        <div className="menu-item-name"><b>{item.name}</b></div>
                                        <div className="menu-item-description">{item.description}</div>
                                    </td>
                                    <td className="menu-item-price">{item.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="menu-divider">
                        <img src={divider} alt="divider"/>
                    </div>
                    </TabPane>
                ))}
            </Tabs>

        </div>
    );
};

export default FoodMenu;
