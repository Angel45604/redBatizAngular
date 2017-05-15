'use strict';

module.exports = (app, db) => {

  // GET all Deptos
  app.get('/Cat_Deptos', (req, res) => {
    db.Cat_Deptos.findAll({
        attributes: ['Descripciondep']
    })
      .then(Cat_Deptos => {
        res.json(Cat_Deptos);
      });
  });

  // GET Depto by id
  app.get('/Cat_Deptos/:id', (req, res) => {
    const id = req.params.id;
    db.Cat_Deptos.find({
      where: { id: id},
      attributes: ['Descripciondep']
    })
      .then(Cat_Deptos => {
        res.json(Cat_Deptos);
      });
  });

   // POST single tasks
  app.post('/Cat_Deptos', (req, res) => {
    const Descripciondep = req.body.Descripciondeps;
    db.Cat_Deptos.create({
      Descripciondep:Descripciondep
     
    })
      .then(newCat_Deptos=> {
        res.json(newCat_Deptos);
      })
  });

  // PATCH 
  app.patch('/Cat_Deptos/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.Cat_Deptos.find({
      where: { id: id }
    })
      .then(Cat_Deptos => {
        return Cat_Deptos.updateAttributes(updates)
      })
      .then(updatedCat_Depto => {
        res.json(updatedCat_Depto);
      });
  });

  // DELETE 
  app.delete('/Cat_Deptos/:id', (req, res) => {
    const id = req.params.id;
    db.Cat_Deptos.destroy({
      where: { id: id }
    })
      .then(deletedCat_Depto => {
        res.json(deletedCat_Depto);
      });
  });
};