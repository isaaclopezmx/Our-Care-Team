// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application";

import HelloController from "./hello_controller";
application.register("hello", HelloController);

import TabulatorController from "./tabulator_controller";
application.register("tabulator", TabulatorController);

import TasksController from "./tasks_controller";
application.register("tasks", TasksController);

import MapboxController from "./mapbox_controller";
application.register("mapbox", MapboxController);
