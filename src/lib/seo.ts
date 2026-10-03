import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://metabotics.com';

interface OpenGraphBase {
  type?: 'website' | 'article';
  locale?: string;
  url?: string;
  siteName?: string;
  title?: string;
  description?: string;
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

interface OpenGraphArticle extends OpenGraphBase {
  type: 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateSEO(props: SEOProps): Metadata {
  const url = `${siteUrl}${props.path}`;
  const imageUrl = props.image ? `${siteUrl}${props.image}` : `${siteUrl}/brand/og-image.jpg`;

  const metadata: Metadata = {
    title: props.title,
    description: props.description,
    keywords: props.tags,
    authors: props.authors?.map(name => ({ name })),
    creator: 'Metabotics',
    publisher: 'Metabotics',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: props.type || 'website',
      locale: 'en_US',
      url,
      siteName: 'Metabotics',
      title: props.title,
      description: props.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: props.title,
        },
      ],
      publishedTime: props.publishedTime,
      modifiedTime: props.modifiedTime,
      authors: props.authors,
      tags: props.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title,
      description: props.description,
      images: [imageUrl],
    },
    robots: {
      index: !props.noIndex,
      follow: !props.noFollow,
      googleBot: {
        index: !props.noIndex,
        follow: !props.noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  if (props.type === 'article') {
    const articleOG: OpenGraphArticle = {
      ...metadata.openGraph as OpenGraphArticle,
      type: 'article',
      publishedTime: props.publishedTime,
      modifiedTime: props.modifiedTime,
      authors: props.authors,
      tags: props.tags,
    };
    metadata.openGraph = articleOG;
  }

  return metadata;
}

export const pageTitles = {
  home: 'Metabotics — Software for the Physical World',
  technology: 'Metabotics Technology — Industrial Intelligence Infrastructure',
  applications: 'Metabotics Applications — Intelligent Industrial Systems',
  research: 'Metabotics Research — Industrial AI, Automation & Digital Twins',
  about: 'About Metabotics — Intelligent Industrial Technology',
  contact: 'Contact Metabotics — Build With Us',
  notFound: '404 / System Not Found — Metabotics',
} as const;

export const pageDescriptions = {
  home: 'Intelligent software infrastructure for industrial and metallurgical systems. From physical process to intelligent control.',
  technology: 'The engineering architecture behind intelligent industrial automation. Sensors, edge, AI engine, digital twins, and control.',
  applications: 'Where Metabotics applies: Steel & Foundries, Heat Treatment, Mining & Materials, Energy-Intensive Industries.',
  research: 'Building the computational foundations for industrial intelligence. Digital twins, process optimization, edge computing.',
  about: 'Why Metabotics exists. Building software for the physical world. Vision, team, and research.',
  contact: 'Industrial partnerships, pilot projects, research collaboration, and investment. Let\'s build intelligent systems for the physical world.',
  notFound: 'The requested route does not exist. Return to Metabotics.',
} as const;