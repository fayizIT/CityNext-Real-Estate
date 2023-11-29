const AdminHeader = () => {
    return (
        <div className="sidebar bg-gray-800 p-4 text-white">
          <div className="text-xl font-bold mb-4">Your Logo</div>
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-gray-300">Users</a>
            <a href="#" className="hover:text-gray-300">Properties</a>
            <a href="#" className="hover:text-gray-300">Approve Listing</a>
          </div>
          <div className="mt-auto cursor-pointer hover:text-gray-300">Logout</div>
        </div>
      );
};

export default AdminHeader;