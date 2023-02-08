import styles from 'styles/blur-frame.module.css'
import Container from 'components/container'
import Link from 'next/link'

export default function BlurFrame({ children }) {
  return (
    <div className={styles.frame}>
      <Container>{children}</Container>
      <Link href="/blog" className={styles.sideBtn}>
        Recent Blog Post
      </Link>
    </div>
  )
}
