"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_inventory_inventory_module_ts"],{

/***/ 28294:
/*!************************************************************!*\
  !*** ./src/app/components/inventory/create.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "::ng-deep .mat-horizontal-content-container {\n  padding: 0 !important;\n}\n::ng-deep .mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0FBQVI7QUFHSTtFQUNJLFdBQUE7QUFEUiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 9449:
/*!************************************************************!*\
  !*** ./src/app/components/inventory/detail.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".gallery .gallery-col .gallery-div {\n  display: block;\n  width: 100%;\n  height: 120px;\n  border: solid 1px #eeeeee;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.gallery .gallery-col .gallery-div.small {\n  height: 90px;\n}\n.gallery .gallery-col .gallery-div img {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.gallery .gallery-col .gallery-div .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.gallery .gallery-col .gallery-div .icon {\n  font-size: 34px;\n}\n.gallery .gallery-col .gallery-div.add {\n  border-style: dashed;\n  border-color: #2196f2;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  background-color: #f3f7f3;\n}\n.gallery .gallery-col .gallery-div.none {\n  border: solid 1px #eeeeee;\n  background-color: transparent;\n}\n.title {\n  color: #616161;\n}\n::ng-deep .gallery-div {\n  cursor: pointer;\n}\n::ng-deep .gallery-div img {\n  height: 100%;\n  width: 100%;\n}\n.info-top {\n  background-color: #fff;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.info-top .icon-top {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n.info-top .icon-top .icon {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  right: 43%;\n  font-size: 28px;\n  color: #2196f2;\n}\n.info-top .icon-top .text {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  right: 43%;\n  font-size: 28px;\n}\n.info-top .total {\n  color: #000000;\n  opacity: 0.9;\n  font-weight: 600;\n}\n.info-top .info-top-text {\n  line-height: 0.8;\n}\n.info-detail {\n  border-radius: 4px;\n}\n.info-detail ion-item ion-label {\n  font-size: 11pt;\n}\n.info-detail ion-item mat-chip {\n  background-color: #2196f2;\n  color: white;\n}\n.info-detail ion-item .title {\n  font-size: 10pt;\n}\n.info-detail ion-item .content {\n  font-size: 11pt;\n  color: black;\n  margin-top: -3px !important;\n  max-width: 80%;\n}\n.info-detail ion-item .status-gift {\n  font-size: 9pt;\n  color: white;\n  background-color: #f04141;\n  padding: 2px 5px;\n  border-radius: 4px;\n}\n.info-detail ion-item ion-note {\n  font-size: 10pt;\n}\n.info-detail.product ion-item:last-child {\n  --border-width: 0 0 0 0 !important;\n}\n.info-detail.product ion-item:last-child .item-inner {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcZ2FsbGVyeS5zY3NzIiwiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQ0xOO0FET007RUFDRSxZQUFBO0FDTFI7QURRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTlI7QURTTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ1BSO0FEVU07RUFDRSxlQUFBO0FDUlI7QURXTTtFQUNFLG9CQUFBO0VBQ0EscUJFdENhO0VGdUNiLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNUUjtBRFlNO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQ1ZSO0FBbENBO0VBQ0ksY0FBQTtBQXFDSjtBQWxDQTtFQUNJLGVBQUE7QUFxQ0o7QUFuQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXFDUjtBQWpDQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQW9DSjtBQWxDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFvQ1I7QUFsQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQ25DUztBRHVFckI7QUFqQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFtQ1o7QUEvQkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBaUNSO0FBOUJJO0VBQ0ksZ0JBQUE7QUFnQ1I7QUE1QkE7RUFDSSxrQkFBQTtBQStCSjtBQTVCUTtFQUNJLGVBQUE7QUE4Qlo7QUEzQlE7RUFDSSx5QkN0RVM7RUR1RVQsWUFBQTtBQTZCWjtBQTFCUTtFQUNJLGVBQUE7QUE0Qlo7QUF6QlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQTJCWjtBQXhCUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJDckZRO0VEc0ZSLGdCQUFBO0VBQ0Esa0JBQUE7QUEwQlo7QUF2QlE7RUFDSSxlQUFBO0FBeUJaO0FBcEJRO0VBQ0ksa0NBQUE7QUFzQlo7QUFwQlk7RUFDSSw4QkFBQTtBQXNCaEIiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5nYWxsZXJ5IHtcclxuICAuZ2FsbGVyeS1jb2wge1xyXG5cclxuICAgIC5nYWxsZXJ5LWRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICYuc21hbGwge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFkZCB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYXNwLXByaW1hcnktY29sb3JzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y3ZjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubm9uZSB7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59IiwiLmdhbGxlcnkgLmdhbGxlcnktY29sIC5nYWxsZXJ5LWRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYuc21hbGwge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uZ2FsbGVyeSAuZ2FsbGVyeS1jb2wgLmdhbGxlcnktZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmdhbGxlcnkgLmdhbGxlcnktY29sIC5nYWxsZXJ5LWRpdiAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYuYWRkIHtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjdmMztcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYubm9uZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZWVlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzYxNjE2MTtcbn1cblxuOjpuZy1kZWVwIC5nYWxsZXJ5LWRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAuZ2FsbGVyeS1kaXYgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZm8tdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmluZm8tdG9wIC5pY29uLXRvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluZm8tdG9wIC5pY29uLXRvcCAuaWNvbiB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiA0MyU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICMyMTk2ZjI7XG59XG4uaW5mby10b3AgLmljb24tdG9wIC50ZXh0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgcmlnaHQ6IDQzJTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmluZm8tdG9wIC50b3RhbCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW5mby10b3AgLmluZm8tdG9wLXRleHQge1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuXG4uaW5mby1kZXRhaWwge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaW5mby1kZXRhaWwgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIG1hdC1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSAuY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIC5zdGF0dXMtZ2lmdCB7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDQxNDE7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cbi5pbmZvLWRldGFpbC5wcm9kdWN0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLmluZm8tZGV0YWlsLnByb2R1Y3QgaW9uLWl0ZW06bGFzdC1jaGlsZCAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn0iLCIkYXNwLXByaW1hcnktY29sb3JzOiAjMjE5NmYyO1xyXG4kYXNwLWxpZ2h0LWNvbG9yczogI2ZmZmZmZjtcclxuJGFzcC1tZWRpdW0tY29sb3JzOiAjNjE2MTYxO1xyXG4kYXNwLWRhbmdlci1jb2xvcnM6ICNmMDQxNDE7XHJcbiRhc3AtYmctaW5wdXQ6ICNmNWY1ZjU7XHJcbiRhc3Atd2FybmluZy1jb2xvcnM6ICNmZjhjMDA7XHJcbiRjb2xvci13YXJuOiAjZmY4YzAwO1xyXG4kY29sb3Itc3VjY2VzczogIzMzNjkxZTtcclxuXHJcbiRhc3Atc2Vjb25kYXJ5LWNvbG9yczogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcIuKAnFJvYm90b+KAnVwiO1xyXG4kZm9udC1mYW1pbHktaW9zLWJhc2U6IFwi4oCcUm9ib3Rv4oCdXCI7XHJcblxyXG4kYm9yZGVyLXN0eWxlOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMCxcclxuICAgIC8vIFBob25lICgwcHggLSA1NzVweClcclxuICAgIHNtOiA1NzZweCxcclxuICAgIC8vIFBoYWJsZXQgKDU3NnB4IC0gNzY3cHgpXHJcbiAgICBtZDogNzY4cHgsXHJcbiAgICAvLyBUYWJsZXQgdmVydGljYWwgKDc2OHB4IC0gOTkxcHgpXHJcbiAgICBsZzogOTkycHggLy8gVGFibGV0IGhvcml6b250YWwsIERlc2t0b3AgKDk5MnB4IGFuZCBhYm92ZSksLCxcclxuKTtcclxuIl19 */";

/***/ }),

