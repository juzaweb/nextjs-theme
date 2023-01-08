import Header from './Header';
import Footer from './Footer';
import { useState, useEffect, ReactNode } from 'react';
import { getThemeSetting } from '../context/DataHelper';
import { Context } from "../context/Context"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  const [ context, setContext ] = useState(null);

  useEffect(() => {
    getThemeSetting()
        .then(function (response) {
          setContext(response.data);
        })
        .catch(function (error) {
          throw Error(error);
        });
  }, []);

  if (!context) return;

  return (
    <Context.Provider value={[context, setContext]}>
      <Header />
        {children}
      <Footer />
    </Context.Provider>
  )
}
