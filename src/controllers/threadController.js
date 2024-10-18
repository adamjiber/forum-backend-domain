//Fake databas
let fakeThreads = [];

//Create a thread
exports.createThread = (req, res) => {
  const newThread = {
    id: fakeThreads.length + 1,
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
    createdAt: new Date()
  };

  fakeThreads.push(newThread);
  res.status(201).json(newThread);
};

//Get all threads
exports.getAllThreads = (req, res) => {
  res.status(200).json(fakeThreads);
};