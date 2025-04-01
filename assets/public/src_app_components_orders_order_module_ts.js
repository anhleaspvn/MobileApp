"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_orders_order_module_ts"],{

/***/ 49171:
/*!*********************************************************!*\
  !*** ./src/app/components/orders/create.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 44420:
/*!*********************************************************!*\
  !*** ./src/app/components/orders/detail.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".gallery .gallery-col .gallery-div {\n  display: block;\n  width: 100%;\n  height: 120px;\n  border: solid 1px #eeeeee;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.gallery .gallery-col .gallery-div.small {\n  height: 90px;\n}\n.gallery .gallery-col .gallery-div img {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.gallery .gallery-col .gallery-div .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.gallery .gallery-col .gallery-div .icon {\n  font-size: 34px;\n}\n.gallery .gallery-col .gallery-div.add {\n  border-style: dashed;\n  border-color: #2196f2;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  background-color: #f3f7f3;\n}\n.gallery .gallery-col .gallery-div.none {\n  border: solid 1px #eeeeee;\n  background-color: transparent;\n}\n.title {\n  color: #616161;\n}\n::ng-deep .gallery-div {\n  cursor: pointer;\n}\n::ng-deep .gallery-div img {\n  height: 100%;\n  width: 100%;\n}\n.centeritem {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-top {\n  background-color: #fff;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.info-top .icon-top {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n.info-top .icon-top .icon {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  display: none;\n  font-size: 28px;\n  color: #2196f2;\n}\n.info-top .icon-top .text {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  right: 43%;\n  font-size: 28px;\n}\n.info-top .total {\n  color: #000000;\n  opacity: 0.9;\n  font-weight: 600;\n}\n.info-top .info-top-text {\n  line-height: 0.8;\n}\n.info-top.avatar .image {\n  width: 152px;\n  height: 152px;\n  margin: -50px auto;\n  border: 4px solid #fff;\n}\n.info-detail {\n  border-radius: 4px;\n}\n.info-detail ion-item ion-label {\n  font-size: 11pt;\n}\n.info-detail ion-item mat-chip {\n  background-color: #2196f2;\n  color: white;\n}\n.info-detail ion-item .title {\n  font-size: 10pt;\n}\n.info-detail ion-item .content {\n  font-size: 11pt;\n  color: black;\n  margin-top: -3px !important;\n  max-width: 80%;\n}\n.info-detail ion-item .status-gift {\n  font-size: 9pt;\n  color: white;\n  background-color: #f04141;\n  padding: 2px 5px;\n  border-radius: 4px;\n}\n.info-detail ion-item ion-note {\n  font-size: 10pt;\n}\n.info-detail.product ion-item:last-child {\n  --border-width: 0 0 0 0 !important;\n}\n.info-detail.product ion-item:last-child .item-inner {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcZ2FsbGVyeS5zY3NzIiwiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcaW5mby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0FDTE47QURPTTtFQUNFLFlBQUE7QUNMUjtBRFFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDUFI7QURVTTtFQUNFLGVBQUE7QUNSUjtBRFdNO0VBQ0Usb0JBQUE7RUFDQSxxQkV0Q2E7RUZ1Q2IsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1RSO0FEWU07RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0FDVlI7QUVsQ0E7RUFDSSxjQUFBO0FGcUNKO0FFbENBO0VBQ0ksZUFBQTtBRnFDSjtBRW5DSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FGcUNSO0FFakNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRm9DSjtBRWpDQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRm9DSjtBRWxDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUZvQ1I7QUVsQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFDQSxjRDNDUztBRDhFckI7QUVoQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUZrQ1o7QUU5Qkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FGZ0NSO0FFN0JJO0VBQ0ksZ0JBQUE7QUYrQlI7QUU1QlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUY4Qlo7QUV6QkE7RUFDSSxrQkFBQTtBRjRCSjtBRXpCUTtFQUNJLGVBQUE7QUYyQlo7QUV4QlE7RUFDSSx5QkR0RlM7RUN1RlQsWUFBQTtBRjBCWjtBRXZCUTtFQUNJLGVBQUE7QUZ5Qlo7QUV0QlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBRndCWjtBRXJCUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJEckdRO0VDc0dSLGdCQUFBO0VBQ0Esa0JBQUE7QUZ1Qlo7QUVwQlE7RUFDSSxlQUFBO0FGc0JaO0FFakJRO0VBQ0ksa0NBQUE7QUZtQlo7QUVqQlk7RUFDSSw4QkFBQTtBRm1CaEIiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5nYWxsZXJ5IHtcclxuICAuZ2FsbGVyeS1jb2wge1xyXG5cclxuICAgIC5nYWxsZXJ5LWRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICYuc21hbGwge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFkZCB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYXNwLXByaW1hcnktY29sb3JzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y3ZjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubm9uZSB7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59IiwiLmdhbGxlcnkgLmdhbGxlcnktY29sIC5nYWxsZXJ5LWRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYuc21hbGwge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uZ2FsbGVyeSAuZ2FsbGVyeS1jb2wgLmdhbGxlcnktZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmdhbGxlcnkgLmdhbGxlcnktY29sIC5nYWxsZXJ5LWRpdiAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYuYWRkIHtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjdmMztcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYubm9uZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZWVlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzYxNjE2MTtcbn1cblxuOjpuZy1kZWVwIC5nYWxsZXJ5LWRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAuZ2FsbGVyeS1kaXYgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlcml0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mby10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uaW5mby10b3AgLmljb24tdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5mby10b3AgLmljb24tdG9wIC5pY29uIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogIzIxOTZmMjtcbn1cbi5pbmZvLXRvcCAuaWNvbi10b3AgLnRleHQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogNDMlO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uaW5mby10b3AgLnRvdGFsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbmZvLXRvcCAuaW5mby10b3AtdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4uaW5mby10b3AuYXZhdGFyIC5pbWFnZSB7XG4gIHdpZHRoOiAxNTJweDtcbiAgaGVpZ2h0OiAxNTJweDtcbiAgbWFyZ2luOiAtNTBweCBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xufVxuXG4uaW5mby1kZXRhaWwge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaW5mby1kZXRhaWwgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIG1hdC1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSAuY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIC5zdGF0dXMtZ2lmdCB7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDQxNDE7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cbi5pbmZvLWRldGFpbC5wcm9kdWN0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLmluZm8tZGV0YWlsLnByb2R1Y3QgaW9uLWl0ZW06bGFzdC1jaGlsZCAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn0iLCIkYXNwLXByaW1hcnktY29sb3JzOiAjMjE5NmYyO1xyXG4kYXNwLWxpZ2h0LWNvbG9yczogI2ZmZmZmZjtcclxuJGFzcC1tZWRpdW0tY29sb3JzOiAjNjE2MTYxO1xyXG4kYXNwLWRhbmdlci1jb2xvcnM6ICNmMDQxNDE7XHJcbiRhc3AtYmctaW5wdXQ6ICNmNWY1ZjU7XHJcbiRhc3Atd2FybmluZy1jb2xvcnM6ICNmZjhjMDA7XHJcbiRjb2xvci13YXJuOiAjZmY4YzAwO1xyXG4kY29sb3Itc3VjY2VzczogIzMzNjkxZTtcclxuXHJcbiRhc3Atc2Vjb25kYXJ5LWNvbG9yczogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcIuKAnFJvYm90b+KAnVwiO1xyXG4kZm9udC1mYW1pbHktaW9zLWJhc2U6IFwi4oCcUm9ib3Rv4oCdXCI7XHJcblxyXG4kYm9yZGVyLXN0eWxlOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMCxcclxuICAgIC8vIFBob25lICgwcHggLSA1NzVweClcclxuICAgIHNtOiA1NzZweCxcclxuICAgIC8vIFBoYWJsZXQgKDU3NnB4IC0gNzY3cHgpXHJcbiAgICBtZDogNzY4cHgsXHJcbiAgICAvLyBUYWJsZXQgdmVydGljYWwgKDc2OHB4IC0gOTkxcHgpXHJcbiAgICBsZzogOTkycHggLy8gVGFibGV0IGhvcml6b250YWwsIERlc2t0b3AgKDk5MnB4IGFuZCBhYm92ZSksLCxcclxuKTtcclxuIiwiQGltcG9ydCBcIi4uL3Nhc3MvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL3Nhc3MvZ2FsbGVyeS5zY3NzXCI7XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ2FsbGVyeS1kaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAuaWNvbi10b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAvLyByaWdodDogNDMlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYXNwLXByaW1hcnktY29sb3JzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICByaWdodDogNDMlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tdG9wLXRleHQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgICB9XHJcbiAgICAmLmF2YXRhciB7XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IC01MHB4IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaW5mby1kZXRhaWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtY2hpcCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhc3AtcHJpbWFyeS1jb2xvcnM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLWdpZnQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlwdDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNwLWRhbmdlci1jb2xvcnM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnByb2R1Y3Qge1xyXG4gICAgICAgIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 97440:
/*!*******************************************************!*\
  !*** ./src/app/components/orders/list.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 36943:
/*!*****************************************************************************!*\
  !*** ./src/app/components/orders/views/product-filter-modal.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWZpbHRlci1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 95393:
/*!*****************************************************************************!*\
  !*** ./src/app/components/orders/views/products-form-detail.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWZvcm0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3RzLWZvcm0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 68906:
/*!***********************************************************************!*\
  !*** ./src/app/components/orders/views/step-info-form.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InN0ZXAtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 39135:
/*!***************************************************************************!*\
  !*** ./src/app/components/orders/views/step-products-form.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLXByb2R1Y3RzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 49387:
/*!*************************************************!*\
  !*** ./src/app/components/orders/core/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_0__.OrderService)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 17128);



/***/ }),

