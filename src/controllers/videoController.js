import Video from "../models/Video";

export const home = async (req, res) => {
  // using callback
  // Video.find({}, (error, videos) => {
  //   if (error) {
  //     return res.render("server-error");
  //   }
  //   return res.render("home", { pageTitle: "Home", videos: [] });
  // });

  //using Promise (async, await)
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
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
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  // here will add a video to the videos array
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAty: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
