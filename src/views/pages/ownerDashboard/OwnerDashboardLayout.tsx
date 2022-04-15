import { Outlet } from 'react-router-dom';
import DashboardMain from '../../components/common/DashboardMain/DashboardMain';
import OwnerDashboardSideNav from '../../components/ownerComponents/OwnerDashboardSideNav/OwnerDashboardSideNav';

const OwnerDashboardLayout = () => {
    return (
        <div>
            <div>
                <OwnerDashboardSideNav></OwnerDashboardSideNav>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <DashboardMain></DashboardMain>
            </div>
        </div>
    );
};

export default OwnerDashboardLayout;