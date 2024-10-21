//Fake database
let fakePosts = [];

//Create a post in a thread
exports.createPost = (req, res) => {
  const threadId = req.params.threadId;
  const newPost = {
    id: fakePosts.length + 1,
    threadId: parseInt(threadId),
    content: req.body.content,
    userId: req.body.userId,
    createdAt: new Date()
  };

  //Send it to the fake database
  fakePosts.push(newPost);
  res.status(201).json(newPost);
};

//Get all posts from a specific thread
exports.getPostsByThread = (req, res) => {
  const threadId = req.params.threadId;
  const posts = fakePosts.filter(p => p.threadId === parseInt(threadId));
  res.status(200).json(posts);
};

//Find the right thread with the righ Id
exports.updatePost = (req, res) => {
  const postId = req.params.id;
  const updatedData = req.body;

  const post = fakePosts.find(p => p.id === parseInt(postId));
  if (!post) {
    return res.status(404).json({ error: 'Inlägg hittades inte '});
  }

  //Update
  post.content = updatedData.content || post.content;

  res.status(200).json(post);
};

//Delete a post
exports.deletePost = (req, res) => {
  const postId = req.params.id;

  const postIndex = fakePosts.findIndex(p => p.id === parseInt(postId));
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Inlägg hittades inte '});
  }

  //Delete post from fake database
  fakePosts.splice(postIndex, 1);
  res.status(200).json({ message: 'Inlägget har raderats' });

};