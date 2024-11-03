import { droneValues } from "../constants/drone.js";
import { DroneParts } from "../config/parts.js";

function createCostPanel() {
    const droneCostTitle = document.querySelector('.drone__cost__title');
    let totalCost = 0;

    // Loop through each part in DroneParts
    DroneParts.forEach(part => {
        if (Object.values(droneValues).some(value => value.name === part.name)) {
            totalCost += part.price;
        }
    });

    droneCostTitle.textContent = `Cost: ${totalCost}$`
    return totalCost; // Optionally return the total cost if needed
}

export { createCostPanel };
