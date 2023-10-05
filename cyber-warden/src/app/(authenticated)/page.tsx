'use client'
import { useState, useEffect } from 'react';
import BarGraph from '@/components/BarCharts';
import PieGraph from '@/components/PieCharts';
import { ComplexNavbar } from '@/components/Navbar';
import Datagrid from '@/components/Datagrid';
import { CarouselDefault } from '@/components/Carousel';
import { DialogCustomAnimation } from '@/components/Dialoge';

export default function Home() {
  const [open, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(!open);

  return (
    <main className='flex flex-col items-center h-3/4'>
        <div className='w-3/5 h-3/5 my-10'>
          <CarouselDefault />
        </div>
        
        <div className='w-3/4 h-3/4'>
          <Datagrid handleDialogOpen={handleDialogOpen}/>
          <DialogCustomAnimation open={open} handleOpen={handleDialogOpen} />
        </div>
    </main>
  );  
}
 