import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_SESSION } from '../../../utils/constnats';
import apis from '../../../apis';
import User from '../../../types/User';
import UserForm from '../../organisms/UserForm/UserForm';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(USER_SESSION);
    if (token) {
      navigate('/todo');
    }
  }, []);

  const handleSignup = async (user: User) => {
    const { status } = await apis.signup(user);
    if (status !== 201) return;
    navigate('/signin');
  };

  return (
    <div className="mt-20 w-full flex justify-center">
      <UserForm type="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default SignupPage;