/***/ 17128:
/*!**********************************************************!*\
  !*** ./src/app/components/orders/core/services/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* reexport safe */ _order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService)
/* harmony export */ });
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.service */ 3386);



/***/ }),

/***/ 3386:
/*!******************************************************************!*\
  !*** ./src/app/components/orders/core/services/order.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services */ 41614);



let OrderService = class OrderService {
    constructor(apiService) {
        this.apiService = apiService;
        this.urlSegement = {
            SaveSO: "/Order/SaveSO",
            GetDMTHUE: "/Order/GetDMTHUE",
            GetVtByCode: "/Order/GetVtByCode",
            GetListNhanVienBoPhan: "/Order/GetListNhanVienBoPhan",
            GetlistMa_Sp: "/Order/GetlistMa_Sp",
            GetListProductForSale: "/Order/GetListProductForSale",
        };
    }
    SaveSO(voucher, enuEdit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                voucher: voucher,
                enuEdit: enuEdit,
            };
            const res = yield this.apiService.post(this.urlSegement.SaveSO, body);
            return res;
        });
    }
    GetDMTHUE(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                type
            };
            const res = yield this.apiService.post(this.urlSegement.GetDMTHUE, body);
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
    GetListNhanVienBoPhan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {};
            const res = yield this.apiService.post(this.urlSegement.GetListNhanVienBoPhan, body);
            return res;
        });
    }
    GetlistMa_Sp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {};
            const res = yield this.apiService.post(this.urlSegement.GetlistMa_Sp, body);
            return res;
        });
    }
    GetListProductForSale(filterParams) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                filterParams
            };
            const res = yield this.apiService.post(this.urlSegement.GetListProductForSale, body);
            return res;
        });
    }
};
OrderService.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
OrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ 39877:
/*!*******************************************************!*\
  !*** ./src/app/components/orders/create.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create.component.html */ 90281);
/* harmony import */ var _create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.component.scss */ 49171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/voucher */ 82399);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services */ 41614);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ 49387);













let CreateComponent = class CreateComponent {
    constructor(voucherHelperService, identityService, voucherService, orderService, modalController, utilityService, router, route, sqlService) {
        this.voucherHelperService = voucherHelperService;
        this.identityService = identityService;
        this.voucherService = voucherService;
        this.orderService = orderService;
        this.modalController = modalController;
        this.utilityService = utilityService;
        this.router = router;
        this.route = route;
        this.sqlService = sqlService;
        this.strTitle = 'Tạo mới';
        this.today = new Date();
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_7__.ApiParameter();
        this.linner = true;
        this.submitting = false;
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New;
        this.is_VAT = false;
        this.currencyMask = {
            align: 'right',
            allowNegative: true,
            allowZero: true,
            decimal: ',',
            precision: 0,
            prefix: '',
            suffix: '',
            thousands: '.',
            nullable: false,
        };
        this.model = new src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherInfo();
    }
    ngOnDestroy() { }
    ionViewDidLeave() {
        this.myStepper.selectedIndex = 0;
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New;
        this.model = new src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherInfo();
    }
    ionViewWillEnter() {
        this.strMaCt = this.route.snapshot.params.maCt;
        this.route.queryParams.subscribe((params) => {
            this.stt = params['stt'];
            this.enuEdit = Number(params['enuEdit']);
            if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Convert)
                this.strMa_Ct_Convert = this.strMaCt;
            else
                this.strMa_Ct_Convert = params['maCt_Convert'];
        });
    }
    ionViewDidEnter() {
        this.get_listDMTHUE();
        if (this.enuEdit == src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit)
            this.strTitle = 'Sửa phiếu';
        if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New)
            setTimeout(() => {
                this.getVoucher().finally();
            }, 20);
    }
    ngOnInit() { }
    getVoucher() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.voucherService.getVoucher(this.stt, this.enuEdit == src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit ? this.strMaCt : this.strMa_Ct_Convert);
            if (this.enuEdit == src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Convert) {
                Object.assign(res.table[0], {
                    so_Ct: '',
                });
            }
            this.model = Object.assign({}, this.model, {
                header: Object.assign(this.model.header, res === null || res === void 0 ? void 0 : res.table[0]),
                detail: (_a = res === null || res === void 0 ? void 0 : res.table1) !== null && _a !== void 0 ? _a : [],
            });
        });
    }
    get_listDMTHUE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.orderService.GetDMTHUE(2);
            this.listMa_Thue = res;
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.submitting = true;
            const voucher = Object.assign(this.model, {
                header: Object.assign(this.model.header, {
                    ngay_Ct: moment__WEBPACK_IMPORTED_MODULE_6__(this.model.header.ngay_Ct).format('YYYY-MM-DD'),
                    MA_CT: this.strMa_Ct_Convert,
                    STT: this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit ? '' : this.model.header.STT,
                }),
            });
            const res = yield this.orderService
                .SaveSO(voucher, this.enuEdit)
                .finally(() => (this.submitting = false));
            if (res) {
                this.utilityService.showToast('Lưu thành công');
                this.router.navigateByUrl('components/order/detail/' + res + '/' + this.strMa_Ct_Convert);
            }
        });
    }
    resetInfo() {
        this.model.header = Object.create(null);
    }
    FormCheckValid() {
        return false;
    }
    stepperClicked(stepper) {
        stepper.next();
    }
    selectStepByIndex(index) {
        if (index == 2 && this.model.header.chiet_Khau > 0) {
            this.chiet_Khau_Change();
        }
        // if ((index = 2)) {// ???
        //   this.chiet_Khau_Change();
        // }
    }
    chiet_Khau_Change(event = 0) {
        if (this.model.header.chiet_Khau > 100 || this.model.header.chiet_Khau < 0)
            this.model.header.chiet_Khau = 0;
        this.model.header.tTien4 = (this.model.header.tTien_Hang * this.model.header.chiet_Khau) / 100;
        this.ma_Thue_Change();
    }
    ttien4_Change(event = 0) {
        if (this.model.header.tTien4 > this.model.header.tTien_Hang)
            this.model.header.tTien4 = 0;
        this.model.header.chiet_Khau = (this.model.header.tTien4 * 100) / this.model.header.tTien_Hang;
        this.ma_Thue_Change();
    }
    ma_Thue_Change() {
        this.voucherHelperService.sum_TTienHang(this.model);
        const res = this.listMa_Thue.find((x) => x.ma_Thue === this.model.header.ma_Thue);
        if (res) {
            this.model.header.thue_GtGt = res.thue_Suat;
            this.model.header.tTien3 =
                (this.model.header.tTien_Hang - this.model.header.tTien4) *
                    (this.model.header.thue_GtGt / 100);
            if (res.gia_Thue == "1")
                this.model.header.tTien_Hang = this.model.header.tTien_Hang - this.model.header.tTien3;
        }
        else {
            this.model.header.ma_Thue = '';
            this.model.header.thue_GtGt = 0;
        }
        this.voucherHelperService.updatePayments(this.model);
    }
};
CreateComponent.ctorParameters = () => [
    { type: src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherHelperService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__.IdentityService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__.VoucherService },
    { type: _core__WEBPACK_IMPORTED_MODULE_8__.OrderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__.SQLExecService }
];
CreateComponent.propDecorators = {
    myStepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['stepper',] }]
};
CreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-imports-create',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateComponent);



/***/ }),

/***/ 91431:
/*!*******************************************************!*\
  !*** ./src/app/components/orders/detail.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail.component.html */ 29994);
/* harmony import */ var _detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.component.scss */ 44420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/voucher */ 82399);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ 41614);








let DetailComponent = class DetailComponent {
    constructor(voucherService, route, router) {
        this.voucherService = voucherService;
        this.route = route;
        this.router = router;
        this.perm = Object.create(null);
        this.routeLink = "";
        this.info = new src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherInfo;
        this.loading = false;
        this.strMaCt = this.route.snapshot.params.maCt;
        this.stt = this.route.snapshot.params.stt;
        route.data.subscribe((data) => {
            return this.perm = data[src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppConfig.PERM_RESOLVER_KEY];
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.getVoucher().finally();
        }, 10);
    }
    ionViewWillEnter() {
        this.getVoucher();
    }
    getVoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const res = yield this.voucherService.getVoucher(this.stt, this.strMaCt).finally(() => this.loading = false);
            this.info = new src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherInfo(res === null || res === void 0 ? void 0 : res.table[0], res === null || res === void 0 ? void 0 : res.table1);
        });
    }
    edit(isConvert) {
        this.routeLink = "components/order/create/" + this.strMaCt;
        this.router.navigate([this.routeLink], { queryParams: { stt: this.stt, maCt_Convert: this.strMaCt, enuEdit: src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit } });
    }
};
DetailComponent.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.VoucherService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
DetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-detail',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailComponent);



/***/ }),

/***/ 31261:
/*!*****************************************************!*\
  !*** ./src/app/components/orders/list.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list.component.html */ 71030);
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component.scss */ 97440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ 46885);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services */ 41614);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layout */ 26950);
/* harmony import */ var _shared_services_asp_permissions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/services/asp-permissions.service */ 29263);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ 2960);
















