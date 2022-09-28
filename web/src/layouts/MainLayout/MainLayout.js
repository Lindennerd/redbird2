import Navbar from "src/components/Navbar/Navbar"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-16 p-2">{children}</main>
    </>
  )
}

export default MainLayout
