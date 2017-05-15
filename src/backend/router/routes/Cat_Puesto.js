'use strict';

module.exports = (app, db) => {

  // GET all Deptos
  app.get('/Cat_Puesto', (req, res) => {
    db.Cat_Puesto.findAll({
        attributes: ['DescripcionPue']
    })
      .then(Cat_Puesto => {
        res.json(Cat_Puesto);
      });
  });

  // GET Depto by id
  app.get('/Cat_Puesto/:id', (req, res) => {
    const id = req.params.id;
    db.Cat_Puesto.find({
      where: { id: id},
      attributes: ['DescripcionPue']
    })
      .then(Cat_Puesto => {
        res.json(Cat_Puesto);
      });
  });

   // POST single tasks
  app.post('/Cat_Puesto', (req, res) => {
    const DescripcionPue = req.body.DescripcionPue;
    db.Cat_Puesto.create({
      DescripcionPue:DescripcionPue
     
    })
      .then(newCat_Puesto=> {
        res.json(newCat_Puesto);
      })
  });

  // PATCH 
  app.patch('/Cat_Puesto/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.Cat_Puesto.find({
      where: { id: id }
    })
      .then(Cat_Puesto => {
        return Cat_Puesto.updateAttributes(updates)
      })
      .then(updatedCat_Puesto => {
        res.json(updatedCat_Puesto);
      });
  });

  // DELETE 
  app.delete('/Cat_Puesto/:id', (req, res) => {
    const id = req.params.id;
    db.Cat_Puesto.destroy({
      where: { id: id }
    })
      .then(deletedCat_Puesto => {
        res.json(deletedCat_Puesto);
      });
  });
};