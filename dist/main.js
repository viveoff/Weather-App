/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const view = (() => {
    function setSearchResult(weatherData) {
      if (!weatherData) return;
  
      const searchResult = document.getElementById("searchResult");
      searchResult.classList.add("active");
  
      const cityName = document.getElementById("cityName");
      const temperature = document.getElementById("temperature");
      const feelsLike = document.getElementById("feelsLike");
      const humidity = document.getElementById("humidity");
      const wind = document.getElementById("wind");
  
      cityName.textContent = `${weatherData.cityName}`;
      temperature.textContent = `${weatherData.temperature} °C`;
      feelsLike.textContent = `Fells like: ${weatherData.feelsLike} °C`;
      humidity.textContent = `Humidity: ${weatherData.humidity} %`;
      wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;
    }
  
    return { setSearchResult };
  })();
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);
  

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
    function convertData(data) {
      const {
        name: cityName,
        main: { temp: temperature, feels_like: feelsLike, humidity },
        wind: { speed: windSpeed },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
    }
  
    async function getData(city) {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        if (!response.ok) throw new Error(`City ${city} not found`);
        const data = convertData(await response.json());
        return data;
      } catch (error) {
        alert(error);
        return null;
      }
    }
    return { getData };
  })();
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");



const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (searchInput.value === "") return;
  const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(searchInput.value);
  _modules_view__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(weatherData);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCxtQ0FBbUMseUJBQXlCO0FBQzVELDZDQUE2Qyx1QkFBdUI7QUFDcEUsMENBQTBDLHNCQUFzQjtBQUNoRSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0EsRUFBRSxpRUFBZSxJQUFJLEVBQUM7QUFDdEI7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFvRDtBQUNwRSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLFFBQVE7QUFDUixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLEtBQUs7QUFDakY7QUFDQSxpREFBaUQsY0FBYztBQUMvRCxrREFBa0QsTUFBTTtBQUN4RDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBLEVBQUUsaUVBQWUsT0FBTyxFQUFDO0FBQ3pCOzs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTndDO0FBQ047O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFPO0FBQ25DLEVBQUUscURBQUk7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmlldyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2V0U2VhcmNoUmVzdWx0KHdlYXRoZXJEYXRhKSB7XG4gICAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm47XG4gIFxuICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hSZXN1bHRcIik7XG4gICAgICBzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgXG4gICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eU5hbWVcIik7XG4gICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVcIik7XG4gICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzTGlrZVwiKTtcbiAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcbiAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG4gIFxuICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jaXR5TmFtZX1gO1xuICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZX0gwrBDYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWxscyBsaWtlOiAke3dlYXRoZXJEYXRhLmZlZWxzTGlrZX0gwrBDYDtcbiAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSAlYDtcbiAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9IGttL2hgO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHsgc2V0U2VhcmNoUmVzdWx0IH07XG4gIH0pKCk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCB2aWV3O1xuICAiLCJjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG5hbWU6IGNpdHlOYW1lLFxuICAgICAgICBtYWluOiB7IHRlbXA6IHRlbXBlcmF0dXJlLCBmZWVsc19saWtlOiBmZWVsc0xpa2UsIGh1bWlkaXR5IH0sXG4gICAgICAgIHdpbmQ6IHsgc3BlZWQ6IHdpbmRTcGVlZCB9LFxuICAgICAgfSA9IGRhdGE7XG4gICAgICByZXR1cm4geyBjaXR5TmFtZSwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCB9O1xuICAgIH1cbiAgXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPTI4ZmU3YjVmOWE3ODgzOGM2MzkxNDNmYzUxN2U0MzQzYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZGApO1xuICAgICAgICBjb25zdCBkYXRhID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBnZXREYXRhIH07XG4gIH0pKCk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCB3ZWF0aGVyO1xuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvd2VhdGhlclwiO1xuaW1wb3J0IHZpZXcgZnJvbSBcIi4vbW9kdWxlcy92aWV3XCI7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZvcm1cIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ0blwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgdmlldy5zZXRTZWFyY2hSZXN1bHQod2VhdGhlckRhdGEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=