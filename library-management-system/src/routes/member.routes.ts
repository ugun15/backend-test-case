import { Router } from 'express';
import { MemberController } from '../controllers/member.controller';

const router = Router();
const memberController = new MemberController();

/**
 * @swagger
 * /api/members:
 *   post:
 *     summary: Create a new member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - name
 *             properties:
 *               code:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Member created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', memberController.create.bind(memberController));

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: List of members
 */
router.get('/', memberController.findAll.bind(memberController));

/**
 * @swagger
 * /api/members/{id}:
 *   get:
 *     summary: Get a member by ID
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Member details
 *       404:
 *         description: Member not found
 */
router.get('/:id', memberController.findOne.bind(memberController));

/**
 * @swagger
 * /api/members/{id}:
 *   put:
 *     summary: Update a member
 *     tags: [Members]
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
 *             properties:
 *               name:
 *                 type: string
 *               penalty:
 *                 type: boolean
 *               penaltyEndDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Member updated successfully
 *       400:
 *         description: Invalid input
 */
router.put('/:id', memberController.update.bind(memberController));

/**
 * @swagger
 * /api/members/{id}:
 *   delete:
 *     summary: Delete a member
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Member deleted successfully
 *       400:
 *         description: Invalid input
 */
router.delete('/:id', memberController.remove.bind(memberController));

export const memberRoutes = router; 