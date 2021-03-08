import React from 'react';

import { Header } from './header';
import { Footer } from './footer';
import { LeftNavigation } from './leftNavigation';

import css from './Layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css.layout}>
      <Header />
      <div className={css.inner}>
        <LeftNavigation />
        <main className={css.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
