import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../components/atoms/Logo';
import Button from '../components/atoms/Button';
import DumpingDoodle from '../assets/DumpingDoodle.svg';

export default function Home() {
  const history = useHistory();
  return (
    <>
      <header className="flex items-center justify-between py-4">
        <Logo />
        <Button onClick={() => history.push('/forms')}>Login</Button>
      </header>
      <section className="flex justify-center items-center">
        <img
          src={DumpingDoodle}
          alt="dumping doodle svg"
          style={{ height: '452px' }}
        />
      </section>
    </>
  );
}
