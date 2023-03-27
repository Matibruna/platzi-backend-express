const express = require("express");
const ProductosService = require("../services/products.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { createProductSchema, readProductSchema, updateProductSchema } = require("../schemas/product.schema");

const PROPERTIES = {
    BODY: "body",
    PARAMS: "params"
}

const Service = new ProductosService();

const router = express.Router();

const BASE = "/";
const BY_ID = "/:id";

router.get(BASE, (req, res) => {
    res.json(Service.findAll())
});

router.post(
    BASE,
    validatorHandler(createProductSchema, PROPERTIES.BODY),
    async (req, res) => {
    const body = req.body;
    res
    .status(201)
    .json({
        message: "Created",
        data: Service.create(body)
    });
});

router.get(
    BY_ID, 
    validatorHandler(readProductSchema, PROPERTIES.PARAMS),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            let product = await Service.findOne(id)
            res.json(product);
        } catch (error) {
            next(error);
        }
    }
);

router.put(
    BY_ID,
    validatorHandler(readProductSchema, PROPERTIES.PARAMS),
    validatorHandler(updateProductSchema, PROPERTIES.BODY),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            let product = await Service.update(id, body);
            res.json(product);
        } catch (error) {
            next(error);
        }
    }
);

router.patch(
    BY_ID,
    validatorHandler(readProductSchema, PROPERTIES.PARAMS),
    validatorHandler(updateProductSchema, PROPERTIES.BODY),
    async (req, res, next) => {
        try {
            
            const { id } = req.params;
            const body = req.body;
            let product = await Service.update(id, body);
            res.json(product);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
