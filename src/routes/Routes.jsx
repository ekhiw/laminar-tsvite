import { useRoutes } from 'react-router-dom';
import Landing  from "../pages/landing";
import NotFound from '../components/NotFound';

export default function AppRoutes() {
    return useRoutes(
        [
            {
                path: '/',
                element: Landing(),
            },
            {
              path: '*',
              element: NotFound(),
            },
            
        ]
    )
}