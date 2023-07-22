import React,{ ReactElement } from 'react'
import { Header } from './Header/Header';
import BottomHeader from './Header/BottomHeader';
import Footer from './Footer';

interface IProps{
    children: ReactElement;
}

const RootLayout = ({children}:IProps) => {
  return (
    <>
        <Header />
        <BottomHeader />
            {children}
        <Footer />
    </>
  )
}

export default RootLayout