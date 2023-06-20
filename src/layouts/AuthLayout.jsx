import { Outlet } from 'react-router-dom'


//Components



function AuthLayout() {
  return (
    <div className='bg-zinc-900'>
      <Outlet />
    </div>
  )
}

export default AuthLayout