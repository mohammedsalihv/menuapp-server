import menu from "../models/Menu.js";


export const menuList = async (req, res) => {
  try {
    const menuLists = await menu.find({});

    res.status(200).json(menuLists);
  } catch (error) {
    console.error("Error fetching menus:", error);

    res.status(500).json({ message: "Error fetching menus" });
  }
}

export const addMenu = async (req, res) => {
  const { menuName, description } = req.body;
  console.log(req.body);

  try {
    const newMenu = new menu({
      menuName: menuName,
      menuDescription: description,
    });

    await newMenu.save();

    res
      .status(201)
      .json({ message: "Menu created successfully", menu: newMenu });
  } catch (error) {
    console.error("Error while adding menu:", error);
    res
      .status(500)
      .json({ message: "Error while adding menu. Please try again." });
  }
};
