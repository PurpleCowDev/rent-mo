import express from 'express';
import { createListing, getAllListings, updateListing, getListingsByUser, deleteListing, getSpecificListing } from '../controllers/listingController';
import authenticateUser from '../middleware/auth';

const router = express.Router();

router.route('/listing/create').post(authenticateUser, createListing);
router.route('/listing/my-listings').get(authenticateUser, getListingsByUser);
router.route('/listings').get(getAllListings);
router.route('/listing/:id').patch(authenticateUser, updateListing).delete(authenticateUser, deleteListing).get(getSpecificListing);

export default router;
