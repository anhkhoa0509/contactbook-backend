const { BadRequestError } = require("../errors");
const contactRoutes = require("../routes/contact.model");

exports.create = async (req, res, next) => {
  if (!req.body.name) {
    return next(new BadRequestError(400, "Name can not empty"));
  }

  const contact = new contactRoutes({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    favorite: req.body.favorite === true,
  });

  try {
    const document = await contact.save();
    return res.send(document);
  } catch (error) {
    return next(
      new BadRequestError(500, "An error occurrend while creating the contact")
    );
  }
};
