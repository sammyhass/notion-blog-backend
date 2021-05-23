import { Post } from '@entities/Post';
import { Client } from '@notionhq/client';
import { RequestHandler } from 'express-serve-static-core';

const { NOTION_KEY, NOTION_DB_ID } = process.env;

const client = new Client({ auth: NOTION_KEY });

export const getAllPosts: RequestHandler = async (req, res) => {
  const data = await client.databases.query({
    database_id: NOTION_DB_ID!,
  });

  const posts: Post[] = [];
  for (let post of data.results) {
    const newPost = new Post(
      post.id,
      new Date(post.created_time),
      new Date(post.last_edited_time),
      post.properties
    );
    posts.push(newPost);
  }
  return res.json({
    posts: posts,
  });
};

export const getSinglePost: RequestHandler = async (req, res) => {
  const pageId = req.params.id;

  const data = await client.blocks.children.list({
    block_id: pageId,
  });

  return res.json({
    post: data,
  });
};
