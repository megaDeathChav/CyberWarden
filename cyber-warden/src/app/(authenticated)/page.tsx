"use client"
import { useState, useEffect } from 'react';
import BarGraph from '@/components/BarCharts';
import PieGraph from '@/components/PieCharts';
import { ComplexNavbar } from '@/components/Navbar';

export default function Home() {
  return (
      <main className='h-full w-full'>
        <div className=''>
          <ComplexNavbar />
        </div>
      </main>
  );  
}
