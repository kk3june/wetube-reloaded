import Video from "../models/Video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {
    return res.render("home", { pageTitle: "Home", videos: [] });
  });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watch ${video.title}` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing ${video.title}` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id].title = title;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
