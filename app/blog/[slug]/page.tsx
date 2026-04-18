import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props) {
  await params;
  return {};
}

export default async function BlogPostPage({ params }: Props) {
  await params;
  notFound();
}