/***/ 42187:
/*!******************************************************************************!*\
  !*** ./src/app/components/inventory/filter-inventories-modal.component.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItaW52ZW50b3JpZXMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 65282:
/*!**********************************************************!*\
  !*** ./src/app/components/inventory/list.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 11247:
/*!*****************************************************************************!*\
  !*** ./src/app/components/inventory/templates/info-products.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 75781:
/*!********************************************************************!*\
  !*** ./src/app/components/inventory/templates/info.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".gallery .gallery-col .gallery-div {\n  display: block;\n  width: 100%;\n  height: 120px;\n  border: solid 1px #eeeeee;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.gallery .gallery-col .gallery-div.small {\n  height: 90px;\n}\n.gallery .gallery-col .gallery-div img {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.gallery .gallery-col .gallery-div .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.gallery .gallery-col .gallery-div .icon {\n  font-size: 34px;\n}\n.gallery .gallery-col .gallery-div.add {\n  border-style: dashed;\n  border-color: #2196f2;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  background-color: #f3f7f3;\n}\n.gallery .gallery-col .gallery-div.none {\n  border: solid 1px #eeeeee;\n  background-color: transparent;\n}\n.title {\n  color: #616161;\n}\n::ng-deep .gallery-div {\n  cursor: pointer;\n}\n::ng-deep .gallery-div img {\n  height: 100%;\n  width: 100%;\n}\n.info-top {\n  background-color: #fff;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.info-top .icon-top {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n.info-top .icon-top .icon {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  right: 43%;\n  font-size: 28px;\n  color: #2196f2;\n}\n.info-top .icon-top .text {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  right: 43%;\n  font-size: 28px;\n}\n.info-top .total {\n  color: #000000;\n  opacity: 0.9;\n  font-weight: 600;\n}\n.info-top .info-top-text {\n  line-height: 0.8;\n}\n.info-detail {\n  border-radius: 4px;\n}\n.info-detail ion-item ion-label {\n  font-size: 11pt;\n}\n.info-detail ion-item mat-chip {\n  background-color: #2196f2;\n  color: white;\n}\n.info-detail ion-item .title {\n  font-size: 10pt;\n}\n.info-detail ion-item .content {\n  font-size: 11pt;\n  color: black;\n  margin-top: -3px !important;\n  max-width: 80%;\n}\n.info-detail ion-item .status-gift {\n  font-size: 9pt;\n  color: white;\n  background-color: #f04141;\n  padding: 2px 5px;\n  border-radius: 4px;\n}\n.info-detail ion-item ion-note {\n  font-size: 10pt;\n}\n.info-detail.product ion-item:last-child {\n  --border-width: 0 0 0 0 !important;\n}\n.info-detail.product ion-item:last-child .item-inner {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXGdhbGxlcnkuc2NzcyIsImluZm8uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQ0xOO0FET007RUFDRSxZQUFBO0FDTFI7QURRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTlI7QURTTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ1BSO0FEVU07RUFDRSxlQUFBO0FDUlI7QURXTTtFQUNFLG9CQUFBO0VBQ0EscUJFdENhO0VGdUNiLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNUUjtBRFlNO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQ1ZSO0FBbENBO0VBQ0ksY0FBQTtBQXFDSjtBQWxDQTtFQUNJLGVBQUE7QUFxQ0o7QUFuQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXFDUjtBQWpDQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQW9DSjtBQWxDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFvQ1I7QUFsQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQ25DUztBRHVFckI7QUFqQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFtQ1o7QUEvQkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBaUNSO0FBOUJJO0VBQ0ksZ0JBQUE7QUFnQ1I7QUE1QkE7RUFDSSxrQkFBQTtBQStCSjtBQTVCUTtFQUNJLGVBQUE7QUE4Qlo7QUEzQlE7RUFDSSx5QkN0RVM7RUR1RVQsWUFBQTtBQTZCWjtBQTFCUTtFQUNJLGVBQUE7QUE0Qlo7QUF6QlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQTJCWjtBQXhCUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJDckZRO0VEc0ZSLGdCQUFBO0VBQ0Esa0JBQUE7QUEwQlo7QUF2QlE7RUFDSSxlQUFBO0FBeUJaO0FBcEJRO0VBQ0ksa0NBQUE7QUFzQlo7QUFwQlk7RUFDSSw4QkFBQTtBQXNCaEIiLCJmaWxlIjoiaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgLmdhbGxlcnktY29sIHtcclxuXHJcbiAgICAuZ2FsbGVyeS1kaXYge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlZWVlZWU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAmLnNtYWxsIHtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hZGQge1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFzcC1wcmltYXJ5LWNvbG9ycztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmN2YzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm5vbmUge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlZWVlZWU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxufSIsIi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZ2FsbGVyeSAuZ2FsbGVyeS1jb2wgLmdhbGxlcnktZGl2LnNtYWxsIHtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLmdhbGxlcnkgLmdhbGxlcnktY29sIC5nYWxsZXJ5LWRpdiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4uZ2FsbGVyeSAuZ2FsbGVyeS1jb2wgLmdhbGxlcnktZGl2IC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYgLmljb24ge1xuICBmb250LXNpemU6IDM0cHg7XG59XG4uZ2FsbGVyeSAuZ2FsbGVyeS1jb2wgLmdhbGxlcnktZGl2LmFkZCB7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y3ZjM7XG59XG4uZ2FsbGVyeSAuZ2FsbGVyeS1jb2wgLmdhbGxlcnktZGl2Lm5vbmUge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWVlZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICM2MTYxNjE7XG59XG5cbjo6bmctZGVlcCAuZ2FsbGVyeS1kaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAgLmdhbGxlcnktZGl2IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5pbmZvLXRvcCAuaWNvbi10b3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbmZvLXRvcCAuaWNvbi10b3AgLmljb24ge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogNDMlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjMjE5NmYyO1xufVxuLmluZm8tdG9wIC5pY29uLXRvcCAudGV4dCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiA0MyU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5pbmZvLXRvcCAudG90YWwge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmluZm8tdG9wIC5pbmZvLXRvcC10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cblxuLmluZm8tZGV0YWlsIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSBtYXQtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSAudGl0bGUge1xuICBmb250LXNpemU6IDEwcHQ7XG59XG4uaW5mby1kZXRhaWwgaW9uLWl0ZW0gLmNvbnRlbnQge1xuICBmb250LXNpemU6IDExcHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSAuc3RhdHVzLWdpZnQge1xuICBmb250LXNpemU6IDlwdDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA0MTQxO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaW5mby1kZXRhaWwgaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDEwcHQ7XG59XG4uaW5mby1kZXRhaWwucHJvZHVjdCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDAgIWltcG9ydGFudDtcbn1cbi5pbmZvLWRldGFpbC5wcm9kdWN0IGlvbi1pdGVtOmxhc3QtY2hpbGQgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59IiwiJGFzcC1wcmltYXJ5LWNvbG9yczogIzIxOTZmMjtcclxuJGFzcC1saWdodC1jb2xvcnM6ICNmZmZmZmY7XHJcbiRhc3AtbWVkaXVtLWNvbG9yczogIzYxNjE2MTtcclxuJGFzcC1kYW5nZXItY29sb3JzOiAjZjA0MTQxO1xyXG4kYXNwLWJnLWlucHV0OiAjZjVmNWY1O1xyXG4kYXNwLXdhcm5pbmctY29sb3JzOiAjZmY4YzAwO1xyXG4kY29sb3Itd2FybjogI2ZmOGMwMDtcclxuJGNvbG9yLXN1Y2Nlc3M6ICMzMzY5MWU7XHJcblxyXG4kYXNwLXNlY29uZGFyeS1jb2xvcnM6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogXCLigJxSb2JvdG/igJ1cIjtcclxuJGZvbnQtZmFtaWx5LWlvcy1iYXNlOiBcIuKAnFJvYm90b+KAnVwiO1xyXG5cclxuJGJvcmRlci1zdHlsZTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gICAgeHM6IDAsXHJcbiAgICAvLyBQaG9uZSAoMHB4IC0gNTc1cHgpXHJcbiAgICBzbTogNTc2cHgsXHJcbiAgICAvLyBQaGFibGV0ICg1NzZweCAtIDc2N3B4KVxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgLy8gVGFibGV0IHZlcnRpY2FsICg3NjhweCAtIDk5MXB4KVxyXG4gICAgbGc6IDk5MnB4IC8vIFRhYmxldCBob3Jpem9udGFsLCBEZXNrdG9wICg5OTJweCBhbmQgYWJvdmUpLCwsXHJcbik7XHJcbiJdfQ== */";

