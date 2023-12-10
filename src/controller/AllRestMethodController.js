import mongoose from "mongoose";

import entityschema from "../model/EntitySchema/entityschema.js";

const eschema = mongoose.model("entity", entityschema);

//save method data subject description
export const addSubject = (req, res) => {
  let saveSubject = new eschema(req.body);

  saveSubject
    .save()
    .then((result) => {
      console.log(result);
      res.json({
        message: "Successfull post request",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error",
        data: err,
      });
    });
};

//fetch method data subject description and searching
export const getSubject = (req, res) => {
  let query = {};
  if (req.query.keyword) {
    query.$or = [
      { channel: { $regex: req.query.keyword, $options: "i" } },
      { description: { $regex: req.query.keyword, $options: "i" } },
      { translations: { $regex: req.query.keyword, $options: "i" } },
      { type: { $regex: req.query.keyword, $options: "i" } }
    ];
  }

  if (req.query.id) {
    query.$or = [{ _id: req.query.id }];
  }

  eschema
    .find(query)
    .then((result) => {
      console.log(result);
      res.json({
        message: "Successfull get request",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error",
        data: err,
      });
    });
};

//fetch by Id method data subject description
export const getSubjectById = (req, res) => {
  eschema
    .findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.json({
        message: "Successfull get request",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error",
        data: err,
      });
    });
};

//Update by Id method data subject description
export const updateSubjectById = (req, res) => {
  eschema
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => {
      console.log(result);
      res.json({
        message: "Successfull Updated",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error",
        data: err,
      });
    });
};

//Delete by Id method data subject description
export const deleteSubjectById = (req, res) => {
  eschema
    .remove({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.json({
        message: "Successfull Deleted",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error",
        data: err,
      });
    });
};

// //Search by Id method data subject description
// export const searchSubjectById = async (req, res) => {
//   let query = {};
//   if (req.query.subject) {
//     query.$or = [{ subject: { $regex: req.query.subject, $options: "i" } }];
//   }

//   let search = await eschema.find(query).populate("data", "subject");
//   return res
//     .status(200)
//     .json({
//       message: "Successfull Search",
//       data: search,
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         message: "Error",
//         data: err,
//       });
//     });
// };
