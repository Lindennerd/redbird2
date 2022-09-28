import NavbarUser from "../NavbarUser/NavbarUser"
import { Link, routes } from '@redwoodjs/router'

const Navbar = () => {
  return (
    <div className={`fixed top-0 z-10 h-16 w-full bg-white bg-opacity-80 p-4`}>
      <div className="flex items-center justify-between">
        <div>
          <Link to={routes.home()}>Redbird</Link>
        </div>
        <NavbarUser />
      </div>
    </div>
  )
}

export default Navbar
