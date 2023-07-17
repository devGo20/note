import { getProducts } from '@/service/products';
import Link from 'next/link';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from "../../../public/images/clothes.jpg"
import Image from 'next/image';
// export const revalidate = 3; // false (default) | 0 | number ISR rendering

export default async function ProductsPage() {
  // throw new Error(); // 에러 발생 코드
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 보여주기
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="Clothes"/>
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
