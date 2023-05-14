const { loadFiles } = require("../Functions/fileLoader");

async function loadSelectMenus(client) {
  console.time("Select Menu Events Loaded");

  client.selectMenu = new Map()
  const selectmenu = new Array();

  const Files = await loadFiles("SelectMenus");
  Files.forEach((file) => {
    try {
      const selectMenu = require(file);

      client.selectMenus.set(selectMenu.id, selectMenu);
      selectmenu.push({ ID: selectMenu.id, Status: "✅" });

    } catch (error) {
      selectmenu.push({ ID: file.split("/").pop().slice(0, -3), Status: "❌" });
    }
  });

  console.table(selectmenu, ["ID", "Status"]);
  console.info("\n\x1b[36m%s\x1b[0m", "Loaded Select Menu Events.");
  console.timeEnd("Select Menu Events Loaded");
}

module.exports = { loadSelectMenus };
