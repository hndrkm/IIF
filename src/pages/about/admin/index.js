import Charges from "../../../components/admin/Charges"
import Important_charges from "../../../components/admin/Important_charges"
import SideBarAbout from "../../../components/Page/Submenu/SideBarAbout"

function Admin() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex w-4/5">
        <div className=" flex w-1/4  bg-gray-100 justify-end mt-8">
          <div className="m-5">
            <SideBarAbout></SideBarAbout>
          </div>
        </div>
        <div className="w-3/4">
          <Important_charges />
          <Charges />
        </div>
      </div>
    </div>
  )
    
    
  }
  
  export default Admin
