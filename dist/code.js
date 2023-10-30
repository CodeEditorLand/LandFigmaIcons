/******/ (function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Flag the module as loaded
		/******/ module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/ __webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/ __webpack_require__.d = function (exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter,
			});
			/******/
		}
		/******/
	};
	/******/
	/******/ // define __esModule on exports
	/******/ __webpack_require__.r = function (exports) {
		/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module",
			});
			/******/
		}
		/******/ Object.defineProperty(exports, "__esModule", { value: true });
		/******/
	};
	/******/
	/******/ // create a fake namespace object
	/******/ // mode & 1: value is a module id, require it
	/******/ // mode & 2: merge all properties of value into the ns
	/******/ // mode & 4: return value when already ns object
	/******/ // mode & 8|1: behave like require
	/******/ __webpack_require__.t = function (value, mode) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (
			mode & 4 &&
			typeof value === "object" &&
			value &&
			value.__esModule
		)
			return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, "default", {
			enumerable: true,
			value: value,
		});
		/******/ if (mode & 2 && typeof value != "string")
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function (key) {
						return value[key];
					}.bind(null, key)
				);
		/******/ return ns;
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/ __webpack_require__.n = function (module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module["default"];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, "a", getter);
		/******/ return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/ __webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/ __webpack_require__.p = "";
	/******/
	/******/
	/******/ // Load entry module and return exports
	/******/ return __webpack_require__(
		(__webpack_require__.s = "./src/code.ts")
	);
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "./src/assets/codicon.json5":
			/*!**********************************!*\
  !*** ./src/assets/codicon.json5 ***!
  \**********************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony default export */ __webpack_exports__["default"] = [
					{
						short_name: "account",
						character: "",
						unicode: "EB99",
						description: "person people face user contact outline",
					},
					{
						short_name: "activate-breakpoints",
						character: "",
						unicode: "EA97",
						description: "dot circle toggle switch",
					},
					{
						short_name: "add",
						character: "",
						unicode: "EA60",
						description: "combine plus add more new",
					},
					{
						short_name: "archive",
						character: "",
						unicode: "EA98",
						description: "save box delivery package",
					},
					{
						short_name: "arrow-both",
						character: "",
						unicode: "EA99",
						description: "switch swap",
					},
					{
						short_name: "arrow-down",
						character: "",
						unicode: "EA9A",
						description: "",
					},
					{
						short_name: "arrow-left",
						character: "",
						unicode: "EA9B",
						description: "",
					},
					{
						short_name: "arrow-right",
						character: "",
						unicode: "EA9C",
						description: "",
					},
					{
						short_name: "arrow-small-down",
						character: "",
						unicode: "EA9D",
						description: "",
					},
					{
						short_name: "arrow-small-left",
						character: "",
						unicode: "EA9E",
						description: "",
					},
					{
						short_name: "arrow-small-right",
						character: "",
						unicode: "EA9F",
						description: "",
					},
					{
						short_name: "arrow-small-up",
						character: "",
						unicode: "EAA0",
						description: "",
					},
					{
						short_name: "arrow-up",
						character: "",
						unicode: "EAA1",
						description: "",
					},
					{
						short_name: "beaker",
						character: "",
						unicode: "EA79",
						description: "test lab tube tool",
					},
					{
						short_name: "bell-dot",
						character: "",
						unicode: "EB9A",
						description: "alert notify notification",
					},
					{
						short_name: "bell",
						character: "",
						unicode: "EAA2",
						description: "alert notify notification",
					},
					{
						short_name: "bold",
						character: "",
						unicode: "EAA3",
						description: "text format weight font style",
					},
					{
						short_name: "book",
						character: "",
						unicode: "EAA4",
						description: "library text read open",
					},
					{
						short_name: "bookmark",
						character: "",
						unicode: "EAA5",
						description: "book save later",
					},
					{
						short_name: "briefcase",
						character: "",
						unicode: "EAAC",
						description: "work workplace",
					},
					{
						short_name: "broadcast",
						character: "",
						unicode: "EAAD",
						description: "tower signal connect connection",
					},
					{
						short_name: "browser",
						character: "",
						unicode: "EAAE",
						description: "web internet page window",
					},
					{
						short_name: "bug",
						character: "",
						unicode: "EAAF",
						description: "error issue insect block",
					},
					{
						short_name: "calendar",
						character: "",
						unicode: "EAB0",
						description:
							"day time week month date schedule event planner",
					},
					{
						short_name: "call-incoming",
						character: "",
						unicode: "EB92",
						description: "phone cell voice connection direction",
					},
					{
						short_name: "call-outgoing",
						character: "",
						unicode: "EB93",
						description: "phone cell voice connection direction",
					},
					{
						short_name: "case-sensitive",
						character: "",
						unicode: "EAB1",
						description: "search filter option letters words",
					},
					{
						short_name: "check-all",
						character: "",
						unicode: "EBB1",
						description:
							"checkmark select everything checked mark complete finish done accept approve",
					},
					{
						short_name: "check",
						character: "",
						unicode: "EAB2",
						description:
							"checkmark select everything checked mark complete finish done accept approve",
					},
					{
						short_name: "checklist",
						character: "",
						unicode: "EAB3",
						description:
							"checkmark select everything checked mark complete finish done accept todo task text",
					},
					{
						short_name: "chevron-down",
						character: "",
						unicode: "EAB4",
						description: "twistie tree node folder fold collapse",
					},
					{
						short_name: "chevron-left",
						character: "",
						unicode: "EAB5",
						description: "twistie tree node folder fold collapse",
					},
					{
						short_name: "chevron-right",
						character: "",
						unicode: "EAB6",
						description: "twistie tree node folder fold collapse",
					},
					{
						short_name: "chevron-up",
						character: "",
						unicode: "EAB7",
						description: "twistie tree node folder fold collapse",
					},
					{
						short_name: "chrome-close",
						character: "",
						unicode: "EAB8",
						description: "menu bar window dismiss",
					},
					{
						short_name: "chrome-maximize",
						character: "",
						unicode: "EAB9",
						description: "menu bar window large increase",
					},
					{
						short_name: "chrome-minimize",
						character: "",
						unicode: "EABA",
						description: "menu bar window small decrease",
					},
					{
						short_name: "chrome-restore",
						character: "",
						unicode: "EABB",
						description: "menu bar window",
					},
					{
						short_name: "circle-filled",
						character: "",
						unicode: "EA71",
						description: "dot round small bullet breakpoint",
					},
					{
						short_name: "circle-large-filled",
						character: "",
						unicode: "EBB4",
						description: "dot round bullet",
					},
					{
						short_name: "circle-large-outline",
						character: "",
						unicode: "EBB5",
						description: "dot round bullet",
					},
					{
						short_name: "circle-outline",
						character: "",
						unicode: "EABC",
						description:
							"dot round small bullet unverified breakpoint",
					},
					{
						short_name: "circle-slash",
						character: "",
						unicode: "EABD",
						description: "error block stop disable",
					},
					{
						short_name: "circuit-board",
						character: "",
						unicode: "EABE",
						description: "iot device process lines",
					},
					{
						short_name: "clear-all",
						character: "",
						unicode: "EABF",
						description: "reset remove",
					},
					{
						short_name: "clippy",
						character: "",
						unicode: "EAC0",
						description: "clipboard document edit copy",
					},
					{
						short_name: "close-all",
						character: "",
						unicode: "EAC1",
						description: "remove bulk",
					},
					{
						short_name: "close",
						character: "",
						unicode: "EA76",
						description: "remove x cancel stop miltiply",
					},
					{
						short_name: "cloud-download",
						character: "",
						unicode: "EAC2",
						description: "install import",
					},
					{
						short_name: "cloud-upload",
						character: "",
						unicode: "EAC3",
						description: "export",
					},
					{
						short_name: "cloud",
						character: "",
						unicode: "EBAA",
						description: "online service",
					},
					{
						short_name: "code",
						character: "",
						unicode: "EAC4",
						description: "embed script programming server",
					},
					{
						short_name: "collapse-all",
						character: "",
						unicode: "EAC5",
						description: "bulk fold minimize",
					},
					{
						short_name: "color-mode",
						character: "",
						unicode: "EAC6",
						description: "switch dark light contrast mode toggle",
					},
					{
						short_name: "combine",
						character: "",
						unicode: "EBB6",
						description: "group mix blend",
					},
					{
						short_name: "comment-discussion",
						character: "",
						unicode: "EAC7",
						description: "dialog message bubble chat",
					},
					{
						short_name: "comment",
						character: "",
						unicode: "EA6B",
						description: "dialog message bubble chat",
					},
					{
						short_name: "credit-card",
						character: "",
						unicode: "EAC9",
						description: "payment merchant money",
					},
					{
						short_name: "dash",
						character: "",
						unicode: "EACC",
						description: "line minus subtract hyphen",
					},
					{
						short_name: "dashboard",
						character: "",
						unicode: "EACD",
						description: "panel stats dial",
					},
					{
						short_name: "database",
						character: "",
						unicode: "EACE",
						description: "sql db storage online cloud",
					},
					{
						short_name: "debug-alt-small",
						character: "",
						unicode: "EBA8",
						description: "run",
					},
					{
						short_name: "debug-alt",
						character: "",
						unicode: "EB91",
						description: "run",
					},
					{
						short_name: "debug-breakpoint-conditional-unverified",
						character: "",
						unicode: "EAA6",
						description: "terminal command input compile build",
					},
					{
						short_name: "debug-breakpoint-conditional",
						character: "",
						unicode: "EAA7",
						description: "",
					},
					{
						short_name: "debug-breakpoint-data-unverified",
						character: "",
						unicode: "EAA8",
						description: "",
					},
					{
						short_name: "debug-breakpoint-data",
						character: "",
						unicode: "EAA9",
						description: "",
					},
					{
						short_name: "debug-breakpoint-function-unverified",
						character: "",
						unicode: "EB87",
						description: "",
					},
					{
						short_name: "debug-breakpoint-function",
						character: "",
						unicode: "EB88",
						description: "",
					},
					{
						short_name: "debug-breakpoint-log-unverified",
						character: "",
						unicode: "EAAA",
						description: "",
					},
					{
						short_name: "debug-breakpoint-log",
						character: "",
						unicode: "EAAB",
						description: "",
					},
					{
						short_name: "debug-breakpoint-unsupported",
						character: "",
						unicode: "EB8C",
						description: "",
					},
					{
						short_name: "debug-console",
						character: "",
						unicode: "EB9B",
						description: "",
					},
					{
						short_name: "debug-continue",
						character: "",
						unicode: "EACF",
						description: "",
					},
					{
						short_name: "debug-disconnect",
						character: "",
						unicode: "EAD0",
						description: "stop unplug eject",
					},
					{
						short_name: "debug-pause",
						character: "",
						unicode: "EAD1",
						description: "",
					},
					{
						short_name: "debug-rerun",
						character: "",
						unicode: "EBC0",
						description: "",
					},
					{
						short_name: "debug-restart-frame",
						character: "",
						unicode: "EB90",
						description: "",
					},
					{
						short_name: "debug-restart",
						character: "",
						unicode: "EAD2",
						description: "",
					},
					{
						short_name: "debug-reverse-continue",
						character: "",
						unicode: "EB8E",
						description: "",
					},
					{
						short_name: "debug-stackframe-active",
						character: "",
						unicode: "EB89",
						description: "",
					},
					{
						short_name: "debug-stackframe-dot",
						character: "",
						unicode: "EB8A",
						description: "",
					},
					{
						short_name: "debug-stackframe",
						character: "",
						unicode: "EB8B",
						description: "",
					},
					{
						short_name: "debug-start",
						character: "",
						unicode: "EAD3",
						description: "",
					},
					{
						short_name: "debug-step-back",
						character: "",
						unicode: "EB8F",
						description: "",
					},
					{
						short_name: "debug-step-into",
						character: "",
						unicode: "EAD4",
						description: "",
					},
					{
						short_name: "debug-step-out",
						character: "",
						unicode: "EAD5",
						description: "",
					},
					{
						short_name: "debug-step-over",
						character: "",
						unicode: "EAD6",
						description: "",
					},
					{
						short_name: "debug-stop",
						character: "",
						unicode: "EAD7",
						description: "",
					},
					{
						short_name: "debug",
						character: "",
						unicode: "EAD8",
						description: "",
					},
					{
						short_name: "desktop-download",
						character: "",
						unicode: "EA78",
						description: "install",
					},
					{
						short_name: "device-camera-video",
						character: "",
						unicode: "EAD9",
						description: "movie record capture",
					},
					{
						short_name: "device-camera",
						character: "",
						unicode: "EADA",
						description: "capture picture image",
					},
					{
						short_name: "device-mobile",
						character: "",
						unicode: "EADB",
						description: "phone handheld smartphone",
					},
					{
						short_name: "diff-added",
						character: "",
						unicode: "EADC",
						description: "git change",
					},
					{
						short_name: "diff-ignored",
						character: "",
						unicode: "EADD",
						description: "git change",
					},
					{
						short_name: "diff-modified",
						character: "",
						unicode: "EADE",
						description: "git change",
					},
					{
						short_name: "diff-removed",
						character: "",
						unicode: "EADF",
						description: "git change",
					},
					{
						short_name: "diff-renamed",
						character: "",
						unicode: "EAE0",
						description: "git change",
					},
					{
						short_name: "diff",
						character: "",
						unicode: "EAE1",
						description: "git change",
					},
					{
						short_name: "discard",
						character: "",
						unicode: "EAE2",
						description: "remove delete",
					},
					{
						short_name: "edit",
						character: "",
						unicode: "EA73",
						description: "pencil modify change",
					},
					{
						short_name: "editor-layout",
						character: "",
						unicode: "EAE3",
						description:
							"device position horizontal vertical switch",
					},
					{
						short_name: "ellipsis",
						character: "",
						unicode: "EA7C",
						description: "more kebab dot",
					},
					{
						short_name: "empty-window",
						character: "",
						unicode: "EAE4",
						description: "screen new",
					},
					{
						short_name: "error",
						character: "",
						unicode: "EA87",
						description: "problem issue bug",
					},
					{
						short_name: "exclude",
						character: "",
						unicode: "EAE5",
						description: "gear settings filter",
					},
					{
						short_name: "expand-all",
						character: "",
						unicode: "EB95",
						description: "bulk",
					},
					{
						short_name: "export",
						character: "",
						unicode: "EBAC",
						description: "arrow point out",
					},
					{
						short_name: "extensions",
						character: "",
						unicode: "EAE6",
						description: "plugin puzzle",
					},
					{
						short_name: "eye-closed",
						character: "",
						unicode: "EAE7",
						description: "hidden hide toggle",
					},
					{
						short_name: "eye",
						character: "",
						unicode: "EA70",
						description: "visible toggle",
					},
					{
						short_name: "feedback",
						character: "",
						unicode: "EB96",
						description: "smile message comment support",
					},
					{
						short_name: "file-binary",
						character: "",
						unicode: "EAE8",
						description: "document page",
					},
					{
						short_name: "file-code",
						character: "",
						unicode: "EAE9",
						description: "document page",
					},
					{
						short_name: "file-media",
						character: "",
						unicode: "EAEA",
						description: "document page",
					},
					{
						short_name: "file-pdf",
						character: "",
						unicode: "EAEB",
						description: "document page",
					},
					{
						short_name: "file-submodule",
						character: "",
						unicode: "EAEC",
						description: "document page",
					},
					{
						short_name: "file-symlink-directory",
						character: "",
						unicode: "EAED",
						description: "document page",
					},
					{
						short_name: "file-symlink-file",
						character: "",
						unicode: "EAEE",
						description: "document page",
					},
					{
						short_name: "file-zip",
						character: "",
						unicode: "EAEF",
						description: "document page",
					},
					{
						short_name: "file",
						character: "",
						unicode: "EA7B",
						description: "document page",
					},
					{
						short_name: "files",
						character: "",
						unicode: "EAF0",
						description: "pages",
					},
					{
						short_name: "filter",
						character: "",
						unicode: "EAF1",
						description: "funnel",
					},
					{
						short_name: "flame",
						character: "",
						unicode: "EAF2",
						description: "fire trend heat hot",
					},
					{
						short_name: "fold-down",
						character: "",
						unicode: "EAF3",
						description: "collapse",
					},
					{
						short_name: "fold-up",
						character: "",
						unicode: "EAF4",
						description: "expand",
					},
					{
						short_name: "fold",
						character: "",
						unicode: "EAF5",
						description: "",
					},
					{
						short_name: "folder-active",
						character: "",
						unicode: "EAF6",
						description: "",
					},
					{
						short_name: "folder-opened",
						character: "",
						unicode: "EAF7",
						description: "",
					},
					{
						short_name: "folder",
						character: "",
						unicode: "EA83",
						description: "",
					},
					{
						short_name: "gear",
						character: "",
						unicode: "EAF8",
						description: "settings cog",
					},
					{
						short_name: "gift",
						character: "",
						unicode: "EAF9",
						description: "feature box present",
					},
					{
						short_name: "gist-secret",
						character: "",
						unicode: "EAFA",
						description: "",
					},
					{
						short_name: "git-commit",
						character: "",
						unicode: "EAFC",
						description: "",
					},
					{
						short_name: "git-compare",
						character: "",
						unicode: "EAFD",
						description: "",
					},
					{
						short_name: "git-merge",
						character: "",
						unicode: "EAFE",
						description: "",
					},
					{
						short_name: "git-pull-request-create",
						character: "",
						unicode: "EBBC",
						description: "",
					},
					{
						short_name: "git-pull-request",
						character: "",
						unicode: "EA64",
						description: "",
					},
					{
						short_name: "github-action",
						character: "",
						unicode: "EAFF",
						description: "",
					},
					{
						short_name: "github-alt",
						character: "",
						unicode: "EB00",
						description: "",
					},
					{
						short_name: "github-inverted",
						character: "",
						unicode: "EBA1",
						description: "",
					},
					{
						short_name: "github",
						character: "",
						unicode: "EA84",
						description: "",
					},
					{
						short_name: "globe",
						character: "",
						unicode: "EB01",
						description: "",
					},
					{
						short_name: "go-to-file",
						character: "",
						unicode: "EA94",
						description: "",
					},
					{
						short_name: "grabber",
						character: "",
						unicode: "EB02",
						description: "",
					},
					{
						short_name: "graph-left",
						character: "",
						unicode: "EBAD",
						description: "",
					},
					{
						short_name: "graph",
						character: "",
						unicode: "EB03",
						description: "",
					},
					{
						short_name: "gripper",
						character: "",
						unicode: "EB04",
						description: "",
					},
					{
						short_name: "group-by-ref-type",
						character: "",
						unicode: "EB97",
						description: "",
					},
					{
						short_name: "heart",
						character: "",
						unicode: "EB05",
						description: "",
					},
					{
						short_name: "history",
						character: "",
						unicode: "EA82",
						description: "",
					},
					{
						short_name: "home",
						character: "",
						unicode: "EB06",
						description: "",
					},
					{
						short_name: "horizontal-rule",
						character: "",
						unicode: "EB07",
						description: "",
					},
					{
						short_name: "hubot",
						character: "",
						unicode: "EB08",
						description: "",
					},
					{
						short_name: "inbox",
						character: "",
						unicode: "EB09",
						description: "",
					},
					{
						short_name: "info",
						character: "",
						unicode: "EA74",
						description: "",
					},
					{
						short_name: "issue-closed",
						character: "",
						unicode: "EB0A",
						description: "",
					},
					{
						short_name: "issue-reopened",
						character: "",
						unicode: "EB0B",
						description: "",
					},
					{
						short_name: "issues",
						character: "",
						unicode: "EB0C",
						description: "",
					},
					{
						short_name: "italic",
						character: "",
						unicode: "EB0D",
						description: "",
					},
					{
						short_name: "jersey",
						character: "",
						unicode: "EB0E",
						description: "",
					},
					{
						short_name: "json",
						character: "",
						unicode: "EB0F",
						description: "",
					},
					{
						short_name: "kebab-vertical",
						character: "",
						unicode: "EB10",
						description: "",
					},
					{
						short_name: "key",
						character: "",
						unicode: "EB11",
						description: "",
					},
					{
						short_name: "law",
						character: "",
						unicode: "EB12",
						description: "",
					},
					{
						short_name: "library",
						character: "",
						unicode: "EB9C",
						description: "",
					},
					{
						short_name: "lightbulb-autofix",
						character: "",
						unicode: "EB13",
						description: "",
					},
					{
						short_name: "lightbulb",
						character: "",
						unicode: "EA61",
						description: "",
					},
					{
						short_name: "link-external",
						character: "",
						unicode: "EB14",
						description: "",
					},
					{
						short_name: "link",
						character: "",
						unicode: "EB15",
						description: "",
					},
					{
						short_name: "list-filter",
						character: "",
						unicode: "EB83",
						description: "",
					},
					{
						short_name: "list-flat",
						character: "",
						unicode: "EB84",
						description: "",
					},
					{
						short_name: "list-ordered",
						character: "",
						unicode: "EB16",
						description: "",
					},
					{
						short_name: "list-selection",
						character: "",
						unicode: "EB85",
						description: "",
					},
					{
						short_name: "list-tree",
						character: "",
						unicode: "EB86",
						description: "",
					},
					{
						short_name: "list-unordered",
						character: "",
						unicode: "EB17",
						description: "",
					},
					{
						short_name: "live-share",
						character: "",
						unicode: "EB18",
						description: "",
					},
					{
						short_name: "loading",
						character: "",
						unicode: "EB19",
						description: "",
					},
					{
						short_name: "location",
						character: "",
						unicode: "EB1A",
						description: "",
					},
					{
						short_name: "lock",
						character: "",
						unicode: "EA75",
						description: "",
					},
					{
						short_name: "magnet",
						character: "",
						unicode: "EBAE",
						description: "",
					},
					{
						short_name: "mail-read",
						character: "",
						unicode: "EB1B",
						description: "",
					},
					{
						short_name: "mail",
						character: "",
						unicode: "EB1C",
						description: "",
					},
					{
						short_name: "markdown",
						character: "",
						unicode: "EB1D",
						description: "",
					},
					{
						short_name: "megaphone",
						character: "",
						unicode: "EB1E",
						description: "",
					},
					{
						short_name: "mention",
						character: "",
						unicode: "EB1F",
						description: "",
					},
					{
						short_name: "menu",
						character: "",
						unicode: "EB94",
						description: "",
					},
					{
						short_name: "merge",
						character: "",
						unicode: "EBAB",
						description: "",
					},
					{
						short_name: "milestone",
						character: "",
						unicode: "EB20",
						description: "",
					},
					{
						short_name: "mirror",
						character: "",
						unicode: "EA69",
						description: "",
					},
					{
						short_name: "mortar-board",
						character: "",
						unicode: "EB21",
						description: "",
					},
					{
						short_name: "move",
						character: "",
						unicode: "EB22",
						description: "",
					},
					{
						short_name: "multiple-windows",
						character: "",
						unicode: "EB23",
						description: "",
					},
					{
						short_name: "mute",
						character: "",
						unicode: "EB24",
						description: "",
					},
					{
						short_name: "new-file",
						character: "",
						unicode: "EA7F",
						description: "",
					},
					{
						short_name: "new-folder",
						character: "",
						unicode: "EA80",
						description: "",
					},
					{
						short_name: "no-newline",
						character: "",
						unicode: "EB25",
						description: "",
					},
					{
						short_name: "note",
						character: "",
						unicode: "EB26",
						description: "",
					},
					{
						short_name: "notebook-template",
						character: "",
						unicode: "EBBF",
						description: "",
					},
					{
						short_name: "notebook",
						character: "",
						unicode: "EBAF",
						description: "",
					},
					{
						short_name: "octoface",
						character: "",
						unicode: "EB27",
						description: "",
					},
					{
						short_name: "open-preview",
						character: "",
						unicode: "EB28",
						description: "",
					},
					{
						short_name: "organization",
						character: "",
						unicode: "EA7E",
						description: "",
					},
					{
						short_name: "output",
						character: "",
						unicode: "EB9D",
						description: "",
					},
					{
						short_name: "package",
						character: "",
						unicode: "EB29",
						description: "",
					},
					{
						short_name: "paintcan",
						character: "",
						unicode: "EB2A",
						description: "",
					},
					{
						short_name: "pass-filled",
						character: "",
						unicode: "EBB3",
						description: "",
					},
					{
						short_name: "pass",
						character: "",
						unicode: "EBA4",
						description: "",
					},
					{
						short_name: "person",
						character: "",
						unicode: "EA67",
						description: "person people face user contact outline",
					},
					{
						short_name: "pin",
						character: "",
						unicode: "EB2B",
						description: "",
					},
					{
						short_name: "pinned-dirty",
						character: "",
						unicode: "EBB2",
						description: "",
					},
					{
						short_name: "pinned",
						character: "",
						unicode: "EBA0",
						description: "",
					},
					{
						short_name: "play-circle",
						character: "",
						unicode: "EBA6",
						description: "run",
					},
					{
						short_name: "play",
						character: "",
						unicode: "EB2C",
						description: "run",
					},
					{
						short_name: "plug",
						character: "",
						unicode: "EB2D",
						description: "",
					},
					{
						short_name: "preserve-case",
						character: "",
						unicode: "EB2E",
						description: "",
					},
					{
						short_name: "preview",
						character: "",
						unicode: "EB2F",
						description: "",
					},
					{
						short_name: "primitive-square",
						character: "",
						unicode: "EA72",
						description: "",
					},
					{
						short_name: "project",
						character: "",
						unicode: "EB30",
						description: "",
					},
					{
						short_name: "pulse",
						character: "",
						unicode: "EB31",
						description: "",
					},
					{
						short_name: "question",
						character: "",
						unicode: "EB32",
						description: "",
					},
					{
						short_name: "quote",
						character: "",
						unicode: "EB33",
						description: "",
					},
					{
						short_name: "radio-tower",
						character: "",
						unicode: "EB34",
						description: "",
					},
					{
						short_name: "reactions",
						character: "",
						unicode: "EB35",
						description: "",
					},
					{
						short_name: "record-keys",
						character: "",
						unicode: "EA65",
						description: "",
					},
					{
						short_name: "record",
						character: "",
						unicode: "EBA7",
						description: "",
					},
					{
						short_name: "redo",
						character: "",
						unicode: "EBB0",
						description: "",
					},
					{
						short_name: "references",
						character: "",
						unicode: "EB36",
						description: "",
					},
					{
						short_name: "refresh",
						character: "",
						unicode: "EB37",
						description: "",
					},
					{
						short_name: "regex",
						character: "",
						unicode: "EB38",
						description: "",
					},
					{
						short_name: "remote-explorer",
						character: "",
						unicode: "EB39",
						description: "",
					},
					{
						short_name: "remote",
						character: "",
						unicode: "EB3A",
						description: "",
					},
					{
						short_name: "remove",
						character: "",
						unicode: "EB3B",
						description: "",
					},
					{
						short_name: "replace-all",
						character: "",
						unicode: "EB3C",
						description: "",
					},
					{
						short_name: "replace",
						character: "",
						unicode: "EB3D",
						description: "",
					},
					{
						short_name: "reply",
						character: "",
						unicode: "EA7D",
						description: "",
					},
					{
						short_name: "repo-clone",
						character: "",
						unicode: "EB3E",
						description: "",
					},
					{
						short_name: "repo-force-push",
						character: "",
						unicode: "EB3F",
						description: "",
					},
					{
						short_name: "repo-forked",
						character: "",
						unicode: "EA63",
						description: "",
					},
					{
						short_name: "repo-pull",
						character: "",
						unicode: "EB40",
						description: "",
					},
					{
						short_name: "repo-push",
						character: "",
						unicode: "EB41",
						description: "",
					},
					{
						short_name: "repo",
						character: "",
						unicode: "EA62",
						description: "",
					},
					{
						short_name: "report",
						character: "",
						unicode: "EB42",
						description: "",
					},
					{
						short_name: "request-changes",
						character: "",
						unicode: "EB43",
						description: "",
					},
					{
						short_name: "rocket",
						character: "",
						unicode: "EB44",
						description: "",
					},
					{
						short_name: "root-folder-opened",
						character: "",
						unicode: "EB45",
						description: "",
					},
					{
						short_name: "root-folder",
						character: "",
						unicode: "EB46",
						description: "",
					},
					{
						short_name: "rss",
						character: "",
						unicode: "EB47",
						description: "",
					},
					{
						short_name: "ruby",
						character: "",
						unicode: "EB48",
						description: "",
					},
					{
						short_name: "run-above",
						character: "",
						unicode: "EBBD",
						description: "",
					},
					{
						short_name: "run-all",
						character: "",
						unicode: "EB9E",
						description: "",
					},
					{
						short_name: "run-below",
						character: "",
						unicode: "EBBE",
						description: "",
					},
					{
						short_name: "save-all",
						character: "",
						unicode: "EB49",
						description: "",
					},
					{
						short_name: "save-as",
						character: "",
						unicode: "EB4A",
						description: "",
					},
					{
						short_name: "save",
						character: "",
						unicode: "EB4B",
						description: "",
					},
					{
						short_name: "screen-full",
						character: "",
						unicode: "EB4C",
						description: "",
					},
					{
						short_name: "screen-normal",
						character: "",
						unicode: "EB4D",
						description: "",
					},
					{
						short_name: "search-stop",
						character: "",
						unicode: "EB4E",
						description: "",
					},
					{
						short_name: "search",
						character: "",
						unicode: "EA6D",
						description: "",
					},
					{
						short_name: "server-environment",
						character: "",
						unicode: "EBA3",
						description: "",
					},
					{
						short_name: "server-process",
						character: "",
						unicode: "EBA2",
						description: "",
					},
					{
						short_name: "server",
						character: "",
						unicode: "EB50",
						description: "",
					},
					{
						short_name: "settings-gear",
						character: "",
						unicode: "EB51",
						description: "",
					},
					{
						short_name: "settings",
						character: "",
						unicode: "EB52",
						description: "",
					},
					{
						short_name: "shield",
						character: "",
						unicode: "EB53",
						description: "",
					},
					{
						short_name: "sign-in",
						character: "",
						unicode: "EA6F",
						description: "",
					},
					{
						short_name: "sign-out",
						character: "",
						unicode: "EA6E",
						description: "",
					},
					{
						short_name: "smiley",
						character: "",
						unicode: "EB54",
						description: "",
					},
					{
						short_name: "sort-precedence",
						character: "",
						unicode: "EB55",
						description: "",
					},
					{
						short_name: "source-control",
						character: "",
						unicode: "EA68",
						description: "",
					},
					{
						short_name: "split-horizontal",
						character: "",
						unicode: "EB56",
						description: "",
					},
					{
						short_name: "split-vertical",
						character: "",
						unicode: "EB57",
						description: "",
					},
					{
						short_name: "squirrel",
						character: "",
						unicode: "EB58",
						description: "",
					},
					{
						short_name: "star-empty",
						character: "",
						unicode: "EA6A",
						description: "",
					},
					{
						short_name: "star-full",
						character: "",
						unicode: "EB59",
						description: "",
					},
					{
						short_name: "star-half",
						character: "",
						unicode: "EB5A",
						description: "",
					},
					{
						short_name: "stop-circle",
						character: "",
						unicode: "EBA5",
						description: "",
					},
					{
						short_name: "symbol-array",
						character: "",
						unicode: "EA8A",
						description: "",
					},
					{
						short_name: "symbol-boolean",
						character: "",
						unicode: "EA8F",
						description: "",
					},
					{
						short_name: "symbol-class",
						character: "",
						unicode: "EB5B",
						description: "",
					},
					{
						short_name: "symbol-color",
						character: "",
						unicode: "EB5C",
						description: "",
					},
					{
						short_name: "symbol-constant",
						character: "",
						unicode: "EB5D",
						description: "",
					},
					{
						short_name: "symbol-enum-member",
						character: "",
						unicode: "EB5E",
						description: "",
					},
					{
						short_name: "symbol-enum",
						character: "",
						unicode: "EA95",
						description: "",
					},
					{
						short_name: "symbol-event",
						character: "",
						unicode: "EA86",
						description: "",
					},
					{
						short_name: "symbol-field",
						character: "",
						unicode: "EB5F",
						description: "",
					},
					{
						short_name: "symbol-file",
						character: "",
						unicode: "EB60",
						description: "",
					},
					{
						short_name: "symbol-interface",
						character: "",
						unicode: "EB61",
						description: "",
					},
					{
						short_name: "symbol-key",
						character: "",
						unicode: "EA93",
						description: "",
					},
					{
						short_name: "symbol-keyword",
						character: "",
						unicode: "EB62",
						description: "",
					},
					{
						short_name: "symbol-method",
						character: "",
						unicode: "EA8C",
						description: "",
					},
					{
						short_name: "symbol-misc",
						character: "",
						unicode: "EB63",
						description: "",
					},
					{
						short_name: "symbol-namespace",
						character: "",
						unicode: "EA8B",
						description: "",
					},
					{
						short_name: "symbol-numeric",
						character: "",
						unicode: "EA90",
						description: "",
					},
					{
						short_name: "symbol-operator",
						character: "",
						unicode: "EB64",
						description: "",
					},
					{
						short_name: "symbol-parameter",
						character: "",
						unicode: "EA92",
						description: "",
					},
					{
						short_name: "symbol-property",
						character: "",
						unicode: "EB65",
						description: "",
					},
					{
						short_name: "symbol-ruler",
						character: "",
						unicode: "EA96",
						description: "",
					},
					{
						short_name: "symbol-snippet",
						character: "",
						unicode: "EB66",
						description: "",
					},
					{
						short_name: "symbol-string",
						character: "",
						unicode: "EB8D",
						description: "",
					},
					{
						short_name: "symbol-structure",
						character: "",
						unicode: "EA91",
						description: "",
					},
					{
						short_name: "symbol-variable",
						character: "",
						unicode: "EA88",
						description: "",
					},
					{
						short_name: "sync-ignored",
						character: "",
						unicode: "EB9F",
						description: "",
					},
					{
						short_name: "sync",
						character: "",
						unicode: "EA77",
						description: "",
					},
					{
						short_name: "table",
						character: "",
						unicode: "EBB7",
						description: "",
					},
					{
						short_name: "tag",
						character: "",
						unicode: "EA66",
						description: "",
					},
					{
						short_name: "tasklist",
						character: "",
						unicode: "EB67",
						description: "",
					},
					{
						short_name: "telescope",
						character: "",
						unicode: "EB68",
						description: "",
					},
					{
						short_name: "terminal",
						character: "",
						unicode: "EA85",
						description: "",
					},
					{
						short_name: "text-size",
						character: "",
						unicode: "EB69",
						description: "",
					},
					{
						short_name: "three-bars",
						character: "",
						unicode: "EB6A",
						description: "",
					},
					{
						short_name: "thumbsdown",
						character: "",
						unicode: "EB6B",
						description: "",
					},
					{
						short_name: "thumbsup",
						character: "",
						unicode: "EB6C",
						description: "",
					},
					{
						short_name: "tools",
						character: "",
						unicode: "EB6D",
						description: "",
					},
					{
						short_name: "trash",
						character: "",
						unicode: "EA81",
						description: "",
					},
					{
						short_name: "triangle-down",
						character: "",
						unicode: "EB6E",
						description: "",
					},
					{
						short_name: "triangle-left",
						character: "",
						unicode: "EB6F",
						description: "",
					},
					{
						short_name: "triangle-right",
						character: "",
						unicode: "EB70",
						description: "",
					},
					{
						short_name: "triangle-up",
						character: "",
						unicode: "EB71",
						description: "",
					},
					{
						short_name: "twitter",
						character: "",
						unicode: "EB72",
						description: "",
					},
					{
						short_name: "type-hierarchy-sub",
						character: "",
						unicode: "EBBA",
						description: "",
					},
					{
						short_name: "type-hierarchy-super",
						character: "",
						unicode: "EBBB",
						description: "",
					},
					{
						short_name: "type-hierarchy",
						character: "",
						unicode: "EBB9",
						description: "",
					},
					{
						short_name: "unfold",
						character: "",
						unicode: "EB73",
						description: "",
					},
					{
						short_name: "ungroup-by-ref-type",
						character: "",
						unicode: "EB98",
						description: "",
					},
					{
						short_name: "unlock",
						character: "",
						unicode: "EB74",
						description: "",
					},
					{
						short_name: "unmute",
						character: "",
						unicode: "EB75",
						description: "",
					},
					{
						short_name: "unverified",
						character: "",
						unicode: "EB76",
						description: "",
					},
					{
						short_name: "variable-group",
						character: "",
						unicode: "EBB8",
						description: "",
					},
					{
						short_name: "verified",
						character: "",
						unicode: "EB77",
						description: "",
					},
					{
						short_name: "versions",
						character: "",
						unicode: "EB78",
						description: "",
					},
					{
						short_name: "vm-active",
						character: "",
						unicode: "EB79",
						description: "",
					},
					{
						short_name: "vm-connect",
						character: "",
						unicode: "EBA9",
						description: "",
					},
					{
						short_name: "vm-outline",
						character: "",
						unicode: "EB7A",
						description: "",
					},
					{
						short_name: "vm-running",
						character: "",
						unicode: "EB7B",
						description: "",
					},
					{
						short_name: "vm",
						character: "",
						unicode: "EA7A",
						description: "",
					},
					{
						short_name: "warning",
						character: "",
						unicode: "EA6C",
						description: "",
					},
					{
						short_name: "watch",
						character: "",
						unicode: "EB7C",
						description: "",
					},
					{
						short_name: "whitespace",
						character: "",
						unicode: "EB7D",
						description: "",
					},
					{
						short_name: "whole-word",
						character: "",
						unicode: "EB7E",
						description: "",
					},
					{
						short_name: "window",
						character: "",
						unicode: "EB7F",
						description: "",
					},
					{
						short_name: "word-wrap",
						character: "",
						unicode: "EB80",
						description: "",
					},
					{
						short_name: "workspace-trusted",
						character: "",
						unicode: "EBC1",
						description: "",
					},
					{
						short_name: "workspace-unknown",
						character: "",
						unicode: "EBC3",
						description: "",
					},
					{
						short_name: "workspace-untrusted",
						character: "",
						unicode: "EBC2",
						description: "",
					},
					{
						short_name: "zoom-in",
						character: "",
						unicode: "EB81",
						description: "",
					},
					{
						short_name: "zoom-out",
						character: "",
						unicode: "EB82",
						description: "",
					},
					{
						short_name: "terminal-cmd",
						character: "",
						unicode: "ebc4",
						description: "",
					},
					{
						short_name: "terminal-debian",
						character: "",
						unicode: "ebc5",
						description: "",
					},
					{
						short_name: "terminal-linux",
						character: "",
						unicode: "ebc6",
						description: "",
					},
					{
						short_name: "terminal-powershell",
						character: "",
						unicode: "ebc7",
						description: "",
					},
					{
						short_name: "terminal-tmux",
						character: "",
						unicode: "ebc8",
						description: "",
					},
					{
						short_name: "terminal-ubuntu",
						character: "",
						unicode: "ebc9",
						description: "",
					},
					{
						short_name: "terminal-bash",
						character: "",
						unicode: "ebca",
						description: "",
					},
					{
						short_name: "arrow-swap",
						character: "",
						unicode: "ebcb",
						description: "",
					},
					{
						short_name: "copy",
						character: "",
						unicode: "ebcc",
						description: "",
					},
					{
						short_name: "person-add",
						character: "",
						unicode: "ebcd",
						description: "",
					},
					{
						short_name: "filter-filled",
						character: "",
						unicode: "ebce",
						description: "",
					},
					{
						short_name: "wand",
						character: "",
						unicode: "ebcf",
						description: "",
					},
					{
						short_name: "debug-line-by-line",
						character: "",
						unicode: "ebd0",
						description: "",
					},
					{
						short_name: "azure",
						character: "",
						unicode: "EBD8",
						description: "",
					},
					{
						short_name: "beaker-stop",
						character: "",
						unicode: "EBE1",
						description: "",
					},
					{
						short_name: "bracket-dot",
						character: "",
						unicode: "EBE5",
						description: "",
					},
					{
						short_name: "bracket-error",
						character: "",
						unicode: "EBE6",
						description: "",
					},
					{
						short_name: "compass-active",
						character: "",
						unicode: "EBD7",
						description: "",
					},
					{
						short_name: "compass-dot",
						character: "",
						unicode: "EBD6",
						description: "",
					},
					{
						short_name: "compass",
						character: "",
						unicode: "EBD5",
						description: "",
					},
					{
						short_name: "debug-all",
						character: "",
						unicode: "EBDC",
						description: "",
					},
					{
						short_name: "debug-continue-small",
						character: "",
						unicode: "EBE0",
						description: "",
					},
					{
						short_name: "debug-coverage",
						character: "",
						unicode: "EBDD",
						description: "",
					},
					{
						short_name: "folder-library",
						character: "",
						unicode: "EBDF",
						description: "",
					},
					{
						short_name: "git-pull-request-closed",
						character: "",
						unicode: "EBDA",
						description: "",
					},
					{
						short_name: "git-pull-request-draft",
						character: "",
						unicode: "EBDB",
						description: "",
					},
					{
						short_name: "graph-line",
						character: "",
						unicode: "EBE2",
						description: "",
					},
					{
						short_name: "graph-scatter",
						character: "",
						unicode: "EBE3",
						description: "",
					},
					{
						short_name: "inspect",
						character: "",
						unicode: "EBD1",
						description: "",
					},
					{
						short_name: "issue-draft",
						character: "",
						unicode: "EBD9",
						description: "",
					},
					{
						short_name: "issue-closed",
						character: "",
						unicode: "EB0A",
						description: "",
					},
					{
						short_name: "layers-active",
						character: "",
						unicode: "EBD4",
						description: "",
					},
					{
						short_name: "layers-dot",
						character: "",
						unicode: "EBD3",
						description: "",
					},
					{
						short_name: "layers",
						character: "",
						unicode: "EBD2",
						description: "",
					},
					{
						short_name: "pie-chart",
						character: "",
						unicode: "EBE4",
						description: "",
					},
					{
						short_name: "run-errors",
						character: "",
						unicode: "EBDE",
						description: "",
					},
					{
						short_name: "azure-devops",
						character: "",
						unicode: "EBE8",
						description: "",
					},
					{
						short_name: "lock-small",
						character: "",
						unicode: "EBE7",
						description: "",
					},
					{
						short_name: "verified-filled",
						character: "",
						unicode: "EBE9",
						description: "",
					},
					{
						short_name: "newline",
						character: "",
						unicode: "EBEA",
						description: "",
					},
					{
						short_name: "layout",
						character: "",
						unicode: "EBEB",
						description: "",
					},
					{
						short_name: "layout-activitybar-left",
						character: "",
						unicode: "EBEC",
						description: "",
					},
					{
						short_name: "layout-activitybar-right",
						character: "",
						unicode: "EBED",
						description: "",
					},
					{
						short_name: "layout-centered",
						character: "",
						unicode: "EBF7",
						description: "",
					},
					{
						short_name: "layout-menubar",
						character: "",
						unicode: "EBF6",
						description: "",
					},
					{
						short_name: "layout-panel-center",
						character: "",
						unicode: "EBEF",
						description: "",
					},
					{
						short_name: "layout-panel-justify",
						character: "",
						unicode: "EBF0",
						description: "",
					},
					{
						short_name: "layout-panel-left",
						character: "",
						unicode: "EBEE",
						description: "",
					},
					{
						short_name: "layout-panel-right",
						character: "",
						unicode: "EBF1",
						description: "",
					},
					{
						short_name: "layout-panel",
						character: "",
						unicode: "EBF2",
						description: "",
					},
					{
						short_name: "layout-sidebar-left",
						character: "",
						unicode: "EBF3",
						description: "",
					},
					{
						short_name: "layout-sidebar-right",
						character: "",
						unicode: "EBF4",
						description: "",
					},
					{
						short_name: "layout-statusbar",
						character: "",
						unicode: "EBF5",
						description: "",
					},
					{
						short_name: "target",
						character: "",
						unicode: "ebf8",
						description: "",
					},
					{
						short_name: "indent",
						character: "",
						unicode: "ebf9",
						description: "",
					},
					{
						short_name: "record-small",
						character: "",
						unicode: "ebfa",
						description: "",
					},
					{
						short_name: "error-small",
						character: "",
						unicode: "ebfb",
						description: "",
					},
					{
						short_name: "arrow-circle-down",
						character: "",
						unicode: "ebfc",
						description: "",
					},
					{
						short_name: "arrow-circle-left",
						character: "",
						unicode: "ebfd",
						description: "",
					},
					{
						short_name: "arrow-circle-right",
						character: "",
						unicode: "ebfe",
						description: "",
					},
					{
						short_name: "arrow-circle-up",
						character: "",
						unicode: "ebff",
						description: "",
					},
					{
						short_name: "layout-sidebar-right-off",
						character: "",
						unicode: "EC00",
						description: "",
					},
					{
						short_name: "layout-panel-off",
						character: "",
						unicode: "EC01",
						description: "",
					},
					{
						short_name: "layout-sidebar-left-off",
						character: "",
						unicode: "EC02",
						description: "",
					},
					{
						short_name: "heart-filled",
						character: "",
						unicode: "EC04",
						description: "",
					},
					{
						short_name: "map",
						character: "",
						unicode: "EC05",
						description: "",
					},
					{
						short_name: "map-filled",
						character: "",
						unicode: "EC06",
						description: "",
					},
					{
						short_name: "circle-small",
						character: "",
						unicode: "EC07",
						description: "",
					},
					{
						short_name: "bell-slash",
						character: "",
						unicode: "EC08",
						description: "",
					},
					{
						short_name: "bell-slash-dot",
						character: "",
						unicode: "EC09",
						description: "",
					},
					{
						short_name: "comment-unresolved",
						character: "",
						unicode: "EC0A",
						description: "",
					},
					{
						short_name: "git-pull-request-go-to-changes",
						character: "",
						unicode: "EC0B",
						description: "",
					},
					{
						short_name: "git-pull-request-new-changes",
						character: "",
						unicode: "EC0C",
						description: "",
					},
				];

				/***/
			},

		/***/ "./src/code.ts":
			/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var __awaiter =
					(this && this.__awaiter) ||
					function (thisArg, _arguments, P, generator) {
						return new (P || (P = Promise))(function (
							resolve,
							reject
						) {
							function fulfilled(value) {
								try {
									step(generator.next(value));
								} catch (e) {
									reject(e);
								}
							}
							function rejected(value) {
								try {
									step(generator["throw"](value));
								} catch (e) {
									reject(e);
								}
							}
							function step(result) {
								result.done
									? resolve(result.value)
									: new P(function (resolve) {
											resolve(result.value);
									  }).then(fulfilled, rejected);
							}
							step(
								(generator = generator.apply(
									thisArg,
									_arguments || []
								)).next()
							);
						});
					};
				figma.showUI(__html__, { width: 380, height: 480 });
				const codiconTextStyleKey =
					"640604ee4b4f01ff327acfaaa8305c92199c7473";
				const codiconTextStyleId =
					"S:640604ee4b4f01ff327acfaaa8305c92199c7473,4270:5";
				const codiconColorStyleKey =
					"41f0c94d560e9b73b202dfc059e411effca235a4";
				const codiconColorStyleId =
					"S:41f0c94d560e9b73b202dfc059e411effca235a4,4347:29";
				const setiTextStyleKey =
					"499eeb6b308eeb612583df30b0a4fd990d4dbbc5";
				const setiTextStyleId =
					"S:499eeb6b308eeb612583df30b0a4fd990d4dbbc5,4270:4";
				const setiColorStyleKey =
					"9fc238b130e8f6f24ab1ecfaff5ecd1f1389528f";
				const setiColorStyleId =
					"S:9fc238b130e8f6f24ab1ecfaff5ecd1f1389528f,2919:5";
				const nodes = [];
				const data = __webpack_require__(
					/*! ./assets/codicon.json5 */ "./src/assets/codicon.json5"
				);
				const icons = data["default"];
				// load fonts
				function loadFonts() {
					return __awaiter(this, void 0, void 0, function* () {
						yield figma.loadFontAsync({
							family: "Roboto",
							style: "Regular",
						});
						yield figma.loadFontAsync({
							family: "Inter",
							style: "Regular",
						});
						yield figma
							.loadFontAsync({
								family: "codicon",
								style: "Regular",
							})
							.catch((e) => {
								console.log(e);
								figma.ui.postMessage({
									type: "hasIcons",
									codicons: false,
								});
								return false;
							});
						yield figma
							.loadFontAsync({ family: "seti", style: "Regular" })
							.catch((e) => {
								console.log(e);
								figma.ui.postMessage({
									type: "hasIcons",
									seti: false,
								});
								return false;
							});
						yield figma
							.importStyleByKeyAsync(codiconTextStyleKey)
							.catch((e) => {
								console.log(e);
							});
					});
				}
				loadFonts();
				figma.ui.onmessage = (msg) =>
					__awaiter(this, void 0, void 0, function* () {
						const nodes = [];
						if (msg.type === "create-icon") {
							// create new text object
							if (figma.currentPage.selection.length == 0) {
								console.log("creating new text object");
								yield createNewIconObject(msg, nodes);
								figma.currentPage.selection = nodes;
							} else {
								console.log("replace text object");
								let selectionLength =
									figma.currentPage.selection.length;
								for (let i = 0; i < selectionLength; i++) {
									if (
										figma.currentPage.selection[i].type !=
										"TEXT"
									) {
										yield createNewIconObject(msg, nodes);
									} else {
										// unload current font
										let selection =
											figma.currentPage.selection[i];
										let currentFontName =
											selection.fontName;
										yield figma.loadFontAsync({
											family: `${currentFontName["family"]}`,
											style: `${currentFontName["style"]}`,
										});
										let currentFont =
											currentFontName["family"];
										let text = selection;
										text.characters = msg.glyph;
										// override styles if not codicon
										if (
											msg.library == "codicon" &&
											currentFont !== "codicon"
										) {
											text.name = "codicon: " + msg.name;
											text.fontName = {
												family: "codicon",
												style: "Regular",
											};
											yield figma.importStyleByKeyAsync(
												codiconTextStyleKey
											);
											yield figma.importStyleByKeyAsync(
												codiconColorStyleKey
											);
											text.textStyleId =
												codiconTextStyleId;
										}
										// override styles if not seti
										if (
											msg.library == "seti" &&
											currentFont !== "seti"
										) {
											text.name = "seti: " + msg.name;
											text.fontName = {
												family: "seti",
												style: "Regular",
											};
											yield figma.importStyleByKeyAsync(
												setiTextStyleKey
											);
											yield figma.importStyleByKeyAsync(
												setiColorStyleKey
											);
											text.textStyleId = setiTextStyleId;
										}
										nodes.push(text);
									}
								}
								figma.currentPage.selection = nodes;
							}
						}
					});
				function createNewIconObject(msg, nodes) {
					return __awaiter(this, void 0, void 0, function* () {
						const text = figma.createText();
						text.characters = msg.glyph;
						text.fontSize = 16;
						text.x = figma.viewport.center.x;
						text.y = figma.viewport.center.y;
						if (msg.library == "seti") {
							text.name = "seti: " + msg.name;
							text.fontName = {
								family: "seti",
								style: "Regular",
							};
							yield figma.importStyleByKeyAsync(setiTextStyleKey);
							yield figma.importStyleByKeyAsync(
								setiColorStyleKey
							);
							text.textStyleId = setiTextStyleId;
							text.fillStyleId = setiColorStyleId;
						}
						if (msg.library == "codicon") {
							text.name = "codicon: " + msg.name;
							text.fontName = {
								family: "codicon",
								style: "Regular",
							};
							yield figma.importStyleByKeyAsync(
								codiconTextStyleKey
							);
							yield figma.importStyleByKeyAsync(
								codiconColorStyleKey
							);
							text.textStyleId = codiconTextStyleId;
							text.fillStyleId = codiconColorStyleId;
						}
						return nodes.push(text);
					});
				}

				/***/
			},

		/******/
	}
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jb2RpY29uLmpzb241Iiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxpRUFBRSx3R0FBd0csRUFBRSxzR0FBc0csRUFBRSxzRkFBc0YsRUFBRSwwRkFBMEYsRUFBRSwrRUFBK0UsRUFBRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSxxRUFBcUUsRUFBRSwwRUFBMEUsRUFBRSwwRUFBMEUsRUFBRSwyRUFBMkUsRUFBRSx3RUFBd0UsRUFBRSxrRUFBa0UsRUFBRSxrRkFBa0YsRUFBRSwyRkFBMkYsRUFBRSx1RkFBdUYsRUFBRSwyRkFBMkYsRUFBRSxvRkFBb0YsRUFBRSxpRkFBaUYsRUFBRSxpRkFBaUYsRUFBRSxrR0FBa0csRUFBRSx5RkFBeUYsRUFBRSxxRkFBcUYsRUFBRSxpSEFBaUgsRUFBRSw0R0FBNEcsRUFBRSw0R0FBNEcsRUFBRSwwR0FBMEcsRUFBRSwrSUFBK0ksRUFBRSwySUFBMkksRUFBRSxzSkFBc0osRUFBRSw0R0FBNEcsRUFBRSw0R0FBNEcsRUFBRSw2R0FBNkcsRUFBRSwwR0FBMEcsRUFBRSw2RkFBNkYsRUFBRSx1R0FBdUcsRUFBRSx1R0FBdUcsRUFBRSx1RkFBdUYsRUFBRSx3R0FBd0csRUFBRSw2RkFBNkYsRUFBRSw4RkFBOEYsRUFBRSxvSEFBb0gsRUFBRSw4RkFBOEYsRUFBRSwrRkFBK0YsRUFBRSwrRUFBK0UsRUFBRSw0RkFBNEYsRUFBRSw4RUFBOEUsRUFBRSw0RkFBNEYsRUFBRSxzRkFBc0YsRUFBRSw0RUFBNEUsRUFBRSw2RUFBNkUsRUFBRSw2RkFBNkYsRUFBRSx3RkFBd0YsRUFBRSwwR0FBMEcsRUFBRSxnRkFBZ0YsRUFBRSxzR0FBc0csRUFBRSwyRkFBMkYsRUFBRSwyRkFBMkYsRUFBRSx3RkFBd0YsRUFBRSxtRkFBbUYsRUFBRSw2RkFBNkYsRUFBRSw0RUFBNEUsRUFBRSxzRUFBc0UsRUFBRSxxSUFBcUksRUFBRSxzRkFBc0YsRUFBRSwwRkFBMEYsRUFBRSwrRUFBK0UsRUFBRSw4RkFBOEYsRUFBRSxtRkFBbUYsRUFBRSx5RkFBeUYsRUFBRSw4RUFBOEUsRUFBRSxzRkFBc0YsRUFBRSx1RUFBdUUsRUFBRSx3RUFBd0UsRUFBRSwyRkFBMkYsRUFBRSxxRUFBcUUsRUFBRSxxRUFBcUUsRUFBRSw2RUFBNkUsRUFBRSx1RUFBdUUsRUFBRSxnRkFBZ0YsRUFBRSxpRkFBaUYsRUFBRSw4RUFBOEUsRUFBRSwwRUFBMEUsRUFBRSxxRUFBcUUsRUFBRSx5RUFBeUUsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSx5RUFBeUUsRUFBRSxvRUFBb0UsRUFBRSwrREFBK0QsRUFBRSxpRkFBaUYsRUFBRSxpR0FBaUcsRUFBRSw0RkFBNEYsRUFBRSxnR0FBZ0csRUFBRSw4RUFBOEUsRUFBRSxnRkFBZ0YsRUFBRSxpRkFBaUYsRUFBRSxnRkFBZ0YsRUFBRSxnRkFBZ0YsRUFBRSx3RUFBd0UsRUFBRSw4RUFBOEUsRUFBRSxrRkFBa0YsRUFBRSxpSEFBaUgsRUFBRSxnRkFBZ0YsRUFBRSxnRkFBZ0YsRUFBRSxnRkFBZ0YsRUFBRSxxRkFBcUYsRUFBRSx3RUFBd0UsRUFBRSwrRUFBK0UsRUFBRSxpRkFBaUYsRUFBRSxzRkFBc0YsRUFBRSwyRUFBMkUsRUFBRSwrRkFBK0YsRUFBRSxrRkFBa0YsRUFBRSxnRkFBZ0YsRUFBRSxpRkFBaUYsRUFBRSwrRUFBK0UsRUFBRSxxRkFBcUYsRUFBRSw2RkFBNkYsRUFBRSx3RkFBd0YsRUFBRSwrRUFBK0UsRUFBRSwyRUFBMkUsRUFBRSxvRUFBb0UsRUFBRSxzRUFBc0UsRUFBRSxrRkFBa0YsRUFBRSwyRUFBMkUsRUFBRSx1RUFBdUUsRUFBRSw4REFBOEQsRUFBRSx1RUFBdUUsRUFBRSx1RUFBdUUsRUFBRSxnRUFBZ0UsRUFBRSwwRUFBMEUsRUFBRSxpRkFBaUYsRUFBRSxxRUFBcUUsRUFBRSxvRUFBb0UsRUFBRSxxRUFBcUUsRUFBRSxtRUFBbUUsRUFBRSxpRkFBaUYsRUFBRSwwRUFBMEUsRUFBRSx1RUFBdUUsRUFBRSxvRUFBb0UsRUFBRSx5RUFBeUUsRUFBRSxnRUFBZ0UsRUFBRSwrREFBK0QsRUFBRSxvRUFBb0UsRUFBRSxpRUFBaUUsRUFBRSxvRUFBb0UsRUFBRSwrREFBK0QsRUFBRSxpRUFBaUUsRUFBRSwyRUFBMkUsRUFBRSwrREFBK0QsRUFBRSxpRUFBaUUsRUFBRSw4REFBOEQsRUFBRSx5RUFBeUUsRUFBRSwrREFBK0QsRUFBRSwrREFBK0QsRUFBRSw4REFBOEQsRUFBRSxzRUFBc0UsRUFBRSx3RUFBd0UsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSw4REFBOEQsRUFBRSx3RUFBd0UsRUFBRSw2REFBNkQsRUFBRSw2REFBNkQsRUFBRSxpRUFBaUUsRUFBRSwyRUFBMkUsRUFBRSxtRUFBbUUsRUFBRSx1RUFBdUUsRUFBRSw4REFBOEQsRUFBRSxxRUFBcUUsRUFBRSxtRUFBbUUsRUFBRSxzRUFBc0UsRUFBRSx3RUFBd0UsRUFBRSxtRUFBbUUsRUFBRSx3RUFBd0UsRUFBRSxvRUFBb0UsRUFBRSxpRUFBaUUsRUFBRSxrRUFBa0UsRUFBRSw4REFBOEQsRUFBRSxnRUFBZ0UsRUFBRSxtRUFBbUUsRUFBRSw4REFBOEQsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxpRUFBaUUsRUFBRSw4REFBOEQsRUFBRSwrREFBK0QsRUFBRSxtRUFBbUUsRUFBRSxnRUFBZ0UsRUFBRSxzRUFBc0UsRUFBRSw4REFBOEQsRUFBRSwwRUFBMEUsRUFBRSw4REFBOEQsRUFBRSxrRUFBa0UsRUFBRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSw4REFBOEQsRUFBRSwyRUFBMkUsRUFBRSxrRUFBa0UsRUFBRSxrRUFBa0UsRUFBRSxzRUFBc0UsRUFBRSxzRUFBc0UsRUFBRSxnRUFBZ0UsRUFBRSxpRUFBaUUsRUFBRSxrRUFBa0UsRUFBRSxxRUFBcUUsRUFBRSw4REFBOEQsRUFBRSx1R0FBdUcsRUFBRSw2REFBNkQsRUFBRSxzRUFBc0UsRUFBRSxnRUFBZ0UsRUFBRSx3RUFBd0UsRUFBRSxpRUFBaUUsRUFBRSw4REFBOEQsRUFBRSx1RUFBdUUsRUFBRSxpRUFBaUUsRUFBRSwwRUFBMEUsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSxrRUFBa0UsRUFBRSwrREFBK0QsRUFBRSxxRUFBcUUsRUFBRSxtRUFBbUUsRUFBRSxxRUFBcUUsRUFBRSxnRUFBZ0UsRUFBRSw4REFBOEQsRUFBRSxvRUFBb0UsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSx5RUFBeUUsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSxvRUFBb0UsRUFBRSx5RUFBeUUsRUFBRSxxRUFBcUUsRUFBRSxtRUFBbUUsRUFBRSxtRUFBbUUsRUFBRSw4REFBOEQsRUFBRSxnRUFBZ0UsRUFBRSx5RUFBeUUsRUFBRSxnRUFBZ0UsRUFBRSw0RUFBNEUsRUFBRSxxRUFBcUUsRUFBRSw2REFBNkQsRUFBRSw4REFBOEQsRUFBRSxtRUFBbUUsRUFBRSxpRUFBaUUsRUFBRSxtRUFBbUUsRUFBRSxrRUFBa0UsRUFBRSxpRUFBaUUsRUFBRSw4REFBOEQsRUFBRSxxRUFBcUUsRUFBRSx1RUFBdUUsRUFBRSxxRUFBcUUsRUFBRSxnRUFBZ0UsRUFBRSw0RUFBNEUsRUFBRSx3RUFBd0UsRUFBRSxnRUFBZ0UsRUFBRSx1RUFBdUUsRUFBRSxrRUFBa0UsRUFBRSxnRUFBZ0UsRUFBRSxpRUFBaUUsRUFBRSxrRUFBa0UsRUFBRSxnRUFBZ0UsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSwwRUFBMEUsRUFBRSx3RUFBd0UsRUFBRSxrRUFBa0UsRUFBRSxvRUFBb0UsRUFBRSxtRUFBbUUsRUFBRSxtRUFBbUUsRUFBRSxxRUFBcUUsRUFBRSxzRUFBc0UsRUFBRSx3RUFBd0UsRUFBRSxzRUFBc0UsRUFBRSxzRUFBc0UsRUFBRSx5RUFBeUUsRUFBRSw0RUFBNEUsRUFBRSxxRUFBcUUsRUFBRSxzRUFBc0UsRUFBRSxzRUFBc0UsRUFBRSxxRUFBcUUsRUFBRSwwRUFBMEUsRUFBRSxvRUFBb0UsRUFBRSx3RUFBd0UsRUFBRSx1RUFBdUUsRUFBRSxxRUFBcUUsRUFBRSwwRUFBMEUsRUFBRSx3RUFBd0UsRUFBRSx5RUFBeUUsRUFBRSwwRUFBMEUsRUFBRSx5RUFBeUUsRUFBRSxzRUFBc0UsRUFBRSx3RUFBd0UsRUFBRSx1RUFBdUUsRUFBRSwwRUFBMEUsRUFBRSx5RUFBeUUsRUFBRSxzRUFBc0UsRUFBRSw4REFBOEQsRUFBRSwrREFBK0QsRUFBRSw2REFBNkQsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSxrRUFBa0UsRUFBRSwrREFBK0QsRUFBRSwrREFBK0QsRUFBRSx1RUFBdUUsRUFBRSx1RUFBdUUsRUFBRSx3RUFBd0UsRUFBRSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSw0RUFBNEUsRUFBRSw4RUFBOEUsRUFBRSx3RUFBd0UsRUFBRSxnRUFBZ0UsRUFBRSw2RUFBNkUsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxvRUFBb0UsRUFBRSx3RUFBd0UsRUFBRSxrRUFBa0UsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSw0REFBNEQsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSxnRUFBZ0UsRUFBRSxtRUFBbUUsRUFBRSwyRUFBMkUsRUFBRSwyRUFBMkUsRUFBRSw2RUFBNkUsRUFBRSxpRUFBaUUsRUFBRSxrRUFBa0UsRUFBRSxzRUFBc0UsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSw2RUFBNkUsRUFBRSx1RUFBdUUsRUFBRSx5RUFBeUUsRUFBRSx1RUFBdUUsRUFBRSxvRUFBb0UsRUFBRSw4REFBOEQsRUFBRSxvRUFBb0UsRUFBRSx1RUFBdUUsRUFBRSw4REFBOEQsRUFBRSw0RUFBNEUsRUFBRSwrREFBK0QsRUFBRSxxRUFBcUUsRUFBRSxxRUFBcUUsRUFBRSx1RUFBdUUsRUFBRSx3RUFBd0UsRUFBRSxxRUFBcUUsRUFBRSxpRUFBaUUsRUFBRSxtRUFBbUUsRUFBRSw4RUFBOEUsRUFBRSx3RUFBd0UsRUFBRSx3RUFBd0UsRUFBRSxpRkFBaUYsRUFBRSxnRkFBZ0YsRUFBRSxvRUFBb0UsRUFBRSx1RUFBdUUsRUFBRSxpRUFBaUUsRUFBRSxxRUFBcUUsRUFBRSxzRUFBc0UsRUFBRSx1RUFBdUUsRUFBRSxvRUFBb0UsRUFBRSxnRUFBZ0UsRUFBRSxtRUFBbUUsRUFBRSxvRUFBb0UsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSx5RUFBeUUsRUFBRSxpRUFBaUUsRUFBRSxnRUFBZ0UsRUFBRSxpRkFBaUYsRUFBRSxrRkFBa0YsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSw2RUFBNkUsRUFBRSw4RUFBOEUsRUFBRSwyRUFBMkUsRUFBRSw0RUFBNEUsRUFBRSxzRUFBc0UsRUFBRSw2RUFBNkUsRUFBRSw4RUFBOEUsRUFBRSwwRUFBMEUsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxzRUFBc0UsRUFBRSxxRUFBcUUsRUFBRSwyRUFBMkUsRUFBRSwyRUFBMkUsRUFBRSw0RUFBNEUsRUFBRSx5RUFBeUUsRUFBRSxrRkFBa0YsRUFBRSwwRUFBMEUsRUFBRSxpRkFBaUYsRUFBRSxzRUFBc0UsRUFBRSw2REFBNkQsRUFBRSxvRUFBb0UsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSx3RUFBd0UsRUFBRSw0RUFBNEUsRUFBRSx3RkFBd0YsRUFBRSxzRkFBc0YsQzs7Ozs7Ozs7Ozs7QUNBNzErQjtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQywwREFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscUNBQXFDO0FBQ3hFLG1DQUFtQyxvQ0FBb0M7QUFDdkUsbUNBQW1DLHNDQUFzQztBQUN6RTtBQUNBLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQSxTQUFTO0FBQ1QsbUNBQW1DLG1DQUFtQztBQUN0RTtBQUNBLGtDQUFrQyxnQ0FBZ0M7QUFDbEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWSwwQkFBMEIsYUFBYSx5QkFBeUIsR0FBRztBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFt7c2hvcnRfbmFtZTonYWNjb3VudCcsY2hhcmFjdGVyOifurpknLHVuaWNvZGU6J0VCOTknLGRlc2NyaXB0aW9uOidwZXJzb24gcGVvcGxlIGZhY2UgdXNlciBjb250YWN0IG91dGxpbmUnfSx7c2hvcnRfbmFtZTonYWN0aXZhdGUtYnJlYWtwb2ludHMnLGNoYXJhY3Rlcjon7qqXJyx1bmljb2RlOidFQTk3JyxkZXNjcmlwdGlvbjonZG90IGNpcmNsZSB0b2dnbGUgc3dpdGNoJ30se3Nob3J0X25hbWU6J2FkZCcsY2hhcmFjdGVyOifuqaAnLHVuaWNvZGU6J0VBNjAnLGRlc2NyaXB0aW9uOidjb21iaW5lIHBsdXMgYWRkIG1vcmUgbmV3J30se3Nob3J0X25hbWU6J2FyY2hpdmUnLGNoYXJhY3Rlcjon7qqYJyx1bmljb2RlOidFQTk4JyxkZXNjcmlwdGlvbjonc2F2ZSBib3ggZGVsaXZlcnkgcGFja2FnZSd9LHtzaG9ydF9uYW1lOidhcnJvdy1ib3RoJyxjaGFyYWN0ZXI6J+6qmScsdW5pY29kZTonRUE5OScsZGVzY3JpcHRpb246J3N3aXRjaCBzd2FwJ30se3Nob3J0X25hbWU6J2Fycm93LWRvd24nLGNoYXJhY3Rlcjon7qqaJyx1bmljb2RlOidFQTlBJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2Fycm93LWxlZnQnLGNoYXJhY3Rlcjon7qqbJyx1bmljb2RlOidFQTlCJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2Fycm93LXJpZ2h0JyxjaGFyYWN0ZXI6J+6qnCcsdW5pY29kZTonRUE5QycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidhcnJvdy1zbWFsbC1kb3duJyxjaGFyYWN0ZXI6J+6qnScsdW5pY29kZTonRUE5RCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidhcnJvdy1zbWFsbC1sZWZ0JyxjaGFyYWN0ZXI6J+6qnicsdW5pY29kZTonRUE5RScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidhcnJvdy1zbWFsbC1yaWdodCcsY2hhcmFjdGVyOifuqp8nLHVuaWNvZGU6J0VBOUYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonYXJyb3ctc21hbGwtdXAnLGNoYXJhY3Rlcjon7qqgJyx1bmljb2RlOidFQUEwJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2Fycm93LXVwJyxjaGFyYWN0ZXI6J+6qoScsdW5pY29kZTonRUFBMScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidiZWFrZXInLGNoYXJhY3Rlcjon7qm5Jyx1bmljb2RlOidFQTc5JyxkZXNjcmlwdGlvbjondGVzdCBsYWIgdHViZSB0b29sJ30se3Nob3J0X25hbWU6J2JlbGwtZG90JyxjaGFyYWN0ZXI6J+6umicsdW5pY29kZTonRUI5QScsZGVzY3JpcHRpb246J2FsZXJ0IG5vdGlmeSBub3RpZmljYXRpb24nfSx7c2hvcnRfbmFtZTonYmVsbCcsY2hhcmFjdGVyOifuqqInLHVuaWNvZGU6J0VBQTInLGRlc2NyaXB0aW9uOidhbGVydCBub3RpZnkgbm90aWZpY2F0aW9uJ30se3Nob3J0X25hbWU6J2JvbGQnLGNoYXJhY3Rlcjon7qqjJyx1bmljb2RlOidFQUEzJyxkZXNjcmlwdGlvbjondGV4dCBmb3JtYXQgd2VpZ2h0IGZvbnQgc3R5bGUnfSx7c2hvcnRfbmFtZTonYm9vaycsY2hhcmFjdGVyOifuqqQnLHVuaWNvZGU6J0VBQTQnLGRlc2NyaXB0aW9uOidsaWJyYXJ5IHRleHQgcmVhZCBvcGVuJ30se3Nob3J0X25hbWU6J2Jvb2ttYXJrJyxjaGFyYWN0ZXI6J+6qpScsdW5pY29kZTonRUFBNScsZGVzY3JpcHRpb246J2Jvb2sgc2F2ZSBsYXRlcid9LHtzaG9ydF9uYW1lOidicmllZmNhc2UnLGNoYXJhY3Rlcjon7qqsJyx1bmljb2RlOidFQUFDJyxkZXNjcmlwdGlvbjond29yayB3b3JrcGxhY2UnfSx7c2hvcnRfbmFtZTonYnJvYWRjYXN0JyxjaGFyYWN0ZXI6J+6qrScsdW5pY29kZTonRUFBRCcsZGVzY3JpcHRpb246J3Rvd2VyIHNpZ25hbCBjb25uZWN0IGNvbm5lY3Rpb24nfSx7c2hvcnRfbmFtZTonYnJvd3NlcicsY2hhcmFjdGVyOifuqq4nLHVuaWNvZGU6J0VBQUUnLGRlc2NyaXB0aW9uOid3ZWIgaW50ZXJuZXQgcGFnZSB3aW5kb3cnfSx7c2hvcnRfbmFtZTonYnVnJyxjaGFyYWN0ZXI6J+6qrycsdW5pY29kZTonRUFBRicsZGVzY3JpcHRpb246J2Vycm9yIGlzc3VlIGluc2VjdCBibG9jayd9LHtzaG9ydF9uYW1lOidjYWxlbmRhcicsY2hhcmFjdGVyOifuqrAnLHVuaWNvZGU6J0VBQjAnLGRlc2NyaXB0aW9uOidkYXkgdGltZSB3ZWVrIG1vbnRoIGRhdGUgc2NoZWR1bGUgZXZlbnQgcGxhbm5lcid9LHtzaG9ydF9uYW1lOidjYWxsLWluY29taW5nJyxjaGFyYWN0ZXI6J+6ukicsdW5pY29kZTonRUI5MicsZGVzY3JpcHRpb246J3Bob25lIGNlbGwgdm9pY2UgY29ubmVjdGlvbiBkaXJlY3Rpb24nfSx7c2hvcnRfbmFtZTonY2FsbC1vdXRnb2luZycsY2hhcmFjdGVyOifurpMnLHVuaWNvZGU6J0VCOTMnLGRlc2NyaXB0aW9uOidwaG9uZSBjZWxsIHZvaWNlIGNvbm5lY3Rpb24gZGlyZWN0aW9uJ30se3Nob3J0X25hbWU6J2Nhc2Utc2Vuc2l0aXZlJyxjaGFyYWN0ZXI6J+6qsScsdW5pY29kZTonRUFCMScsZGVzY3JpcHRpb246J3NlYXJjaCBmaWx0ZXIgb3B0aW9uIGxldHRlcnMgd29yZHMnfSx7c2hvcnRfbmFtZTonY2hlY2stYWxsJyxjaGFyYWN0ZXI6J+6usScsdW5pY29kZTonRUJCMScsZGVzY3JpcHRpb246J2NoZWNrbWFyayBzZWxlY3QgZXZlcnl0aGluZyBjaGVja2VkIG1hcmsgY29tcGxldGUgZmluaXNoIGRvbmUgYWNjZXB0IGFwcHJvdmUnfSx7c2hvcnRfbmFtZTonY2hlY2snLGNoYXJhY3Rlcjon7qqyJyx1bmljb2RlOidFQUIyJyxkZXNjcmlwdGlvbjonY2hlY2ttYXJrIHNlbGVjdCBldmVyeXRoaW5nIGNoZWNrZWQgbWFyayBjb21wbGV0ZSBmaW5pc2ggZG9uZSBhY2NlcHQgYXBwcm92ZSd9LHtzaG9ydF9uYW1lOidjaGVja2xpc3QnLGNoYXJhY3Rlcjon7qqzJyx1bmljb2RlOidFQUIzJyxkZXNjcmlwdGlvbjonY2hlY2ttYXJrIHNlbGVjdCBldmVyeXRoaW5nIGNoZWNrZWQgbWFyayBjb21wbGV0ZSBmaW5pc2ggZG9uZSBhY2NlcHQgdG9kbyB0YXNrIHRleHQnfSx7c2hvcnRfbmFtZTonY2hldnJvbi1kb3duJyxjaGFyYWN0ZXI6J+6qtCcsdW5pY29kZTonRUFCNCcsZGVzY3JpcHRpb246J3R3aXN0aWUgdHJlZSBub2RlIGZvbGRlciBmb2xkIGNvbGxhcHNlJ30se3Nob3J0X25hbWU6J2NoZXZyb24tbGVmdCcsY2hhcmFjdGVyOifuqrUnLHVuaWNvZGU6J0VBQjUnLGRlc2NyaXB0aW9uOid0d2lzdGllIHRyZWUgbm9kZSBmb2xkZXIgZm9sZCBjb2xsYXBzZSd9LHtzaG9ydF9uYW1lOidjaGV2cm9uLXJpZ2h0JyxjaGFyYWN0ZXI6J+6qticsdW5pY29kZTonRUFCNicsZGVzY3JpcHRpb246J3R3aXN0aWUgdHJlZSBub2RlIGZvbGRlciBmb2xkIGNvbGxhcHNlJ30se3Nob3J0X25hbWU6J2NoZXZyb24tdXAnLGNoYXJhY3Rlcjon7qq3Jyx1bmljb2RlOidFQUI3JyxkZXNjcmlwdGlvbjondHdpc3RpZSB0cmVlIG5vZGUgZm9sZGVyIGZvbGQgY29sbGFwc2UnfSx7c2hvcnRfbmFtZTonY2hyb21lLWNsb3NlJyxjaGFyYWN0ZXI6J+6quCcsdW5pY29kZTonRUFCOCcsZGVzY3JpcHRpb246J21lbnUgYmFyIHdpbmRvdyBkaXNtaXNzJ30se3Nob3J0X25hbWU6J2Nocm9tZS1tYXhpbWl6ZScsY2hhcmFjdGVyOifuqrknLHVuaWNvZGU6J0VBQjknLGRlc2NyaXB0aW9uOidtZW51IGJhciB3aW5kb3cgbGFyZ2UgaW5jcmVhc2UnfSx7c2hvcnRfbmFtZTonY2hyb21lLW1pbmltaXplJyxjaGFyYWN0ZXI6J+6quicsdW5pY29kZTonRUFCQScsZGVzY3JpcHRpb246J21lbnUgYmFyIHdpbmRvdyBzbWFsbCBkZWNyZWFzZSd9LHtzaG9ydF9uYW1lOidjaHJvbWUtcmVzdG9yZScsY2hhcmFjdGVyOifuqrsnLHVuaWNvZGU6J0VBQkInLGRlc2NyaXB0aW9uOidtZW51IGJhciB3aW5kb3cnfSx7c2hvcnRfbmFtZTonY2lyY2xlLWZpbGxlZCcsY2hhcmFjdGVyOifuqbEnLHVuaWNvZGU6J0VBNzEnLGRlc2NyaXB0aW9uOidkb3Qgcm91bmQgc21hbGwgYnVsbGV0IGJyZWFrcG9pbnQnfSx7c2hvcnRfbmFtZTonY2lyY2xlLWxhcmdlLWZpbGxlZCcsY2hhcmFjdGVyOifurrQnLHVuaWNvZGU6J0VCQjQnLGRlc2NyaXB0aW9uOidkb3Qgcm91bmQgYnVsbGV0J30se3Nob3J0X25hbWU6J2NpcmNsZS1sYXJnZS1vdXRsaW5lJyxjaGFyYWN0ZXI6J+6utScsdW5pY29kZTonRUJCNScsZGVzY3JpcHRpb246J2RvdCByb3VuZCBidWxsZXQnfSx7c2hvcnRfbmFtZTonY2lyY2xlLW91dGxpbmUnLGNoYXJhY3Rlcjon7qq8Jyx1bmljb2RlOidFQUJDJyxkZXNjcmlwdGlvbjonZG90IHJvdW5kIHNtYWxsIGJ1bGxldCB1bnZlcmlmaWVkIGJyZWFrcG9pbnQnfSx7c2hvcnRfbmFtZTonY2lyY2xlLXNsYXNoJyxjaGFyYWN0ZXI6J+6qvScsdW5pY29kZTonRUFCRCcsZGVzY3JpcHRpb246J2Vycm9yIGJsb2NrIHN0b3AgZGlzYWJsZSd9LHtzaG9ydF9uYW1lOidjaXJjdWl0LWJvYXJkJyxjaGFyYWN0ZXI6J+6qvicsdW5pY29kZTonRUFCRScsZGVzY3JpcHRpb246J2lvdCBkZXZpY2UgcHJvY2VzcyBsaW5lcyd9LHtzaG9ydF9uYW1lOidjbGVhci1hbGwnLGNoYXJhY3Rlcjon7qq/Jyx1bmljb2RlOidFQUJGJyxkZXNjcmlwdGlvbjoncmVzZXQgcmVtb3ZlJ30se3Nob3J0X25hbWU6J2NsaXBweScsY2hhcmFjdGVyOifuq4AnLHVuaWNvZGU6J0VBQzAnLGRlc2NyaXB0aW9uOidjbGlwYm9hcmQgZG9jdW1lbnQgZWRpdCBjb3B5J30se3Nob3J0X25hbWU6J2Nsb3NlLWFsbCcsY2hhcmFjdGVyOifuq4EnLHVuaWNvZGU6J0VBQzEnLGRlc2NyaXB0aW9uOidyZW1vdmUgYnVsayd9LHtzaG9ydF9uYW1lOidjbG9zZScsY2hhcmFjdGVyOifuqbYnLHVuaWNvZGU6J0VBNzYnLGRlc2NyaXB0aW9uOidyZW1vdmUgeCBjYW5jZWwgc3RvcCBtaWx0aXBseSd9LHtzaG9ydF9uYW1lOidjbG91ZC1kb3dubG9hZCcsY2hhcmFjdGVyOifuq4InLHVuaWNvZGU6J0VBQzInLGRlc2NyaXB0aW9uOidpbnN0YWxsIGltcG9ydCd9LHtzaG9ydF9uYW1lOidjbG91ZC11cGxvYWQnLGNoYXJhY3Rlcjon7quDJyx1bmljb2RlOidFQUMzJyxkZXNjcmlwdGlvbjonZXhwb3J0J30se3Nob3J0X25hbWU6J2Nsb3VkJyxjaGFyYWN0ZXI6J+6uqicsdW5pY29kZTonRUJBQScsZGVzY3JpcHRpb246J29ubGluZSBzZXJ2aWNlJ30se3Nob3J0X25hbWU6J2NvZGUnLGNoYXJhY3Rlcjon7quEJyx1bmljb2RlOidFQUM0JyxkZXNjcmlwdGlvbjonZW1iZWQgc2NyaXB0IHByb2dyYW1taW5nIHNlcnZlcid9LHtzaG9ydF9uYW1lOidjb2xsYXBzZS1hbGwnLGNoYXJhY3Rlcjon7quFJyx1bmljb2RlOidFQUM1JyxkZXNjcmlwdGlvbjonYnVsayBmb2xkIG1pbmltaXplJ30se3Nob3J0X25hbWU6J2NvbG9yLW1vZGUnLGNoYXJhY3Rlcjon7quGJyx1bmljb2RlOidFQUM2JyxkZXNjcmlwdGlvbjonc3dpdGNoIGRhcmsgbGlnaHQgY29udHJhc3QgbW9kZSB0b2dnbGUnfSx7c2hvcnRfbmFtZTonY29tYmluZScsY2hhcmFjdGVyOifurrYnLHVuaWNvZGU6J0VCQjYnLGRlc2NyaXB0aW9uOidncm91cCBtaXggYmxlbmQnfSx7c2hvcnRfbmFtZTonY29tbWVudC1kaXNjdXNzaW9uJyxjaGFyYWN0ZXI6J+6rhycsdW5pY29kZTonRUFDNycsZGVzY3JpcHRpb246J2RpYWxvZyBtZXNzYWdlIGJ1YmJsZSBjaGF0J30se3Nob3J0X25hbWU6J2NvbW1lbnQnLGNoYXJhY3Rlcjon7qmrJyx1bmljb2RlOidFQTZCJyxkZXNjcmlwdGlvbjonZGlhbG9nIG1lc3NhZ2UgYnViYmxlIGNoYXQnfSx7c2hvcnRfbmFtZTonY3JlZGl0LWNhcmQnLGNoYXJhY3Rlcjon7quJJyx1bmljb2RlOidFQUM5JyxkZXNjcmlwdGlvbjoncGF5bWVudCBtZXJjaGFudCBtb25leSd9LHtzaG9ydF9uYW1lOidkYXNoJyxjaGFyYWN0ZXI6J+6rjCcsdW5pY29kZTonRUFDQycsZGVzY3JpcHRpb246J2xpbmUgbWludXMgc3VidHJhY3QgaHlwaGVuJ30se3Nob3J0X25hbWU6J2Rhc2hib2FyZCcsY2hhcmFjdGVyOifuq40nLHVuaWNvZGU6J0VBQ0QnLGRlc2NyaXB0aW9uOidwYW5lbCBzdGF0cyBkaWFsJ30se3Nob3J0X25hbWU6J2RhdGFiYXNlJyxjaGFyYWN0ZXI6J+6rjicsdW5pY29kZTonRUFDRScsZGVzY3JpcHRpb246J3NxbCBkYiBzdG9yYWdlIG9ubGluZSBjbG91ZCd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1hbHQtc21hbGwnLGNoYXJhY3Rlcjon7q6oJyx1bmljb2RlOidFQkE4JyxkZXNjcmlwdGlvbjoncnVuJ30se3Nob3J0X25hbWU6J2RlYnVnLWFsdCcsY2hhcmFjdGVyOifurpEnLHVuaWNvZGU6J0VCOTEnLGRlc2NyaXB0aW9uOidydW4nfSx7c2hvcnRfbmFtZTonZGVidWctYnJlYWtwb2ludC1jb25kaXRpb25hbC11bnZlcmlmaWVkJyxjaGFyYWN0ZXI6J+6qpicsdW5pY29kZTonRUFBNicsZGVzY3JpcHRpb246J3Rlcm1pbmFsIGNvbW1hbmQgaW5wdXQgY29tcGlsZSBidWlsZCd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1icmVha3BvaW50LWNvbmRpdGlvbmFsJyxjaGFyYWN0ZXI6J+6qpycsdW5pY29kZTonRUFBNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1icmVha3BvaW50LWRhdGEtdW52ZXJpZmllZCcsY2hhcmFjdGVyOifuqqgnLHVuaWNvZGU6J0VBQTgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVidWctYnJlYWtwb2ludC1kYXRhJyxjaGFyYWN0ZXI6J+6qqScsdW5pY29kZTonRUFBOScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1icmVha3BvaW50LWZ1bmN0aW9uLXVudmVyaWZpZWQnLGNoYXJhY3Rlcjon7q6HJyx1bmljb2RlOidFQjg3JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLWJyZWFrcG9pbnQtZnVuY3Rpb24nLGNoYXJhY3Rlcjon7q6IJyx1bmljb2RlOidFQjg4JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLWJyZWFrcG9pbnQtbG9nLXVudmVyaWZpZWQnLGNoYXJhY3Rlcjon7qqqJyx1bmljb2RlOidFQUFBJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLWJyZWFrcG9pbnQtbG9nJyxjaGFyYWN0ZXI6J+6qqycsdW5pY29kZTonRUFBQicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1icmVha3BvaW50LXVuc3VwcG9ydGVkJyxjaGFyYWN0ZXI6J+6ujCcsdW5pY29kZTonRUI4QycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1jb25zb2xlJyxjaGFyYWN0ZXI6J+6umycsdW5pY29kZTonRUI5QicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1jb250aW51ZScsY2hhcmFjdGVyOifuq48nLHVuaWNvZGU6J0VBQ0YnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVidWctZGlzY29ubmVjdCcsY2hhcmFjdGVyOifuq5AnLHVuaWNvZGU6J0VBRDAnLGRlc2NyaXB0aW9uOidzdG9wIHVucGx1ZyBlamVjdCd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1wYXVzZScsY2hhcmFjdGVyOifuq5EnLHVuaWNvZGU6J0VBRDEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVidWctcmVydW4nLGNoYXJhY3Rlcjon7q+AJyx1bmljb2RlOidFQkMwJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLXJlc3RhcnQtZnJhbWUnLGNoYXJhY3Rlcjon7q6QJyx1bmljb2RlOidFQjkwJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLXJlc3RhcnQnLGNoYXJhY3Rlcjon7quSJyx1bmljb2RlOidFQUQyJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLXJldmVyc2UtY29udGludWUnLGNoYXJhY3Rlcjon7q6OJyx1bmljb2RlOidFQjhFJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLXN0YWNrZnJhbWUtYWN0aXZlJyxjaGFyYWN0ZXI6J+6uiScsdW5pY29kZTonRUI4OScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1zdGFja2ZyYW1lLWRvdCcsY2hhcmFjdGVyOifuroonLHVuaWNvZGU6J0VCOEEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVidWctc3RhY2tmcmFtZScsY2hhcmFjdGVyOifurosnLHVuaWNvZGU6J0VCOEInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVidWctc3RhcnQnLGNoYXJhY3Rlcjon7quTJyx1bmljb2RlOidFQUQzJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLXN0ZXAtYmFjaycsY2hhcmFjdGVyOifuro8nLHVuaWNvZGU6J0VCOEYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVidWctc3RlcC1pbnRvJyxjaGFyYWN0ZXI6J+6rlCcsdW5pY29kZTonRUFENCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1zdGVwLW91dCcsY2hhcmFjdGVyOifuq5UnLHVuaWNvZGU6J0VBRDUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVidWctc3RlcC1vdmVyJyxjaGFyYWN0ZXI6J+6rlicsdW5pY29kZTonRUFENicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1zdG9wJyxjaGFyYWN0ZXI6J+6rlycsdW5pY29kZTonRUFENycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1ZycsY2hhcmFjdGVyOifuq5gnLHVuaWNvZGU6J0VBRDgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZGVza3RvcC1kb3dubG9hZCcsY2hhcmFjdGVyOifuqbgnLHVuaWNvZGU6J0VBNzgnLGRlc2NyaXB0aW9uOidpbnN0YWxsJ30se3Nob3J0X25hbWU6J2RldmljZS1jYW1lcmEtdmlkZW8nLGNoYXJhY3Rlcjon7quZJyx1bmljb2RlOidFQUQ5JyxkZXNjcmlwdGlvbjonbW92aWUgcmVjb3JkIGNhcHR1cmUnfSx7c2hvcnRfbmFtZTonZGV2aWNlLWNhbWVyYScsY2hhcmFjdGVyOifuq5onLHVuaWNvZGU6J0VBREEnLGRlc2NyaXB0aW9uOidjYXB0dXJlIHBpY3R1cmUgaW1hZ2UnfSx7c2hvcnRfbmFtZTonZGV2aWNlLW1vYmlsZScsY2hhcmFjdGVyOifuq5snLHVuaWNvZGU6J0VBREInLGRlc2NyaXB0aW9uOidwaG9uZSBoYW5kaGVsZCBzbWFydHBob25lJ30se3Nob3J0X25hbWU6J2RpZmYtYWRkZWQnLGNoYXJhY3Rlcjon7qucJyx1bmljb2RlOidFQURDJyxkZXNjcmlwdGlvbjonZ2l0IGNoYW5nZSd9LHtzaG9ydF9uYW1lOidkaWZmLWlnbm9yZWQnLGNoYXJhY3Rlcjon7qudJyx1bmljb2RlOidFQUREJyxkZXNjcmlwdGlvbjonZ2l0IGNoYW5nZSd9LHtzaG9ydF9uYW1lOidkaWZmLW1vZGlmaWVkJyxjaGFyYWN0ZXI6J+6rnicsdW5pY29kZTonRUFERScsZGVzY3JpcHRpb246J2dpdCBjaGFuZ2UnfSx7c2hvcnRfbmFtZTonZGlmZi1yZW1vdmVkJyxjaGFyYWN0ZXI6J+6rnycsdW5pY29kZTonRUFERicsZGVzY3JpcHRpb246J2dpdCBjaGFuZ2UnfSx7c2hvcnRfbmFtZTonZGlmZi1yZW5hbWVkJyxjaGFyYWN0ZXI6J+6roCcsdW5pY29kZTonRUFFMCcsZGVzY3JpcHRpb246J2dpdCBjaGFuZ2UnfSx7c2hvcnRfbmFtZTonZGlmZicsY2hhcmFjdGVyOifuq6EnLHVuaWNvZGU6J0VBRTEnLGRlc2NyaXB0aW9uOidnaXQgY2hhbmdlJ30se3Nob3J0X25hbWU6J2Rpc2NhcmQnLGNoYXJhY3Rlcjon7quiJyx1bmljb2RlOidFQUUyJyxkZXNjcmlwdGlvbjoncmVtb3ZlIGRlbGV0ZSd9LHtzaG9ydF9uYW1lOidlZGl0JyxjaGFyYWN0ZXI6J+6psycsdW5pY29kZTonRUE3MycsZGVzY3JpcHRpb246J3BlbmNpbCBtb2RpZnkgY2hhbmdlJ30se3Nob3J0X25hbWU6J2VkaXRvci1sYXlvdXQnLGNoYXJhY3Rlcjon7qujJyx1bmljb2RlOidFQUUzJyxkZXNjcmlwdGlvbjonZGV2aWNlIHBvc2l0aW9uIGhvcml6b250YWwgdmVydGljYWwgc3dpdGNoJ30se3Nob3J0X25hbWU6J2VsbGlwc2lzJyxjaGFyYWN0ZXI6J+6pvCcsdW5pY29kZTonRUE3QycsZGVzY3JpcHRpb246J21vcmUga2ViYWIgZG90J30se3Nob3J0X25hbWU6J2VtcHR5LXdpbmRvdycsY2hhcmFjdGVyOifuq6QnLHVuaWNvZGU6J0VBRTQnLGRlc2NyaXB0aW9uOidzY3JlZW4gbmV3J30se3Nob3J0X25hbWU6J2Vycm9yJyxjaGFyYWN0ZXI6J+6qhycsdW5pY29kZTonRUE4NycsZGVzY3JpcHRpb246J3Byb2JsZW0gaXNzdWUgYnVnJ30se3Nob3J0X25hbWU6J2V4Y2x1ZGUnLGNoYXJhY3Rlcjon7qulJyx1bmljb2RlOidFQUU1JyxkZXNjcmlwdGlvbjonZ2VhciBzZXR0aW5ncyBmaWx0ZXInfSx7c2hvcnRfbmFtZTonZXhwYW5kLWFsbCcsY2hhcmFjdGVyOifurpUnLHVuaWNvZGU6J0VCOTUnLGRlc2NyaXB0aW9uOididWxrJ30se3Nob3J0X25hbWU6J2V4cG9ydCcsY2hhcmFjdGVyOifurqwnLHVuaWNvZGU6J0VCQUMnLGRlc2NyaXB0aW9uOidhcnJvdyBwb2ludCBvdXQnfSx7c2hvcnRfbmFtZTonZXh0ZW5zaW9ucycsY2hhcmFjdGVyOifuq6YnLHVuaWNvZGU6J0VBRTYnLGRlc2NyaXB0aW9uOidwbHVnaW4gcHV6emxlJ30se3Nob3J0X25hbWU6J2V5ZS1jbG9zZWQnLGNoYXJhY3Rlcjon7qunJyx1bmljb2RlOidFQUU3JyxkZXNjcmlwdGlvbjonaGlkZGVuIGhpZGUgdG9nZ2xlJ30se3Nob3J0X25hbWU6J2V5ZScsY2hhcmFjdGVyOifuqbAnLHVuaWNvZGU6J0VBNzAnLGRlc2NyaXB0aW9uOid2aXNpYmxlIHRvZ2dsZSd9LHtzaG9ydF9uYW1lOidmZWVkYmFjaycsY2hhcmFjdGVyOifurpYnLHVuaWNvZGU6J0VCOTYnLGRlc2NyaXB0aW9uOidzbWlsZSBtZXNzYWdlIGNvbW1lbnQgc3VwcG9ydCd9LHtzaG9ydF9uYW1lOidmaWxlLWJpbmFyeScsY2hhcmFjdGVyOifuq6gnLHVuaWNvZGU6J0VBRTgnLGRlc2NyaXB0aW9uOidkb2N1bWVudCBwYWdlJ30se3Nob3J0X25hbWU6J2ZpbGUtY29kZScsY2hhcmFjdGVyOifuq6knLHVuaWNvZGU6J0VBRTknLGRlc2NyaXB0aW9uOidkb2N1bWVudCBwYWdlJ30se3Nob3J0X25hbWU6J2ZpbGUtbWVkaWEnLGNoYXJhY3Rlcjon7quqJyx1bmljb2RlOidFQUVBJyxkZXNjcmlwdGlvbjonZG9jdW1lbnQgcGFnZSd9LHtzaG9ydF9uYW1lOidmaWxlLXBkZicsY2hhcmFjdGVyOifuq6snLHVuaWNvZGU6J0VBRUInLGRlc2NyaXB0aW9uOidkb2N1bWVudCBwYWdlJ30se3Nob3J0X25hbWU6J2ZpbGUtc3VibW9kdWxlJyxjaGFyYWN0ZXI6J+6rrCcsdW5pY29kZTonRUFFQycsZGVzY3JpcHRpb246J2RvY3VtZW50IHBhZ2UnfSx7c2hvcnRfbmFtZTonZmlsZS1zeW1saW5rLWRpcmVjdG9yeScsY2hhcmFjdGVyOifuq60nLHVuaWNvZGU6J0VBRUQnLGRlc2NyaXB0aW9uOidkb2N1bWVudCBwYWdlJ30se3Nob3J0X25hbWU6J2ZpbGUtc3ltbGluay1maWxlJyxjaGFyYWN0ZXI6J+6rricsdW5pY29kZTonRUFFRScsZGVzY3JpcHRpb246J2RvY3VtZW50IHBhZ2UnfSx7c2hvcnRfbmFtZTonZmlsZS16aXAnLGNoYXJhY3Rlcjon7quvJyx1bmljb2RlOidFQUVGJyxkZXNjcmlwdGlvbjonZG9jdW1lbnQgcGFnZSd9LHtzaG9ydF9uYW1lOidmaWxlJyxjaGFyYWN0ZXI6J+6puycsdW5pY29kZTonRUE3QicsZGVzY3JpcHRpb246J2RvY3VtZW50IHBhZ2UnfSx7c2hvcnRfbmFtZTonZmlsZXMnLGNoYXJhY3Rlcjon7quwJyx1bmljb2RlOidFQUYwJyxkZXNjcmlwdGlvbjoncGFnZXMnfSx7c2hvcnRfbmFtZTonZmlsdGVyJyxjaGFyYWN0ZXI6J+6rsScsdW5pY29kZTonRUFGMScsZGVzY3JpcHRpb246J2Z1bm5lbCd9LHtzaG9ydF9uYW1lOidmbGFtZScsY2hhcmFjdGVyOifuq7InLHVuaWNvZGU6J0VBRjInLGRlc2NyaXB0aW9uOidmaXJlIHRyZW5kIGhlYXQgaG90J30se3Nob3J0X25hbWU6J2ZvbGQtZG93bicsY2hhcmFjdGVyOifuq7MnLHVuaWNvZGU6J0VBRjMnLGRlc2NyaXB0aW9uOidjb2xsYXBzZSd9LHtzaG9ydF9uYW1lOidmb2xkLXVwJyxjaGFyYWN0ZXI6J+6rtCcsdW5pY29kZTonRUFGNCcsZGVzY3JpcHRpb246J2V4cGFuZCd9LHtzaG9ydF9uYW1lOidmb2xkJyxjaGFyYWN0ZXI6J+6rtScsdW5pY29kZTonRUFGNScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidmb2xkZXItYWN0aXZlJyxjaGFyYWN0ZXI6J+6rticsdW5pY29kZTonRUFGNicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidmb2xkZXItb3BlbmVkJyxjaGFyYWN0ZXI6J+6rtycsdW5pY29kZTonRUFGNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidmb2xkZXInLGNoYXJhY3Rlcjon7qqDJyx1bmljb2RlOidFQTgzJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dlYXInLGNoYXJhY3Rlcjon7qu4Jyx1bmljb2RlOidFQUY4JyxkZXNjcmlwdGlvbjonc2V0dGluZ3MgY29nJ30se3Nob3J0X25hbWU6J2dpZnQnLGNoYXJhY3Rlcjon7qu5Jyx1bmljb2RlOidFQUY5JyxkZXNjcmlwdGlvbjonZmVhdHVyZSBib3ggcHJlc2VudCd9LHtzaG9ydF9uYW1lOidnaXN0LXNlY3JldCcsY2hhcmFjdGVyOifuq7onLHVuaWNvZGU6J0VBRkEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ2l0LWNvbW1pdCcsY2hhcmFjdGVyOifuq7wnLHVuaWNvZGU6J0VBRkMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ2l0LWNvbXBhcmUnLGNoYXJhY3Rlcjon7qu9Jyx1bmljb2RlOidFQUZEJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dpdC1tZXJnZScsY2hhcmFjdGVyOifuq74nLHVuaWNvZGU6J0VBRkUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ2l0LXB1bGwtcmVxdWVzdC1jcmVhdGUnLGNoYXJhY3Rlcjon7q68Jyx1bmljb2RlOidFQkJDJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dpdC1wdWxsLXJlcXVlc3QnLGNoYXJhY3Rlcjon7qmkJyx1bmljb2RlOidFQTY0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dpdGh1Yi1hY3Rpb24nLGNoYXJhY3Rlcjon7qu/Jyx1bmljb2RlOidFQUZGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dpdGh1Yi1hbHQnLGNoYXJhY3Rlcjon7qyAJyx1bmljb2RlOidFQjAwJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dpdGh1Yi1pbnZlcnRlZCcsY2hhcmFjdGVyOifurqEnLHVuaWNvZGU6J0VCQTEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ2l0aHViJyxjaGFyYWN0ZXI6J+6qhCcsdW5pY29kZTonRUE4NCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidnbG9iZScsY2hhcmFjdGVyOifurIEnLHVuaWNvZGU6J0VCMDEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ28tdG8tZmlsZScsY2hhcmFjdGVyOifuqpQnLHVuaWNvZGU6J0VBOTQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ3JhYmJlcicsY2hhcmFjdGVyOifurIInLHVuaWNvZGU6J0VCMDInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ3JhcGgtbGVmdCcsY2hhcmFjdGVyOifurq0nLHVuaWNvZGU6J0VCQUQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZ3JhcGgnLGNoYXJhY3Rlcjon7qyDJyx1bmljb2RlOidFQjAzJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dyaXBwZXInLGNoYXJhY3Rlcjon7qyEJyx1bmljb2RlOidFQjA0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dyb3VwLWJ5LXJlZi10eXBlJyxjaGFyYWN0ZXI6J+6ulycsdW5pY29kZTonRUI5NycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidoZWFydCcsY2hhcmFjdGVyOifurIUnLHVuaWNvZGU6J0VCMDUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaGlzdG9yeScsY2hhcmFjdGVyOifuqoInLHVuaWNvZGU6J0VBODInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaG9tZScsY2hhcmFjdGVyOifurIYnLHVuaWNvZGU6J0VCMDYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaG9yaXpvbnRhbC1ydWxlJyxjaGFyYWN0ZXI6J+6shycsdW5pY29kZTonRUIwNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidodWJvdCcsY2hhcmFjdGVyOifurIgnLHVuaWNvZGU6J0VCMDgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaW5ib3gnLGNoYXJhY3Rlcjon7qyJJyx1bmljb2RlOidFQjA5JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2luZm8nLGNoYXJhY3Rlcjon7qm0Jyx1bmljb2RlOidFQTc0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2lzc3VlLWNsb3NlZCcsY2hhcmFjdGVyOifurIonLHVuaWNvZGU6J0VCMEEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaXNzdWUtcmVvcGVuZWQnLGNoYXJhY3Rlcjon7qyLJyx1bmljb2RlOidFQjBCJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2lzc3VlcycsY2hhcmFjdGVyOifurIwnLHVuaWNvZGU6J0VCMEMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaXRhbGljJyxjaGFyYWN0ZXI6J+6sjScsdW5pY29kZTonRUIwRCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidqZXJzZXknLGNoYXJhY3Rlcjon7qyOJyx1bmljb2RlOidFQjBFJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2pzb24nLGNoYXJhY3Rlcjon7qyPJyx1bmljb2RlOidFQjBGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2tlYmFiLXZlcnRpY2FsJyxjaGFyYWN0ZXI6J+6skCcsdW5pY29kZTonRUIxMCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidrZXknLGNoYXJhY3Rlcjon7qyRJyx1bmljb2RlOidFQjExJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xhdycsY2hhcmFjdGVyOifurJInLHVuaWNvZGU6J0VCMTInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGlicmFyeScsY2hhcmFjdGVyOifurpwnLHVuaWNvZGU6J0VCOUMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGlnaHRidWxiLWF1dG9maXgnLGNoYXJhY3Rlcjon7qyTJyx1bmljb2RlOidFQjEzJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xpZ2h0YnVsYicsY2hhcmFjdGVyOifuqaEnLHVuaWNvZGU6J0VBNjEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGluay1leHRlcm5hbCcsY2hhcmFjdGVyOifurJQnLHVuaWNvZGU6J0VCMTQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGluaycsY2hhcmFjdGVyOifurJUnLHVuaWNvZGU6J0VCMTUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGlzdC1maWx0ZXInLGNoYXJhY3Rlcjon7q6DJyx1bmljb2RlOidFQjgzJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xpc3QtZmxhdCcsY2hhcmFjdGVyOifuroQnLHVuaWNvZGU6J0VCODQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGlzdC1vcmRlcmVkJyxjaGFyYWN0ZXI6J+6slicsdW5pY29kZTonRUIxNicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsaXN0LXNlbGVjdGlvbicsY2hhcmFjdGVyOifuroUnLHVuaWNvZGU6J0VCODUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGlzdC10cmVlJyxjaGFyYWN0ZXI6J+6uhicsdW5pY29kZTonRUI4NicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsaXN0LXVub3JkZXJlZCcsY2hhcmFjdGVyOifurJcnLHVuaWNvZGU6J0VCMTcnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGl2ZS1zaGFyZScsY2hhcmFjdGVyOifurJgnLHVuaWNvZGU6J0VCMTgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbG9hZGluZycsY2hhcmFjdGVyOifurJknLHVuaWNvZGU6J0VCMTknLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbG9jYXRpb24nLGNoYXJhY3Rlcjon7qyaJyx1bmljb2RlOidFQjFBJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xvY2snLGNoYXJhY3Rlcjon7qm1Jyx1bmljb2RlOidFQTc1JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J21hZ25ldCcsY2hhcmFjdGVyOifurq4nLHVuaWNvZGU6J0VCQUUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbWFpbC1yZWFkJyxjaGFyYWN0ZXI6J+6smycsdW5pY29kZTonRUIxQicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidtYWlsJyxjaGFyYWN0ZXI6J+6snCcsdW5pY29kZTonRUIxQycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidtYXJrZG93bicsY2hhcmFjdGVyOifurJ0nLHVuaWNvZGU6J0VCMUQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbWVnYXBob25lJyxjaGFyYWN0ZXI6J+6snicsdW5pY29kZTonRUIxRScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidtZW50aW9uJyxjaGFyYWN0ZXI6J+6snycsdW5pY29kZTonRUIxRicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidtZW51JyxjaGFyYWN0ZXI6J+6ulCcsdW5pY29kZTonRUI5NCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidtZXJnZScsY2hhcmFjdGVyOifurqsnLHVuaWNvZGU6J0VCQUInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbWlsZXN0b25lJyxjaGFyYWN0ZXI6J+6soCcsdW5pY29kZTonRUIyMCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidtaXJyb3InLGNoYXJhY3Rlcjon7qmpJyx1bmljb2RlOidFQTY5JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J21vcnRhci1ib2FyZCcsY2hhcmFjdGVyOifurKEnLHVuaWNvZGU6J0VCMjEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbW92ZScsY2hhcmFjdGVyOifurKInLHVuaWNvZGU6J0VCMjInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbXVsdGlwbGUtd2luZG93cycsY2hhcmFjdGVyOifurKMnLHVuaWNvZGU6J0VCMjMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbXV0ZScsY2hhcmFjdGVyOifurKQnLHVuaWNvZGU6J0VCMjQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbmV3LWZpbGUnLGNoYXJhY3Rlcjon7qm/Jyx1bmljb2RlOidFQTdGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J25ldy1mb2xkZXInLGNoYXJhY3Rlcjon7qqAJyx1bmljb2RlOidFQTgwJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J25vLW5ld2xpbmUnLGNoYXJhY3Rlcjon7qylJyx1bmljb2RlOidFQjI1JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J25vdGUnLGNoYXJhY3Rlcjon7qymJyx1bmljb2RlOidFQjI2JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J25vdGVib29rLXRlbXBsYXRlJyxjaGFyYWN0ZXI6J+6uvycsdW5pY29kZTonRUJCRicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidub3RlYm9vaycsY2hhcmFjdGVyOifurq8nLHVuaWNvZGU6J0VCQUYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonb2N0b2ZhY2UnLGNoYXJhY3Rlcjon7qynJyx1bmljb2RlOidFQjI3JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J29wZW4tcHJldmlldycsY2hhcmFjdGVyOifurKgnLHVuaWNvZGU6J0VCMjgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonb3JnYW5pemF0aW9uJyxjaGFyYWN0ZXI6J+6pvicsdW5pY29kZTonRUE3RScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidvdXRwdXQnLGNoYXJhY3Rlcjon7q6dJyx1bmljb2RlOidFQjlEJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3BhY2thZ2UnLGNoYXJhY3Rlcjon7qypJyx1bmljb2RlOidFQjI5JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3BhaW50Y2FuJyxjaGFyYWN0ZXI6J+6sqicsdW5pY29kZTonRUIyQScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidwYXNzLWZpbGxlZCcsY2hhcmFjdGVyOifurrMnLHVuaWNvZGU6J0VCQjMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncGFzcycsY2hhcmFjdGVyOifurqQnLHVuaWNvZGU6J0VCQTQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncGVyc29uJyxjaGFyYWN0ZXI6J+6ppycsdW5pY29kZTonRUE2NycsZGVzY3JpcHRpb246J3BlcnNvbiBwZW9wbGUgZmFjZSB1c2VyIGNvbnRhY3Qgb3V0bGluZSd9LHtzaG9ydF9uYW1lOidwaW4nLGNoYXJhY3Rlcjon7qyrJyx1bmljb2RlOidFQjJCJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3Bpbm5lZC1kaXJ0eScsY2hhcmFjdGVyOifurrInLHVuaWNvZGU6J0VCQjInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncGlubmVkJyxjaGFyYWN0ZXI6J+6uoCcsdW5pY29kZTonRUJBMCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidwbGF5LWNpcmNsZScsY2hhcmFjdGVyOifurqYnLHVuaWNvZGU6J0VCQTYnLGRlc2NyaXB0aW9uOidydW4nfSx7c2hvcnRfbmFtZToncGxheScsY2hhcmFjdGVyOifurKwnLHVuaWNvZGU6J0VCMkMnLGRlc2NyaXB0aW9uOidydW4nfSx7c2hvcnRfbmFtZToncGx1ZycsY2hhcmFjdGVyOifurK0nLHVuaWNvZGU6J0VCMkQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncHJlc2VydmUtY2FzZScsY2hhcmFjdGVyOifurK4nLHVuaWNvZGU6J0VCMkUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncHJldmlldycsY2hhcmFjdGVyOifurK8nLHVuaWNvZGU6J0VCMkYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncHJpbWl0aXZlLXNxdWFyZScsY2hhcmFjdGVyOifuqbInLHVuaWNvZGU6J0VBNzInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncHJvamVjdCcsY2hhcmFjdGVyOifurLAnLHVuaWNvZGU6J0VCMzAnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncHVsc2UnLGNoYXJhY3Rlcjon7qyxJyx1bmljb2RlOidFQjMxJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3F1ZXN0aW9uJyxjaGFyYWN0ZXI6J+6ssicsdW5pY29kZTonRUIzMicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidxdW90ZScsY2hhcmFjdGVyOifurLMnLHVuaWNvZGU6J0VCMzMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmFkaW8tdG93ZXInLGNoYXJhY3Rlcjon7qy0Jyx1bmljb2RlOidFQjM0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3JlYWN0aW9ucycsY2hhcmFjdGVyOifurLUnLHVuaWNvZGU6J0VCMzUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVjb3JkLWtleXMnLGNoYXJhY3Rlcjon7qmlJyx1bmljb2RlOidFQTY1JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3JlY29yZCcsY2hhcmFjdGVyOifurqcnLHVuaWNvZGU6J0VCQTcnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVkbycsY2hhcmFjdGVyOifurrAnLHVuaWNvZGU6J0VCQjAnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVmZXJlbmNlcycsY2hhcmFjdGVyOifurLYnLHVuaWNvZGU6J0VCMzYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVmcmVzaCcsY2hhcmFjdGVyOifurLcnLHVuaWNvZGU6J0VCMzcnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVnZXgnLGNoYXJhY3Rlcjon7qy4Jyx1bmljb2RlOidFQjM4JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3JlbW90ZS1leHBsb3JlcicsY2hhcmFjdGVyOifurLknLHVuaWNvZGU6J0VCMzknLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVtb3RlJyxjaGFyYWN0ZXI6J+6suicsdW5pY29kZTonRUIzQScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidyZW1vdmUnLGNoYXJhY3Rlcjon7qy7Jyx1bmljb2RlOidFQjNCJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3JlcGxhY2UtYWxsJyxjaGFyYWN0ZXI6J+6svCcsdW5pY29kZTonRUIzQycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidyZXBsYWNlJyxjaGFyYWN0ZXI6J+6svScsdW5pY29kZTonRUIzRCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidyZXBseScsY2hhcmFjdGVyOifuqb0nLHVuaWNvZGU6J0VBN0QnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVwby1jbG9uZScsY2hhcmFjdGVyOifurL4nLHVuaWNvZGU6J0VCM0UnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVwby1mb3JjZS1wdXNoJyxjaGFyYWN0ZXI6J+6svycsdW5pY29kZTonRUIzRicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidyZXBvLWZvcmtlZCcsY2hhcmFjdGVyOifuqaMnLHVuaWNvZGU6J0VBNjMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVwby1wdWxsJyxjaGFyYWN0ZXI6J+6tgCcsdW5pY29kZTonRUI0MCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidyZXBvLXB1c2gnLGNoYXJhY3Rlcjon7q2BJyx1bmljb2RlOidFQjQxJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3JlcG8nLGNoYXJhY3Rlcjon7qmiJyx1bmljb2RlOidFQTYyJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3JlcG9ydCcsY2hhcmFjdGVyOifurYInLHVuaWNvZGU6J0VCNDInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncmVxdWVzdC1jaGFuZ2VzJyxjaGFyYWN0ZXI6J+6tgycsdW5pY29kZTonRUI0MycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidyb2NrZXQnLGNoYXJhY3Rlcjon7q2EJyx1bmljb2RlOidFQjQ0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3Jvb3QtZm9sZGVyLW9wZW5lZCcsY2hhcmFjdGVyOifurYUnLHVuaWNvZGU6J0VCNDUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncm9vdC1mb2xkZXInLGNoYXJhY3Rlcjon7q2GJyx1bmljb2RlOidFQjQ2JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3JzcycsY2hhcmFjdGVyOifurYcnLHVuaWNvZGU6J0VCNDcnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncnVieScsY2hhcmFjdGVyOifurYgnLHVuaWNvZGU6J0VCNDgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncnVuLWFib3ZlJyxjaGFyYWN0ZXI6J+6uvScsdW5pY29kZTonRUJCRCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidydW4tYWxsJyxjaGFyYWN0ZXI6J+6unicsdW5pY29kZTonRUI5RScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidydW4tYmVsb3cnLGNoYXJhY3Rlcjon7q6+Jyx1bmljb2RlOidFQkJFJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3NhdmUtYWxsJyxjaGFyYWN0ZXI6J+6tiScsdW5pY29kZTonRUI0OScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzYXZlLWFzJyxjaGFyYWN0ZXI6J+6tiicsdW5pY29kZTonRUI0QScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzYXZlJyxjaGFyYWN0ZXI6J+6tiycsdW5pY29kZTonRUI0QicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzY3JlZW4tZnVsbCcsY2hhcmFjdGVyOifurYwnLHVuaWNvZGU6J0VCNEMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc2NyZWVuLW5vcm1hbCcsY2hhcmFjdGVyOifurY0nLHVuaWNvZGU6J0VCNEQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc2VhcmNoLXN0b3AnLGNoYXJhY3Rlcjon7q2OJyx1bmljb2RlOidFQjRFJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3NlYXJjaCcsY2hhcmFjdGVyOifuqa0nLHVuaWNvZGU6J0VBNkQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc2VydmVyLWVudmlyb25tZW50JyxjaGFyYWN0ZXI6J+6uoycsdW5pY29kZTonRUJBMycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzZXJ2ZXItcHJvY2VzcycsY2hhcmFjdGVyOifurqInLHVuaWNvZGU6J0VCQTInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc2VydmVyJyxjaGFyYWN0ZXI6J+6tkCcsdW5pY29kZTonRUI1MCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzZXR0aW5ncy1nZWFyJyxjaGFyYWN0ZXI6J+6tkScsdW5pY29kZTonRUI1MScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzZXR0aW5ncycsY2hhcmFjdGVyOifurZInLHVuaWNvZGU6J0VCNTInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc2hpZWxkJyxjaGFyYWN0ZXI6J+6tkycsdW5pY29kZTonRUI1MycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzaWduLWluJyxjaGFyYWN0ZXI6J+6prycsdW5pY29kZTonRUE2RicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzaWduLW91dCcsY2hhcmFjdGVyOifuqa4nLHVuaWNvZGU6J0VBNkUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc21pbGV5JyxjaGFyYWN0ZXI6J+6tlCcsdW5pY29kZTonRUI1NCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzb3J0LXByZWNlZGVuY2UnLGNoYXJhY3Rlcjon7q2VJyx1bmljb2RlOidFQjU1JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3NvdXJjZS1jb250cm9sJyxjaGFyYWN0ZXI6J+6pqCcsdW5pY29kZTonRUE2OCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzcGxpdC1ob3Jpem9udGFsJyxjaGFyYWN0ZXI6J+6tlicsdW5pY29kZTonRUI1NicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzcGxpdC12ZXJ0aWNhbCcsY2hhcmFjdGVyOifurZcnLHVuaWNvZGU6J0VCNTcnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3F1aXJyZWwnLGNoYXJhY3Rlcjon7q2YJyx1bmljb2RlOidFQjU4JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N0YXItZW1wdHknLGNoYXJhY3Rlcjon7qmqJyx1bmljb2RlOidFQTZBJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N0YXItZnVsbCcsY2hhcmFjdGVyOifurZknLHVuaWNvZGU6J0VCNTknLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3Rhci1oYWxmJyxjaGFyYWN0ZXI6J+6tmicsdW5pY29kZTonRUI1QScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzdG9wLWNpcmNsZScsY2hhcmFjdGVyOifurqUnLHVuaWNvZGU6J0VCQTUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLWFycmF5JyxjaGFyYWN0ZXI6J+6qiicsdW5pY29kZTonRUE4QScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wtYm9vbGVhbicsY2hhcmFjdGVyOifuqo8nLHVuaWNvZGU6J0VBOEYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLWNsYXNzJyxjaGFyYWN0ZXI6J+6tmycsdW5pY29kZTonRUI1QicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wtY29sb3InLGNoYXJhY3Rlcjon7q2cJyx1bmljb2RlOidFQjVDJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N5bWJvbC1jb25zdGFudCcsY2hhcmFjdGVyOifurZ0nLHVuaWNvZGU6J0VCNUQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLWVudW0tbWVtYmVyJyxjaGFyYWN0ZXI6J+6tnicsdW5pY29kZTonRUI1RScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wtZW51bScsY2hhcmFjdGVyOifuqpUnLHVuaWNvZGU6J0VBOTUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLWV2ZW50JyxjaGFyYWN0ZXI6J+6qhicsdW5pY29kZTonRUE4NicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wtZmllbGQnLGNoYXJhY3Rlcjon7q2fJyx1bmljb2RlOidFQjVGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N5bWJvbC1maWxlJyxjaGFyYWN0ZXI6J+6toCcsdW5pY29kZTonRUI2MCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wtaW50ZXJmYWNlJyxjaGFyYWN0ZXI6J+6toScsdW5pY29kZTonRUI2MScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wta2V5JyxjaGFyYWN0ZXI6J+6qkycsdW5pY29kZTonRUE5MycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wta2V5d29yZCcsY2hhcmFjdGVyOifuraInLHVuaWNvZGU6J0VCNjInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLW1ldGhvZCcsY2hhcmFjdGVyOifuqownLHVuaWNvZGU6J0VBOEMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLW1pc2MnLGNoYXJhY3Rlcjon7q2jJyx1bmljb2RlOidFQjYzJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N5bWJvbC1uYW1lc3BhY2UnLGNoYXJhY3Rlcjon7qqLJyx1bmljb2RlOidFQThCJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N5bWJvbC1udW1lcmljJyxjaGFyYWN0ZXI6J+6qkCcsdW5pY29kZTonRUE5MCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wtb3BlcmF0b3InLGNoYXJhY3Rlcjon7q2kJyx1bmljb2RlOidFQjY0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N5bWJvbC1wYXJhbWV0ZXInLGNoYXJhY3Rlcjon7qqSJyx1bmljb2RlOidFQTkyJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N5bWJvbC1wcm9wZXJ0eScsY2hhcmFjdGVyOifuraUnLHVuaWNvZGU6J0VCNjUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLXJ1bGVyJyxjaGFyYWN0ZXI6J+6qlicsdW5pY29kZTonRUE5NicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW1ib2wtc25pcHBldCcsY2hhcmFjdGVyOifuraYnLHVuaWNvZGU6J0VCNjYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLXN0cmluZycsY2hhcmFjdGVyOifuro0nLHVuaWNvZGU6J0VCOEQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLXN0cnVjdHVyZScsY2hhcmFjdGVyOifuqpEnLHVuaWNvZGU6J0VBOTEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonc3ltYm9sLXZhcmlhYmxlJyxjaGFyYWN0ZXI6J+6qiCcsdW5pY29kZTonRUE4OCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidzeW5jLWlnbm9yZWQnLGNoYXJhY3Rlcjon7q6fJyx1bmljb2RlOidFQjlGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3N5bmMnLGNoYXJhY3Rlcjon7qm3Jyx1bmljb2RlOidFQTc3JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RhYmxlJyxjaGFyYWN0ZXI6J+6utycsdW5pY29kZTonRUJCNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0YWcnLGNoYXJhY3Rlcjon7qmmJyx1bmljb2RlOidFQTY2JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3Rhc2tsaXN0JyxjaGFyYWN0ZXI6J+6tpycsdW5pY29kZTonRUI2NycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0ZWxlc2NvcGUnLGNoYXJhY3Rlcjon7q2oJyx1bmljb2RlOidFQjY4JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3Rlcm1pbmFsJyxjaGFyYWN0ZXI6J+6qhScsdW5pY29kZTonRUE4NScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0ZXh0LXNpemUnLGNoYXJhY3Rlcjon7q2pJyx1bmljb2RlOidFQjY5JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RocmVlLWJhcnMnLGNoYXJhY3Rlcjon7q2qJyx1bmljb2RlOidFQjZBJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RodW1ic2Rvd24nLGNoYXJhY3Rlcjon7q2rJyx1bmljb2RlOidFQjZCJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RodW1ic3VwJyxjaGFyYWN0ZXI6J+6trCcsdW5pY29kZTonRUI2QycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0b29scycsY2hhcmFjdGVyOifura0nLHVuaWNvZGU6J0VCNkQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondHJhc2gnLGNoYXJhY3Rlcjon7qqBJyx1bmljb2RlOidFQTgxJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RyaWFuZ2xlLWRvd24nLGNoYXJhY3Rlcjon7q2uJyx1bmljb2RlOidFQjZFJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RyaWFuZ2xlLWxlZnQnLGNoYXJhY3Rlcjon7q2vJyx1bmljb2RlOidFQjZGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RyaWFuZ2xlLXJpZ2h0JyxjaGFyYWN0ZXI6J+6tsCcsdW5pY29kZTonRUI3MCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0cmlhbmdsZS11cCcsY2hhcmFjdGVyOifurbEnLHVuaWNvZGU6J0VCNzEnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondHdpdHRlcicsY2hhcmFjdGVyOifurbInLHVuaWNvZGU6J0VCNzInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondHlwZS1oaWVyYXJjaHktc3ViJyxjaGFyYWN0ZXI6J+6uuicsdW5pY29kZTonRUJCQScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0eXBlLWhpZXJhcmNoeS1zdXBlcicsY2hhcmFjdGVyOifurrsnLHVuaWNvZGU6J0VCQkInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondHlwZS1oaWVyYXJjaHknLGNoYXJhY3Rlcjon7q65Jyx1bmljb2RlOidFQkI5JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3VuZm9sZCcsY2hhcmFjdGVyOifurbMnLHVuaWNvZGU6J0VCNzMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondW5ncm91cC1ieS1yZWYtdHlwZScsY2hhcmFjdGVyOifurpgnLHVuaWNvZGU6J0VCOTgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondW5sb2NrJyxjaGFyYWN0ZXI6J+6ttCcsdW5pY29kZTonRUI3NCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid1bm11dGUnLGNoYXJhY3Rlcjon7q21Jyx1bmljb2RlOidFQjc1JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3VudmVyaWZpZWQnLGNoYXJhY3Rlcjon7q22Jyx1bmljb2RlOidFQjc2JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3ZhcmlhYmxlLWdyb3VwJyxjaGFyYWN0ZXI6J+6uuCcsdW5pY29kZTonRUJCOCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid2ZXJpZmllZCcsY2hhcmFjdGVyOifurbcnLHVuaWNvZGU6J0VCNzcnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondmVyc2lvbnMnLGNoYXJhY3Rlcjon7q24Jyx1bmljb2RlOidFQjc4JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3ZtLWFjdGl2ZScsY2hhcmFjdGVyOifurbknLHVuaWNvZGU6J0VCNzknLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondm0tY29ubmVjdCcsY2hhcmFjdGVyOifurqknLHVuaWNvZGU6J0VCQTknLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondm0tb3V0bGluZScsY2hhcmFjdGVyOifurbonLHVuaWNvZGU6J0VCN0EnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondm0tcnVubmluZycsY2hhcmFjdGVyOifurbsnLHVuaWNvZGU6J0VCN0InLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondm0nLGNoYXJhY3Rlcjon7qm6Jyx1bmljb2RlOidFQTdBJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3dhcm5pbmcnLGNoYXJhY3Rlcjon7qmsJyx1bmljb2RlOidFQTZDJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3dhdGNoJyxjaGFyYWN0ZXI6J+6tvCcsdW5pY29kZTonRUI3QycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid3aGl0ZXNwYWNlJyxjaGFyYWN0ZXI6J+6tvScsdW5pY29kZTonRUI3RCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid3aG9sZS13b3JkJyxjaGFyYWN0ZXI6J+6tvicsdW5pY29kZTonRUI3RScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid3aW5kb3cnLGNoYXJhY3Rlcjon7q2/Jyx1bmljb2RlOidFQjdGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3dvcmQtd3JhcCcsY2hhcmFjdGVyOifuroAnLHVuaWNvZGU6J0VCODAnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTond29ya3NwYWNlLXRydXN0ZWQnLGNoYXJhY3Rlcjon7q+BJyx1bmljb2RlOidFQkMxJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3dvcmtzcGFjZS11bmtub3duJyxjaGFyYWN0ZXI6J+6vgycsdW5pY29kZTonRUJDMycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid3b3Jrc3BhY2UtdW50cnVzdGVkJyxjaGFyYWN0ZXI6J+6vgicsdW5pY29kZTonRUJDMicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid6b29tLWluJyxjaGFyYWN0ZXI6J+6ugScsdW5pY29kZTonRUI4MScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid6b29tLW91dCcsY2hhcmFjdGVyOifuroInLHVuaWNvZGU6J0VCODInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTondGVybWluYWwtY21kJyxjaGFyYWN0ZXI6J+6vhCcsdW5pY29kZTonZWJjNCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0ZXJtaW5hbC1kZWJpYW4nLGNoYXJhY3Rlcjon7q+FJyx1bmljb2RlOidlYmM1JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3Rlcm1pbmFsLWxpbnV4JyxjaGFyYWN0ZXI6J+6vhicsdW5pY29kZTonZWJjNicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0ZXJtaW5hbC1wb3dlcnNoZWxsJyxjaGFyYWN0ZXI6J+6vhycsdW5pY29kZTonZWJjNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0ZXJtaW5hbC10bXV4JyxjaGFyYWN0ZXI6J+6viCcsdW5pY29kZTonZWJjOCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid0ZXJtaW5hbC11YnVudHUnLGNoYXJhY3Rlcjon7q+JJyx1bmljb2RlOidlYmM5JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3Rlcm1pbmFsLWJhc2gnLGNoYXJhY3Rlcjon7q+KJyx1bmljb2RlOidlYmNhJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2Fycm93LXN3YXAnLGNoYXJhY3Rlcjon7q+LJyx1bmljb2RlOidlYmNiJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2NvcHknLGNoYXJhY3Rlcjon7q+MJyx1bmljb2RlOidlYmNjJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3BlcnNvbi1hZGQnLGNoYXJhY3Rlcjon7q+NJyx1bmljb2RlOidlYmNkJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2ZpbHRlci1maWxsZWQnLGNoYXJhY3Rlcjon7q+OJyx1bmljb2RlOidlYmNlJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3dhbmQnLGNoYXJhY3Rlcjon7q+PJyx1bmljb2RlOidlYmNmJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLWxpbmUtYnktbGluZScsY2hhcmFjdGVyOifur5AnLHVuaWNvZGU6J2ViZDAnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonYXp1cmUnLGNoYXJhY3Rlcjon7q+YJyx1bmljb2RlOidFQkQ4JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2JlYWtlci1zdG9wJyxjaGFyYWN0ZXI6J+6voScsdW5pY29kZTonRUJFMScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidicmFja2V0LWRvdCcsY2hhcmFjdGVyOifur6UnLHVuaWNvZGU6J0VCRTUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonYnJhY2tldC1lcnJvcicsY2hhcmFjdGVyOifur6YnLHVuaWNvZGU6J0VCRTYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonY29tcGFzcy1hY3RpdmUnLGNoYXJhY3Rlcjon7q+XJyx1bmljb2RlOidFQkQ3JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2NvbXBhc3MtZG90JyxjaGFyYWN0ZXI6J+6vlicsdW5pY29kZTonRUJENicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidjb21wYXNzJyxjaGFyYWN0ZXI6J+6vlScsdW5pY29kZTonRUJENScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1hbGwnLGNoYXJhY3Rlcjon7q+cJyx1bmljb2RlOidFQkRDJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2RlYnVnLWNvbnRpbnVlLXNtYWxsJyxjaGFyYWN0ZXI6J+6voCcsdW5pY29kZTonRUJFMCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidkZWJ1Zy1jb3ZlcmFnZScsY2hhcmFjdGVyOifur50nLHVuaWNvZGU6J0VCREQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonZm9sZGVyLWxpYnJhcnknLGNoYXJhY3Rlcjon7q+fJyx1bmljb2RlOidFQkRGJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dpdC1wdWxsLXJlcXVlc3QtY2xvc2VkJyxjaGFyYWN0ZXI6J+6vmicsdW5pY29kZTonRUJEQScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidnaXQtcHVsbC1yZXF1ZXN0LWRyYWZ0JyxjaGFyYWN0ZXI6J+6vmycsdW5pY29kZTonRUJEQicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidncmFwaC1saW5lJyxjaGFyYWN0ZXI6J+6voicsdW5pY29kZTonRUJFMicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidncmFwaC1zY2F0dGVyJyxjaGFyYWN0ZXI6J+6voycsdW5pY29kZTonRUJFMycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidpbnNwZWN0JyxjaGFyYWN0ZXI6J+6vkScsdW5pY29kZTonRUJEMScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidpc3N1ZS1kcmFmdCcsY2hhcmFjdGVyOifur5knLHVuaWNvZGU6J0VCRDknLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaXNzdWUtY2xvc2VkJyxjaGFyYWN0ZXI6J+6siicsdW5pY29kZTonRUIwQScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsYXllcnMtYWN0aXZlJyxjaGFyYWN0ZXI6J+6vlCcsdW5pY29kZTonRUJENCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsYXllcnMtZG90JyxjaGFyYWN0ZXI6J+6vkycsdW5pY29kZTonRUJEMycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsYXllcnMnLGNoYXJhY3Rlcjon7q+SJyx1bmljb2RlOidFQkQyJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3BpZS1jaGFydCcsY2hhcmFjdGVyOifur6QnLHVuaWNvZGU6J0VCRTQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZToncnVuLWVycm9ycycsY2hhcmFjdGVyOifur54nLHVuaWNvZGU6J0VCREUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonYXp1cmUtZGV2b3BzJyxjaGFyYWN0ZXI6J+6vqCcsdW5pY29kZTonRUJFOCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsb2NrLXNtYWxsJyxjaGFyYWN0ZXI6J+6vpycsdW5pY29kZTonRUJFNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOid2ZXJpZmllZC1maWxsZWQnLGNoYXJhY3Rlcjon7q+pJyx1bmljb2RlOidFQkU5JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J25ld2xpbmUnLGNoYXJhY3Rlcjon7q+qJyx1bmljb2RlOidFQkVBJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xheW91dCcsY2hhcmFjdGVyOifur6snLHVuaWNvZGU6J0VCRUInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGF5b3V0LWFjdGl2aXR5YmFyLWxlZnQnLGNoYXJhY3Rlcjon7q+sJyx1bmljb2RlOidFQkVDJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xheW91dC1hY3Rpdml0eWJhci1yaWdodCcsY2hhcmFjdGVyOifur60nLHVuaWNvZGU6J0VCRUQnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGF5b3V0LWNlbnRlcmVkJyxjaGFyYWN0ZXI6J+6vtycsdW5pY29kZTonRUJGNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsYXlvdXQtbWVudWJhcicsY2hhcmFjdGVyOifur7YnLHVuaWNvZGU6J0VCRjYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGF5b3V0LXBhbmVsLWNlbnRlcicsY2hhcmFjdGVyOifur68nLHVuaWNvZGU6J0VCRUYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGF5b3V0LXBhbmVsLWp1c3RpZnknLGNoYXJhY3Rlcjon7q+wJyx1bmljb2RlOidFQkYwJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xheW91dC1wYW5lbC1sZWZ0JyxjaGFyYWN0ZXI6J+6vricsdW5pY29kZTonRUJFRScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsYXlvdXQtcGFuZWwtcmlnaHQnLGNoYXJhY3Rlcjon7q+xJyx1bmljb2RlOidFQkYxJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xheW91dC1wYW5lbCcsY2hhcmFjdGVyOifur7InLHVuaWNvZGU6J0VCRjInLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGF5b3V0LXNpZGViYXItbGVmdCcsY2hhcmFjdGVyOifur7MnLHVuaWNvZGU6J0VCRjMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbGF5b3V0LXNpZGViYXItcmlnaHQnLGNoYXJhY3Rlcjon7q+0Jyx1bmljb2RlOidFQkY0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xheW91dC1zdGF0dXNiYXInLGNoYXJhY3Rlcjon7q+1Jyx1bmljb2RlOidFQkY1JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J3RhcmdldCcsY2hhcmFjdGVyOifur7gnLHVuaWNvZGU6J2ViZjgnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonaW5kZW50JyxjaGFyYWN0ZXI6J+6vuScsdW5pY29kZTonZWJmOScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidyZWNvcmQtc21hbGwnLGNoYXJhY3Rlcjon7q+6Jyx1bmljb2RlOidlYmZhJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2Vycm9yLXNtYWxsJyxjaGFyYWN0ZXI6J+6vuycsdW5pY29kZTonZWJmYicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidhcnJvdy1jaXJjbGUtZG93bicsY2hhcmFjdGVyOifur7wnLHVuaWNvZGU6J2ViZmMnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonYXJyb3ctY2lyY2xlLWxlZnQnLGNoYXJhY3Rlcjon7q+9Jyx1bmljb2RlOidlYmZkJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2Fycm93LWNpcmNsZS1yaWdodCcsY2hhcmFjdGVyOifur74nLHVuaWNvZGU6J2ViZmUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonYXJyb3ctY2lyY2xlLXVwJyxjaGFyYWN0ZXI6J+6vvycsdW5pY29kZTonZWJmZicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidsYXlvdXQtc2lkZWJhci1yaWdodC1vZmYnLGNoYXJhY3Rlcjon7rCAJyx1bmljb2RlOidFQzAwJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xheW91dC1wYW5lbC1vZmYnLGNoYXJhY3Rlcjon7rCBJyx1bmljb2RlOidFQzAxJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2xheW91dC1zaWRlYmFyLWxlZnQtb2ZmJyxjaGFyYWN0ZXI6J+6wgicsdW5pY29kZTonRUMwMicsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidoZWFydC1maWxsZWQnLGNoYXJhY3Rlcjon7rCEJyx1bmljb2RlOidFQzA0JyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J21hcCcsY2hhcmFjdGVyOifusIUnLHVuaWNvZGU6J0VDMDUnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonbWFwLWZpbGxlZCcsY2hhcmFjdGVyOifusIYnLHVuaWNvZGU6J0VDMDYnLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonY2lyY2xlLXNtYWxsJyxjaGFyYWN0ZXI6J+6whycsdW5pY29kZTonRUMwNycsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidiZWxsLXNsYXNoJyxjaGFyYWN0ZXI6J+6wiCcsdW5pY29kZTonRUMwOCcsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidiZWxsLXNsYXNoLWRvdCcsY2hhcmFjdGVyOifusIknLHVuaWNvZGU6J0VDMDknLGRlc2NyaXB0aW9uOicnfSx7c2hvcnRfbmFtZTonY29tbWVudC11bnJlc29sdmVkJyxjaGFyYWN0ZXI6J+6wiicsdW5pY29kZTonRUMwQScsZGVzY3JpcHRpb246Jyd9LHtzaG9ydF9uYW1lOidnaXQtcHVsbC1yZXF1ZXN0LWdvLXRvLWNoYW5nZXMnLGNoYXJhY3Rlcjon7rCLJyx1bmljb2RlOidFQzBCJyxkZXNjcmlwdGlvbjonJ30se3Nob3J0X25hbWU6J2dpdC1wdWxsLXJlcXVlc3QtbmV3LWNoYW5nZXMnLGNoYXJhY3Rlcjon7rCMJyx1bmljb2RlOidFQzBDJyxkZXNjcmlwdGlvbjonJ31dIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDM4MCwgaGVpZ2h0OiA0ODAgfSk7XG5jb25zdCBjb2RpY29uVGV4dFN0eWxlS2V5ID0gJzY0MDYwNGVlNGI0ZjAxZmYzMjdhY2ZhYWE4MzA1YzkyMTk5Yzc0NzMnO1xuY29uc3QgY29kaWNvblRleHRTdHlsZUlkID0gJ1M6NjQwNjA0ZWU0YjRmMDFmZjMyN2FjZmFhYTgzMDVjOTIxOTljNzQ3Myw0MjcwOjUnO1xuY29uc3QgY29kaWNvbkNvbG9yU3R5bGVLZXkgPSAnNDFmMGM5NGQ1NjBlOWI3M2IyMDJkZmMwNTllNDExZWZmY2EyMzVhNCc7XG5jb25zdCBjb2RpY29uQ29sb3JTdHlsZUlkID0gJ1M6NDFmMGM5NGQ1NjBlOWI3M2IyMDJkZmMwNTllNDExZWZmY2EyMzVhNCw0MzQ3OjI5JztcbmNvbnN0IHNldGlUZXh0U3R5bGVLZXkgPSAnNDk5ZWViNmIzMDhlZWI2MTI1ODNkZjMwYjBhNGZkOTkwZDRkYmJjNSc7XG5jb25zdCBzZXRpVGV4dFN0eWxlSWQgPSAnUzo0OTllZWI2YjMwOGVlYjYxMjU4M2RmMzBiMGE0ZmQ5OTBkNGRiYmM1LDQyNzA6NCc7XG5jb25zdCBzZXRpQ29sb3JTdHlsZUtleSA9ICc5ZmMyMzhiMTMwZThmNmYyNGFiMWVjZmFmZjVlY2QxZjEzODk1MjhmJztcbmNvbnN0IHNldGlDb2xvclN0eWxlSWQgPSAnUzo5ZmMyMzhiMTMwZThmNmYyNGFiMWVjZmFmZjVlY2QxZjEzODk1MjhmLDI5MTk6NSc7XG5jb25zdCBub2RlcyA9IFtdO1xuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vYXNzZXRzL2NvZGljb24uanNvbjUnKTtcbmNvbnN0IGljb25zID0gZGF0YVsnZGVmYXVsdCddO1xuLy8gbG9hZCBmb250c1xuZnVuY3Rpb24gbG9hZEZvbnRzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiY29kaWNvblwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogJ2hhc0ljb25zJywgY29kaWNvbnM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJzZXRpXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiAnaGFzSWNvbnMnLCBzZXRpOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhjb2RpY29uVGV4dFN0eWxlS2V5KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmxvYWRGb250cygpO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgaWYgKG1zZy50eXBlID09PSAnY3JlYXRlLWljb24nKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgdGV4dCBvYmplY3RcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIG5ldyB0ZXh0IG9iamVjdCcpO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlTmV3SWNvbk9iamVjdChtc2csIG5vZGVzKTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcGxhY2UgdGV4dCBvYmplY3QnKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3Rpb25MZW5ndGggPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25baV0udHlwZSAhPSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY3JlYXRlTmV3SWNvbk9iamVjdChtc2csIG5vZGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVubG9hZCBjdXJyZW50IGZvbnRcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbltpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGb250TmFtZSA9IHNlbGVjdGlvbi5mb250TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogYCR7Y3VycmVudEZvbnROYW1lWydmYW1pbHknXX1gLCBzdHlsZTogYCR7Y3VycmVudEZvbnROYW1lWydzdHlsZSddfWAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Rm9udCA9IGN1cnJlbnRGb250TmFtZVsnZmFtaWx5J107XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBtc2cuZ2x5cGg7XG4gICAgICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIHN0eWxlcyBpZiBub3QgY29kaWNvblxuICAgICAgICAgICAgICAgICAgICBpZiAobXNnLmxpYnJhcnkgPT0gJ2NvZGljb24nICYmIGN1cnJlbnRGb250ICE9PSAnY29kaWNvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQubmFtZSA9ICdjb2RpY29uOiAnICsgbXNnLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwiY29kaWNvblwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhjb2RpY29uVGV4dFN0eWxlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhjb2RpY29uQ29sb3JTdHlsZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRTdHlsZUlkID0gY29kaWNvblRleHRTdHlsZUlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIHN0eWxlcyBpZiBub3Qgc2V0aVxuICAgICAgICAgICAgICAgICAgICBpZiAobXNnLmxpYnJhcnkgPT0gJ3NldGknICYmIGN1cnJlbnRGb250ICE9PSAnc2V0aScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQubmFtZSA9ICdzZXRpOiAnICsgbXNnLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwic2V0aVwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzZXRpVGV4dFN0eWxlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzZXRpQ29sb3JTdHlsZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRTdHlsZUlkID0gc2V0aVRleHRTdHlsZUlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbmZ1bmN0aW9uIGNyZWF0ZU5ld0ljb25PYmplY3QobXNnLCBub2Rlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHRleHQuY2hhcmFjdGVycyA9IG1zZy5nbHlwaDtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDE2O1xuICAgICAgICB0ZXh0LnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgdGV4dC55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgIGlmIChtc2cubGlicmFyeSA9PSAnc2V0aScpIHtcbiAgICAgICAgICAgIHRleHQubmFtZSA9ICdzZXRpOiAnICsgbXNnLm5hbWU7XG4gICAgICAgICAgICB0ZXh0LmZvbnROYW1lID0geyBmYW1pbHk6IFwic2V0aVwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzZXRpVGV4dFN0eWxlS2V5KTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhzZXRpQ29sb3JTdHlsZUtleSk7XG4gICAgICAgICAgICB0ZXh0LnRleHRTdHlsZUlkID0gc2V0aVRleHRTdHlsZUlkO1xuICAgICAgICAgICAgdGV4dC5maWxsU3R5bGVJZCA9IHNldGlDb2xvclN0eWxlSWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZy5saWJyYXJ5ID09ICdjb2RpY29uJykge1xuICAgICAgICAgICAgdGV4dC5uYW1lID0gJ2NvZGljb246ICcgKyBtc2cubmFtZTtcbiAgICAgICAgICAgIHRleHQuZm9udE5hbWUgPSB7IGZhbWlseTogXCJjb2RpY29uXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuICAgICAgICAgICAgeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGNvZGljb25UZXh0U3R5bGVLZXkpO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGNvZGljb25Db2xvclN0eWxlS2V5KTtcbiAgICAgICAgICAgIHRleHQudGV4dFN0eWxlSWQgPSBjb2RpY29uVGV4dFN0eWxlSWQ7XG4gICAgICAgICAgICB0ZXh0LmZpbGxTdHlsZUlkID0gY29kaWNvbkNvbG9yU3R5bGVJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZXMucHVzaCh0ZXh0KTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
