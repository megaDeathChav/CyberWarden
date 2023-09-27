'use client'
import { useState, useEffect } from 'react';
import BarGraph from '@/components/BarCharts';
import PieGraph from '@/components/PieCharts';
import { ComplexNavbar } from '@/components/Navbar';
import { MembersTable } from '@/components/Datagrid';
import { CarouselDefault } from '@/components/Carousel';

export default function Home() {
  return (
    <main className='flex flex-col items-center h-3/4'>
        <div className='w-3/4 h-1/4 my-4'>
          <CarouselDefault />
        </div>
        
        <div className='w-3/4 h-1/3'>
          <MembersTable />
        </div>
    </main>
  );  
}
