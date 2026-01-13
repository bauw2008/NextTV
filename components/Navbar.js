'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full px-4 md:px-8 py-4">
      <header className="max-w-7xl mx-auto rounded-xl flex items-center justify-between px-6 py-3" style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      }}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
          <div className="text-primary flex items-center">
            <span className="material-symbols-outlined text-3xl leading-none">smart_display</span>
          </div>
          <h1 className="text-gray-900 text-xl font-bold tracking-tight leading-none">StreamBox</h1>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-md mx-6">
           {/* Minimal search for navbar if needed */}
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="GitHub" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
            <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
            </svg>
          </button>
          <button aria-label="History" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">history</span>
          </button>
          <button
            aria-label="Settings"
            className={`flex items-center justify-center size-10 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer ${pathname === '/settings' ? 'bg-gray-100 text-gray-900' : ''}`}
            onClick={() => router.push('/settings')}
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>
    </div>
  );
};
