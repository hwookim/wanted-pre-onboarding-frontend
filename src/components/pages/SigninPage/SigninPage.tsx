import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apis from '../../../apis';
import { USER_SESSION } from '../../../utils/constnats';
import UserForm from '../../organisms/UserForm/UserForm';
import User from '../../../types/User';

const SigninPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(USER_SESSION);
    if (token) {
      navigate('/todo');
    }
  }, []);

  const handleSignin = async (user: User) => {
    const { status, data } = await apis.signin(user);
    if (status !== 200) return;

    localStorage.setItem(USER_SESSION, data.access_token);
    navigate('/todo');
  };

  return (
    <div className="mt-20 w-full flex justify-center">
      <Link className="absolute top-10 right-10 text-lg" to="/signup">
        회원가입
      </Link>
      <UserForm type="signin" onSubmit={handleSignin} />
    </div>
  );
};

export default SigninPage;
