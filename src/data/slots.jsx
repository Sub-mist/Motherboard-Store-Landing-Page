import React from 'react';
export const slots = [
  {
    id: 1,
    title: 'CPU Socket',
    description: 'The heart of the board where the Central Processing Unit (CPU) is installed. The socket type (e.g., LGA1700, AM5) must match the CPU.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
    delay: '0ms',
  },
  {
    id: 2,
    title: 'RAM Slots',
    description: 'These slots hold the Random Access Memory (RAM) modules. Most boards have 2 or 4 slots and support specific types like DDR4 or DDR5.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M4 6h16"></path><path d="M4 18h16"></path><path d="M6 4v16"></path><path d="M18 4v16"></path></svg>,
    delay: '150ms',
  },
  {
    id: 3,
    title: 'PCIe Slots',
    description: 'Peripheral Component Interconnect Express slots are for expansion cards like graphics cards (GPUs), sound cards, and network cards.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15.542v-5.084a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.084a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path><line x1="8" y1="6" x2="8" y2="8.542"></line><line x1="12" y1="6" x2="12" y2="8.542"></line><line x1="16" y1="6" x2="16" y2="8.542"></line></svg>,
    delay: '300ms',
  },
  {
    id: 4,
    title: 'M.2 Slots',
    description: 'Modern, compact connectors for high-speed NVMe Solid State Drives (SSDs), providing the fastest storage performance available today.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"></path><path d="M5.45 5.45 2 9l3.45 3.55"></path><path d="M18.55 18.55 22 15l-3.45-3.55"></path></svg>,
    delay: '450ms',
  },
  {
    id: 5,
    title: 'SATA Ports',
    description: 'Used to connect traditional 2.5" SSDs and Hard Disk Drives (HDDs). Essential for bulk storage and older drive compatibility.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>,
    delay: '600ms',
  },
  {
    id: 6,
    title: 'Power Connectors',
    description: 'The 24-pin ATX and 8-pin CPU connectors receive power from the Power Supply Unit (PSU) to run the entire system.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
    delay: '750ms',
  },
];