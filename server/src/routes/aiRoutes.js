import { Router } from "express";
import {
  workoutRecommendation,
  fitnessInsights
} from "../controllers/aiController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.use(protect);

router.post("/recommendation", workoutRecommendation);
router.post("/insights", fitnessInsights);

export default router;
