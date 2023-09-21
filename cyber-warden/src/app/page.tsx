import Image from 'next/image';
import Link from 'next/link';
import login from './login/page';
import { DataGrid } from '@mui/x-data-grid';
import RootLayout from './layout';
import CustomSidebar from '../components/CustomSidebar';
import LoginIcon from '@mui/icons-material/Login';



export default function Home() {

  const menuItems = [
    {
      title: 'Login',
      to: '/login',
      icon: <LoginIcon />,
    },
  ];
  
  return (
  <>
    <CustomSidebar menuItems={menuItems} currentPage="Home" />

    <main className="min-h-screen max">
      <div className='flex flex-col items-center justify-center'>
        <div>
          Here is the dashboard
        </div>
        
        <div className='mt-4'>
          <Link href='/login'>Login Here </Link>
        </div>
      </div>
    </main>
  </>
  )
}