let ListComponent = class ListComponent {
    constructor(voucherService, alertController, modalController, identityService, router, route, utilityService, permissionsService) {
        this.voucherService = voucherService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.identityService = identityService;
        this.router = router;
        this.route = route;
        this.utilityService = utilityService;
        this.permissionsService = permissionsService;
        this.filterModel = {
            ngay_Ct1: moment__WEBPACK_IMPORTED_MODULE_6__().startOf("month").format("YYYY-MM-DD"),
            ngay_Ct2: moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD"),
            top: 10,
        };
        this.isNativePlatform = true;
        this.platformStr = 'web';
        this.perm = Object.create(null);
        // perm_duyet: aspPermission = Object.create(null);
        //perm_duyet: any = Object.create(null);
        this.perm_duyet = Object.create(null);
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_5__.ApiParameter();
        this.totalCount = 0;
        this.selectTrang_Thai = "";
        this.skeletons = [];
        this.loading = true;
        this.searchTerm = "";
        this.routeLink = "";
        this.today = new Date();
        this.title = {
            SO: "Đơn đặt hàng",
        };
        this.strMaCt = this.route.snapshot.params.maCt;
        this.strMa_Ct_Convert = this.route.snapshot.params.maCt_Convert;
        route.data.subscribe((data) => {
            this.perm = data[_helpers__WEBPACK_IMPORTED_MODULE_2__.AppConfig.PERM_RESOLVER_KEY];
        });
        this.permissionsService.GetPermission('duyet').then(res => this.perm_duyet = res);
    }
    ;
    ngOnInit() { }
    ionViewWillEnter() {
        setTimeout(() => {
            this.getList();
        }, 1);
        this.platformStr = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__.Capacitor.getPlatform();
        this.isNativePlatform = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__.Capacitor.isNativePlatform();
    }
    getList(isLoading = true) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = isLoading;
            const filterParams = {
                STATUS: this.selectTrang_Thai,
                KEYWORD: this.searchTerm,
                Ma_Ct: this.strMaCt,
                Ngay_Ct1: this.filterModel.ngay_Ct1 || moment__WEBPACK_IMPORTED_MODULE_6__().startOf('month'),
                Ngay_Ct2: this.filterModel.ngay_Ct2 || moment__WEBPACK_IMPORTED_MODULE_6__(),
                TOP: this.filterModel.top,
                MA_DVCS: this.identityService.getStrCurrentMaDvCs(),
            };
            const res = yield this.voucherService.GetListVoucher(filterParams).finally(() => (this.loading = false));
            this.data = res || [];
            this.totalCount = ((_a = res[0]) === null || _a === void 0 ? void 0 : _a["totalCount"]) || 0;
        });
    }
    dateChange() {
        if (!this.utilityService.hasValue(this.dteNgay_Ct2))
            return;
        this.getList();
    }
    gotoDetail(stt) { }
    loadMoreData(event, refresh = false) {
        // this.filterModel.top = !refresh ? this.filterModel.top + 5 : this.filterModel.top;
        this.filterModel.top = this.filterModel.top + 5;
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.getList(refresh).finally(() => {
                event.target.complete();
                if (!refresh)
                    event.target.disabled = this.filterModel.top >= this.totalCount;
            });
        }), 100);
    }
    confirm(item, Is_duyet) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Thông báo!",
                message: Is_duyet ? "Duyệt" : "Bõ duyệt",
                buttons: [
                    {
                        text: "Huỷ bỏ",
                        role: "cancel",
                        handler: (blah) => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Xác nhận",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                            const filterParams = {
                                STT: item.stt,
                                MA_CT: this.strMaCt,
                                DUYET: Is_duyet,
                            };
                            const check = yield this.voucherService.DuyetVoucher(filterParams);
                            if (check)
                                this.utilityService.showAlert("Thay đổi thành công");
                            setTimeout(() => {
                                this.getList();
                            }, 1);
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
    delete(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Thông báo!",
                message: "Xoá chứng từ",
                buttons: [
                    {
                        text: "Huỷ bỏ",
                        role: "cancel",
                        handler: (blah) => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Xác nhận",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                            const check = yield this.voucherService.SQLDeleteCt(item.stt, this.strMaCt);
                            if (check)
                                this.utilityService.showAlert("Xoá thành công");
                            setTimeout(() => {
                                this.getList();
                            }, 1);
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
    view_edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (item)
                this.router.navigateByUrl("components/order/detail/" + item.stt + "/" + this.strMaCt);
        });
    }
    edit(item, _enuEdit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (item) {
                this.routeLink = "components/order/create/" + this.strMaCt;
                if (_enuEdit == _helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New)
                    this.router.navigate([this.routeLink], { queryParams: { enuEdit: _enuEdit } });
                else
                    this.router.navigate([this.routeLink], { queryParams: { stt: item.stt, maCt_Convert: this.strMa_Ct_Convert, enuEdit: _enuEdit } });
            }
        });
    }
    exportPDF(_item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!_item)
                return;
            const item = {};
            item.stt = _item.stt;
            item.ma_Ct = this.strMaCt;
            item.report_File = "rpt_CT_PN";
            this.voucherService.DowloadPDF_Blod(item).subscribe((event) => {
                var _a;
                if (event) {
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.DownloadProgress:
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Response:
                            const blob = new Blob([event.body], {
                                type: (_a = event.body) === null || _a === void 0 ? void 0 : _a.type,
                            });
                            const url = URL.createObjectURL(blob);
                            this.openFileModal(url);
                            break;
                    }
                }
            });
        });
    }
    openFileModal(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_layout__WEBPACK_IMPORTED_MODULE_7__.FileViewedModalComponent,
                componentProps: {
                    url: url,
                },
            });
            modal.onDidDismiss().then((dataReturned) => { });
            return yield modal.present();
        });
    }
    openModalFilter() { }
    trackBy(index, item) {
        var _a;
        return (_a = item === null || item === void 0 ? void 0 : item.stt) !== null && _a !== void 0 ? _a : index;
    }
};
ListComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__.VoucherService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__.IdentityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _shared_services_asp_permissions_service__WEBPACK_IMPORTED_MODULE_8__.aspPermissionsService }
];
ListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: "app-order-list",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListComponent);



/***/ }),

/***/ 24459:
/*!***************************************************!*\
  !*** ./src/app/components/orders/order.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderModule": () => (/* binding */ OrderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 55544);
/* harmony import */ var _views_view_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/view.module */ 81912);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.module */ 36852);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ 31261);
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create.component */ 39877);
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.component */ 91431);









const routing = _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
    {
        path: 'list/:maCt',
        component: _list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
    },
    {
        path: 'create/:maCt',
        component: _create_component__WEBPACK_IMPORTED_MODULE_4__.CreateComponent,
    },
    {
        path: 'detail/:stt/:maCt',
        component: _detail_component__WEBPACK_IMPORTED_MODULE_5__.DetailComponent,
    }
]);
let OrderModule = class OrderModule {
};
OrderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
            _create_component__WEBPACK_IMPORTED_MODULE_4__.CreateComponent,
            _detail_component__WEBPACK_IMPORTED_MODULE_5__.DetailComponent
        ],
        imports: [
            _base_base_module__WEBPACK_IMPORTED_MODULE_2__.BaseModule,
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _views_view_module__WEBPACK_IMPORTED_MODULE_1__.ViewModule,
            routing
        ]
    })
], OrderModule);



/***/ }),

/***/ 59109:
/*!***************************************************************************!*\
  !*** ./src/app/components/orders/views/product-filter-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFilterModalComponent": () => (/* binding */ ProductFilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product-filter-modal.component.html */ 36936);
/* harmony import */ var _product_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-filter-modal.component.scss */ 36943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ 49387);








let ProductFilterModalComponent = class ProductFilterModalComponent {
    constructor(modalController, orderService) {
        this.modalController = modalController;
        this.orderService = orderService;
        this.top = 30;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_3__.ApiParameter();
        this.loading = false;
    }
    ngOnInit() {
        this.filterProducts();
    }
    filterProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const filterParams = {
                KEYWORD: this.searchTerm,
                TOP: this.top
            };
            this.apiParams.cmdType = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.CommandType.StoredProcedure;
            const res = yield this.orderService.GetListProductForSale(filterParams).finally(() => this.loading = false);
            this.products = res;
        });
    }
    onChangeRadio(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (item) {
                item.stt0 = new Date().valueOf().toString();
            }
            if (item) {
                yield this.modalController.dismiss(item);
            }
            else
                yield this.modalController.dismiss(null);
        });
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null);
        });
    }
    loadMoreData(event) {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.top = this.top + 10;
            yield this.filterProducts();
            event.target.complete();
            const _total = (this.products && this.products.length > 0) ? this.products[0].totalCount : 0;
            event.target.disabled = (this.top >= _total);
        }), 50);
    }
};
ProductFilterModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__.OrderService }
];
ProductFilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-filter-modal',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductFilterModalComponent);



/***/ }),

/***/ 42151:
/*!***************************************************************************!*\
  !*** ./src/app/components/orders/views/products-form-detail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsFormDetailComponent": () => (/* binding */ ProductsFormDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_form_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products-form-detail.component.html */ 23249);
/* harmony import */ var _products_form_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-form-detail.component.scss */ 95393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core */ 49387);











