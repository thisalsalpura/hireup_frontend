import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_HIREUP_GOOGLE_AUTH_CLIENT_ID}>
        <App />
    </GoogleOAuthProvider>
);