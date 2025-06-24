import { Link, NavLink } from "react-router-dom";
// import "./header.css"
import { Menu } from "antd";
import {
    HomeOutlined,
    UsergroupDeleteOutlined,
    BookOutlined
} from '@ant-design/icons';
import { useState } from "react";
import { useLocation } from "react-router-dom";



const Header = () => {
    const location = useLocation();

    // Lấy path hiện tại từ URL, ví dụ: "/users"
    const path = location.pathname;

    // Lay path theo key của item trong items, được quản lý bởi current
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        // setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: '/',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>User</Link>,
            key: '/users',
            icon: <UsergroupDeleteOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: '/books ',
            icon: <BookOutlined />,
            // children: [
            //     {
            //         type: 'group',
            //         label: 'Item 1',
            //         children: [
            //             { label: 'Option 1', key: 'setting:1' },
            //             { label: 'Option 2', key: 'setting:2' },
            //         ],
            //     },
            //     {
            //         type: 'group',
            //         label: 'Item 2',
            //         children: [
            //             { label: 'Option 3', key: 'setting:3' },
            //             { label: 'Option 4', key: 'setting:4' },
            //         ],
            //     },
            // ],
        },
        {
            label: <Link to={"/register"}>Register</Link>,
            key: '/register',
            icon: <UsergroupDeleteOutlined />,
        },
        {
            label: <Link to={"/login"}>Login</Link>,
            key: '/login',
            icon: <UsergroupDeleteOutlined />,
        },

    ];
    return (<ul>
        <Menu
            onClick={onClick}
            selectedKeys={[path]} // đổi lại ko dùng current nữa
            mode="horizontal"
            items={items}
        />
    </ul>
    );
}

export default Header;