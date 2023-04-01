import SearchHeader from '@/components/SearchHeader';
import '../../app/globals.css';

export default function SearchLayout({ children }) {
  return (
    <div className="h-screen">
      <SearchHeader />
      {children}
    </div>
  );
}
