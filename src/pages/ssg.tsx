import MeowArticle from '@/components/MeowArticle';
import { getProducts, Product } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
  // 데이터를 props 형태로 전달
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
      <MeowArticle />
    </>
  );
}

export async function getStaticProps() {
  // SSG rendering function
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 10,
  };
}
