'use strict';

module.exports = (app, db) => {

  // GET all Materias
  app.get('/Materias', (req, res) => {
    db.Materias.findAll({
        attributes: ['Materia']
    })
      .then(Materias => {
        res.json(Materias);
      });
  });

  // GET Depto by id
  app.get('/Materias/:id', (req, res) => {
    const id = req.params.id;
    db.Materias.find({
      where: { id: id},
      attributes: ['Materia']
    })
      .then(Materias => {
        res.json(Materias);
      });
  });

   // POST single si lo estoy copiando y cambiando  alv 7u7
  app.post('/Materias', (req, res) => {
    const Materia = req.body.Materia;
    db.Materia.create({
      Materia:Materia
     
    })
      .then(newMateria=> {
        res.json(newMateria);
      })
  });

  // PATCH 
  app.patch('/Materias/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.Materias.find({
      where: { id: id }
    })
      .then(Materias => {
        return Materias.updateAttributes(updates)
      })
      .then(updatedMaterias => {
        res.json(updatedMaterias);
      });
  });

  // DELETE 
  app.delete('/Materias/:id', (req, res) => {
    const id = req.params.id;
    db.Materias.destroy({
      where: { id: id }
    })
      .then(deletedMaterias => {
        res.json(deletedMaterias);
      });
  });
};