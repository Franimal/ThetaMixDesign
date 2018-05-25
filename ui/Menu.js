var menu_menuRoot = null;

function menu_create() {	
		loadAssetFromUrl("https://png.icons8.com/windows/1600/new-by-copy.png", "NewIcon");	

		menu_menuRoot = newMenu("RootMenu");
    
		//billboard(menuRoot);
		moveInFront(menu_menuRoot, 2);
	
		//newMenuItem(menuRoot, "NewIcon", "Cube", "newCube");
		//newMenuItem(menuRoot, "NewIcon", "Sphere", "newSphere");
		//newMenuItem(menuRoot, "NewIcon", "Cylinder", "newCylinder");
		//newMenuItem(menuRoot, "NewIcon", "Plane", "newPlane");
}