let ProductsFormDetailComponent = class ProductsFormDetailComponent {
    constructor(identityService, navParams, route, modalController, orderService, voucherService) {
        this.identityService = identityService;
        this.navParams = navParams;
        this.route = route;
        this.modalController = modalController;
        this.orderService = orderService;
        this.voucherService = voucherService;
        this.model = {};
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__.ApiParameter();
        this.submitting = false;
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_3__.enuEdit.New;
        this.strMaCt = "";
        this.strSoCt = "";
        this.listMa_Lo = [];
        this.listMa_Sp = [];
        this.model = navParams.get("itemProduct");
        this.strMaCt = navParams.get("strMaCt");
        this.enuEdit = navParams.get("enuEdit");
        this.strMa_Ct_Convert = navParams.get("strMa_Ct_Convert");
    }
    ngOnInit() {
        this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();
        setTimeout(() => {
            if (["PX", "XP"].includes(this.strMa_Ct_Convert))
                this.GetListMa_Lo();
            this.GetlistMa_Sp();
        }, 10);
        if (this.model.ma_Lo) {
            this.listMa_Lo[0] = {
                ma_Lo: this.model.ma_Lo,
            };
        }
        if (this.model.ma_Sp) {
            this.listMa_Sp[0] = {
                ma_Sp: this.model.ma_Sp,
            };
        }
    }
    ngAfterContentChecked() {
        this.modelChange.emit(this.model);
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            Object.assign(this.model, {
                han_Sd: moment__WEBPACK_IMPORTED_MODULE_2__(this.model.han_Sd).format("YYYY-MM-DD"),
                ma_Lo: this.model.ma_Lo
            });
            yield this.modalController.dismiss(this.model);
        });
    }
    clearMa_Lo(ev) {
        ev.stopPropagation();
        delete this.model.ma_Lo;
        this.modelChange.emit(this.model);
    }
    clearMa_Sp(ev) {
        ev.stopPropagation();
        delete this.model.ma_Sp;
        this.modelChange.emit(this.model);
    }
    GetListMa_Lo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const filterParams = {
                Ngay_Ct: new Date(),
                Ma_Kho: this.model.ma_Kho,
                Ma_Vt: this.model.ma_Vt,
                Stt: this.model.stt,
                Ma_DvCs: this.strMa_DvCs,
            };
            const res = yield this.voucherService.GetListMa_Lo(filterParams);
            this.listMa_Lo = res;
        });
    }
    GetlistMa_Sp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.orderService.GetlistMa_Sp();
            this.listMa_Sp = res;
        });
    }
};
ProductsFormDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__.IdentityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavParams },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _core__WEBPACK_IMPORTED_MODULE_6__.OrderService },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__.VoucherService }
];
ProductsFormDetailComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
ProductsFormDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-products-form-detail",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_form_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_form_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsFormDetailComponent);



/***/ }),

/***/ 15058:
/*!*********************************************************************!*\
  !*** ./src/app/components/orders/views/step-info-form.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepInfoFormComponent": () => (/* binding */ StepInfoFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_info_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-info-form.component.html */ 4539);
/* harmony import */ var _step_info_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-info-form.component.scss */ 68906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ 11852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core */ 49387);












let StepInfoFormComponent = class StepInfoFormComponent {
    constructor(identityService, userService, orderService, utilityService, route, modalController) {
        this.identityService = identityService;
        this.userService = userService;
        this.orderService = orderService;
        this.utilityService = utilityService;
        this.route = route;
        this.modalController = modalController;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.today = new Date();
        this.employee = {};
        this.customer = {};
        this.inventories = [];
        this.listEmployees = [];
        this.listDepartment = [];
        this.listLoaiNhapXuat = [];
        this.listSO = [];
        this.listLSX = [];
        this.listKHSX = [];
        this.strMaCt = "";
        this.strSoCt = "";
        this.strMa_DvCs = "";
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New;
        this.strMaCt = this.route.snapshot.params.maCt;
        this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));
        if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Convert)
            this.strMa_Ct_Convert = this.strMaCt;
        else
            this.strMa_Ct_Convert = this.route.snapshot.queryParamMap.get("maCt_Convert");
    }
    ngOnInit() {
        this.getInfoUser().finally();
        this.get_list().finally();
    }
    openFilterCustomersModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilityService.showLoader();
            const modal = yield this.modalController.create({
                component: _base__WEBPACK_IMPORTED_MODULE_5__.CustomerFilterModalComponent,
            });
            modal.onDidDismiss().then((dataReturned) => {
                var _a, _b, _c, _d, _e;
                if (dataReturned.data) {
                    this.customer = dataReturned.data;
                    this.model = Object.assign(this.model, {
                        header: Object.assign(this.model.header, {
                            ma_Dt: (_a = dataReturned.data) === null || _a === void 0 ? void 0 : _a.ma_Dt,
                            ten_Dt: (_b = dataReturned.data) === null || _b === void 0 ? void 0 : _b.ten_Dt,
                            so_Phone: (_c = dataReturned.data) === null || _c === void 0 ? void 0 : _c.so_Phone,
                            dia_Chi: (_d = dataReturned.data) === null || _d === void 0 ? void 0 : _d.dia_Chi,
                            email: (_e = dataReturned.data) === null || _e === void 0 ? void 0 : _e.email,
                        }),
                    });
                }
            });
            return yield modal
                .present()
                .finally(() => this.utilityService.hideLoader());
        });
    }
    ngAfterContentChecked() {
        this.modelChange.emit(this.model);
    }
    clearCus(ev) {
        ev.stopPropagation();
        this.model = Object.assign(this.model, {
            header: Object.assign(this.model.header, {
                ma_Dt: "",
                ten_Dt: "",
                ma_CbNv: "",
                ma_Bp: "",
                so_Phone: "",
                dia_Chi: "",
                dien_Giai: "",
            }),
        });
    }
    get_list() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.orderService.GetListNhanVienBoPhan();
            this.listEmployees = res.table;
            this.listDepartment = res.table1;
            this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();
            if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit && this.model) {
                this.model = Object.assign(this.model, {
                    header: Object.assign(this.model.header, {
                        ma_CbNv: this.employee.ma_CbNv,
                        ma_Bp: this.employee.ma_Bp,
                        ma_DvCs: this.strMa_DvCs,
                    }),
                });
            }
        });
    }
    getInfoUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.userService.GetInfoUser();
            this.employee = res[0];
        });
    }
};
StepInfoFormComponent.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.IdentityService },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _core__WEBPACK_IMPORTED_MODULE_6__.OrderService },
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController }
];
StepInfoFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
StepInfoFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-voucher-step-info-form",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_info_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ControlContainer, useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm }],
        styles: [_step_info_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepInfoFormComponent);



/***/ }),

/***/ 15874:
/*!*************************************************************************!*\
  !*** ./src/app/components/orders/views/step-products-form.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepProductsFormComponent": () => (/* binding */ StepProductsFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_products_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-products-form.component.html */ 64213);
/* harmony import */ var _step_products_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-products-form.component.scss */ 39135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility.service */ 76515);
/* harmony import */ var _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-filter-modal.component */ 59109);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _products_form_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-form-detail.component */ 42151);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_models_voucher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/voucher */ 82399);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core */ 49387);















