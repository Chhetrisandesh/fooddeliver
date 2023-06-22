import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Card from '../component/Card';
import Carousel from '../component/Carousel';

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div> <Carousel /></div>
      <div className='m-3'> <Card /></div>
      <div className='m-3'> <Card /></div>
      <div className='m-3'> <Card /></div>
      <div className='m-3'> <Card /></div>
      <div><Footer /></div>

    </div>
  );
}