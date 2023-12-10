import {
  addSubject,
  getSubject,
  getSubjectById,
  updateSubjectById,
  deleteSubjectById,
} from "../controller/AllRestMethodController.js";

const allrestmethodroutes = (app) => {
  //get and post routes
  app.route("/api/bilanguage").get(getSubject).post(addSubject);

  //delete and update routes
  app
    .route("/api/bilanguage/:id")
    .get(getSubjectById)
    .delete(deleteSubjectById)
    .put(updateSubjectById);

//   app.route("/api/bilanguage").get(searchSubjectById);
};

export default allrestmethodroutes;
