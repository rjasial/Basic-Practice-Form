import Submission from "../models/Submission.js";

export const showHome = async (req, res) => {
  try{
    const users = await Submission.find().sort({ createdAt: -1 });
    res.render("home", { users });
  }catch(err){
    console.error("Error fetching submissions:", err);
    res.status(500).send("Internal Server Error");
  }

};

export const createUser = async (req, res) => {
const { name, email, zipcode, country } = req.body;

  try{
   await Submission.create({ name, email, zipcode, country });
    res.redirect("/");
  }catch(err){
    console.error("Error saving submission:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const editUser = async (req, res) => {
  try{
    const userId = req.params.id;

    const user = await Submission.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render("edit", { user });
  }catch(err){
    console.error("Error fetching user for edit:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const updateUser = async (req, res) => {
  const { name, email, zipcode, country } = req.body;

  try{
    await Submission.findByIdAndUpdate(req.params.id, { name, email, zipcode, country });
    res.redirect("/");
  }catch(err){
    console.error("Error updating submission:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (req, res) => {
  try{
    await Submission.findByIdAndDelete(req.params.id);
    res.redirect("/");
  }catch(err){
    console.error("Error deleting submission:", err);
    res.status(500).send("Internal Server Error");
  }
};