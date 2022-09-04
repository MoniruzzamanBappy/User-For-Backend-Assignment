const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */

   router.route('/all').get(userController.getAllUsers)
   router.route('/random').get(userController.getUser)
   router.route('/save').post(userController.saveAUser)
   router.route('/update/:_id').patch(userController.updateUser)
   router.route('/bulk_update').patch(userController.bulkUpdateUser)
   router.route('/delete/:_id').delete(userController.deleteUser)

module.exports = router;



