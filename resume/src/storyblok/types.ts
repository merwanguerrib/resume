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