/***/ }),

/***/ 42261:
/*!**********************************************************************************!*\
  !*** ./src/app/components/inventory/templates/products-inventory.component.scss ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "::ng-deep ion-item ion-label p {\n  padding-top: 5px;\n}\n::ng-deep ion-item ion-label p input {\n  max-width: 100px;\n  background-color: white;\n}\n::ng-deep ion-item ion-label p input.txt-giaitrinh {\n  max-width: 100%;\n  width: 100%;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWludmVudG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHWTtFQUNJLGdCQUFBO0FBRmhCO0FBSWdCO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQUZwQjtBQUlvQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFGeEIiLCJmaWxlIjoicHJvZHVjdHMtaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi50eHQtZ2lhaXRyaW5oIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 15088:
/*!****************************************************!*\
  !*** ./src/app/components/inventory/core/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_0__.InventoryService)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 57986);



/***/ }),

/***/ 57986:
/*!*************************************************************!*\
  !*** ./src/app/components/inventory/core/services/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryService": () => (/* reexport safe */ _inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService)
/* harmony export */ });
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.service */ 5939);



/***/ }),

/***/ 5939:
/*!*************************************************************************!*\
  !*** ./src/app/components/inventory/core/services/inventory.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryService": () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services */ 41614);




let InventoryService = class InventoryService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.urlSegement = {
            GetSoSach: "/Inventory/GetSoSach",
            GetKK_Update: "/Inventory/GetKK_Update",
            DeleteKiemKe: "/Inventory/DeleteKK",
            FilterInventories: "/Inventory/FilterInventories",
            getInformation: "/Inventory/getInformation",
            Load_KK: "/Inventory/Load_KK",
            GetVtByCode: "/Warehouse/GetVtByCode",
            UpdateQty_KK: "/Inventory/UpdateQty_KK",
            GetKiemKeCt: "/Inventory/GetKiemKeCt"
        };
    }
    GetSoSach(Item = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                item: Item
            };
            const res = yield this.apiService.post(this.urlSegement.GetSoSach, params);
            return res;
        });
    }
    GetKK_Update(stt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                STT: stt
            };
            const res = yield this.apiService.get(this.urlSegement.GetKK_Update, params);
            return res;
        });
    }
    DeleteKiemKe(stt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                STT: stt
            };
            const res = yield this.apiService.get(this.urlSegement.DeleteKiemKe, params);
            return res;
        });
    }
    FilterInventories(member_Id, keyword) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                MEMBER_ID: member_Id,
                KEYWORD: keyword
            };
            const res = yield this.apiService.get(this.urlSegement.FilterInventories, params);
            return res;
        });
    }
    getInformation(stt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                STT: stt
            };
            const res = yield this.apiService.get(this.urlSegement.getInformation, params);
            return res;
        });
    }
    Load_KK(Item = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                item: Item
            };
            const res = yield this.apiService.post(this.urlSegement.Load_KK, params);
            return res;
        });
    }
    UpdateQty_KK(Item = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                item: Item
            };
            const res = yield this.apiService.post(this.urlSegement.UpdateQty_KK, params);
            return res;
        });
    }
    GetKiemKeCt(stt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = {
                STT: stt
            };
            const res = yield this.apiService.get(this.urlSegement.GetKiemKeCt, params);
            return res;
        });
    }
    GetVtByCode(filterParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                filterParams
            };
            const res = yield this.apiService.post(this.urlSegement.GetVtByCode, body);
            return res;
        });
    }
};
InventoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
InventoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], InventoryService);



/***/ }),

/***/ 73876:
/*!**********************************************************!*\
  !*** ./src/app/components/inventory/create.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create.component.html */ 72372);
/* harmony import */ var _create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.component.scss */ 28294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _filter_inventories_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-inventories-modal.component */ 2388);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var _warehouse_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../warehouse/core */ 81682);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/inventory.service */ 5939);
/* harmony import */ var _models_params__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/params */ 39741);













let CreateComponent = class CreateComponent {
    constructor(inventoryService, warehousesService, modalController, utilityService, router) {
        this.inventoryService = inventoryService;
        this.warehousesService = warehousesService;
        this.modalController = modalController;
        this.utilityService = utilityService;
        this.router = router;
        this.searchTerm = "Chọn sản phẩm";
        this.loading = false;
        this.today = new Date();
        this.linner = true;
        this.submitting = false;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__.ApiParameter();
        this.model = {
            ngay_Kk: this.today,
        };
        this.param = new _models_params__WEBPACK_IMPORTED_MODULE_8__.Params();
        this.products = [];
        this.productsModel = [];
        this.inventory = {};
    }
    ngOnInit() { }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.submitting = true;
            const _model = Object.assign(this.model, {
                ngay_Kk: moment__WEBPACK_IMPORTED_MODULE_6__(this.model.ngay_Kk).format("YYYY-MM-DD"),
            });
            const res = yield this.warehousesService
                .Save_KiemKe(_model, this.productsModel)
                .finally(() => (this.submitting = false));
            this.model = {};
            this.productsModel = [];
            this.utilityService.showToast("Kiểm kê thành công");
            this.router.navigateByUrl(`/components/inventory/detail/${res}`);
        });
    }
    openInventoriesFilterModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilityService.showLoader();
            const modal = yield this.modalController.create({
                component: _filter_inventories_modal_component__WEBPACK_IMPORTED_MODULE_2__.FilterInventoriesModalComponent,
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (dataReturned.data) {
                    this.inventory = dataReturned.data;
                    this.model = Object.assign({}, this.model, {
                        ma_Kho: dataReturned.data.ma_Kho,
                    });
                    this.getProductsInventory();
                }
            }));
            return yield modal
                .present()
                .finally(() => this.utilityService.hideLoader());
        });
    }
    clearInventory(ev) {
        ev.stopPropagation();
        this.model.ma_Kho = "";
        this.inventory = {};
    }
    getProductsInventory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const ngay_Kk = moment__WEBPACK_IMPORTED_MODULE_6__(this.model.ngay_Kk).format("YYYY-MM-DD");
            this.param = {
                Ngay_KK: new Date(ngay_Kk).toISOString(),
                Ma_Kho: this.model.ma_Kho
            };
            const res = yield this.inventoryService
                .GetSoSach(this.param).finally(() => (this.loading = false));
            this.products = res.table;
            //this.productsModel = _.map(res.table, (obj) => {
            //const result: KiemKeCt = {
            //ma_Vt: obj.ma_Vt,
            //ten_Vt: obj.ten_Vt,
            //ma_Lo: obj.ma_Lo,
            //ma_Kho: obj.ma_Kho,
            //so_Luong_Ss: _.toNumber(obj.ton_Dau),
            //so_Luong_Kk: _.toNumber(obj.so_Luong_Kk),
            //giai_Trinh: "",
            //};
            //return result;
            //});
        });
    }
};
CreateComponent.ctorParameters = () => [
    { type: _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_7__.InventoryService },
    { type: _warehouse_core__WEBPACK_IMPORTED_MODULE_4__.WarehousesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
CreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-inventory-create",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateComponent);



/***/ }),

/***/ 49323:
/*!**********************************************************!*\
  !*** ./src/app/components/inventory/detail.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail.component.html */ 65631);
/* harmony import */ var _detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.component.scss */ 9449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ 46885);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/inventory.service */ 5939);








//import { MakeAdjustedModalComponent } from './make-adjusted-modal.component';


