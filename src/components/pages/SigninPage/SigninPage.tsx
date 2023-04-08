import React, { ChangeEvent, useState } from 'react';
import rules from '../../utils/rules';

const SigninPage: React.FC = () => {
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
      <button data-testid="signin-button" disabled={disabled}>
        로그인
      </button>
    </>
  );
};

export default SigninPage;
