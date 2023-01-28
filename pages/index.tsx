// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from 'src/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import Hero from 'components/hero'
import Container from 'components/container'

export default function Home() {
  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  )
}