let DetailComponent = class DetailComponent {
    constructor(alertController, utilityService, route, router, inventoryService, objectIdCCKK) {
        this.alertController = alertController;
        this.utilityService = utilityService;
        this.route = route;
        this.router = router;
        this.inventoryService = inventoryService;
        this.objectIdCCKK = objectIdCCKK;
        this.perm = Object.create(null);
        this.segment = 'info';
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__.ApiParameter();
        this.vm = {};
        this.data = [];
        this.loading = true;
        this.submitting = false;
        this.allowMakeAdjusted = false;
        this.stt = this.route.snapshot.params.stt;
        route.data.subscribe((data) => {
            return this.perm = data[_helpers__WEBPACK_IMPORTED_MODULE_4__.AppConfig.PERM_RESOLVER_KEY];
        });
    }
    ngOnInit() {
        this.initPermisson();
        this.getInformation();
    }
    completedSet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Xác nhận!',
                message: 'Bạn chắc chắn muốn tạo phiếu điều chỉnh?',
                buttons: [
                    {
                        text: 'Hủy',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Đồng ý',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            this.submitting = true;
                            const res = yield this.inventoryService.GetKK_Update(this.stt).finally(() => this.loading = false);
                            this.submitting = false;
                            this.utilityService.showToast('Thành công');
                            this.getInformation();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    getInformation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const res = yield this.inventoryService.getInformation(this.stt).finally(() => this.loading = false);
            if (res) {
                this.vm = res[0];
            }
        });
    }
    initPermisson() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
DetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_5__.InventoryService },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject, args: ['OBJECTID_CCKK',] }] }
];
DetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-inventory-detail',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            { provide: 'OBJECTID_CCKK', useValue: 'ALLOW_CCKK' }
        ],
        styles: [_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailComponent);



/***/ }),

/***/ 2388:
/*!****************************************************************************!*\
  !*** ./src/app/components/inventory/filter-inventories-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterInventoriesModalComponent": () => (/* binding */ FilterInventoriesModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_filter_inventories_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./filter-inventories-modal.component.html */ 89494);
/* harmony import */ var _filter_inventories_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-inventories-modal.component.scss */ 42187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services */ 41614);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/inventory.service */ 5939);










let FilterInventoriesModalComponent = class FilterInventoriesModalComponent {
    constructor(identityService, sqlService, modalController, _utilityService, navParams, inventoryService) {
        this.identityService = identityService;
        this.sqlService = sqlService;
        this.modalController = modalController;
        this._utilityService = _utilityService;
        this.navParams = navParams;
        this.inventoryService = inventoryService;
        this.loading = false;
        this.searchTerm = '';
        this.radioModel = '';
        this.member_Id = '';
        this.inventories = [];
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__.ApiParameter();
    }
    ngOnInit() {
        this.filterInventories();
    }
    ionViewDidEnter() {
    }
    filterInventories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.member_Id = yield this.identityService.getStrMemberId();
            const res = yield this.inventoryService.FilterInventories(this.member_Id, this.searchTerm).finally(() => this.loading = false);
            this.inventories = res;
        });
    }
    onChangeRadio(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(item);
        });
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (ok) {
                yield this.modalController.dismiss(this.model);
            }
            else {
                yield this.modalController.dismiss(null);
            }
        });
    }
};
FilterInventoriesModalComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__.IdentityService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__.SQLExecService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_5__.InventoryService }
];
FilterInventoriesModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-filter-inventories-modal',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_filter_inventories_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_filter_inventories_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilterInventoriesModalComponent);



/***/ }),

/***/ 54417:
/*!**********************************************************!*\
  !*** ./src/app/components/inventory/inventory.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryModule": () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 55544);
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.component */ 49323);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.module */ 36852);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ 57244);
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create.component */ 73876);
/* harmony import */ var _filter_inventories_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-inventories-modal.component */ 2388);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services */ 41614);
/* harmony import */ var _templates_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/info.component */ 70143);
/* harmony import */ var _templates_info_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/info-products.component */ 82453);
/* harmony import */ var _templates_products_inventory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/products-inventory.component */ 37614);













const routing = _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
    {
        path: 'list',
        component: _list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
    },
    {
        path: 'create',
        component: _create_component__WEBPACK_IMPORTED_MODULE_4__.CreateComponent,
    },
    {
        path: 'detail/:stt',
        component: _detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent
    }
]);
let InventoryModule = class InventoryModule {
};
InventoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
            _create_component__WEBPACK_IMPORTED_MODULE_4__.CreateComponent,
            _detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent,
            _templates_info_products_component__WEBPACK_IMPORTED_MODULE_8__.InfoProductsComponent,
            _templates_info_component__WEBPACK_IMPORTED_MODULE_7__.InfoComponent,
            _templates_products_inventory_component__WEBPACK_IMPORTED_MODULE_9__.ProductsInventoryComponent,
            _filter_inventories_modal_component__WEBPACK_IMPORTED_MODULE_5__.FilterInventoriesModalComponent,
        ],
        imports: [
            _base_base_module__WEBPACK_IMPORTED_MODULE_2__.BaseModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            routing
        ],
        providers: [_shared_services__WEBPACK_IMPORTED_MODULE_6__.DataToolService, _shared_services__WEBPACK_IMPORTED_MODULE_6__.SQLExecService]
    })
], InventoryModule);



/***/ }),

/***/ 57244:
/*!********************************************************!*\
  !*** ./src/app/components/inventory/list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list.component.html */ 76447);
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component.scss */ 65282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ 46885);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/params */ 39741);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/inventory.service */ 5939);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
//import { Component, OnInit } from '@angular/core';



//import { InventoryService } from '../../shared/services/entities';









let ListComponent = class ListComponent {
    constructor(alertController, _utilityService, inventoryService, route) {
        this.alertController = alertController;
        this._utilityService = _utilityService;
        this.inventoryService = inventoryService;
        this.route = route;
        this.perm = Object.create(null);
        this.today = new Date();
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__.ApiParameter();
        this.filterModel = {
            ngay_Ct1: moment__WEBPACK_IMPORTED_MODULE_5__().startOf('month').format('YYYY-MM-DD'),
            ngay_Ct2: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
            top: 10,
        };
        this.param = new _models_params__WEBPACK_IMPORTED_MODULE_6__.Params();
        this.totalCount = 0;
        this.reportsBL = [];
        this.loading = true;
        route.data.subscribe((data) => {
            this.perm = data[_helpers__WEBPACK_IMPORTED_MODULE_2__.AppConfig.PERM_RESOLVER_KEY];
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.getList();
        }, 20);
    }
    getList(isLoading = true) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = isLoading;
            this.param = {
                Ngay_Ct1: moment__WEBPACK_IMPORTED_MODULE_5__(this.filterModel.ngay_Ct1),
                Ngay_Ct2: moment__WEBPACK_IMPORTED_MODULE_5__(this.filterModel.ngay_Ct2),
                keyword: this.filterModel.keyword ? this.filterModel.keyword : "",
                top: this.filterModel.top,
                Is_App: true
            };
            const res = yield this.inventoryService.Load_KK(this.param).finally(() => this.loading = false);
            this.data = res;
            this.totalCount = (_a = res[0]) === null || _a === void 0 ? void 0 : _a.totalCount;
        });
    }
    onDateChange() {
        if (!this._utilityService.hasValue(this.filterModel.ngay_Ct2)) {
            return;
        }
        this.getList();
    }
    loadMoreData(event, refresh = false) {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.filterModel.top = this.filterModel.top + 5;
            yield this.getList(refresh);
            event.target.complete();
            if (!refresh) {
                event.target.disabled = (this.filterModel.top >= this.totalCount);
            }
        }), 20);
    }
    trackBy(index, item) {
        var _a;
        return (_a = item === null || item === void 0 ? void 0 : item.stt) !== null && _a !== void 0 ? _a : index;
    }
    delete(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Thông báo!',
                message: 'Xoá thông tin kiểm kê',
                buttons: [
                    {
                        text: 'Huỷ bỏ',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Xác nhận',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const check = yield this.inventoryService.DeleteKiemKe(item.stt);
                            if (check)
                                this._utilityService.showAlert('Xoá thành công');
                            setTimeout(() => {
                                this.getList();
                            }, 1);
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_7__.InventoryService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute }
];
ListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-inventory-list',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListComponent);



/***/ }),

/***/ 39741:
/*!*******************************************************!*\
  !*** ./src/app/components/inventory/models/params.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Params": () => (/* binding */ Params)
