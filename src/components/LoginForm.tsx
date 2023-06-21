import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform login logic here, e.g., calling an API

    // Redirect to a different page on successful login
    router.push('/dashboard');
  };

  return (
   
              <form onSubmit={handleSubmit}>
                <div className="col-md-12 mb-4">
                  <div className="field-box">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="field-box">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <button type="submit">Login</button>
              </form>
           
  );
};

export default LoginForm;