let StepProductsFormComponent = class StepProductsFormComponent {
    constructor(voucherHelperService, _utilityService, barcodeScanner, modalController, alertController, route, identityService, orderService) {
        this.voucherHelperService = voucherHelperService;
        this._utilityService = _utilityService;
        this.barcodeScanner = barcodeScanner;
        this.modalController = modalController;
        this.alertController = alertController;
        this.route = route;
        this.identityService = identityService;
        this.orderService = orderService;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.searchTerm = "";
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_6__.enuEdit.New;
        this.strMaCt = "";
        this.strMaCt = this.route.snapshot.params.maCt;
        this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));
        if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_6__.enuEdit.Convert)
            this.strMa_Ct_Convert = this.strMaCt;
        else
            this.strMa_Ct_Convert =
                this.route.snapshot.queryParamMap.get("maCt_Convert");
        this.barcodeScannerOptions = {
            prompt: "",
            showTorchButton: true,
            showFlipCameraButton: true,
            //torchOn: true,
            resultDisplayDuration: 1,
        };
    }
    ngOnInit() {
        this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();
    }
    openFilterProductsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModalComponent,
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                if (dataReturned.data) {
                    this.productModelSet(dataReturned.data);
                }
            }));
            return yield modal.present();
        });
    }
    productScanner() {
        this.barcodeScanner
            .scan(this.barcodeScannerOptions)
            .then((data) => {
            //this.productScannedData = data;
            if (data.cancelled) {
                console.log("User cancelled the action!");
                return false;
            }
            else if (data.text && data.text != "")
                this.getProductByQRCode(data.text);
        })
            .catch((err) => {
            this._utilityService.showToast(JSON.stringify(err));
        });
    }
    getProductByQRCode(qrCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let paraList;
            if (qrCode.includes("{")) {
                let result = JSON.parse(qrCode);
                paraList = {
                    MA_VT: result.Ma_Vt,
                    SO_LUONG: result.So_Luong,
                    Ma_DvCs: this.strMa_DvCs,
                };
            }
            else {
                paraList = {
                    MA_VT: qrCode,
                    SO_LUONG: "",
                    Ma_DvCs: this.strMa_DvCs,
                };
            }
            const res = yield this.orderService.GetVtByCode(paraList).finally();
            if (res.length <= 0) {
                yield this._utilityService.showAlert(`Không tìm thấy sản phẩm cho: ${qrCode}`);
            }
            else {
                this.productModelSet(res[0]);
                this.productScanner();
            }
        });
    }
    productModelSet(item) {
        if (!item)
            return;
        const idx = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(this.model.detail, (o) => {
            return o.ma_Vt == item.ma_Vt && o.is_HangTang == false;
        });
        if (idx > -1) {
            this.model.detail[idx].is_HangTang = false;
            this.model.detail[idx].so_Luong9 += 1;
            this.model.detail[idx].gia_Nt9 = this.model.detail[idx].gia_Nt9
                ? this.model.detail[idx].gia_Nt9
                : 0;
            this.model.detail[idx].tien_Nt9 = this.model.detail[idx].gia_Nt9
                ? this.model.detail[idx].gia_Nt9 * this.model.detail[idx].so_Luong9
                : 0;
            this.modelChange.emit(this.model);
        }
        else {
            const obj = Object.assign({}, item, {
                is_HangTang: false,
                so_Luong9: 1,
                tien_Nt9: item.gia_Nt9,
                stt0: this.model.detail ? this.model.detail.length + 1 : 1,
            });
            this.model.detail.push(obj);
            this.modelChange.emit(this.model);
        }
        this.voucherHelperService.sum_TTienHang(this.model);
        this.voucherHelperService.updatePayments(this.model);
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const obj = Object.assign({}, item, {
                ngay_Ct: this.model.header.ngay_Ct,
            });
            const modal = yield this.modalController.create({
                component: _products_form_detail_component__WEBPACK_IMPORTED_MODULE_8__.ProductsFormDetailComponent,
                componentProps: {
                    itemProduct: obj,
                    strMaCt: this.strMaCt,
                    enuEdit: this.enuEdit,
                    strMa_Ct_Convert: this.strMa_Ct_Convert,
                },
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    const data = dataReturned.data;
                    if (data) {
                        const idx = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(this.model.detail, (o) => {
                            return o.stt0 == data.stt0;
                        });
                        this.model.detail[idx] = data;
                        this.voucherHelperService.sum_TTienHang(this.model);
                        this.voucherHelperService.updatePayments(this.model);
                        this.modelChange.emit(this.model);
                    }
                }
            });
            return yield modal.present();
        });
    }
    removeProduct(item) {
        const idx = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(this.model.detail, (o) => {
            return o.stt0 == item.stt0;
        });
        if (idx > -1) {
            this.model.detail.splice(idx, 1);
            this.modelChange.emit(this.model);
        }
        this.voucherHelperService.sum_TTienHang(this.model);
        this.voucherHelperService.updatePayments(this.model);
    }
    changeQty(item = {}, type = "") {
        if (item.so_Luong9 < 1) {
            item.so_Luong9 = 1;
            return;
        }
        switch (type) {
            case "previous":
                item.so_Luong9 = item.so_Luong9 - 1;
                break;
            case "next":
                item.so_Luong9 = item.so_Luong9 + 1;
                break;
        }
        this.calcTien(item);
    }
    updateQty(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Cập nhật số lượng",
                subHeader: item.ten_Vt,
                inputs: [
                    {
                        name: "quantity",
                        type: "number",
                        min: 1,
                        //max: product.product.sl_Ton,
                        value: item.so_Luong9,
                        placeholder: "Nhập số lượng",
                    },
                ],
                buttons: [
                    {
                        text: "Hủy",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Đồng ý",
                        handler: (dataAlert) => {
                            const qty = !isNaN(dataAlert.quantity) && lodash__WEBPACK_IMPORTED_MODULE_4__.toNumber(dataAlert.quantity) > 0
                                ? lodash__WEBPACK_IMPORTED_MODULE_4__.toNumber(dataAlert.quantity)
                                : 1;
                            item.so_Luong9 = qty;
                            this.calcTien(item);
                        },
                    },
                ],
            });
            yield alert.present().then(() => {
                const firstInput = document.querySelector("ion-alert input");
                firstInput === null || firstInput === void 0 ? void 0 : firstInput.focus();
                return;
            });
        });
    }
    updatePrice(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Cập nhật giá bán",
                subHeader: item.ten_Vt,
                inputs: [
                    {
                        name: "price",
                        type: "number",
                        min: 100,
                        //max: product.product.sl_Ton,
                        value: item.gia_Nt9,
                        placeholder: "Nhập giá bán",
                    },
                ],
                buttons: [
                    {
                        text: "Hủy",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Đồng ý",
                        handler: (dataAlert) => {
                            const qty = !isNaN(dataAlert.price) && lodash__WEBPACK_IMPORTED_MODULE_4__.toNumber(dataAlert.price) > 0
                                ? lodash__WEBPACK_IMPORTED_MODULE_4__.toNumber(dataAlert.price)
                                : 1;
                            item.gia_Nt9 = qty;
                            this.calcTien(item);
                        },
                    },
                ],
            });
            yield alert.present().then(() => {
                const firstInput = document.querySelector("ion-alert input");
                firstInput === null || firstInput === void 0 ? void 0 : firstInput.focus();
                return;
            });
        });
    }
    calcTien(item) {
        item.tien_Nt9 = item.gia_Nt9 * item.so_Luong9;
        this.voucherHelperService.sum_TTienHang(this.model);
        this.voucherHelperService.updatePayments(this.model);
        this.modelChange.emit(this.model);
    }
    clickHangTang(item) {
        item.gia_Nt9 = item.is_HangTang ? 0 : item.gia_Nt9;
        this.calcTien(item);
    }
};
StepProductsFormComponent.ctorParameters = () => [
    { type: src_app_models_voucher__WEBPACK_IMPORTED_MODULE_9__.VoucherHelperService },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__.BarcodeScanner },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__.IdentityService },
    { type: _core__WEBPACK_IMPORTED_MODULE_10__.OrderService }
];
StepProductsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }]
};
StepProductsFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-voucher-step-products-form",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_products_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_step_products_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepProductsFormComponent);



/***/ }),

/***/ 81912:
/*!********************************************************!*\
  !*** ./src/app/components/orders/views/view.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModule": () => (/* binding */ ViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.module */ 55544);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/base.module */ 36852);
/* harmony import */ var _step_products_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-products-form.component */ 15874);
/* harmony import */ var _step_info_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step-info-form.component */ 15058);
/* harmony import */ var _products_form_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-form-detail.component */ 42151);
/* harmony import */ var _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-filter-modal.component */ 59109);








let ViewModule = class ViewModule {
};
ViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_5__.ProductFilterModalComponent,
            _products_form_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductsFormDetailComponent,
            _step_products_form_component__WEBPACK_IMPORTED_MODULE_2__.StepProductsFormComponent,
            _step_info_form_component__WEBPACK_IMPORTED_MODULE_3__.StepInfoFormComponent,
            //ProductComponent
        ],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _base_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule],
        exports: [
            _product_filter_modal_component__WEBPACK_IMPORTED_MODULE_5__.ProductFilterModalComponent,
            _products_form_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductsFormDetailComponent,
            _step_products_form_component__WEBPACK_IMPORTED_MODULE_2__.StepProductsFormComponent,
            _step_info_form_component__WEBPACK_IMPORTED_MODULE_3__.StepInfoFormComponent,
            // ProductComponent
        ],
    })
], ViewModule);



/***/ }),

