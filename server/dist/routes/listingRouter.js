"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listingController_1 = require("../controllers/listingController");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.route('/listing/create').post(auth_1.default, listingController_1.createListing);
router.route('/listing/my-listings').get(auth_1.default, listingController_1.getListingsByUser);
router.route('/listings').get(listingController_1.getAllListings);
router.route('/listing/:id').patch(auth_1.default, listingController_1.updateListing).delete(auth_1.default, listingController_1.deleteListing).get(listingController_1.getSpecificListing);
exports.default = router;
//# sourceMappingURL=listingRouter.js.map