/* harmony export */ });
class Params {
    constructor() {
        this.maCt = '';
        this.Ngay_Ct1 = '';
        this.Ngay_Ct2 = '';
        this.status = '';
        this.top = 50;
        this.keyword = '';
        this.Ma_DvCs = '';
        this.Is_App = true;
        this.Ngay_KK = '';
        this.Ma_Kho = '';
        this.QTY = 0;
        this.Stt = '';
        this.Ma_Vt = '';
    }
}


/***/ }),

/***/ 57023:
/*!*********************************************************!*\
  !*** ./src/app/components/inventory/models/paramsqr.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParamsQR": () => (/* binding */ ParamsQR)
/* harmony export */ });
class ParamsQR {
    constructor() {
        this.MA_VT = '';
        this.MA_LO = '';
        this.MA_KHO = '';
        this.SO_LUONG = 0;
    }
    get HAN_SD() {
        return this.$HAN_SD ? this.$HAN_SD : '';
    }
    get NGAY_SX() {
        return this.$NGAY_SX ? this.$NGAY_SX : '';
    }
}


/***/ }),

/***/ 82453:
/*!***************************************************************************!*\
  !*** ./src/app/components/inventory/templates/info-products.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoProductsComponent": () => (/* binding */ InfoProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./info-products.component.html */ 29685);
/* harmony import */ var _info_products_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-products.component.scss */ 11247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services */ 41614);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utility.service */ 76515);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers */ 46885);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../core/services/inventory.service */ 5939);
/* harmony import */ var _models_params__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../models/params */ 39741);












let InfoProductsComponent = class InfoProductsComponent {
    constructor(identityService, utilityService, alertController, changeDetectorRef, inventoryServe) {
        this.identityService = identityService;
        this.utilityService = utilityService;
        this.alertController = alertController;
        this.changeDetectorRef = changeDetectorRef;
        this.inventoryServe = inventoryServe;
        this.searchTerm = "";
        this.loading = false;
        this.products = [];
        this.param = new _models_params__WEBPACK_IMPORTED_MODULE_8__.Params();
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__.ApiParameter();
    }
    ngOnInit() {
        setTimeout(() => {
            this.getProductsInfo();
        }, 20);
    }
    ionViewDidEnter() {
    }
    updateQuantity(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cập nhật sl kiểm kê',
                subHeader: item.ten_Vt,
                inputs: [
                    {
                        name: 'quantity',
                        type: 'number',
                        min: 0,
                        value: item.so_Luong_Kk,
                        placeholder: 'Nhập sl kiểm kê'
                    },
                ],
                buttons: [
                    {
                        text: 'Hủy',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Đồng ý',
                        handler: (dataAlert) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const qty = !isNaN(dataAlert.quantity) ? lodash__WEBPACK_IMPORTED_MODULE_6__.toNumber(dataAlert.quantity) : item.so_Luong_Kk;
                            this.param = {
                                QTY: qty,
                                Stt: this.vm.stt,
                                Ma_Vt: item.ma_Vt,
                                Ma_Kho: this.vm.ma_Kho
                            };
                            const res = yield this.inventoryServe.UpdateQty_KK(this.param);
                            item.so_Luong_Kk = qty;
                            this.utilityService.showAlert('Thành công');
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    getProductsInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.apiParams.cmdType = _helpers__WEBPACK_IMPORTED_MODULE_5__.CommandType.StoredProcedure;
            const res = yield this.inventoryServe.GetKiemKeCt(this.vm.stt).finally(() => this.loading = false);
            this.products = res;
        });
    }
};
InfoProductsComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__.IdentityService },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_7__.InventoryService }
];
InfoProductsComponent.propDecorators = {
    vm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
InfoProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-inventory-info-products',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_products_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_info_products_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoProductsComponent);



/***/ }),

/***/ 70143:
/*!******************************************************************!*\
  !*** ./src/app/components/inventory/templates/info.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoComponent": () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./info.component.html */ 61464);
/* harmony import */ var _info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.component.scss */ 75781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility.service */ 76515);





let InfoComponent = class InfoComponent {
    constructor(utilityService, changeDetectorRef) {
        this.utilityService = utilityService;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
    }
};
InfoComponent.ctorParameters = () => [
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
InfoComponent.propDecorators = {
    vm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
InfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inventory-info',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_info_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoComponent);



/***/ }),

/***/ 37614:
/*!********************************************************************************!*\
  !*** ./src/app/components/inventory/templates/products-inventory.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsInventoryComponent": () => (/* binding */ ProductsInventoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_inventory_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products-inventory.component.html */ 41233);
/* harmony import */ var _products_inventory_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-inventory.component.scss */ 42261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility.service */ 76515);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base */ 11852);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var _models_paramsqr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/paramsqr */ 57023);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core */ 15088);













let ProductsInventoryComponent = class ProductsInventoryComponent {
    constructor(inventoryService, barcodeScanner, utilityService, modalController, changeDetectorRef) {
        this.inventoryService = inventoryService;
        this.barcodeScanner = barcodeScanner;
        this.utilityService = utilityService;
        this.modalController = modalController;
        this.changeDetectorRef = changeDetectorRef;
        this.model = {};
        this.productsModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.paramqr = new _models_paramsqr__WEBPACK_IMPORTED_MODULE_8__.ParamsQR();
        this.searchTerm = "";
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__.ApiParameter();
        this.loading = true;
        this.barcodeScannerOptions = {
            prompt: "",
            showTorchButton: false,
            showFlipCameraButton: false,
            //torchOn: true,
            resultDisplayDuration: 1,
        };
    }
    ngOnInit() {
        this.last = this.products.length - 1;
    }
    ngAfterViewInit() {
        this.things.changes.subscribe((t) => {
        });
    }
    ngForRendred(index) {
        console.log("NgFor is Rendered");
        if (this.last == index && this.loading == true) {
            this.loading = false;
            this.changeDetectorRef.detectChanges();
        }
        return "";
    }
    setValue(item, field) {
        const product = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.productsModel, {
            ma_Vt: item.ma_Vt,
            ma_Kho: item.ma_Kho,
            ma_Lo: item.ma_Lo,
        });
        return (product === null || product === void 0 ? void 0 : product[field]) ? product[field] : null;
    }
    onChangeValue(ev, item, field) {
        const idx = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(this.productsModel, {
            ma_Vt: item.ma_Vt,
            ma_Lo: item.ma_Lo,
            ma_Kho: item.ma_Kho,
        });
        if (field == "so_Luong_Kk") {
            const value = lodash__WEBPACK_IMPORTED_MODULE_4__.toNumber(this.utilityService.hasValue(ev.target.value) ? ev.target.value : 0);
            this.productsModel[idx][field] = value;
            this.productsModel[idx].chenh_Lech = value - lodash__WEBPACK_IMPORTED_MODULE_4__.toNumber(this.utilityService.hasValue(item.ton_Dau) ? item.ton_Dau : 0);
        }
        else {
            this.productsModel[idx][field] = ev.target.value;
        }
        // this.productsModelChange.emit(this.productsModel);
    }
    openFilterProductsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _base__WEBPACK_IMPORTED_MODULE_6__.ProductFilterModalComponent,
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (dataReturned.data) {
                    this.productModelSet(dataReturned.data);
                }
            }));
            return yield modal.present();
        });
    }
    productModelSet(item) {
        if (!item)
            return;
        Object.assign(item, {
            ma_Lo: item.ma_Lo ? item.ma_Lo : "",
        });
        const idx = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(this.productsModel, (o) => {
            return o.ma_Vt == item.ma_Vt && o.ma_Lo == item.ma_Lo;
        });
        if (idx > -1) {
            this.productsModel[idx].so_Luong_Kk += 1;
        }
        else {
            let _kiemKe;
            const obj = Object.assign({}, _kiemKe, {
                ma_Vt: item.ma_Vt,
                ten_Vt: item.ten_Vt,
                ma_Lo: item.ma_Lo,
                ma_Kho: this.model.ma_Kho,
                so_Luong_Kk: 1,
                ton_Dau: 0,
            });
            this.products.push(obj);
            this.productsModel.push(obj);
        }
        this.productsModelChange.emit(this.productsModel);
    }
    removeProduct(item) {
        Object.assign(item, {
            ma_Lo: item.ma_Lo ? item.ma_Lo : "",
        });
        const idx = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(this.productsModel, (o) => {
            return o.ma_Vt == item.ma_Vt && o.ma_Lo == item.ma_Lo;
        });
        if (idx > -1) {
            this.products.splice(idx, 1);
            this.productsModel.splice(idx, 1);
            this.productsModelChange.emit(this.productsModel);
        }
    }
    productScanner() {
        // this.getProductByQRCode("8935001800651");
        // return;
        this.barcodeScanner
            .scan(this.barcodeScannerOptions)
            .then((data) => {
            if (data.cancelled) {
                console.log("User cancelled the action!");
                return false;
            }
            else if (data.text && data.text != "")
                this.getProductByQRCode(data.text);
        })
            .catch((err) => {
            this.utilityService.showToast(JSON.stringify(err));
        });
    }
    getProductByQRCode(qrCode) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (qrCode.includes('{')) {
                let result = JSON.parse(qrCode);
                this.paramqr = {
                    MA_VT: (_a = result.Ma_Vt) !== null && _a !== void 0 ? _a : "",
                    MA_LO: (_b = result.Ma_Lo) !== null && _b !== void 0 ? _b : "",
                    HAN_SD: moment__WEBPACK_IMPORTED_MODULE_3__(result.Han_Sd, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                    NGAY_SX: moment__WEBPACK_IMPORTED_MODULE_3__(result.Ngay_Sx, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                    MA_KHO: (_c = result.Ma_Kho) !== null && _c !== void 0 ? _c : "",
                    SO_LUONG: (_d = result.So_Luong) !== null && _d !== void 0 ? _d : 0
                };
            }
            else {
                this.paramqr = {
                    MA_VT: qrCode,
                    MA_LO: '',
                    HAN_SD: '',
                    NGAY_SX: '',
                    MA_KHO: '',
                    SO_LUONG: 0
                };
            }
            const res = yield this.inventoryService.GetVtByCode(this.paramqr).finally();
            if (res.length <= 0) {
                yield this.utilityService.showAlert(`Không tìm thấy sản phẩm cho: ${qrCode}`);
            }
            else {
                this.productModelSet(res[0]);
                this.productScanner();
            }
        });
    }
    trackByFn(index) {
        return index;
    }
    createFilterFor(query) {
        const lowercaseQuery = lodash__WEBPACK_IMPORTED_MODULE_4__.lowerCase(query);
        return (obj) => {
            return lodash__WEBPACK_IMPORTED_MODULE_4__.lowerCase(obj.ten_Vt).indexOf(lowercaseQuery) > -1;
        };
    }
};
ProductsInventoryComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_9__.InventoryService },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__.BarcodeScanner },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
ProductsInventoryComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    productsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    productsModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    things: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChildren, args: ["allTheseThings",] }]
};
ProductsInventoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-products-inventory",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_inventory_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_inventory_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsInventoryComponent);



