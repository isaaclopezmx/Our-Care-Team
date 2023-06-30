// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import DoctorsController from "./doctors_controller"
application.register("doctors", DoctorsController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapboxController from "./mapbox_controller"
application.register("mapbox", MapboxController)

import MultiMapboxController from "./multi_mapbox_controller"
application.register("multi-mapbox", MultiMapboxController)

import PrescriptionFormController from "./prescription_form_controller"
application.register("prescription-form", PrescriptionFormController)

import SpinnerController from "./spinner_controller"
application.register("spinner", SpinnerController)

import TabulatorController from "./tabulator_controller"
application.register("tabulator", TabulatorController)

import TasksController from "./tasks_controller"
application.register("tasks", TasksController)
