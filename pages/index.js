import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react';
import FetchApi from '../scripts/fetch_api';

export default function Home() {

  return (
    
    <div>
      <FetchApi/>
    </div>
  )
}