/***/ 90281:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/orders/create.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" [routerLink]=\"['/components/order/list', strMaCt]\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">{{ strTitle }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" color=\"light\" class=\"p-8\">\r\n  <ion-grid>\r\n    <mat-horizontal-stepper labelPosition=\"bottom\" [linear]=\"linner\" #stepper>\r\n      <!-- (click)=\"selectStepByIndex(myStepper.selectedIndex)\" -->\r\n      <mat-step [stepControl]=\"fdInfo.control\">\r\n        <ng-template matStepLabel>Thông tin chung</ng-template>\r\n        <form role=\"form\" #fdInfo=\"ngForm\">\r\n          <app-voucher-step-info-form [(model)]=\"model\"></app-voucher-step-info-form>\r\n\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step>\r\n        <ng-template matStepLabel>Sản phẩm</ng-template>\r\n        <app-voucher-step-products-form [(model)]=\"model\"></app-voucher-step-products-form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"fdInfo.control\">\r\n        <ng-template matStepLabel>Thanh toán</ng-template>\r\n        <div class=\"payment\">\r\n          <div *ngIf=\"model.detail.length > 0\">\r\n            <div size=\"12\">\r\n\r\n              <ion-item>\r\n                <ion-label class=\"ion-no-margin\">\r\n                  <ion-text class=\"ion-text-left\">Tiền hàng</ion-text>\r\n                  <ion-text class=\"ion-float-right\" text-bold>{{model.header.tTien_Hang | number}}<sup>&nbsp;đ</sup>\r\n                  </ion-text>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item lines=\"none\" class=\"mt-10\">\r\n                <mat-form-field appearance=\"outline\" style=\"width: 40%;\">\r\n                  <mat-label>Chiết khấu</mat-label>\r\n                  <input matInput type=\"tel\" [(ngModel)]=\"model.header.chiet_Khau\"\r\n                    (ngModelChange)=\"chiet_Khau_Change($event)\" currencyMask [options]=\"currencyMask\">\r\n                  <button mat-button *ngIf=\"model.header.chiet_Khau && model.header.chiet_Khau > 0\" matPrefix\r\n                    mat-icon-button aria-label=\"Clear\" (click)=\"model.header.chiet_Khau = 0\">\r\n                    <mat-icon class=\"asp-color-medium\">close</mat-icon>\r\n                  </button>\r\n                  <span matSuffix class=\"cus-topsuffix\">&nbsp;%</span>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" style=\"width: 60%;\">\r\n                  <mat-label>Tổng tiền chiết khấu</mat-label>\r\n                  <input matInput currencyMask type=\"tel\" [(ngModel)]=\"model.header.tTien4\"\r\n                    (ngModelChange)=\"ttien4_Change()\" [options]=\"currencyMask\" placeholder=\"Nhập tiền\">\r\n                  <button mat-button *ngIf=\"model.header.tTien4 && model.header.tTien4 > 0\" matPrefix mat-icon-button\r\n                    aria-label=\"Clear\" (click)=\"model.header.tTien4 = 0\">\r\n                    <mat-icon class=\"asp-color-medium\">close</mat-icon>\r\n                  </button>\r\n                  <span matSuffix class=\"cus-topsuffix\">&nbsp;đ</span>\r\n                </mat-form-field>\r\n              </ion-item>\r\n\r\n              <ion-item lines=\"none\" class=\"mt-10\">\r\n                <mat-form-field appearance=\"outline\" style=\"width: 40%;\">\r\n                  <mat-label>Mã thuế</mat-label>\r\n                  <mat-select name=\"ma_Thue\" [(ngModel)]=\"model.header.ma_Thue\" (selectionChange)=\"ma_Thue_Change()\">\r\n                    <mat-option *ngFor=\"let op of listMa_Thue\" [value]=\"op.ma_Thue\">\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" style=\"width: 60%;\">\r\n                  <mat-label>Tổng tiền thuế</mat-label>\r\n                  <input matInput currencyMask type=\"tel\" [(ngModel)]=\"model.header.tTien3\" readonly\r\n                    [options]=\"currencyMask\">\r\n                  <!-- <button mat-button *ngIf=\"model.header.tTien3 && model.header.tTien3 > 0\" matPrefix mat-icon-button\r\n                    aria-label=\"Clear\" (click)=\"model.header.tTien3 = 0\">\r\n                    <mat-icon class=\"asp-color-medium\">close</mat-icon>\r\n                  </button> -->\r\n                  <span matSuffix class=\"cus-topsuffix\">&nbsp;đ</span>\r\n                </mat-form-field>\r\n              </ion-item>\r\n\r\n\r\n              <!-- <ion-item lines=\"none\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Tiền phụ phí</mat-label>\r\n                  <input matInput currencyMask type=\"tel\" [(ngModel)]=\"model.header.tTien_PhuPhi\"\r\n                    (change)=\"updatePayments()\" [options]=\"currencyMask\" placeholder=\"Nhập tiền phụ phí\">\r\n                  <button mat-button *ngIf=\"model.header.tTien_PhuPhi && model.header.tTien_PhuPhi > 0\" matPrefix\r\n                    mat-icon-button aria-label=\"Clear\" (click)=\"model.header.tTien_PhuPhi = 0\">\r\n                    <mat-icon class=\"asp-color-medium\">close</mat-icon>\r\n                  </button>\r\n                  <span matSuffix class=\"cus-topsuffix\">&nbsp;đ</span>\r\n                </mat-form-field>\r\n              </ion-item> -->\r\n\r\n              <ion-item>\r\n                <ion-label class=\"ion-no-margin\">\r\n                  <ion-text class=\"ion-text-left\">Tiền thanh toán</ion-text>\r\n                  <ion-text class=\"ion-float-right\" text-bold color=\"danger\">\r\n                    {{model.header.tTien_ThanhToan | number}}<sup>&nbsp;đ</sup>\r\n                  </ion-text>\r\n                </ion-label>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-step>\r\n\r\n    </mat-horizontal-stepper>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer color=\"bgcolor\" class=\"bg-footer ion-no-border\">\r\n\r\n  <div *ngIf=\"myStepper && myStepper.selectedIndex == 0\">\r\n\r\n    <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n      <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n        <ion-button color=\"asp\" size=\"default\" (click)=\"resetInfo()\" [disabled]=\"fdInfo.invalid\">\r\n          Nhập lại\r\n        </ion-button>\r\n        <ion-button color=\"asp\" size=\"default\" (click)=\"stepperClicked(stepper)\" [disabled]=\"fdInfo.invalid\">\r\n          Tiếp theo\r\n        </ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"myStepper && myStepper.selectedIndex == 1\">\r\n    <ion-list *ngIf=\"model.detail.length > 0\" color=\"bgcolor\" class=\"bg-footer\" lines=\"none\" class=\"ion-no-margin\">\r\n      <ion-item color=\"bgcolor\" lines=\"none\" class=\"ion-no-margin\">\r\n        <ion-label class=\"ion-no-padding ion-no-margin\" slot=\"start\">Tổng tiền hàng</ion-label>\r\n        <ion-note style=\"font-size: inherit;\" slot=\"end\" color=\"dart\" text-bold>{{model.header.tTien_Hang |\r\n          number}}<sup>&nbsp;đ</sup></ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n        <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n          <ion-button color=\"asp\" expand=\"block\" size=\"default\" [disabled]=\"model.detail.length ==0\"\r\n            (click)=\"stepperClicked(stepper)\">\r\n            Tiếp theo\r\n          </ion-button>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"myStepper && myStepper.selectedIndex == 2\">\r\n    <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n      <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n        <ion-button (click)=\"onSubmit()\" expand=\"block\" size=\"default\" color=\"asp\"\r\n          [disabled]=\" fdInfo.invalid ||  !model.detail || model.detail.length == 0 ||submitting || FormCheckValid()\">\r\n          <span>Lưu</span>\r\n          <ion-spinner slot=\"start\" size=\"default\" *ngIf=\"submitting\"></ion-spinner>\r\n          <ion-icon name=\"checkmark-done-sharp\" slot=\"start\" size=\"default\" *ngIf=\"!submitting\"></ion-icon>\r\n        </ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n</ion-footer>");

/***/ }),

/***/ 29994:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/orders/detail.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" [routerLink]=\"['../../../list',strMaCt]\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n\r\n      \r\n    </ion-buttons>\r\n    \r\n    <ion-title class=\"ion-text-center\">Chi tiết</ion-title>\r\n    <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button *ngIf=\"perm?.allow_Edit\" (click)=\"edit('edit')\">\r\n        <ion-icon slot=\"icon-only\"  size=\"large\" name=\"pencil-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen color=\"light\" class=\"ion-padding\">\r\n\r\n  <ng-container *ngIf=\"!loading;else skeletonTmpl\">\r\n    <ion-row class=\"info-top mt-20\">\r\n      <span class=\"icon-top\">\r\n\r\n        <ion-icon *ngIf=\"info.header?.is_App;else desktopIcon\" [color]=\"info.header?.duyet? 'success':'danger'\"\r\n          class=\"icon\" name=\"phone-portrait-outline\" size=\"large\">\r\n        </ion-icon>\r\n        <ng-template #desktopIcon>\r\n          <ion-icon name=\"desktop-outline\" [color]=\"info.header.duyet? 'success':'danger'\" size=\"large\" class=\"icon\">\r\n          </ion-icon>\r\n        </ng-template>\r\n      </span>\r\n      <ion-col size=\"12\" class=\"ion-text-center mt-20\">\r\n        <ion-text>\r\n          <p class=\"title info-top-text\">{{info.header.ma_Dt}} </p>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p class=\"title info-top-text\">{{info.header.ten_Dt}} </p>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p class=\"info-top-text\" [ngClass]=\"{'success': info.header.duyet, 'danger': !info.header.duyet}\">\r\n            {{info.header.duyet?'Đã duyệt':'Chưa duyệt'}}</p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-text text-left class=\"title\">Số chứng từ</ion-text>\r\n        </ion-label>\r\n        <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n          <ion-text>{{info.header.so_Ct}} - {{info.header.ngay_Ct | formatDate}} </ion-text>\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Số điện thoại</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.so_Phone}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Email</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.email}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Địa chỉ</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.dia_Chi}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Diễn giải</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.dien_Giai}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n      \r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Tiền hàng</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.tTien_Hang | number}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Tiền chiết khấu</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.tTien4 | number}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Tiền thuế</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.tTien3 | number}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Tổng tiền</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.tTien_ThanhToan | number}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n    </ion-list>\r\n\r\n    <ion-list class=\"info-detail ion-margin-bottom product\">\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <p>Sản phẩm</p>\r\n        </ion-label>\r\n\r\n        <ion-note slot=\"end\" class=\"ion-no-margin\" color=\"danger\" mode=\"ios\">\r\n          <ion-text class=\"ml-10\" color=\"danger\">{{info.header.tSo_Luong | number}}</ion-text>\r\n        </ion-note>\r\n      </ion-list-header>\r\n\r\n      <ion-item class=\"ion-no-margin\" *ngFor=\"let item of info.detail; let last = last;\"\r\n        [attr.lines]=\"!last?'full':'none'\">\r\n\r\n        <ion-label class=\"no-margin-horizontal ion-no-padding\">\r\n          <h3>\r\n            {{item.ten_Vt}}\r\n          </h3>\r\n          <p class=\"asp-color-medium\">\r\n            {{item.ma_Vt? \"Mã vật tư: \"+item.ma_Vt:\"\"}}\r\n          </p>\r\n          <p class=\"asp-color-medium\">\r\n            <mat-slide-toggle color=\"asp\" disabled [checked]=\"item.is_HangTang\" >Hàng tặng</mat-slide-toggle>\r\n          </p>\r\n          <p class=\"asp-color\" *ngIf=\"!item.is_HangTang\">\r\n            <span class=\"mr-10\">\r\n              {{item.gia_Nt9 | number}}<sup>đ</sup>\r\n            </span>\r\n            <span>x{{item.so_Luong9}}</span>\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-note slot=\"end\" class=\"ion-no-margin\" color=\"danger\" mode=\"ios\">\r\n          <span *ngIf=\"!item.is_HangTang\">{{(item.gia_Nt9 * item.so_Luong9) | number}}<sup>đ</sup></span>\r\n        </ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-template #skeletonTmpl>\r\n    <ion-row class=\"info-top mt-20\">\r\n      <span class=\"icon-top\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </span>\r\n      <ion-col size=\"12\" text-center class=\"mt-20\">\r\n        <ion-text color=\"medium\">\r\n          <p class=\"title info-top-text\">\r\n            <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-text>\r\n        <h4 class=\"total info-top-text\">\r\n          <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n        </h4>\r\n        <ion-text>\r\n          <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"info-detail product\">\r\n\r\n      <ion-list-header text-uppercase>\r\n        Sản phẩm\r\n      </ion-list-header>\r\n\r\n      <ion-item no-margin>\r\n        <ion-label no-margin-horizontal text-wrap no-padding>\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item no-margin>\r\n        <ion-label no-margin-horizontal text-wrap no-padding>\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n  </ng-template>\r\n\r\n</ion-content>");

