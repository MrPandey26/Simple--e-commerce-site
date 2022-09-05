const express = require('express');
const router = express.Router();


const {returnAllProducts, returnSingleProducts,createProduct,replaceProduct,updateProduct,deleteproduct} = require('../controllers/product');

router.get('/',returnAllProducts);

router.get('/:productID',returnSingleProducts);



router.post("/",createProduct);
router.put("/:productID",replaceProduct);
router.patch("/:productID",updateProduct);
router.delete("/:productID",deleteproduct);

module.exports = router;
