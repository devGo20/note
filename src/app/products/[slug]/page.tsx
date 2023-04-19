import { notFound } from 'next/navigation';

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
export default function PantsPage({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound(); // not-found 호출 함수
  }
  return <h1>{params.slug} 소개 페이지!</h1>;
}

export function generateStaticParams() {
  // build할 때 명시된 것을 미리 만들어두는 것
  const proucts = ['pants', 'skirt'];
  return proucts.map((product) => ({
    slug: product,
  }));
}
