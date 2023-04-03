import SearchHeader from '@/components/SearchHeader';
import '../../app/globals.css';

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      <div>{children}</div>
    </div>
  );
}
