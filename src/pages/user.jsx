// import UserForm from "../components/user/user.form";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchUserAPI();
        setUserData(res.data);
    }

    return (
        <>
            <div style={{ padding: "20px" }}>
                <UserForm loadUser={loadUser} />
                <UserTable userData={userData} loadUser={loadUser} />
            </div>
        </>

    );
}

export default UserPage;