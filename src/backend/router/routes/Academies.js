'use strict';

module.exports = (app, db) => {

  // GET all Materias
  app.get('/Cat_Academy', (req, res) => {
    db.Cat_Academy.findAll({
        attributes: ['Academy']
    })
      .then(Cat_Academy => {
        res.json(Cat_Academy);
      });
  });

  // GET Depto by id
  app.get('/Cat_Academy/:id', (req, res) => {
    const id = req.params.id;
    db.Cat_Academy.find({
      where: { id: id},
      attributes: ['Academy']
    })
      .then(Cat_Academy => {
        res.json(Cat_Academy);
      });
  });

   // POST single si lo estoy copiando y cambiando  alv 7u7
  app.post('/Cat_Academy', (req, res) => {
    const Academy = req.body.Academy;
    db.Cat_Academy.create({
      Academy:Academy
     
    })
      .then(newCat_Academy=> {
        res.json(newCat_Academy);
      })
  });

  // PATCH 
  app.patch('/Cat_Academy/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.Cat_Academy.find({
      where: { id: id }
    })
      .then(Cat_Academy => {
        return Cat_Academy.updateAttributes(updates)
      })
      .then(updatedCat_Academy => {
        res.json(updatedCat_Academy);
      });
  });

  // DELETE 
  app.delete('/Cat_Academy/:id', (req, res) => {
    const id = req.params.id;
    db.Cat_Academy.destroy({
      where: { id: id }
    })
      .then(deleteCat_Academy => {
        res.json(deleteCat_Academy);
      });
  });
};