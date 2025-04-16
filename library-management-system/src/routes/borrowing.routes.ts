import { Router } from 'express';
import { BorrowingController } from '../controllers/borrowing.controller';

const router = Router();
const borrowingController = new BorrowingController();

/**
 * @swagger
 * /api/borrowings:
 *   post:
 *     summary: Create a new borrowing
 *     tags: [Borrowings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberId
 *               - bookId
 *             properties:
 *               memberId:
 *                 type: string
 *               bookId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Borrowing created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', borrowingController.create.bind(borrowingController));

/**
 * @swagger
 * /api/borrowings:
 *   get:
 *     summary: Get all borrowings
 *     tags: [Borrowings]
 *     responses:
 *       200:
 *         description: List of borrowings
 */
router.get('/', borrowingController.findAll.bind(borrowingController));

/**
 * @swagger
 * /api/borrowings/{id}:
 *   get:
 *     summary: Get a borrowing by ID
 *     tags: [Borrowings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Borrowing details
 *       404:
 *         description: Borrowing not found
 */
router.get('/:id', borrowingController.findOne.bind(borrowingController));

/**
 * @swagger
 * /api/borrowings/{id}/return:
 *   post:
 *     summary: Return a borrowed book
 *     tags: [Borrowings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - returnDate
 *             properties:
 *               returnDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       400:
 *         description: Invalid input
 */
router.post('/:id/return', borrowingController.returnBook.bind(borrowingController));

/**
 * @swagger
 * /api/borrowings/member/{memberId}:
 *   get:
 *     summary: Get active borrowings for a member
 *     tags: [Borrowings]
 *     parameters:
 *       - in: path
 *         name: memberId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of active borrowings
 */
router.get('/member/:memberId', borrowingController.getActiveBorrowings.bind(borrowingController));

export const borrowingRoutes = router; 