/***/ }),

/***/ 72372:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/inventory/create.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"../list\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tạo kiểm kê</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button (click)=\"startScan()\">\r\n        <ion-icon slot=\"icon-only\" ios=\"qr-code-outline\" md=\"qr-code-sharp\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"light\" class=\"p-8\">\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <mat-horizontal-stepper labelPosition=\"bottom\" [linear]=\"linner\" #stepper>\r\n\r\n        <mat-step [stepControl]=\"fdInfo.control\">\r\n          <ng-template matStepLabel>Thông tin</ng-template>\r\n          <form role=\"form\" #fdInfo=\"ngForm\">\r\n            <!-- <app-guarantee-products [(model)]=\"productModel\">\r\n            </app-guarantee-products> -->\r\n\r\n            <div class=\"p-8\">\r\n\r\n              <div class=\"form-row\">\r\n                <mat-form-field appearance=\"fill\">\r\n                  <mat-label>Kho</mat-label>\r\n                  <input matInput name=\"ma_Kho\" [(ngModel)]=\"model.ma_Kho\" required\r\n                    (focus)=\"openInventoriesFilterModal()\">\r\n                  <button style=\"font-size: 18px;\" (click)=\"clearInventory($event)\" *ngIf=\"model.ma_Kho\" mat-icon-button\r\n                    matSuffix>\r\n                    <mat-icon>clear</mat-icon>\r\n                  </button>\r\n                  <mat-hint align=\"end\">{{inventory?.ten_Kho}}</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"form-row\">\r\n                <mat-form-field appearance=\"fill\">\r\n                  <mat-label>Ngày</mat-label>\r\n                  <input matInput name=\"ngay_Kk\" [max]=\"today\" [(ngModel)]=\"model.ngay_Kk\" required\r\n                    [matDatepicker]=\"picker\" (focus)=\"picker.open()\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker touchUi color=\"primary\"></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"form-row\">\r\n                <mat-form-field appearance=\"fill\">\r\n                  <mat-label>Nhóm vật tư</mat-label>\r\n                  <input matInput name=\"ma_Nh_Vt\" [(ngModel)]=\"model.ma_Nh_Vt\">\r\n                  <button style=\"font-size: 18px;\" *ngIf=\"model.ma_Nh_Vt\" mat-icon-button matSuffix>\r\n                    <mat-icon>clear</mat-icon>\r\n                  </button>\r\n                  <mat-hint align=\"end\"></mat-hint>\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n              <div class=\"form-row\">\r\n                <mat-form-field appearance=\"fill\">\r\n                  <mat-label>Ghi chú</mat-label>\r\n                  <textarea matInput name=\"ghi_Chu\" rows=\"4\" [(ngModel)]=\"model.ghi_Chu\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row p-5\" align=\"end\">\r\n              <button mat-raised-button matStepperNext color=\"primary\" [disabled]=\"fdInfo.invalid\">Tiếp theo</button>\r\n            </div>\r\n\r\n          </form>\r\n        </mat-step>\r\n\r\n        <mat-step>\r\n          \r\n          <ng-template matStepLabel>Sản phẩm</ng-template>\r\n          <app-products-inventory [model]=\"model\" [products]=\"products\" [(productsModel)]=\"productsModel\">\r\n          </app-products-inventory>\r\n        </mat-step>\r\n\r\n      </mat-horizontal-stepper>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"stepper.selectedIndex == 1\" color=\"bgcolor\" class=\"bg-footer ion-no-border\">\r\n  <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n    <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n      <ion-button (click)=\"onSubmit()\" expand=\"block\" size=\"default\" color=\"asp\"\r\n        [disabled]=\"fdInfo.invalid || !productsModel || productsModel.length==0 || submitting\">\r\n        <span>Lưu</span>\r\n        <ion-spinner slot=\"start\" size=\"default\" *ngIf=\"submitting\"></ion-spinner>\r\n        <ion-icon name=\"checkmark-done-sharp\" slot=\"start\" size=\"default\" *ngIf=\"!submitting\"></ion-icon>\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-footer>");

/***/ }),

