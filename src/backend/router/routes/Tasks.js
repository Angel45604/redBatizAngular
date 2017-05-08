'use strict';

module.exports = (app, db) => {

  // GET all tasks
  app.get('/Tasks', (req, res) => {
    db.tasks.findAll({
        attributes: ['publicator', 'publicationGroup', 'publicationAssignature','publicationText']
    })
      .then(tasks => {
        res.json(tasks);
      });
  });

  // GET task by id
  app.get('/Tasks/:id', (req, res) => {
    const id = req.params.id;
    db.tasks.find({
      where: { id: id},
      attributes: ['publicator', 'publicationGroup', 'publicationAssignature','publicationText']
    })
      .then(tasks => {
        res.json(tasks);
      });
  });

   // POST single tasks
  app.post('/Tasks', (req, res) => {
    const publicator = req.body.publicator;
    const publicationGroup = req.body.publicationGroup;
    const publicationAssignature = req.body.publicationAssignature;
    const publicationText = req.body.publicationText;
    db.tasks.create({
      publicator:publicator,
      publicationGroup: publicationGroup,
      publicationAssignature:publicationAssignature,
      publicationText:publicationText
    })
      .then(newTask=> {
        res.json(newTask);
      })
  });

  // PATCH 
  app.patch('/task/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.tasks.find({
      where: { id: id }
    })
      .then(task => {
        return tasks.updateAttributes(updates)
      })
      .then(updatedTask => {
        res.json(updatedTask);
      });
  });

  // DELETE 
  app.delete('/task/:id', (req, res) => {
    const id = req.params.id;
    db.tasks.destroy({
      where: { id: id }
    })
      .then(deletedTask => {
        res.json(deletedTask);
      });
  });
};