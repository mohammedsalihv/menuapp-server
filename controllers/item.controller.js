import item from "../models/Item.js";
import menu from "../models/Menu.js";



export const listItems = async (req, res) => {
  const { menuName } = req.query;

  if (!menuName) {
    return res
      .status(400)
      .json({ message: "menuName query parameter is required" });
  }

  try {
    const lists = await item.find({
      menu: { $regex: new RegExp(menuName, "i") },
    });

    if (lists.length === 0) {
      return res
        .status(404)
        .json({ message: `No items found for ${menuName}` });
    }

    res.json(lists);
  } catch (error) {
    console.log("Error fetching items:", error);
    res.status(500).json({ message: "Error fetching items" });
  }
};




export const addItem = async (req, res) => {
  const { itemName, itemPrice, description, menuName } = req.body;

  const price = parseFloat(itemPrice);
  if (isNaN(price)) {
    return res
      .status(400)
      .json({ message: "Item price must be a valid number" });
  }

  try {
    const menuExists = await menu.findOne({ menuName });
    if (!menuExists) {
      return res.status(400).json({ message: "Menu does not exist" });
    }

    const newItem = new item({
      itemName: itemName,
      itemPrice: price,
      itemDescription: description,
      menu: menuName,
    });

    await newItem.save();

    res
      .status(201)
      .json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    console.error("Error while adding item:", error);

    res.status(500).json({ message: "Error while adding item" });
  }
};