/***/ 65631:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/inventory/detail.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button routerLink=\"/components/order/list\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/components/inventory/list\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Chi tiết kiểm kê</ion-title>\r\n    <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button *ngIf=\"perm?.allow_Edit\" routerLink=\"/components/inventory/create\">\r\n        <ion-icon slot=\"icon-only\" name=\"add-sharp\" size=\"large\">\r\n        </ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"light\" class=\"ion-padding\">\r\n  <ng-container *ngIf=\"!loading; else topLoadingTemplate\">\r\n    <ion-row class=\"info-top mt-20\">\r\n      <span class=\"icon-top\">\r\n        <!-- <i class=\"material-icons icon\">description</i> -->\r\n        <ion-icon *ngIf=\"vm?.is_App;else desktopIcon\" class=\"icon\" name=\"phone-portrait-outline\" size=\"large\"\r\n          [color]=\"vm?.is_HoanThanh?'asp':'danger'\">\r\n        </ion-icon>\r\n        <ng-template #desktopIcon>\r\n          <ion-icon name=\"desktop-outline\" [color]=\"vm?.is_HoanThanh?'secondary':'danger'\" size=\"large\" class=\"icon\">\r\n          </ion-icon>\r\n        </ng-template>\r\n      </span>\r\n      <ion-col size=\"12\" class=\"ion-text-center mt-20\">\r\n        <ion-text color=\"medium\">\r\n          <p class=\"title info-top-text\">{{vm?.ten_Kho}}</p>\r\n        </ion-text>\r\n        <ion-text color=\"medium\">\r\n          <p>{{vm?.ngay_Kk | formatDate:'dd/MM/yyyy, HH:mm'}}</p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n\r\n  <div class=\"p-5\">\r\n    <ion-segment [(ngModel)]=\"segment\" color=\"asp\">\r\n      <ion-segment-button value=\"info\">\r\n        <ion-label>Thông tin</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"products\">\r\n        <ion-label>Sản phẩm</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ng-container [ngSwitch]=\"segment\">\r\n\r\n      <ng-container *ngSwitchCase=\"'info'\">\r\n        <ng-container *ngIf=\"!loading; else elseTemplate\">\r\n          <app-inventory-info [vm]=\"vm\"></app-inventory-info>\r\n        </ng-container>\r\n        <ng-template #elseTemplate>\r\n          <asp-skeleton></asp-skeleton>\r\n        </ng-template>\r\n\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'products'\">\r\n        <app-inventory-info-products [vm]=\"vm\"></app-inventory-info-products>\r\n      </ng-container>\r\n\r\n    </ng-container>\r\n  </ion-grid>\r\n\r\n  <ng-template #topLoadingTemplate>\r\n    <ion-row class=\"info-top mt-20\">\r\n      <span class=\"icon-top\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </span>\r\n      <ion-col size=\"12\" text-center class=\"mt-20\">\r\n        <ion-text color=\"medium\">\r\n          <p class=\"title info-top-text\">\r\n            <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-text>\r\n        <h4 class=\"total info-top-text\">\r\n          <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n        </h4>\r\n        <ion-text>\r\n          <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n\r\n</ion-content>\r\n\r\n\r\n<ng-container *ngIf=\"!loading\">\r\n\r\n  <ion-footer color=\"bgcolor\" class=\"bg-footer ion-no-border\">\r\n    <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n      <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n        <ion-button [disabled]=\"submitting\"  (click)=\"completedSet()\" expand=\"block\" size=\"default\" color=\"asp\">\r\n          <span>Tạo phiếu điều chỉnh</span>\r\n          <ion-icon name=\"return-down-forward-outline\" slot=\"start\" size=\"default\" *ngIf=\"!submitting\"></ion-icon>\r\n          <ion-spinner slot=\"start\" size=\"default\" *ngIf=\"submitting\"></ion-spinner>\r\n        </ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-footer>\r\n\r\n\r\n</ng-container>");

/***/ }),

/***/ 89494:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/inventory/filter-inventories-modal.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar #searchBar [(ngModel)]=\"searchTerm\" (ionChange)=\"filterInventories()\" cancelButtonIcon=\"\"\r\n      debounce=\"500\" showCancelButton=\"never\" placeholder=\"Tìm kiếm kho...\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ng-container *ngIf=\"!loading; else skeletonTmpl\">\r\n    <ion-list class=\"mt-10\">\r\n      <ion-radio-group [(ngModel)]=\"radioModel\">\r\n        <ion-item *ngFor=\"let item of inventories\">\r\n          <ion-label class=\"ion-text-wrap\">\r\n            <h3>{{item.ten_Kho}}</h3>\r\n            <p>\r\n              {{item.ma_Kho}}\r\n            </p>\r\n          </ion-label>\r\n          <ion-radio [value]=\"item.ma_KhBl\" color=\"asp\" slot=\"start\" (click)=\"onChangeRadio(item)\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </ng-container>\r\n\r\n  <ng-template #skeletonTmpl>\r\n    <asp-skeleton></asp-skeleton>\r\n  </ng-template>\r\n</ion-content>");

/***/ }),

/***/ 76447:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/inventory/list.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/tabs/home\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/tabs/home\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Kiểm kê</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadMoreData($event,true)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-fab *ngIf=\"perm?.allow_New\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button routerLink=\"/components/inventory/create\" color=\"asp\">\r\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  \r\n  <ion-row>\r\n   <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Lọc theo ngày</mat-label>\r\n        <mat-date-range-input [max]=\"today\" [rangePicker]=\"picker\" (click)=\"picker.open()\">\r\n          <input matStartDate [(ngModel)]=\"filterModel.ngay_Ct1\" disabled placeholder=\"Ngày bắt đầu\"\r\n            (focus)=\"picker.open()\">\r\n          <input matEndDate [(ngModel)]=\"filterModel.ngay_Ct2\" (dateChange)=\"onDateChange()\" disabled\r\n            placeholder=\"Ngày kết thúc\" (focus)=\"picker.open()\">\r\n        </mat-date-range-input>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"loading\"></mat-datepicker-toggle>\r\n        <mat-date-range-picker touchUi #picker [disabled]=\"loading\"></mat-date-range-picker>\r\n        \r\n      </mat-form-field>\r\n      <!-- <asp-date-filter [classList]=\"['mat-elevation-z']\" [(fromDate)]=\"this.filterModel.ngay_Ct1\"\r\n      [(toDate)]=\"this.filterModel.ngay_Ct2\"></asp-date-filter> -->\r\n    </ion-col>   \r\n    <ion-col size=\"12\">\r\n      <app-asp-search [(aspModel)]=\"filterModel.keyword\" [animated]=\"true\" (aspModelChange)=\"getList()\" placeholder=\"Tìm kiếm theo tên kho, mã kho\"></app-asp-search>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-grid>\r\n    <ng-container *ngIf=\"!loading; else elseTemplate\">\r\n\r\n      <ion-list class=\"mt-0 pt-0\">\r\n        <ion-item detail=\"false\" button=\"false\" lines=\"{{totalCount>0?'inset':'none'}}\">\r\n          <ion-label class=\"ion-no-margin ion-no-padding\" >\r\n            <p text-bold>Tổng:&nbsp;{{totalCount | number}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let item of data;trackBy:trackBy\">\r\n          <ion-button fill=\"clear\" [matMenuTriggerFor]=\"menu\" slot=\"start\" color=\"medium\">\r\n            <ion-icon slot=\"start\" *ngIf=\"item.is_App;else desktopIcon\" name=\"phone-portrait-outline\"\r\n              color=\"asp\">\r\n            </ion-icon>\r\n          </ion-button>\r\n\r\n          \r\n          <ng-template #desktopIcon>\r\n            <ion-icon slot=\"start\" name=\"desktop-outline\" color=\"asp\"></ion-icon>\r\n          </ng-template>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button *ngIf=\"perm?.allow_View\" mat-menu-item routerLink=\"/components/inventory/detail/{{item.stt}}\" detail=\"true\">\r\n              <mat-icon>preview</mat-icon>\r\n              <span>Xem chi tiết</span>\r\n            </button>\r\n            <button *ngIf=\"perm?.allow_Delete\" mat-menu-item (click)=\"delete(item)\">\r\n              <mat-icon>delete</mat-icon>\r\n              <span>Xoá</span>\r\n            </button>\r\n          </mat-menu>\r\n          <ion-label class=\"ion-no-padding\" routerLink=\"/components/inventory/detail/{{item.stt}}\">\r\n            <h3>\r\n              {{item.ten_Kho}}\r\n            </h3>\r\n            <p>{{item.ngay_Kk | formatDate}}</p>\r\n            <p>{{item.ghi_Chu}}</p>\r\n          </ion-label>\r\n          <ion-icon slot=\"end\" color=\"asp\" *ngIf=\"item.is_DaXuLy\" name=\"checkmark-done-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n      </ion-list>\r\n    </ng-container>\r\n\r\n    <ng-template #elseTemplate>\r\n      <asp-skeleton></asp-skeleton>\r\n    </ng-template>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 29685:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/inventory/templates/info-products.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n<ng-container *ngIf=\"!loading; else elseTemplate\">\r\n  <ion-list class=\"info-detail ion-margin-bottom\">\r\n    <ion-item *ngFor=\"let item of products\" detail=\"false\">\r\n      <ion-button slot=\"end\" *ngIf=\"!vm?.is_HoanThanh\" (click)=\"updateQuantity(item)\" fill=\"clear\" color=\"medium\">\r\n        <ion-icon slot=\"icon-only\" name=\"pricetag-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <h3>{{item.ten_Vt}}</h3>\r\n        <p class=\"asp-color-medium\">Mã lô:&nbsp;\r\n          <span class=\"asp-color-medium\">{{item.ma_Lo}}</span>\r\n        </p>\r\n        <p class=\"asp-color-medium\">SL sổ sách:&nbsp;\r\n          <span class=\"asp-color-danger\">{{item.so_Luong_Ss}}</span>\r\n        </p>\r\n        <p class=\"asp-color-medium\">SL kiểm kê:&nbsp;\r\n          <span class=\"asp-color\">{{item.so_Luong_Kk}}</span>\r\n        </p>\r\n      </ion-label>\r\n      <!-- <ion-radio [value]=\"item.ma_Vt\" color=\"asp\" slot=\"start\" (ionFocus)=\"onChangeRadio(item)\"></ion-radio> -->\r\n      <!-- <ion-note slot=\"end\" color=\"asp\" class=\"mr-0\" style=\"font-size:11pt\">\r\n        <span class=\"asp-color\">{{item.gia || 0 | number}}<sup>đ</sup></span>\r\n      </ion-note> -->\r\n    </ion-item>\r\n  </ion-list>\r\n</ng-container>\r\n<ng-template #elseTemplate>\r\n  <asp-skeleton></asp-skeleton>\r\n</ng-template>");

