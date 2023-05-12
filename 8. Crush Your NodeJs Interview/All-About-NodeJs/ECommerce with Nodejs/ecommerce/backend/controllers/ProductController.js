const Product = require("../models/product");

exports.create = async (req, res) => {
  try {
    // console.log(req.fields);
    // console.log(req.files);
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    //validations
    switch (true) {
      case !name.trim():
        res.json({ error: "Name is required" });
      case !description.trim():
        res.json({ error: "Description is required" });
      case !price.trim():
        res.json({ error: "Price is required" });
      case !category.trim():
        res.json({ error: "category is required" });
      case !quantity.trim():
        res.json({ error: "Quantity is required" });
      case !shipping.trim():
        res.json({ error: "Shipping is required" });
      case photo && photo.size>1000000: //1000000 mtlb 1mb
        res.json({error:"Image should be less than 1mb in size"});
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};
