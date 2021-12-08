import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";

  // const usernameExists = await User.exists({ username });
  // if (usernameExists) {
  //   return res.render("Join", {
  //     pageTitle,
  //     errorMessage: "This username is already taken.",
  //   });
  // }

  // const emailExists = await User.exists({ email });
  // if (emailExists) {
  //   return res.render("Join", {
  //     pageTitle,
  //     errorMessage: "This email is already taken.",
  //   });
  // }

  // usermane, email 동시에 validation
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.render("Join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }

  // password validation
  if (password !== password2) {
    return res.render("Join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/");
};

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Log in");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");
