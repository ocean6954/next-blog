import Meta from 'components/meta'
import Hero from 'components/hero'
import Container from 'components/container'
import PostBody from '../components/post-body'
import Contact from 'components/contact'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '../components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              こんにちは。私の名前は太郎です。日本で生まれ日本で育ち、日本で生きています。日本人はあえてこのようなことは言わないかもしれませんが、この広い世界の中で日本の、
              もっと言えばある都道府県のそしてさらにある一点で生を受けたというのは大変な奇跡であるように感じます。
            </p>
            <h2>日本の良さ</h2>
            <p>
              であるからこそ改めて自覚する必要がありますし、そして何より日本というは良い国です。他の国に比べたら犯罪率も低いですし、安全に生きていく上で日本というのは
              ありがたい存在です。
            </p>
            <h3>日本の悪さ</h3>
            <p>
              もちろん、日本というのは良いところばかりではないかとも思われます。よく、「日本人は外国人に対しては優しいが日本人に対しては厳しい」と言われたりします。
              同族嫌悪というやつなのでしょうか。不思議な性質であると思います。普通は逆になりそうなものですが、日本人は外面や体裁を大事にするということの現れなのでしょうか。
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