/***/ }),

/***/ 71030:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/orders/list.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/tabs/home\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">{{ title[strMaCt] }}</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button (click)=\"openModalFilter()\">\r\n        <ion-icon slot=\"icon-only\" name=\"filter-sharp\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadMoreData($event, true)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button *ngIf=\"perm?.allow_New\" (click)=\"edit({}, 78)\" color=\"asp\">\r\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Lọc theo ngày</mat-label>\r\n        <mat-date-range-input [max]=\"today\" [rangePicker]=\"picker\" (click)=\"picker.open()\">\r\n          <input matStartDate [(ngModel)]=\"filterModel.ngay_Ct1\" disabled placeholder=\"Ngày bắt đầu\"\r\n            (focus)=\"picker.open()\" />\r\n          <input matEndDate [(ngModel)]=\"filterModel.ngay_Ct2\" (dateChange)=\"dateChange()\" disabled\r\n            placeholder=\"Ngày kết thúc\" (focus)=\"picker.open()\" />\r\n        </mat-date-range-input>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"loading\"></mat-datepicker-toggle>\r\n        <mat-date-range-picker touchUi #picker [disabled]=\"loading\"></mat-date-range-picker>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-item>\r\n    <ion-label>Trạng thái</ion-label>\r\n    <ion-select (ionChange)=\"getList()\" [(ngModel)]=\"selectTrang_Thai\" [interfaceOptions]=\"selectTrang_Thai\"\r\n      interface=\"action-sheet\" placeholder=\"Chọn trạng thái\">\r\n      <ion-select-option value=\"0\">Chưa duyệt</ion-select-option>\r\n      <ion-select-option value=\"1\">Đã duyệt</ion-select-option>\r\n      <ion-select-option value=\"\">Tất cả</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <app-asp-search [(aspModel)]=\"searchTerm\" (aspModelChange)=\"getList()\"></app-asp-search>\r\n  <ion-grid>\r\n    <ng-container *ngIf=\"!loading; else elseTemplate\">\r\n      <ion-list>\r\n        <ion-list-header>\r\n          <ion-label>\r\n            <p>\r\n              Tổng:&nbsp;<span style=\"font-size: 14px\" text-bold>{{\r\n                totalCount | number\r\n                }}</span>\r\n            </p>\r\n          </ion-label>\r\n        </ion-list-header>\r\n        <!-- -->\r\n        <!-- <ion-item *ngFor=\"let item of data\" [routerLink]=\"['../../detail', item.stt, strMaCt]\" detail=\"false\">  (click)=\"view_edit(item.stt)\" -->\r\n        <ion-item *ngFor=\"let item of data; trackBy: trackBy\" detail=\"false\">\r\n          <ion-label (click)=\"view_edit(item)\">\r\n            <h3 class=\"date\">\r\n              {{ item.ten_Dt }}\r\n            </h3>\r\n            <p>\r\n              <span>{{ item.dien_Giai }}</span>\r\n            </p>\r\n            <p>\r\n              <span>{{ item.dia_Chi }}</span>\r\n            </p>\r\n            <p>\r\n              <span class=\"date\">{{ item.ngay_Ct | formatDate }} - {{ item.so_Ct }}</span>\r\n            </p>\r\n          </ion-label>\r\n          <ion-button fill=\"clear\" [matMenuTriggerFor]=\"menu\" slot=\"start\" color=\"medium\">\r\n            <ion-icon slot=\"start\" *ngIf=\"item.is_App; else desktopIcon\" name=\"phone-portrait-outline\"\r\n              [color]=\"item.is_HoanThanh ? 'asp' : 'danger'\">\r\n            </ion-icon>\r\n            <ng-template #desktopIcon>\r\n              <ion-icon slot=\"start\" name=\"desktop-outline\" [color]=\"\r\n                  item.ten_TrangThai == 'Đã duyệt' ? 'secondary' : 'danger'\r\n                \"></ion-icon>\r\n            </ng-template>\r\n          </ion-button>\r\n\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item *ngIf=\"perm?.allow_View\" (click)=\"view_edit(item)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">preview</i>\r\n              <span>Xem phiếu</span>\r\n            </button>\r\n            <button mat-menu-item *ngIf=\"perm?.allow_Edit\" (click)=\"edit(item, 69)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">create</i>\r\n              <span>Sửa phiếu</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"exportPDF(item)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">picture_as_pdf</i>\r\n              <span>Xem file PDF</span>\r\n            </button>\r\n            \r\n            <button *ngIf=\"!item.duyet && perm_duyet?.allow_Access\" mat-menu-item (click)=\"confirm(item, true)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">check_circle</i>\r\n              <span>Duyệt</span>\r\n            </button>\r\n            <button *ngIf=\"item.duyet && perm_duyet?.allow_Access\" mat-menu-item (click)=\"confirm(item, false)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">block</i>\r\n              <span>Bỏ duyệt</span>\r\n            </button>\r\n\r\n            <button mat-menu-item *ngIf=\"perm?.allow_Delete\" (click)=\"delete(item)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">delete</i>\r\n              <span>Xoá</span>\r\n            </button>\r\n            \r\n          </mat-menu>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ng-container>\r\n\r\n    <ng-template #elseTemplate>\r\n      <asp-skeleton></asp-skeleton>\r\n    </ng-template>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ 36936:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/orders/views/product-filter-modal.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <ion-searchbar #searchBar [(ngModel)]=\"searchTerm\" (ionChange)=\"filterProducts()\" (ionClear)=\"products=[]\"\r\n      cancelButtonIcon=\"\" debounce=\"500\" showCancelButton=\"never\" placeholder=\"Tên, sdt, mã, đơn hàng...\">\r\n    </ion-searchbar> -->\r\n    <app-asp-search [(aspModel)]=\"searchTerm\" (aspModelChange)=\"filterProducts()\"\r\n      placeholder=\"Tìm kiếm sản phẩm...\" [autofocus]=\"true\">\r\n    </app-asp-search>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ng-container *ngIf=\"!loading;else loadingTmpl\">\r\n    <ion-list class=\"mt-10\">\r\n      <ion-item *ngFor=\"let item of products\" (click)=\"onChangeRadio(item)\" [detail]=\"false\" [button]=\"true\">\r\n        <ion-label class=\"ion-text-wrap\">\r\n          <h3>{{item.ten_Vt}}</h3>\r\n          <p class=\"asp-color-medium\">{{item.ma_Vt}}</p>\r\n        </ion-label>\r\n        <!-- <ion-radio [value]=\"item.ma_Vt\" color=\"asp\" slot=\"start\" (ionFocus)=\"onChangeRadio(item)\"></ion-radio> -->\r\n        <ion-note slot=\"end\" color=\"asp\" class=\"mr-0\" style=\"font-size:11pt\">\r\n          <span class=\"asp-color-medium\">{{item.dvt}}</span>\r\n        </ion-note>\r\n      </ion-item>\r\n      <!-- <ion-radio-group [(ngModel)]=\"radioModel\">\r\n        <ion-item *ngFor=\"let item of products\">\r\n          <ion-label class=\"ion-text-wrap\">\r\n            <h3>{{item.ten_Vt}}</h3>\r\n            <p class=\"asp-color-medium\">{{item.ma_Vt}}</p>\r\n            <p class=\"asp-color-medium\">{{item.ten_Nh_Vt}}</p>\r\n          </ion-label>\r\n          <ion-radio [value]=\"item.ma_Vt\" color=\"asp\" slot=\"start\" (ionFocus)=\"onChangeRadio(item)\"></ion-radio>\r\n          <ion-note slot=\"end\" color=\"asp\" class=\"mr-0\" style=\"font-size:11pt\">\r\n            <span class=\"asp-color\">{{item.gia_Goc || 0 | number}}<sup>đ</sup></span>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ion-radio-group> -->\r\n    </ion-list>\r\n  </ng-container>\r\n\r\n  <ng-template #loadingTmpl>\r\n    <asp-skeleton></asp-skeleton>\r\n  </ng-template>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ 23249:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/orders/views/products-form-detail.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Chỉnh sửa vật tư</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"light\" class=\"p-8\">\r\n  <ion-grid>\r\n    <form role=\"form\" #fdInfo=\"ngForm\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Vật tư</mat-label>\r\n            <input\r\n              readonly=\"true\"\r\n              matInput\r\n              name=\"ma_Vt\"\r\n              autocomplete=\"off\"\r\n              [(ngModel)]=\"model.ma_Vt\"\r\n            />\r\n            <mat-hint align=\"end\">{{ model?.ten_Vt }}</mat-hint>\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Mã lô</mat-label>\r\n            <mat-select \r\n              name=\"ma_Lo\"\r\n              [(ngModel)]=\"model.ma_Lo\">\r\n              <mat-option *ngFor=\"let op of listMa_Lo\" [value]=\"op.ma_Lo\">\r\n                {{ op.ma_Lo }}\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Hạn sử dụng</mat-label>\r\n            <input\r\n              matInput\r\n              name=\"han_Sd\"\r\n              [(ngModel)]=\"model.han_Sd\"\r\n              required\r\n              [matDatepicker]=\"picker\"\r\n              (focus)=\"picker.open()\"\r\n            />\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker touchUi color=\"primary\"></mat-datepicker>\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Mã sản phẩm</mat-label>\r\n            <mat-select\r\n              name=\"ma_Sp\"\r\n              [(ngModel)]=\"model.ma_Sp\">\r\n              <mat-option *ngFor=\"let op of listMa_Sp\" [value]=\"op.ma_Sp\">\r\n                {{ op.ma_Sp }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Số lượng</mat-label>\r\n            <input\r\n              matInput\r\n              type=\"number\"\r\n              name=\"so_Luong9\"\r\n              autocomplete=\"off\"\r\n              [(ngModel)]=\"model.so_Luong9\"\r\n            />\r\n            <button\r\n              style=\"font-size: 18px\"\r\n              *ngIf=\"model.so_Luong9\"\r\n              mat-icon-button\r\n              matSuffix\r\n            >\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer color=\"bgcolor\" class=\"bg-footer ion-no-border\">\r\n  <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n    <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n      <ion-button\r\n        (click)=\"closeModal()\"\r\n        expand=\"block\"\r\n        size=\"default\"\r\n        color=\"asp\"\r\n      >\r\n        <span>Hoàn tất</span>\r\n        <ion-icon\r\n          name=\"checkmark-done-sharp\"\r\n          slot=\"start\"\r\n          size=\"default\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 4539:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/orders/views/step-info-form.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row>\r\n  <ion-col size=\"12\">\r\n    <ion-searchbar class=\"m-0 p-0\" showCancelButton=\"never\" (ionFocus)=\"openFilterCustomersModal()\"\r\n      placeholder=\"Tìm kiếm khách hàng...\">\r\n    </ion-searchbar>\r\n  </ion-col>\r\n  <!-- <ion-col size=\"2\">\r\n    <ion-button (click)=\"productScanner()\" fill=\"clear\" class=\"ion-no-margin mt-8 p-0 btn-scan\" color=\"medium\">\r\n      <ion-icon slot=\"icon-only\" size=\"large\" name=\"scan-sharp\"></ion-icon>\r\n    </ion-button>\r\n  </ion-col> -->\r\n</ion-row>\r\n\r\n<ion-row>\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Tên khách hàng</mat-label>\r\n      <input matInput name=\"ten_Dt\" [(ngModel)]=\"model.header.ten_Dt\" autofocus=\"on\" required readonly>\r\n      <button type=\"button\" class=\"asp-color-medium\" *ngIf=\"model.header.ten_Dt\" mat-icon-button matSuffix\r\n        (click)=\"model.header.ten_Dt=''\" aria-label=\"Xóa\" aria-pressed=\"true\">\r\n        <mat-icon>clear</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Số điện thoại</mat-label>\r\n      <input type=\"tel\" matInput name=\"so_Phone\" [(ngModel)]=\"model.header.so_Phone\" readonly>\r\n      <button type=\"button\" class=\"asp-color-medium\" *ngIf=\"model.header.so_Phone\" mat-icon-button matSuffix\r\n        (click)=\"model.header.so_Phone=''\" aria-label=\"Xóa\" aria-pressed=\"true\">\r\n        <mat-icon>clear</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Email</mat-label>\r\n      <input matInput name=\"email\" [(ngModel)]=\"model.header.email\"  autocomplete=\"false\"\r\n      pattern=\"[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\">\r\n      <button type=\"button\" class=\"asp-color-medium\" *ngIf=\"model.header.email\" mat-icon-button matSuffix\r\n        (click)=\"model.header.email=''\" aria-label=\"Xóa\" aria-pressed=\"true\">\r\n        <mat-icon>clear</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Địa chỉ</mat-label>\r\n      <input matInput name=\"dia_Chi\" [(ngModel)]=\"model.header.dia_Chi\" >\r\n\r\n      <button type=\"button\" class=\"asp-color-medium\" *ngIf=\"model.header.dia_Chi\" mat-icon-button matSuffix\r\n        (click)=\"model.header.dia_Chi=''\" aria-label=\"Xóa\" aria-pressed=\"true\">\r\n        <mat-icon>clear</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  \r\n  <!-- <ion-col size=\"7\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Ngày sinh</mat-label>\r\n      <input matInput name=\"ngay_Sinh\" [max]=\"today\" [(ngModel)]=\"model.header.ngay_Sinh\" [matDatepicker]=\"picker\"\r\n        (focus)=\"picker.open()\" />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker touchUi color=\"primary\"></mat-datepicker>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"5\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Giới tính</mat-label>\r\n      <mat-select name=\"gioi_Tinh\" [(ngModel)]=\"model.header.gioi_Tinh\">\r\n        <mat-option value=\"\">Không xác định</mat-option>\r\n        <mat-option value=\"Nam\">Nam</mat-option>\r\n        <mat-option value=\"Nu\">Nữ</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </ion-col> -->\r\n\r\n  <ion-col size=\"6\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Mã nhân viên</mat-label>\r\n      <mat-select name=\"ma_cbnv\" [(ngModel)]=\"model.header.ma_CbNv\">\r\n        <mat-option *ngFor=\"let op of listEmployees\" [value]=\"op.ma_CbNv\">\r\n          {{ op.ten_CbNv }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"6\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Mã bộ phận</mat-label>\r\n      <mat-select name=\"ma_Bp\" [(ngModel)]=\"model.header.ma_Bp\">\r\n        <mat-option *ngFor=\"let op of listDepartment\" [value]=\"op.ma_Bp\">\r\n          {{ op.ten_Bp }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Diễn Giải</mat-label>\r\n      <textarea matInput name=\"dien_Giai\" rows=\"3\" [(ngModel)]=\"model.header.dien_Giai\"></textarea>\r\n    </mat-form-field>\r\n  </ion-col>\r\n</ion-row>");

