export const trending = (req, res) => {
  const videos = [
    {
      title: "Frist Video",
      rating: 5,
      comments: 2,
      createdAt: "2 mins ago",
      views: 52,
      id: 0,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 mins ago",
      views: 1,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 mins ago",
      views: 52,
      id: 2,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("see");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
