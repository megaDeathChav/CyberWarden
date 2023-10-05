'use client'
import { useState, useEffect } from 'react';
import BarGraph from '@/components/BarCharts';
import PieGraph from '@/components/PieCharts';
import { ComplexNavbar } from '@/components/Navbar';
import Datagrid from '@/components/Datagrid';
import { CarouselDefault } from '@/components/Carousel';

export default function Home() {
  return (
    <main className='flex flex-col items-center h-3/4'>
        <div className='w-3/5 h-3/5 my-10'>
          <CarouselDefault />
        </div>
        
        <div className='w-3/4 h-3/4'>
          <Datagrid />
        </div>
    </main>
  );  
}
 