const express = require("express");
const ProductosService = require("../services/products.service");

const Service = new ProductosService();

const router = express.Router();

const BASE = "/";
const BY_ID = "/:id";

router.get(BASE, (req, res) => {
    res.json(Service.findAll())
});

router.post(BASE, (req, res) => {
    const body = req.body;

    res
    .status(201)
    .json({
        message: "Created",
        data: Service.create(body)
    });
});

router.get(BY_ID, (req, res) => {
    const { id } = req.params;
    res.json(Service.findOne(id));
});

router.put(BY_ID, (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json(Service.update(id, body));
});

module.exports = router;
