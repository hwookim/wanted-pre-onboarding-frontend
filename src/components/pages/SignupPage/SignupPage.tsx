import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apis from '../../../apis';
import rules from '../../../utils/rules';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const { email, password } = values;
  const disabled = !(rules.email(email) && rules.password(password));

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    const { status } = await apis.signup(values);
    if (status !== 201) return;
    navigate('/signin');
  };

  return (
    <>
      <input
        data-testid="email-input"
        name="email"
        value={email}
        onChange={handleInput}
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <button
        data-testid="signup-button"
        disabled={disabled}
        onClick={handleSignup}
      >
        회원가입
      </button>
    </>
  );
};

export default SignupPage;
