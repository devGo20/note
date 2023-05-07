import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css';
// export const revalidate = 3; // false (default) | 0 | number ISR rendering
export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 보여주기
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 }, // fetch 주기 설정. 0으로 설정 시 SSR
    cache: 'no-store', // SSR rendering
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
