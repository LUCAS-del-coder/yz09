"use client";

import { Link } from "@/i18n/routing";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  className?: string;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  baseUrl,
  className = "" 
}: PaginationProps) {
  const getPageUrl = (page: number) => {
    if (page === 1) return baseUrl;
    return `${baseUrl}?page=${page}`;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta);
         i <= Math.min(totalPages - 1, currentPage + delta);
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <nav 
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-label="Pagination"
    >
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="px-4 py-2 bg-dark-lighter rounded-lg text-white hover:bg-gold/20 border border-dark-lightest transition-colors"
        >
          ← ရှေ့
        </Link>
      ) : (
        <span className="px-4 py-2 bg-dark-lighter rounded-lg text-gray-500 border border-dark-lightest cursor-not-allowed">
          ← ရှေ့
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return (
              <span key={`dots-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={getPageUrl(pageNum)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gold text-dark font-bold'
                  : 'bg-dark-lighter text-white hover:bg-gold/20 border border-dark-lightest'
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="px-4 py-2 bg-dark-lighter rounded-lg text-white hover:bg-gold/20 border border-dark-lightest transition-colors"
        >
          နောက် →
        </Link>
      ) : (
        <span className="px-4 py-2 bg-dark-lighter rounded-lg text-gray-500 border border-dark-lightest cursor-not-allowed">
          နောက် →
        </span>
      )}
    </nav>
  );
}

