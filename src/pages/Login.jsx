import { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    setUser(decoded);
    // After login, simulate redirect or save to state/context
    setTimeout(() => {
      navigate('/profile');
    }, 1500);
  };

  const handleError = () => {
    console.log('Login Failed');
    alert("Google Login Failed. Please try again.");
  };

  // Ensure this is loaded in a real app from .env like import.meta.env.VITE_GOOGLE_CLIENT_ID
  // Using a mock placeholder client ID. The user will need a real one for production.
  const clientId = "8729352934-some-mock-client-id-here.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="container" style={{ paddingTop: '120px', minHeight: '80vh', maxWidth: '500px' }}>
        <div className="card text-center animate-fade-up">
          <h2 style={{ color: 'var(--on-surface)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Customer Login</h2>
          <p className="text-muted mb-8">Access your bespoke orders and measurements.</p>
          
          {user ? (
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <img src={user.picture} alt={user.name} style={{ width: '60px', borderRadius: '50%', marginBottom: '1rem' }} />
                <h3>Welcome back, {user.name}!</h3>
                <p className="text-muted">{user.email}</p>
              </div>
              <p className="text-gold mt-4">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                shape="rectangular"
                theme="outline"
                text="signin_with"
                size="large"
              />
            </div>
          )}

          <div style={{ marginTop: '2rem', fontSize: '0.85rem' }} className="text-muted">
            <p>Don't have an account? Simply log in with Google to get started.</p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
