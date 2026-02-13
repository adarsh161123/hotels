const express = require("express");
const router = express.Router();
const Person = require("../models/person.js");
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());

router.post("/person", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const data = req.body;
    const person = new Person(data);
    await person.save();

    res.status(201).send(person);

    console.log("Person saved successfully");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/person", async (req, res) => {
  try {
    const people = await Person.find({});
    res.status(200).send(people);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// parameterized route to get people by work type

router.get("/:work", async (req, res) => {
  try {
    const workType = req.params.work;
    const people = await Person.find({ work: workType });
    if (
      workType === "Developer" ||
      workType === "Designer" ||
      workType === "Manager" ||
      workType === "Other"
    ) {
      res.status(200).send(people);
    } else {
      res.status(400).send({ error: "Invalid work type" });
    }
    res.status(200).send(people);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    console.log("Update request received for ID:", req.params.id);
    const id = req.params.id;
    const data = req.body;
    const person = await Person.findByIdAndUpdate(id, data, { new: true ,runValidators: true });
    if (!person) {
      return res.status(404).send({ error: "Person not found" });
    }
    res.status(200).send(person);
    console.log("Person updated successfully");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const person = await Person.findByIdAndDelete(id);
    if (!person) {
      return res.status(404).send({ error: "Person not found" });
    }
    res.status(200).send({ message: "Person deleted successfully" });
    console.log("Person deleted successfully");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
