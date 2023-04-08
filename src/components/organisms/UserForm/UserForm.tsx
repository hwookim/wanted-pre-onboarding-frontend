import React, { ChangeEvent, useState } from 'react';
import Input from '../../atoms/Input';
import rules from '../../../utils/rules';
import User from '../../../types/User';
import { ErrorResponse } from '../../../apis';

type FormType = 'signup' | 'signin';

export interface UserFormProps {
  type: FormType;
  onSubmit: (user: User) => Promise<void>;
}

const TITLE: Record<FormType, string> = {
  signup: '회원가입',
  signin: '로그인',
};

const UserForm: React.FC<UserFormProps> = (props: UserFormProps) => {
  const { type, onSubmit } = props;

  const [values, setValues] = useState<User>({
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
    try {
      await onSubmit(values);
    } catch (err) {
      const error = err as ErrorResponse;
      const message = error.response?.data.message;
      alert(message);
    }
  };

  return (
    <form className="w-1/3 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-extrabold">{TITLE[type]}</h2>
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
        className="w-full h-10 rounded-md text-white font-bold bg-blue-400 hover:bg-blue-600 disabled:bg-blue-200 disabled:hover:bg-blue-200"
        type="button"
        data-testid={type + '-button'}
        disabled={disabled}
        onClick={handleSignup}
      >
        {TITLE[type]}
      </button>
    </form>
  );
};

export default UserForm;
