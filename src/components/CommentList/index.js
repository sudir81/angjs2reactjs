import angular from "angular";
import { reactToAngularComponent } from "../../services/AngularReactHelper";
import CommentList from "./presenter";
import SamplePage from "../SamplePage";

module.exports = angular
  .module("ngReactExample.commentList", [])
  .component("commentList", reactToAngularComponent(CommentList));

module.exports = angular
  .module("ngReactExample.samplePage", [])
  .component("samplePage", reactToAngularComponent(SamplePage));
