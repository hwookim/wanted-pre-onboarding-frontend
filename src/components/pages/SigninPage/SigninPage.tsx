import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apis from '../../../apis';
import { USER_SESSION } from '../../../utils/constnats';
import rules from '../../../utils/rules';
import Input from '../../atoms/Input';

const SigninPage: React.FC = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const { email, password } = values;
  const disabled = !(rules.email(email) && rules.password(password));

  useEffect(() => {
    const token = localStorage.getItem(USER_SESSION);
    if (token) {
      navigate('/todo');
    }
  }, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    const { status, data } = await apis.signin(values);
    if (status !== 200) return;

    localStorage.setItem(USER_SESSION, data.access_token);
    navigate('/todo');
  };

  return (
    <>
      <Input
        data-testid="email-input"
        name="email"
        value={email}
        onChange={handleInput}
      />
      <Input
        data-testid="password-input"
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <button
        data-testid="signin-button"
        disabled={disabled}
        onClick={handleSignin}
      >
        로그인
      </button>
    </>
  );
};

export default SigninPage;
