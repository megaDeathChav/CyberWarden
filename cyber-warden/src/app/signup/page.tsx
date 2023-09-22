import Image from 'next/image';
import Link from 'next/link';
import login from '../login/page';
import { DataGrid } from '@mui/x-data-grid';


export default function Signup() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div>
        Here is the dashboard
      </div>
      <div className='mt-4'>
        <Link href='/login'>Login Here </Link>
      </div>
    </main>
  )
}
