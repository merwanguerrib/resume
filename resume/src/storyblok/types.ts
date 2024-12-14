import { ISbStoryData } from "@storyblok/react";

export interface SocialLink {
  url: string;
  Icon: string;
  platform: string;
  component: string;
  _uid: string;
  _editable?: string;
}

export interface BioBlock {
  _uid: string;
  component: string;
  catchPhrase: string;
  biography: string;
  qualities: string[];
  socialLinks: SocialLink[];
  _editable?: string;
}

export interface BioStory extends ISbStoryData {
  content: BioBlock;
}

export interface ArticleImage {
  id: null;
  alt: string | null;
  name: string;
  focus: null;
  title: string | null;
  source: null;
  filename: string;
  copyright: null;
  fieldtype: string;
  meta_data: Record<string, unknown>;
}

export interface ArticleContent {
  Title: string;
  Content: string;
  Description: string;
  Category: string[];
  image: ArticleImage;
  component: 'article';
  _uid: string;
  _editable?: string;
}

export interface ArticleStory extends ISbStoryData {
  content: ArticleContent;
  name: string;
  full_slug: string;
  slug: string;
  published_at: string | null;
  uuid: string;
} 