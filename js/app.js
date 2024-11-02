import { createPartPanel} from "./components/partPanel.js";
import { dragAndDrop } from './utils/dragAndDrop.js';
import {createCostPanel} from "./components/costPanel.js";


createCostPanel();
createPartPanel();
dragAndDrop();