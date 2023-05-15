import { TestController } from './Controllers/TestController.js'
import { AuthController } from './Controllers/AuthController.js'

class App {
  testController = new TestController();
  authController = new AuthController();
}

window["app"] = new App();
