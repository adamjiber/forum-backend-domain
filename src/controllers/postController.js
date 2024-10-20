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