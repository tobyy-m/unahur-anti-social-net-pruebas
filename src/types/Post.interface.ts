import type { User } from './User.interface';

export interface PostTag {
  createdAt?: string;
  updatedAt?: string;
  PostId: number;
  TagId: number;
}

export interface TagBase {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Tag extends TagBase {
  PostTag?: PostTag;
}

export interface Post {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  User?: User;
  Tags?: Tag[];
}

export type NewPost = Pick<Post, "description" | "UserId">;

export interface PostImage {
  id: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  PostId: number;
}

export interface PostComment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  PostId: number;
  UserId: number;
  User?: User;
}

export interface PostWithDetails extends Post {
  images: PostImage[];
  comments: PostComment[];
}