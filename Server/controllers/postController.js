import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  const { title, content,category, } = req.body;
  const post = await Post.create({ title, content, category,author: req.user.id });
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author', 'name');
  res.json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  console.log("Authenticated user ID:", req.user.id);
console.log("Post author ID:", post.author.toString());

  if (post.author.toString() !== req.user.id)
    return res.status(403).json({ error: 'Unauthorized' });

  post.title = req.body.title;
  post.content = req.body.content;
  post.category = req.body.category;
  await post.save();
  res.json(post);
};


export const getPostsByCategory = async (req, res) => {
  const { category } = req.params;
  console.log("Requested category:", category);
  const posts = await Post.find({ category }).populate('author', 'name');
  res.json(posts);
};

export const deletePost = async (req, res) => {
 const post = await Post.findByIdAndDelete(req.params.id);
   if (post.author.toString() !== req.user.id)
    return res.status(403).json({ error: 'Unauthorized' });

  //await post.deleteOne();
  res.json({ message: 'Post deleted' });
};
