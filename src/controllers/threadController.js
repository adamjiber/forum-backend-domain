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

//Update a thread
exports.updateThread = (req, res) => {
  const threadId = req.params.id;
  const updatedData = req.body;

  const thread = fakeThreads.find(t => t.id === parseInt(threadId));
  if (!thread) {
    return res.status(404).json({ error: "Didnt find thread" });
  }

  thread.title = updatedData.title || thread.title;
  thread.content = updatedData || thread.content;

  res.status(200).json(thread);

};

//Delete thread
exports.deleteThread = (req, res) => {
  const threadId = req.params.id;
  const threadIndex = fakeThreads.findIndex(t => t.id === parseInt(threadId));

  if (threadIndex === -1) {
    return res.status(404).json({ error: "Didnt find thread" });
  };

  fakeThreads.splice(threadIndex, 1);
  res.status(200).json({ message: "Thread has been deleted"});
};