/***/ }),

/***/ 64213:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/orders/views/step-products-form.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row>\r\n  <ion-col size=\"10\">\r\n    <ion-searchbar class=\"m-0 p-0\" [ngModelOptions]=\"{standalone: true}\" showCancelButton=\"never\"\r\n      (ionFocus)=\"openFilterProductsModal()\" [(ngModel)]=\"searchTerm\" placeholder=\"Tìm kiếm và chọn sản phẩm...\">\r\n    </ion-searchbar>\r\n  </ion-col>\r\n  <ion-col size=\"2\">\r\n    <ion-button (click)=\"productScanner()\" fill=\"clear\" class=\"ion-no-margin mt-8 p-0 btn-scan\" color=\"medium\">\r\n      <ion-icon slot=\"icon-only\" size=\"large\" name=\"scan-sharp\"></ion-icon>\r\n    </ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ng-container>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-list>\r\n        <ng-container *ngFor=\"let item of this.model?.detail;let last = last;\">\r\n          <ion-item class=\"ion-no-padding\">\r\n            <ion-label>\r\n              <h2>{{item.ten_Vt}}</h2>\r\n              <p class=\"asp-color-medium\"> {{\"Mã vật tư: \"+ item.ma_Vt}}</p>\r\n              <p class=\"pos_fixed\">\r\n                <span>\r\n                  <ion-button size=\"small\" style=\"width: 100px;\" fill=\"outline\" slot=\"start\" color=\"asp\"\r\n                    [disabled]=\"item.is_HangTang\" (click)=\"updatePrice(item)\" class=\"ion-no-margin ion-no-padding\">\r\n                    {{item.gia_Nt9 | number}}\r\n                  </ion-button>\r\n                </span>\r\n\r\n                <span class=\"quantity ion-text-center ion-padding-horizontal\">\r\n                  <ion-button class=\"ion-no-margin ion-no-padding\" fill=\"clear\" slot=\"start\"\r\n                    [disabled]=\"item.is_HangTang\" (click)=\"changeQty(item,'previous')\" color=\"medium\">\r\n                    <ion-icon slot=\"icon-only\" name=\"remove\" size=\"small\"></ion-icon>\r\n                  </ion-button>\r\n\r\n                  <ion-button size=\"small\" style=\"width: 50px;\" fill=\"outline\" slot=\"start\" color=\"asp\"\r\n                    (click)=\"updateQty(item)\" class=\"ion-no-margin ion-no-padding\">\r\n                    {{item.so_Luong9 | number}}\r\n                  </ion-button>\r\n\r\n                  <ion-button fill=\"clear\" (click)=\"changeQty(item,'next')\" color=\"medium\" [disabled]=\"item.is_HangTang\"\r\n                    class=\"ion-no-margin ion-no-padding\">\r\n                    <ion-icon slot=\"icon-only\" name=\"add\" size=\"small\"></ion-icon>\r\n                  </ion-button>\r\n                </span>\r\n\r\n                <span text-bold>=&nbsp;{{(item.tien_Nt9) | number}} <sup>đ</sup></span>\r\n              </p>\r\n              <p class=\"asp-color-medium mt-5\">\r\n                <mat-slide-toggle color=\"asp\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]=\"item.is_HangTang\"\r\n                  (change)=\"clickHangTang(item)\">Hàng tặng</mat-slide-toggle>\r\n              </p>\r\n\r\n            </ion-label>\r\n\r\n            <ion-button fill=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"ion-no-margin ion-no-padding\" slot=\"end\"\r\n              color=\"medium\">\r\n              <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-sharp\" size=\"default\"></ion-icon>\r\n            </ion-button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <!-- <button mat-menu-item (click)=\"edit(item)\">\r\n                <mat-icon>flip_to_front</mat-icon>\r\n                <span>Sửa</span>\r\n              </button> -->\r\n              <button mat-menu-item (click)=\"removeProduct(item)\">\r\n                <mat-icon>delete</mat-icon>\r\n                <span>Xóa</span>\r\n              </button>\r\n            </mat-menu>\r\n          </ion-item>\r\n        </ng-container>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_components_orders_order_module_ts.js.map