/***/ }),

/***/ 61464:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/inventory/templates/info.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ion-no-margin ion-no-padding\">\r\n      <ion-text class=\"title\">Mã Kho</ion-text>\r\n    </ion-label>\r\n    <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap\">\r\n      <ion-text class=\"content\">{{vm?.ma_Kho}}</ion-text>\r\n    </ion-note>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ion-no-margin ion-no-padding\">\r\n      <ion-text class=\"title\">Stt</ion-text>\r\n    </ion-label>\r\n    <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap\">\r\n      <ion-text class=\"content\">{{vm?.stt}}</ion-text>\r\n    </ion-note>\r\n  </ion-item>\r\n\r\n  <!-- <ion-item>\r\n    <ion-label class=\"ion-no-margin ion-no-padding\">\r\n      <ion-text class=\"title\">Trạng thái</ion-text>\r\n    </ion-label>\r\n    <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap\">\r\n      <ion-text class=\"content\" [color]=\"vm?.is_HoanThanh?'asp':'danger'\">\r\n        <span [ngClass]=\"{'asp-color': vm?.is_HoanThanh, 'asp-color-danger':!vm?.is_HoanThanh }\">\r\n          {{vm?.is_HoanThanh?'Đã hoàn thành':'Chưa hoàn thành'}}\r\n        </span>\r\n      </ion-text>\r\n    </ion-note>\r\n  </ion-item> -->\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ion-no-margin ion-no-padding\">\r\n      <ion-text class=\"title\">Điều chỉnh</ion-text>\r\n    </ion-label>\r\n    <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap\">\r\n      <ion-text class=\"content\" [color]=\"vm?.is_DaXuLy?'asp':'danger'\">\r\n        <span [ngClass]=\"{'asp-color': vm?.is_DaXuLy, 'asp-color-danger':!vm?.is_DaXuLy }\">\r\n          {{vm?.is_DaXuLy?'Đã xong':'Chưa xong'}}\r\n        </span>\r\n      </ion-text>\r\n    </ion-note>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n\r\n<ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n  <ion-list-header>\r\n    <ion-label color=\"medium\">\r\n      <p>Ghi chú</p>\r\n    </ion-label>\r\n  </ion-list-header>\r\n  <p class=\"ion-padding-horizontal\">{{vm?.ghi_Chu}}</p>\r\n</ion-list>\r\n\r\n<ion-list lines=\"none\" class=\"info-detail\" *ngIf=\"(vm?.created_By && vm?.created_Date)\">\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ion-no-margin ion-no-padding\">\r\n      <ion-text text-left class=\"title\">Người tạo</ion-text>\r\n    </ion-label>\r\n    <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n      <ion-text>{{vm?.created_By_Name}} ({{vm?.created_By}})</ion-text>\r\n    </ion-note>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label class=\"ion-no-margin ion-no-padding\">\r\n      <ion-text text-left class=\"title\">Ngày tạo</ion-text>\r\n    </ion-label>\r\n    <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n      <ion-text>\r\n        {{vm?.created_Date | formatDate:'dd/MM/yyyy, HH:mm'}}\r\n      </ion-text>\r\n    </ion-note>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ 41233:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/inventory/templates/products-inventory.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row>\r\n  <ion-col size=\"10\">\r\n    <ion-searchbar class=\"m-0 p-0\" [ngModelOptions]=\"{standalone: true}\" showCancelButton=\"never\"\r\n      (ionFocus)=\"openFilterProductsModal()\" [(ngModel)]=\"searchTerm\" placeholder=\"Tìm kiếm mã vật tư, tên vật tư\">\r\n    </ion-searchbar>\r\n  </ion-col>\r\n  <ion-col size=\"2\">\r\n    <ion-button (click)=\"productScanner()\" fill=\"clear\" class=\"ion-no-margin mt-8 p-0 btn-scan\" color=\"medium\">\r\n      <ion-icon slot=\"icon-only\" size=\"large\" name=\"scan-sharp\"></ion-icon>\r\n    </ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n<!-- <app-asp-search #searchBar [(aspModel)]=\"searchTerm\" [animated]=\"false\" (aspModelChange)=\"filters()\"\r\n  cancelButtonIcon=\"\" showCancelButton=\"never\" placeholder=\"Tìm kiếm sản phẩm...\">\r\n</app-asp-search> -->\r\n<ng-container *ngIf=\"products; else firsrLoadingTemplate\">\r\n  <ion-list>\r\n    <ion-item #allTheseThings button=\"false\" detail=\"false\" *ngFor=\"let item of products\">\r\n      <ng-container>\r\n        <ion-label>\r\n          <h3>{{item.ten_Vt}}</h3>\r\n          <p>\r\n            <span class=\"mr-5\">Mã lô:&nbsp;</span>\r\n            <span >{{item.ma_Lo}}</span>\r\n          </p>\r\n          <p>\r\n            <span class=\"mr-5\">SL sổ sách:&nbsp;</span>\r\n            <span >{{item.ton_Dau}}</span>\r\n          </p>\r\n          <p>\r\n            <span class=\"mr-5\">SL thực tế:</span>\r\n            <input type=\"number\" [(ngModel)]=\"item.so_Luong_Kk\"\r\n              (input)=\"onChangeValue($event,item,'so_Luong_Kk')\" >\r\n          </p>\r\n          <p>\r\n            <input class=\"default txt-giaitrinh\" type=\"text\" placeholder=\"Nhập giải trình\"\r\n              (input)=\"onChangeValue($event,item,'giai_Trinh')\" [(ngModel)]=\"item.giai_Trinh\" >\r\n          </p>\r\n        </ion-label>\r\n        <ion-note slot=\"end\" color=\"asp\" mode=\"ios\">\r\n          <h4>{{setValue(item,'chenh_Lech')}}</h4>\r\n        </ion-note>\r\n      </ng-container>\r\n\r\n      <ion-button fill=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"ion-no-margin ion-no-padding\" slot=\"end\"\r\n        color=\"medium\">\r\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-sharp\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"removeProduct(item)\">\r\n          <mat-icon>delete</mat-icon>\r\n          <span>Xóa</span>\r\n        </button>\r\n      </mat-menu>\r\n    </ion-item>\r\n  </ion-list>\r\n</ng-container>\r\n<ng-template #firsrLoadingTemplate>\r\n  <asp-skeleton></asp-skeleton>\r\n</ng-template>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_inventory_inventory_module_ts.js.map