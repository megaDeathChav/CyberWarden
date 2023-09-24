"use client";

import BarGraph from '@/components/BarCharts';
import PieGraph from '@/components/PieCharts';

export default function Home() {

  return (
  <div style={{ display: 'flex', height: '100%' }}>

    <main className="min-h-screen max">
        <div style ={{display: "flex"}}> {/* temporary location */}
          {/* <BarGraph /> */}
          {/* <PieGraph /> */}
        </div>
    </main>
  </div>
  )
}
