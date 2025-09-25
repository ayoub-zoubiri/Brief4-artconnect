import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminHeader from '../components/Admin/AdminHeader';
import AdminContentList from '../components/Admin/AdminContentList';

const Admin = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <AdminHeader />

      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 p-6">
          <AdminContentList />
        </div>
      </div>


    </div>
  );
};

export default Admin;