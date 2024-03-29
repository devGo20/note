import GoProductsButton from '@/components/GoProductsButton';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string; // []안 slug가 key
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
export const revalidate = 3; // false (default) | 0 | number

export default async function ProductPage({ params: { slug } }: Props) {
  // 구조 분해 할당 사용
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound(); // not-found 호출 함수
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1>{product.name} 소개 페이지!</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
      {/* 현재 ProductsPage SSR, onClick은 Client에서 실행 가능, component로 만들어 사용 */}
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  // build할 때 명시된 것을 미리 만들어두는 것
  const proucts = await getProducts();
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 함(SSG)
  return proucts.map((product) => ({
    slug: product.id,
  }));
}
