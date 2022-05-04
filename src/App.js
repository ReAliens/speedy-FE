import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';

const App = () => (
  <BrowserRouter>
    <div className="h-screen w-screen">
      <AppRoutes />
    </div>
  </BrowserRouter>
);

export default App;
