import { AppCatalog } from '../../components/AppCatalog/AppCatalog';
import './AppDirectory.css';

interface AppDirectoryProps {
  onInstall: () => void;
}

export function AppDirectory({ onInstall }: AppDirectoryProps) {
  return (
    <div className="app-directory">
      <AppCatalog onInstall={onInstall} />
    </div>
  );
}
