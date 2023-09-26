'use client'
import { useState, useEffect } from 'react';
import BarGraph from '@/components/BarCharts';
import PieGraph from '@/components/PieCharts';
import { ComplexNavbar } from '@/components/Navbar';
import { MembersTable } from '@/components/Datagrid';
import { CarouselDefault } from '@/components/Carousel';

export default function Home() {
  return (
      <main className='flex flex-col h-full w-full overflow-clip'>
        <div className=''>
          <ComplexNavbar />
        </div>
        <div className='flex flex-col h-full w-full items-center'>
          <div className='mt-10 mb-10 h-1/6 w-7/8'>
            <CarouselDefault />
          </div>
          <div className='h-1/2 w-3/4'>
            <MembersTable />
          </div>
        </div>
      </main>
  );  
}
