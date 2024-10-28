"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_vouchers_voucher_module_ts"],{

/***/ 93962:
/*!***********************************************************!*\
  !*** ./src/app/components/vouchers/create.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 37013:
/*!***********************************************************!*\
  !*** ./src/app/components/vouchers/detail.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".gallery .gallery-col .gallery-div {\n  display: block;\n  width: 100%;\n  height: 120px;\n  border: solid 1px #eeeeee;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.gallery .gallery-col .gallery-div.small {\n  height: 90px;\n}\n.gallery .gallery-col .gallery-div img {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.gallery .gallery-col .gallery-div .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.gallery .gallery-col .gallery-div .icon {\n  font-size: 34px;\n}\n.gallery .gallery-col .gallery-div.add {\n  border-style: dashed;\n  border-color: #2196f2;\n  cursor: pointer;\n  text-align: center;\n  position: relative;\n  background-color: #f3f7f3;\n}\n.gallery .gallery-col .gallery-div.none {\n  border: solid 1px #eeeeee;\n  background-color: transparent;\n}\n.title {\n  color: #616161;\n}\n::ng-deep .gallery-div {\n  cursor: pointer;\n}\n::ng-deep .gallery-div img {\n  height: 100%;\n  width: 100%;\n}\n.centeritem {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-top {\n  background-color: #fff;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.info-top .icon-top {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n.info-top .icon-top .icon {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  display: none;\n  font-size: 28px;\n  color: #2196f2;\n}\n.info-top .icon-top .text {\n  border: solid 1px #e0e0e0;\n  border-radius: 50%;\n  padding: 7px;\n  background: #fff;\n  position: absolute;\n  top: -20px;\n  right: 43%;\n  font-size: 28px;\n}\n.info-top .total {\n  color: #000000;\n  opacity: 0.9;\n  font-weight: 600;\n}\n.info-top .info-top-text {\n  line-height: 0.8;\n}\n.info-top.avatar .image {\n  width: 152px;\n  height: 152px;\n  margin: -50px auto;\n  border: 4px solid #fff;\n}\n.info-detail {\n  border-radius: 4px;\n}\n.info-detail ion-item ion-label {\n  font-size: 11pt;\n}\n.info-detail ion-item mat-chip {\n  background-color: #2196f2;\n  color: white;\n}\n.info-detail ion-item .title {\n  font-size: 10pt;\n}\n.info-detail ion-item .content {\n  font-size: 11pt;\n  color: black;\n  margin-top: -3px !important;\n  max-width: 80%;\n}\n.info-detail ion-item .status-gift {\n  font-size: 9pt;\n  color: white;\n  background-color: #f04141;\n  padding: 2px 5px;\n  border-radius: 4px;\n}\n.info-detail ion-item ion-note {\n  font-size: 10pt;\n}\n.info-detail.product ion-item:last-child {\n  --border-width: 0 0 0 0 !important;\n}\n.info-detail.product ion-item:last-child .item-inner {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcZ2FsbGVyeS5zY3NzIiwiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcaW5mby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0FDTE47QURPTTtFQUNFLFlBQUE7QUNMUjtBRFFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDUFI7QURVTTtFQUNFLGVBQUE7QUNSUjtBRFdNO0VBQ0Usb0JBQUE7RUFDQSxxQkV0Q2E7RUZ1Q2IsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1RSO0FEWU07RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0FDVlI7QUVsQ0E7RUFDSSxjQUFBO0FGcUNKO0FFbENBO0VBQ0ksZUFBQTtBRnFDSjtBRW5DSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FGcUNSO0FFakNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRm9DSjtBRWpDQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRm9DSjtBRWxDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUZvQ1I7QUVsQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFDQSxjRDNDUztBRDhFckI7QUVoQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUZrQ1o7QUU5Qkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FGZ0NSO0FFN0JJO0VBQ0ksZ0JBQUE7QUYrQlI7QUU1QlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUY4Qlo7QUV6QkE7RUFDSSxrQkFBQTtBRjRCSjtBRXpCUTtFQUNJLGVBQUE7QUYyQlo7QUV4QlE7RUFDSSx5QkR0RlM7RUN1RlQsWUFBQTtBRjBCWjtBRXZCUTtFQUNJLGVBQUE7QUZ5Qlo7QUV0QlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBRndCWjtBRXJCUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJEckdRO0VDc0dSLGdCQUFBO0VBQ0Esa0JBQUE7QUZ1Qlo7QUVwQlE7RUFDSSxlQUFBO0FGc0JaO0FFakJRO0VBQ0ksa0NBQUE7QUZtQlo7QUVqQlk7RUFDSSw4QkFBQTtBRm1CaEIiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5nYWxsZXJ5IHtcclxuICAuZ2FsbGVyeS1jb2wge1xyXG5cclxuICAgIC5nYWxsZXJ5LWRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICYuc21hbGwge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFkZCB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYXNwLXByaW1hcnktY29sb3JzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y3ZjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubm9uZSB7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59IiwiLmdhbGxlcnkgLmdhbGxlcnktY29sIC5nYWxsZXJ5LWRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYuc21hbGwge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uZ2FsbGVyeSAuZ2FsbGVyeS1jb2wgLmdhbGxlcnktZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmdhbGxlcnkgLmdhbGxlcnktY29sIC5nYWxsZXJ5LWRpdiAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYuYWRkIHtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjdmMztcbn1cbi5nYWxsZXJ5IC5nYWxsZXJ5LWNvbCAuZ2FsbGVyeS1kaXYubm9uZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZWVlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzYxNjE2MTtcbn1cblxuOjpuZy1kZWVwIC5nYWxsZXJ5LWRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAuZ2FsbGVyeS1kaXYgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlcml0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mby10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uaW5mby10b3AgLmljb24tdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5mby10b3AgLmljb24tdG9wIC5pY29uIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogIzIxOTZmMjtcbn1cbi5pbmZvLXRvcCAuaWNvbi10b3AgLnRleHQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogNDMlO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uaW5mby10b3AgLnRvdGFsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbmZvLXRvcCAuaW5mby10b3AtdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4uaW5mby10b3AuYXZhdGFyIC5pbWFnZSB7XG4gIHdpZHRoOiAxNTJweDtcbiAgaGVpZ2h0OiAxNTJweDtcbiAgbWFyZ2luOiAtNTBweCBhdXRvO1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xufVxuXG4uaW5mby1kZXRhaWwge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaW5mby1kZXRhaWwgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIG1hdC1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSAuY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmluZm8tZGV0YWlsIGlvbi1pdGVtIC5zdGF0dXMtZ2lmdCB7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDQxNDE7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pbmZvLWRldGFpbCBpb24taXRlbSBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cbi5pbmZvLWRldGFpbC5wcm9kdWN0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLmluZm8tZGV0YWlsLnByb2R1Y3QgaW9uLWl0ZW06bGFzdC1jaGlsZCAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn0iLCIkYXNwLXByaW1hcnktY29sb3JzOiAjMjE5NmYyO1xyXG4kYXNwLWxpZ2h0LWNvbG9yczogI2ZmZmZmZjtcclxuJGFzcC1tZWRpdW0tY29sb3JzOiAjNjE2MTYxO1xyXG4kYXNwLWRhbmdlci1jb2xvcnM6ICNmMDQxNDE7XHJcbiRhc3AtYmctaW5wdXQ6ICNmNWY1ZjU7XHJcbiRhc3Atd2FybmluZy1jb2xvcnM6ICNmZjhjMDA7XHJcbiRjb2xvci13YXJuOiAjZmY4YzAwO1xyXG4kY29sb3Itc3VjY2VzczogIzMzNjkxZTtcclxuXHJcbiRhc3Atc2Vjb25kYXJ5LWNvbG9yczogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcIuKAnFJvYm90b+KAnVwiO1xyXG4kZm9udC1mYW1pbHktaW9zLWJhc2U6IFwi4oCcUm9ib3Rv4oCdXCI7XHJcblxyXG4kYm9yZGVyLXN0eWxlOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMCxcclxuICAgIC8vIFBob25lICgwcHggLSA1NzVweClcclxuICAgIHNtOiA1NzZweCxcclxuICAgIC8vIFBoYWJsZXQgKDU3NnB4IC0gNzY3cHgpXHJcbiAgICBtZDogNzY4cHgsXHJcbiAgICAvLyBUYWJsZXQgdmVydGljYWwgKDc2OHB4IC0gOTkxcHgpXHJcbiAgICBsZzogOTkycHggLy8gVGFibGV0IGhvcml6b250YWwsIERlc2t0b3AgKDk5MnB4IGFuZCBhYm92ZSksLCxcclxuKTtcclxuIiwiQGltcG9ydCBcIi4uL3Nhc3MvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uL3Nhc3MvZ2FsbGVyeS5zY3NzXCI7XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ2FsbGVyeS1kaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAuaWNvbi10b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAvLyByaWdodDogNDMlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYXNwLXByaW1hcnktY29sb3JzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTBlMGUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICByaWdodDogNDMlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tdG9wLXRleHQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgICB9XHJcbiAgICAmLmF2YXRhciB7XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IC01MHB4IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaW5mby1kZXRhaWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtY2hpcCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhc3AtcHJpbWFyeS1jb2xvcnM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLWdpZnQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlwdDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNwLWRhbmdlci1jb2xvcnM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnByb2R1Y3Qge1xyXG4gICAgICAgIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 53711:
/*!*********************************************************!*\
  !*** ./src/app/components/vouchers/list.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 94181:
/*!******************************************************************************!*\
  !*** ./src/app/components/vouchers/views/approving-signature.component.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3Zpbmctc2lnbmF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 91201:
/*!*******************************************************************************!*\
  !*** ./src/app/components/vouchers/views/products-form-detail.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWZvcm0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3RzLWZvcm0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 68014:
/*!*************************************************************************!*\
  !*** ./src/app/components/vouchers/views/step-info-form.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InN0ZXAtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 62240:
/*!*****************************************************************************!*\
  !*** ./src/app/components/vouchers/views/step-products-form.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLXByb2R1Y3RzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 41020:
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignaturePad": () => (/* binding */ SignaturePad),
/* harmony export */   "SignaturePadModule": () => (/* binding */ SignaturePadModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signature_pad */ 94447);




class SignaturePad {
    constructor(elementRef) {
        // no op
        this.elementRef = elementRef;
        this.options = this.options || {};
        this.onBeginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onEndEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngAfterContentInit() {
        const canvas = this.elementRef.nativeElement.querySelector('canvas');
        if (this.options.canvasHeight) {
            canvas.height = this.options.canvasHeight;
        }
        if (this.options.canvasWidth) {
            canvas.width = this.options.canvasWidth;
        }
        this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, this.options);
        this.signaturePad.onBegin = this.onBegin.bind(this);
        this.signaturePad.onEnd = this.onEnd.bind(this);
    }
    ngOnDestroy() {
        const canvas = this.elementRef.nativeElement.querySelector('canvas');
        canvas.width = 0;
        canvas.height = 0;
    }
    resizeCanvas() {
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const canvas = this.signaturePad.canvas;
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
        this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }
    // Returns signature image as an array of point groups
    toData() {
        if (this.signaturePad) {
            return this.signaturePad.toData();
        }
        else {
            return [];
        }
    }
    // Draws signature image from an array of point groups
    fromData(points) {
        this.signaturePad.fromData(points);
    }
    // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible paramters)
    toDataURL(imageType, quality) {
        return this.signaturePad.toDataURL(imageType, quality); // save image as data URL
    }
    // Draws signature image from data URL
    fromDataURL(dataURL, options = {}) {
        // set default height and width on read data from URL
        if (!options.hasOwnProperty('height') &&
            this.options.canvasHeight) {
            options.height = this.options.canvasHeight;
        }
        if (!options.hasOwnProperty('width') && this.options.canvasWidth) {
            options.width = this.options.canvasWidth;
        }
        this.signaturePad.fromDataURL(dataURL, options);
    }
    // Clears the canvas
    clear() {
        this.signaturePad.clear();
    }
    // Returns true if canvas is empty, otherwise returns false
    isEmpty() {
        return this.signaturePad.isEmpty();
    }
    // Unbinds all event handlers
    off() {
        this.signaturePad.off();
    }
    // Rebinds all event handlers
    on() {
        this.signaturePad.on();
    }
    // set an option on the signaturePad - e.g. set('minWidth', 50);
    set(option, value) {
        switch (option) {
            case 'canvasHeight':
                this.signaturePad.canvas.height = value;
                break;
            case 'canvasWidth':
                this.signaturePad.canvas.width = value;
                break;
            default:
                this.signaturePad[option] = value;
        }
    }
    // notify subscribers on signature begin
    onBegin() {
        this.onBeginEvent.emit(true);
    }
    // notify subscribers on signature end
    onEnd() {
        this.onEndEvent.emit(true);
    }
    queryPad() {
        return this.signaturePad;
    }
}
SignaturePad.ɵfac = function SignaturePad_Factory(t) { return new (t || SignaturePad)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
SignaturePad.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignaturePad, selectors: [["signature-pad"]], inputs: { options: "options" }, outputs: { onBeginEvent: "onBeginEvent", onEndEvent: "onEndEvent" }, decls: 1, vars: 0, template: function SignaturePad_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas");
    } }, encapsulation: 2 });
SignaturePad.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }
];
SignaturePad.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    onBeginEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    onEndEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignaturePad, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                template: '<canvas></canvas>',
                selector: 'signature-pad'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], onBeginEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], onEndEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }] }); })();

class SignaturePadModule {
}
SignaturePadModule.ɵfac = function SignaturePadModule_Factory(t) { return new (t || SignaturePadModule)(); };
SignaturePadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SignaturePadModule });
SignaturePadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignaturePadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                declarations: [SignaturePad],
                imports: [],
                exports: [SignaturePad]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignaturePadModule, { declarations: [SignaturePad], exports: [SignaturePad] }); })();

/*
 * Public API Surface of angular2-signaturepad
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 77035:
/*!*********************************************************!*\
  !*** ./src/app/components/vouchers/create.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create.component.html */ 45989);
/* harmony import */ var _create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.component.scss */ 93962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/voucher */ 82399);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services */ 41614);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _warehouse_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../warehouse/core */ 81682);














let CreateComponent = class CreateComponent {
    constructor(identityService, voucherService, modalController, utilityService, warehousesService, router, route) {
        this.identityService = identityService;
        this.voucherService = voucherService;
        this.modalController = modalController;
        this.utilityService = utilityService;
        this.warehousesService = warehousesService;
        this.router = router;
        this.route = route;
        this.strTitle = "Tạo mới";
        this.today = new Date();
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_7__.ApiParameter();
        this.employee = {};
        this.linner = true;
        this.submitting = false;
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New;
        this.model = new src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherInfo();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.strMaCt = this.route.snapshot.params.maCt;
        this.stt = this.route.snapshot.queryParamMap.get("stt");
        this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));
        if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Convert)
            this.strMa_Ct_Convert = this.strMaCt;
        else
            this.strMa_Ct_Convert = this.route.snapshot.queryParamMap.get("maCt_Convert");
        if (this.enuEdit == src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit)
            this.strTitle = "Sửa phiếu";
        if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New)
            this.getVoucher();
    }
    getVoucher() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.voucherService.getVoucher(this.stt, this.enuEdit == src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit ? this.strMaCt : this.strMa_Ct_Convert);
            if (this.enuEdit == src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Convert) {
                Object.assign(res.table[0], {
                    ma_LoaiNX: "",
                    so_Ct: ""
                });
            }
            this.model = Object.assign({}, this.model, {
                header: Object.assign(this.model.header, res === null || res === void 0 ? void 0 : res.table[0]),
                detail: (_a = res === null || res === void 0 ? void 0 : res.table1) !== null && _a !== void 0 ? _a : [],
            });
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.submitting = true;
            const voucher = Object.assign(this.model, {
                header: Object.assign(this.model.header, {
                    ngay_Ct: moment__WEBPACK_IMPORTED_MODULE_6__(this.model.header.ngay_Ct).format("YYYY-MM-DD"),
                    MA_CT: this.strMa_Ct_Convert,
                    STT: this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit ? "" : this.model.header.STT,
                }),
            });
            const res = yield this.warehousesService
                .saveVoucher_Inventory(voucher, this.enuEdit)
                .finally(() => (this.submitting = false));
            if (res) {
                this.utilityService.showToast("Lưu thành công");
                this.router.navigateByUrl("components/voucher/detail/" + res + "/" + this.strMa_Ct_Convert);
            }
        });
    }
    resetInfo() {
        this.model.header = Object.create(null);
    }
    ionViewWillLeave() {
        this.enuEdit = null;
        this.strMa_Ct_Convert = '';
        this.stt = '';
    }
    FormCheckValid() {
        if (this.model.detail &&
            (this.strMa_Ct_Convert == "TP" || this.strMa_Ct_Convert == "XP")) {
            return lodash__WEBPACK_IMPORTED_MODULE_8__.some(lodash__WEBPACK_IMPORTED_MODULE_8__.map(this.model.detail, "ma_Sp"), ["length", 0]);
        }
        return false;
    }
};
CreateComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__.IdentityService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_5__.VoucherService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService },
    { type: _warehouse_core__WEBPACK_IMPORTED_MODULE_9__.WarehousesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute }
];
CreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-imports-create",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateComponent);



/***/ }),

/***/ 65733:
/*!*********************************************************!*\
  !*** ./src/app/components/vouchers/detail.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./detail.component.html */ 47674);
/* harmony import */ var _detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.component.scss */ 37013);
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
        this.info = new src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherInfo();
        // info: VoucherInfo = {
        //   header: {},
        //   detail: []
        // };
        this.loading = false;
        this.strMaCt = this.route.snapshot.params.maCt;
        this.stt = this.route.snapshot.params.stt;
        route.data.subscribe((data) => {
            return this.perm = data[src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.AppConfig.PERM_RESOLVER_KEY];
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.getVoucher();
    }
    getVoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const res = yield this.voucherService.getVoucher(this.stt, this.strMaCt)
                .finally(() => (this.loading = false));
            this.info = new src_app_models_voucher__WEBPACK_IMPORTED_MODULE_3__.VoucherInfo(res === null || res === void 0 ? void 0 : res.table[0], res === null || res === void 0 ? void 0 : res.table1);
        });
    }
    edit(isConvert) {
        this.routeLink = "components/voucher/create/" + this.strMaCt;
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
        selector: "app-detail",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailComponent);



/***/ }),

/***/ 36198:
/*!*******************************************************!*\
  !*** ./src/app/components/vouchers/list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list.component.html */ 98174);
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.component.scss */ 53711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ 46885);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utility.service */ 76515);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/layout */ 26950);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _views_approving_signature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/approving-signature.component */ 85410);















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
        this.perm = Object.create(null);
        this.perm_duyet = Object.create(null);
        this.filterModel = {
            ngay_Ct1: moment__WEBPACK_IMPORTED_MODULE_5__().startOf("month").format("YYYY-MM-DD"),
            ngay_Ct2: moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD"),
            top: 10,
        };
        this.totalCount = 0;
        this.selectTrang_Thai = "";
        this.skeletons = [];
        this.loading = true;
        this.searchTerm = "";
        this.routeLink = "";
        this.today = new Date();
        this.title = {
            PN: "Phiếu nhập kho",
            PX: "Phiếu xuất kho",
            DC: "Phiếu điều chuyển",
            XP: "Xuất kho thành phẩm",
            TP: "Nhập Kho thành phẩm",
            NK: "Phiếu nhập khẩu"
        };
        this.isNativePlatform = true;
        this.platformStr = 'web';
        this.strMaCt = this.route.snapshot.params.maCt;
        this.strMa_Ct_Convert = this.route.snapshot.params.maCt_Convert;
        route.data.subscribe((data) => {
            this.perm = data[_helpers__WEBPACK_IMPORTED_MODULE_2__.AppConfig.PERM_RESOLVER_KEY];
        });
        this.permissionsService.GetPermission('duyet').then(res => this.perm_duyet = res);
    }
    ngOnInit() { }
    ionViewWillEnter() {
        setTimeout(() => {
            this.getList();
        }, 1);
        this.platformStr = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.getPlatform();
        this.isNativePlatform = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.isNativePlatform();
    }
    getList(isLoading = true) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = isLoading;
            const filterParams = {
                STATUS: this.selectTrang_Thai,
                KEYWORD: this.searchTerm,
                Ma_Ct: this.strMaCt,
                Ngay_Ct1: this.filterModel.ngay_Ct1 || moment__WEBPACK_IMPORTED_MODULE_5__().startOf('month'),
                Ngay_Ct2: this.filterModel.ngay_Ct2 || moment__WEBPACK_IMPORTED_MODULE_5__(),
                TOP: this.filterModel.top,
                MA_DVCS: this.identityService.getStrCurrentMaDvCs(),
            };
            const res = yield this.voucherService.GetListVoucher(filterParams).finally(() => (this.loading = false));
            this.data = res || [];
            this.totalCount = ((_a = res[0]) === null || _a === void 0 ? void 0 : _a["totalCount"]) || 0;
        });
    }
    dateChange() {
        this.getList();
    }
    loadMoreData(event, refresh = false) {
        // this.filterModel.top = !refresh ? this.filterModel.top + 5 : this.filterModel.top;
        this.filterModel.top = this.filterModel.top + 5;
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.getList(refresh).finally(() => {
                event.target.complete();
                if (!refresh)
                    event.target.disabled = this.filterModel.top >= this.totalCount;
            });
        }), 100);
    }
    confirm(item, Is_duyet) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (item)
                this.router.navigateByUrl("components/voucher/detail/" + item.stt + "/" + this.strMaCt);
        });
    }
    edit(item, _enuEdit) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (item) {
                if (_enuEdit == _helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Convert) {
                    if (this.strMaCt == "PN" || this.strMaCt == "PX")
                        this.strMa_Ct_Convert = this.strMaCt == "PN" ? "PX" : "PN";
                    else if (this.strMaCt == "TP" || this.strMaCt == "XP")
                        this.strMa_Ct_Convert = this.strMaCt == "TP" ? "XP" : "TP";
                    item.stt_Org = item.stt;
                }
                this.routeLink = "components/voucher/create/" + this.strMaCt;
                if (_enuEdit == _helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.New)
                    this.router.navigate([this.routeLink], { queryParams: { enuEdit: _enuEdit } });
                else
                    this.router.navigate([this.routeLink], { queryParams: { stt: item.stt, maCt_Convert: this.strMa_Ct_Convert, enuEdit: _enuEdit } });
            }
        });
    }
    exportPDF(_item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!_item)
                return;
            this.loading = true;
            const item = {};
            item.stt = _item.stt;
            item.ma_Ct = this.strMaCt;
            item.report_File = "rptCT_";
            item.report_File = item.report_File + this.strMaCt;
            this.voucherService.DowloadPDF_Blod(item).subscribe((event) => {
                var _a;
                debugger;
                if (event) {
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpEventType.DownloadProgress:
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpEventType.Response:
                            const blob = new Blob([event.body], {
                                type: (_a = event.body) === null || _a === void 0 ? void 0 : _a.type,
                            });
                            const url = URL.createObjectURL(blob);
                            this.openFileModal(url, blob);
                            break;
                    }
                }
                this.loading = false;
            });
        });
    }
    signPDF(item, loai_chu_ky) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _views_approving_signature_component__WEBPACK_IMPORTED_MODULE_8__.ApprovingSignatureComponent,
                componentProps: {
                    stt: item.stt,
                    loai_chu_ky: loai_chu_ky
                },
            });
            modal.onDidDismiss().then((dataReturned) => { });
            return yield modal.present();
        });
    }
    openFileModal(url, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_layout__WEBPACK_IMPORTED_MODULE_6__.FileViewedModalComponent,
                componentProps: {
                    url: url,
                    data: data
                },
            });
            modal.onDidDismiss().then((dataReturned) => { });
            return yield modal.present();
        });
    }
    trackBy(index, item) {
        var _a;
        return (_a = item === null || item === void 0 ? void 0 : item.stt) !== null && _a !== void 0 ? _a : index;
    }
};
ListComponent.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__.VoucherService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__.IdentityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__.aspPermissionsService }
];
ListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-voucher-list",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListComponent);



/***/ }),

/***/ 85410:
/*!****************************************************************************!*\
  !*** ./src/app/components/vouchers/views/approving-signature.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovingSignatureComponent": () => (/* binding */ ApprovingSignatureComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_approving_signature_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./approving-signature.component.html */ 55361);
/* harmony import */ var _approving_signature_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approving-signature.component.scss */ 94181);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-signaturepad */ 41020);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 86219);










let ApprovingSignatureComponent = class ApprovingSignatureComponent {
    constructor(modalController, voucherService, sqlService, domSanitizer) {
        this.modalController = modalController;
        this.voucherService = voucherService;
        this.sqlService = sqlService;
        this.domSanitizer = domSanitizer;
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__.ApiParameter();
        this.signaturePadOptions = {
            'minWidth': 1,
            'canvasWidth': 500,
            'canvasHeight': 500
        };
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            // this.signaturePad is now available
            this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
            this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
            this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__.ApiParameter();
            if (this.loai_chu_ky == "1")
                this.apiParams.strSQLExec = `SELECT  Data  FROM L81CHUKYONLINE WHERE Stt = '${this.stt}' `;
            if (this.loai_chu_ky == "2")
                this.apiParams.strSQLExec = `SELECT Data  FROM L81CHUKYONLINE_NV WHERE Stt = '${this.stt}' `;
            //this.apiParams.strSQLExec = `SELECT Hinh FROM L81DMCBNV WHERE Ma_CbnV = 'ASP0001' `;
            this.apiParams.cmdType = src_app_helpers__WEBPACK_IMPORTED_MODULE_3__.CommandType.Text;
            const res2 = yield this.sqlService.ExecuteReturnDt(this.apiParams);
            if (res2)
                // var uints = new Uint8Array(res2[0].data);
                // var base64 = btoa(String.fromCharCode(...uints));
                this.signatureImg = res2[0].data;
        });
    }
    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    }
    clearPad() {
        this.signaturePad.clear();
    }
    savePad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            //this.signatureImg = this.signaturePad.toDataURL();
            //this.apiParams.strSQLExec = "Sp_API_Update_Chu_Ky";
            const paraList = {
                LOAI_CHU_KY: this.loai_chu_ky,
                STT: this.stt,
                DATA: this.signaturePad.toDataURL(),
            };
            //this.apiParams.cmdType = CommandType.StoredProcedure;
            yield this.voucherService.UpdateChuKy(paraList);
            this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_2__.ApiParameter();
            if (this.loai_chu_ky == "1")
                this.apiParams.strSQLExec = `SELECT  Data  FROM L81CHUKYONLINE WHERE Stt = '${this.stt}' `;
            if (this.loai_chu_ky == "2")
                this.apiParams.strSQLExec = `SELECT Data  FROM L81CHUKYONLINE_NV WHERE Stt = '${this.stt}' `;
            //this.apiParams.strSQLExec = `SELECT Hinh FROM L81DMCBNV WHERE Ma_CbnV = 'ASP0001' `;
            this.apiParams.cmdType = src_app_helpers__WEBPACK_IMPORTED_MODULE_3__.CommandType.Text;
            const res2 = yield this.sqlService.ExecuteReturnDt(this.apiParams);
            if (res2)
                // var uints = new Uint8Array(res2[0].data);
                // var base64 = btoa(String.fromCharCode(...uints));
                this.signatureImg = res2[0].data;
        });
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }
};
ApprovingSignatureComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.VoucherService },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__.SQLExecService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
ApprovingSignatureComponent.propDecorators = {
    signaturePad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__.SignaturePad,] }],
    stt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    loai_chu_ky: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
ApprovingSignatureComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-approving-signature',
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_approving_signature_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_approving_signature_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApprovingSignatureComponent);



/***/ }),

/***/ 8266:
/*!*****************************************************************************!*\
  !*** ./src/app/components/vouchers/views/products-form-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsFormDetailComponent": () => (/* binding */ ProductsFormDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_form_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products-form-detail.component.html */ 90277);
/* harmony import */ var _products_form_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-form-detail.component.scss */ 91201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/api-params */ 38798);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base */ 11852);
/* harmony import */ var _warehouse_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../warehouse/core */ 81682);












let ProductsFormDetailComponent = class ProductsFormDetailComponent {
    constructor(voucherService, identityService, navParams, route, modalController, warehousesService) {
        this.voucherService = voucherService;
        this.identityService = identityService;
        this.navParams = navParams;
        this.route = route;
        this.modalController = modalController;
        this.warehousesService = warehousesService;
        this.model = {};
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.apiParams = new src_app_shared_api_params__WEBPACK_IMPORTED_MODULE_4__.ApiParameter();
        this.submitting = false;
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_3__.enuEdit.New;
        this.strMaCt = "";
        this.strSoCt = "";
        this.listSO = [];
        this.listLSX = [];
        this.listKHSX = [];
        this.strMa_Ct_PX = ["PX", "XP"];
        this.listMa_Lo = [];
        this.model = navParams.get("itemProduct");
        this.strMaCt = navParams.get("strMaCt");
        this.enuEdit = navParams.get("enuEdit");
        this.strMa_Ct_Convert = navParams.get("strMa_Ct_Convert");
    }
    ngOnInit() {
        this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();
        setTimeout(() => {
            if (this.strMa_Ct_PX.includes(this.strMa_Ct_Convert))
                this.get_listMa_Lo();
            this.GetListForvoucher();
        }, 10);
        if (this.model.ma_Lo) {
            this.listMa_Lo[0] = {
                ma_Lo: this.model.ma_Lo,
            };
        }
    }
    ngAfterContentChecked() {
        this.modelChange.emit(this.model);
    }
    closeModal(ok = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    get_listMa_Lo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    clearCusMa_SP(ev) {
        var _a;
        ev.stopPropagation();
        (_a = this.model) === null || _a === void 0 ? true : delete _a.ma_Sp;
        this.modelChange.emit(this.model);
    }
    openFilterProductsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _base__WEBPACK_IMPORTED_MODULE_6__.ProductFilterModalComponent,
                componentProps: {
                    loai_vt: '1'
                }
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (dataReturned.data) {
                    this.model.ma_Sp = dataReturned.data.ma_Vt;
                    // this.productModelSet(dataReturned.data);
                }
            }));
            return yield modal.present();
        });
    }
    GetListForvoucher() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.warehousesService.GetListForvoucher({ Ma_Ct: '' });
            this.listSO = res.table3;
            this.listLSX = res.table4;
            this.listKHSX = res.table5;
        });
    }
};
ProductsFormDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__.VoucherService },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__.IdentityService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _warehouse_core__WEBPACK_IMPORTED_MODULE_7__.WarehousesService }
];
ProductsFormDetailComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
ProductsFormDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-products-form-detail",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_form_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_form_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsFormDetailComponent);



/***/ }),

/***/ 48486:
/*!***********************************************************************!*\
  !*** ./src/app/components/vouchers/views/step-info-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepInfoFormComponent": () => (/* binding */ StepInfoFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_info_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-info-form.component.html */ 35291);
/* harmony import */ var _step_info_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-info-form.component.scss */ 68014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var src_app_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utility.service */ 76515);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ 11852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _warehouse_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../warehouse/core */ 81682);












let StepInfoFormComponent = class StepInfoFormComponent {
    constructor(userService, identityService, warehousesService, utilityService, route, modalController) {
        this.userService = userService;
        this.identityService = identityService;
        this.warehousesService = warehousesService;
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
        this.getInfoUser();
        this.get_list();
    }
    openFilterCustomersModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilityService.showLoader();
            const modal = yield this.modalController.create({
                component: _base__WEBPACK_IMPORTED_MODULE_5__.CustomerFilterModalComponent,
            });
            modal.onDidDismiss().then((dataReturned) => {
                var _a, _b;
                if (dataReturned.data) {
                    this.customer = dataReturned.data;
                    this.model = Object.assign(this.model, {
                        header: Object.assign(this.model.header, {
                            ma_Dt: (_a = dataReturned.data) === null || _a === void 0 ? void 0 : _a.ma_Dt,
                            ten_Dt: (_b = dataReturned.data) === null || _b === void 0 ? void 0 : _b.ten_Dt,
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
    // ngOnChanges(changes: SimpleChanges) {
    //   debugger
    //   this.modelChange.emit(this.model);
    // }
    clearCus(ev) {
        var _a, _b;
        ev.stopPropagation();
        (_a = this.model.header) === null || _a === void 0 ? true : delete _a.ma_Dt;
        (_b = this.model.header) === null || _b === void 0 ? true : delete _b.ten_Dt;
        this.modelChange.emit(this.model);
    }
    get_list() {
        var _a, _b, _c, _d, _e, _f;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const param = { Ma_Ct: this.strMa_Ct_Convert };
            const res = yield this.warehousesService.GetListForvoucher(param);
            this.listEmployees = res.table;
            this.listDepartment = res.table1;
            this.listLoaiNhapXuat = res.table2;
            this.listSO = res.table3;
            this.listLSX = res.table4;
            this.listKHSX = res.table5;
            this.inventories = res.table6;
            this.strMa_DvCs = this.identityService.getStrCurrentMaDvCs();
            if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_2__.enuEdit.Edit && this.model) {
                this.model = Object.assign(this.model, {
                    header: Object.assign(this.model.header, {
                        ma_CbNv: this.employee.ma_CbNv,
                        ma_Bp: this.employee.ma_Bp,
                        ma_DvCs: this.strMa_DvCs,
                        so_Ct_SO: (_b = (_a = this.model.header) === null || _a === void 0 ? void 0 : _a.so_Ct_SO) !== null && _b !== void 0 ? _b : "",
                        so_Ct_LSX: (_d = (_c = this.model.header) === null || _c === void 0 ? void 0 : _c.so_Ct_LSX) !== null && _d !== void 0 ? _d : "",
                        so_Ct_KHSX: (_f = (_e = this.model.header) === null || _e === void 0 ? void 0 : _e.so_Ct_KHSX) !== null && _f !== void 0 ? _f : "",
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
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__.IdentityService },
    { type: _warehouse_core__WEBPACK_IMPORTED_MODULE_6__.WarehousesService },
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

/***/ 77144:
/*!***************************************************************************!*\
  !*** ./src/app/components/vouchers/views/step-products-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepProductsFormComponent": () => (/* binding */ StepProductsFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_products_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-products-form.component.html */ 60777);
/* harmony import */ var _step_products_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-products-form.component.scss */ 62240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility.service */ 76515);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base */ 11852);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 36504);
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers */ 46885);
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services */ 41614);
/* harmony import */ var _products_form_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-form-detail.component */ 8266);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _warehouse_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../warehouse/core */ 81682);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
















let StepProductsFormComponent = class StepProductsFormComponent {
    constructor(warehousesService, utilityService, barcodeScanner, modalController, alertController, route, identityService) {
        this.warehousesService = warehousesService;
        this.utilityService = utilityService;
        this.barcodeScanner = barcodeScanner;
        this.modalController = modalController;
        this.alertController = alertController;
        this.route = route;
        this.identityService = identityService;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.searchTerm = "";
        this.enuEdit = src_app_helpers__WEBPACK_IMPORTED_MODULE_6__.enuEdit.New;
        this.strMaCt = "";
        this.strMaCt = this.route.snapshot.params.maCt;
        this.enuEdit = Number(this.route.snapshot.queryParamMap.get("enuEdit"));
        if (this.enuEdit != src_app_helpers__WEBPACK_IMPORTED_MODULE_6__.enuEdit.Convert)
            this.strMa_Ct_Convert = this.strMaCt;
        else
            this.strMa_Ct_Convert = this.route.snapshot.queryParamMap.get("maCt_Convert");
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
                component: _base__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModalComponent,
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
            this.utilityService.showToast(JSON.stringify(err));
        });
    }
    getProductByQRCode(qrCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let paraList;
            if (qrCode.includes("{")) {
                let result = JSON.parse(qrCode);
                paraList = {
                    MA_VT: result.Ma_Vt,
                    MA_LO: result.Ma_Lo,
                    HAN_SD: moment__WEBPACK_IMPORTED_MODULE_10__(result.Han_Sd, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                    NGAY_SX: moment__WEBPACK_IMPORTED_MODULE_10__(result.Ngay_Sx, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                    MA_KHO: result.Ma_Kho,
                    SO_LUONG: result.So_Luong,
                    Ma_DvCs: this.strMa_DvCs,
                };
            }
            else {
                paraList = {
                    MA_VT: qrCode,
                    MA_LO: '',
                    HAN_SD: '',
                    NGAY_SX: '',
                    MA_KHO: '',
                    SO_LUONG: 0,
                    Ma_DvCs: this.strMa_DvCs,
                };
            }
            const res = yield this.warehousesService.GetVtByCode(paraList).finally();
            if (res.length <= 0) {
                yield this.utilityService.showAlert(`Không tìm thấy sản phẩm cho: ${qrCode}`);
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
        Object.assign(item, {
            ma_Lo: item.ma_Lo ? item.ma_Lo : "",
            so_Ct_SO: this.model.header.so_Ct_SO ? this.model.header.so_Ct_SO : "",
            so_Ct_LSX: this.model.header.so_Ct_LSX ? this.model.header.so_Ct_LSX : "",
            so_Ct_KHSX: this.model.header.so_Ct_KHSX ? this.model.header.so_Ct_KHSX : "",
        });
        const idx = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(this.model.detail, (o) => {
            return o.ma_Vt == item.ma_Vt && o.ma_Lo == item.ma_Lo;
        });
        if (idx > -1) {
            this.model.detail[idx].so_Luong9 += 1;
            this.modelChange.emit(this.model);
        }
        else {
            const obj = Object.assign({}, item, {
                so_Luong9: 1,
                ma_Lo: (["PN", "TP"].includes(this.strMa_Ct_Convert)) && item.is_Lo ? this.GetMa_Lo() : item.ma_Lo,
                ma_Sp: item.ma_Sp,
                stt0: this.model.detail ? this.model.detail.length + 1 : 1,
            });
            this.model.detail.push(obj);
            this.modelChange.emit(this.model);
        }
    }
    GetMa_Lo() {
        var today = new Date();
        return (today.getFullYear().toString().substring(2, 4) +
            today.getMonth().toString() +
            today.getDate().toString() +
            "." +
            today.getHours().toString() +
            today.getMinutes().toString() +
            today.getSeconds().toString());
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const obj = Object.assign({}, item, {
                ngay_Ct: this.model.header.ngay_Ct,
                ma_Kho: this.model.header.ma_Kho,
            });
            const modal = yield this.modalController.create({
                component: _products_form_detail_component__WEBPACK_IMPORTED_MODULE_8__.ProductsFormDetailComponent,
                componentProps: {
                    itemProduct: obj,
                    strMaCt: this.strMaCt,
                    enuEdit: this.enuEdit,
                    strMa_Ct_Convert: this.strMa_Ct_Convert
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
};
StepProductsFormComponent.ctorParameters = () => [
    { type: _warehouse_core__WEBPACK_IMPORTED_MODULE_9__.WarehousesService },
    { type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__.BarcodeScanner },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_7__.IdentityService }
];
StepProductsFormComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    modelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }]
};
StepProductsFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-voucher-step-products-form",
        template: _d_Airspeed_Dev_ASP_Mobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_products_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ControlContainer, useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm }],
        styles: [_step_products_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepProductsFormComponent);



/***/ }),

/***/ 8679:
/*!**********************************************************!*\
  !*** ./src/app/components/vouchers/views/view.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModule": () => (/* binding */ ViewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.module */ 55544);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/base.module */ 36852);
/* harmony import */ var _step_products_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-products-form.component */ 77144);
/* harmony import */ var _step_info_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step-info-form.component */ 48486);
/* harmony import */ var _products_form_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-form-detail.component */ 8266);
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-signaturepad */ 41020);
/* harmony import */ var _approving_signature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approving-signature.component */ 85410);









let ViewModule = class ViewModule {
};
ViewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _products_form_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductsFormDetailComponent,
            _step_products_form_component__WEBPACK_IMPORTED_MODULE_2__.StepProductsFormComponent,
            _step_info_form_component__WEBPACK_IMPORTED_MODULE_3__.StepInfoFormComponent,
            _approving_signature_component__WEBPACK_IMPORTED_MODULE_5__.ApprovingSignatureComponent
            //ProductComponent
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _base_base_module__WEBPACK_IMPORTED_MODULE_1__.BaseModule,
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_8__.SignaturePadModule
        ],
        exports: [
            _products_form_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductsFormDetailComponent,
            _step_products_form_component__WEBPACK_IMPORTED_MODULE_2__.StepProductsFormComponent,
            _step_info_form_component__WEBPACK_IMPORTED_MODULE_3__.StepInfoFormComponent,
            _approving_signature_component__WEBPACK_IMPORTED_MODULE_5__.ApprovingSignatureComponent
            // ProductComponent
        ]
    })
], ViewModule);



/***/ }),

/***/ 16774:
/*!*******************************************************!*\
  !*** ./src/app/components/vouchers/voucher.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherModule": () => (/* binding */ VoucherModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 39859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared.module */ 55544);
/* harmony import */ var _views_view_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/view.module */ 8679);
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.module */ 36852);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ 36198);
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create.component */ 77035);
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.component */ 65733);
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-signaturepad */ 41020);










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
let VoucherModule = class VoucherModule {
};
VoucherModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
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
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__.SignaturePadModule,
            routing
        ]
    })
], VoucherModule);



/***/ }),

/***/ 45989:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/vouchers/create.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/components/inventory/list\" text=\"\"></ion-back-button> -->\r\n      <ion-button [fill]=\"'clear'\" [routerLink]=\"['/components/voucher/list', strMaCt]\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ strTitle }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" color=\"light\" class=\"p-8\">\r\n  <ion-grid>\r\n    <mat-horizontal-stepper labelPosition=\"bottom\" [linear]=\"linner\" #stepper>\r\n      <mat-step [stepControl]=\"fdInfo.control\">\r\n        <ng-template matStepLabel>Thông tin chung</ng-template>\r\n        <form role=\"form\" #fdInfo=\"ngForm\">\r\n          <app-voucher-step-info-form [(model)]=\"model\"></app-voucher-step-info-form>\r\n          <div class=\"form-row button-row p-5\" align=\"center\">\r\n            <button mat-raised-button (click)=\"resetInfo()\" [disabled]=\"fdInfo.invalid\">\r\n              Nhập lại\r\n            </button>\r\n            <button mat-raised-button matStepperNext color=\"primary\" [disabled]=\"fdInfo.invalid\">\r\n              Tiếp theo\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [completed]=\"model.detail && model.detail.length > 0\">\r\n        <ng-template matStepLabel>Sản phẩm</ng-template>\r\n        <form role=\"form\" #fdProduct=\"ngForm\">\r\n          <app-voucher-step-products-form [(model)]=\"model\"></app-voucher-step-products-form>\r\n          <div class=\"form-row p-5\" align=\"start\">\r\n            <button mat-raised-button matStepperPrevious color=\"default\">\r\n              Quay lại\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer *ngIf=\"stepper.selectedIndex == 1\" color=\"bgcolor\" class=\"bg-footer ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"onSubmit()\" expand=\"block\" size=\"default\" color=\"asp\" [disabled]=\"\r\n          fdInfo.invalid ||\r\n          !model.detail ||\r\n          model.detail.length == 0 ||\r\n          submitting || FormCheckValid()\r\n        \">\r\n      <span>Lưu</span>\r\n      <ion-spinner slot=\"start\" size=\"default\" *ngIf=\"submitting\"></ion-spinner>\r\n      <ion-icon name=\"checkmark-done-sharp\" slot=\"start\" size=\"default\" *ngIf=\"!submitting\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ 47674:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/vouchers/detail.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" [routerLink]=\"['../../../list',strMaCt]\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n\r\n      \r\n    </ion-buttons>\r\n    \r\n    <ion-title>Chi tiết</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button *ngIf=\"perm?.allow_Edit\" (click)=\"edit('edit')\">\r\n        <ion-icon slot=\"icon-only\"  size=\"large\" name=\"pencil-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen color=\"light\" class=\"ion-padding\">\r\n\r\n  <ng-container *ngIf=\"!loading;else skeletonTmpl\">\r\n    <ion-row class=\"info-top mt-20\">\r\n      <span class=\"icon-top\">\r\n\r\n        <ion-icon *ngIf=\"info.header?.is_App;else desktopIcon\" [color]=\"info.header?.duyet? 'success':'danger'\"\r\n          class=\"icon\" name=\"phone-portrait-outline\" size=\"large\">\r\n        </ion-icon>\r\n        <ng-template #desktopIcon>\r\n          <ion-icon name=\"desktop-outline\" [color]=\"info.header.duyet? 'success':'danger'\" size=\"large\" class=\"icon\">\r\n          </ion-icon>\r\n        </ng-template>\r\n      </span>\r\n      <ion-col size=\"12\" class=\"ion-text-center mt-20\">\r\n        <ion-text>\r\n          <p class=\"title info-top-text\">{{info.header.ma_Dt}} </p>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p class=\"title info-top-text\">{{info.header.ten_Dt}} </p>\r\n        </ion-text>\r\n        <ion-text>\r\n          <p class=\"info-top-text\" [ngClass]=\"{'success': info.header.duyet, 'danger': !info.header.duyet}\">\r\n            {{info.header.duyet?'Đã duyệt':'Chưa duyệt'}}</p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-text text-left class=\"title\">Số chứng từ</ion-text>\r\n        </ion-label>\r\n        <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n          <ion-text>{{info.header.so_Ct}}</ion-text>\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-text text-left class=\"title\">Ngày Ct</ion-text>\r\n        </ion-label>\r\n        <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n          <ion-text>{{info.header.ngay_Ct | formatDate}}</ion-text>\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-text text-left class=\"title\">{{info.header.loai_Ct== \"1\"?\"Kho nhập\":\"Kho xuất\"}}</ion-text>\r\n        </ion-label>\r\n        <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n          <ion-text>{{info.header.ten_Kho}}&nbsp;({{info.header.ma_Kho}})</ion-text>\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ng-container *ngIf=\"strMaCt=='DC'\">\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Kho nhập</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.ten_KhoN}}&nbsp;({{info.header.ma_KhoN}})</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n      <ng-container>\r\n        <ion-item>\r\n          <ion-label class=\"ion-no-margin ion-no-padding\">\r\n            <ion-text text-left class=\"title\">Diễn giải</ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" class=\"ion-no-margin ion-text-end ion-text-wrap content\">\r\n            <ion-text>{{info.header.dien_Giai}}</ion-text>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ng-container>\r\n\r\n    </ion-list>\r\n\r\n    <ion-list class=\"info-detail ion-margin-bottom product\">\r\n\r\n      <ion-list-header>\r\n        <ion-label>\r\n          <p>Sản phẩm</p>\r\n        </ion-label>\r\n\r\n        <ion-note slot=\"end\" class=\"ion-no-margin\" color=\"danger\" mode=\"ios\">\r\n          <ion-text class=\"ml-10\" color=\"danger\">{{info.header.tSo_Luong | number}}</ion-text>\r\n        </ion-note>\r\n      </ion-list-header>\r\n\r\n      <ion-item class=\"ion-no-margin\" *ngFor=\"let item of info.detail; let last = last;\"\r\n        [attr.lines]=\"!last?'full':'none'\">\r\n\r\n        <ion-label class=\"no-margin-horizontal ion-no-padding\">\r\n          <h3>\r\n            {{item.ten_Vt}}\r\n          </h3>\r\n          <p class=\"asp-color-medium\">\r\n            {{item.ma_Vt? \"Mã vật tư: \"+item.ma_Vt:\"\"}}\r\n          </p>\r\n          <p class=\"asp-color-medium\">\r\n            {{item.ma_Lo? \"Mã lô: \"+ item.ma_Lo:\"\"}}\r\n          </p>\r\n          <p class=\"asp-color-medium\">\r\n            {{item.ma_Sp? \"Mã sản phẩm: \"+item.ma_Sp:\"\"}}\r\n          </p>\r\n        </ion-label>\r\n\r\n        <ion-note slot=\"end\" class=\"ion-no-margin\" color=\"danger\" mode=\"ios\">\r\n          <ion-text class=\"ml-10\" color=\"danger\">{{item.so_Luong | number}}</ion-text>\r\n        </ion-note>\r\n        <ion-label>\r\n          <p>\r\n            <ion-text>{{item.ghi_Chu}}</ion-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-template #skeletonTmpl>\r\n    <ion-row class=\"info-top mt-20\">\r\n      <span class=\"icon-top\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </span>\r\n      <ion-col size=\"12\" text-center class=\"mt-20\">\r\n        <ion-text color=\"medium\">\r\n          <p class=\"title info-top-text\">\r\n            <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-text>\r\n        <h4 class=\"total info-top-text\">\r\n          <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n        </h4>\r\n        <ion-text>\r\n          <ion-skeleton-text animated style=\"width: 50%;margin: auto;\"></ion-skeleton-text>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"none\" class=\"info-detail ion-margin-bottom\">\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label class=\"ion-no-margin ion-no-padding\">\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-list class=\"info-detail product\">\r\n\r\n      <ion-list-header text-uppercase>\r\n        Sản phẩm\r\n      </ion-list-header>\r\n\r\n      <ion-item no-margin>\r\n        <ion-label no-margin-horizontal text-wrap no-padding>\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item no-margin>\r\n        <ion-label no-margin-horizontal text-wrap no-padding>\r\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n  </ng-template>\r\n\r\n</ion-content>");

/***/ }),

/***/ 98174:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/vouchers/list.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button [fill]=\"'clear'\" routerLink=\"/tabs/home\">\r\n        <ion-icon slot=\"icon-only\" ios=\"chevron-back-outline\" md=\"arrow-back-outline\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ title[strMaCt] }}</ion-title>\r\n    <ion-buttons slot=\"end\" fill=\"clear\">\r\n      <ion-button>\r\n        <i class=\"material-icons\">sort_by_alpha</i>\r\n      </ion-button>\r\n      <!-- <ion-button (click)=\"openModalFilter()\">\r\n        <ion-icon slot=\"icon-only\" name=\"filter-sharp\" size=\"default\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadMoreData($event, true)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button *ngIf=\"perm?.allow_New\" (click)=\"edit({}, 78)\" color=\"asp\">\r\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <mat-label>Lọc theo ngày</mat-label>\r\n        <mat-date-range-input [max]=\"today\" [rangePicker]=\"picker\" (click)=\"picker.open()\">\r\n          <input matStartDate [(ngModel)]=\"filterModel.ngay_Ct1\" disabled placeholder=\"Ngày bắt đầu\"\r\n            (focus)=\"picker.open()\" />\r\n          <input matEndDate [(ngModel)]=\"filterModel.ngay_Ct2\" (dateChange)=\"dateChange()\" disabled\r\n            placeholder=\"Ngày kết thúc\" (focus)=\"picker.open()\" />\r\n        </mat-date-range-input>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"loading\"></mat-datepicker-toggle>\r\n        <mat-date-range-picker touchUi #picker [disabled]=\"loading\"></mat-date-range-picker>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-item>\r\n    <ion-label>Trạng thái</ion-label>\r\n    <ion-select (ionChange)=\"getList()\" [(ngModel)]=\"selectTrang_Thai\" [interfaceOptions]=\"selectTrang_Thai\"\r\n      interface=\"action-sheet\" placeholder=\"Chọn trạng thái\">\r\n      <ion-select-option value=\"0\">Chưa duyệt</ion-select-option>\r\n      <ion-select-option value=\"1\">Đã duyệt</ion-select-option>\r\n      <ion-select-option value=\"\">Tất cả</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <app-asp-search [(aspModel)]=\"searchTerm\" (aspModelChange)=\"getList()\"></app-asp-search>\r\n  <ion-grid>\r\n    <ng-container *ngIf=\"!loading; else elseTemplate\">\r\n      <ion-list>\r\n        <ion-list-header>\r\n          <ion-label>\r\n            <p>\r\n              Tổng:&nbsp;<span style=\"font-size: 14px\" text-bold>{{\r\n                totalCount | number\r\n                }}</span>\r\n            </p>\r\n          </ion-label>\r\n        </ion-list-header>\r\n        <ion-item *ngFor=\"let item of data; trackBy: trackBy\" detail=\"false\">\r\n          <ion-label (click)=\"view_edit(item)\">\r\n            <h3 >\r\n              {{ item.ten_Dt }}\r\n            </h3>\r\n            <p>\r\n              <span >{{ item.dien_Giai }}</span>\r\n            </p>\r\n            <p>\r\n              <span class=\"date\">{{ item.ten_Kho }}</span>  \r\n            </p>\r\n            <p>\r\n              <span class=\"date\">{{ item.so_Ct }} - {{ item.ngay_Ct | formatDate }}</span>\r\n            </p>\r\n            \r\n          </ion-label>\r\n          <ion-button fill=\"clear\" [matMenuTriggerFor]=\"menu\" slot=\"start\" color=\"medium\">\r\n            <ion-icon slot=\"start\" *ngIf=\"item.is_App; else desktopIcon\" name=\"phone-portrait-outline\"\r\n              [color]=\"item.duyet ? 'asp' : 'danger'\">\r\n            </ion-icon>\r\n            <ng-template #desktopIcon>\r\n              <ion-icon slot=\"start\" name=\"desktop-outline\" [color]=\"\r\n                  item.ten_TrangThai == 'Đã duyệt' ? 'secondary' : 'danger'\r\n                \"></ion-icon>\r\n            </ng-template>\r\n          </ion-button>\r\n\r\n          <mat-menu #menu=\"matMenu\">\r\n            <!-- <button mat-menu-item *ngIf=\"perm?.allow_View\" (click)=\"view_edit(item)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">preview</i>\r\n              <span>Xem phiếu</span>\r\n            </button>\r\n            <button mat-menu-item *ngIf=\"perm?.allow_Edit\" (click)=\"edit(item, 69)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">create</i>\r\n              <span>Sửa phiếu</span>\r\n            </button>\r\n            <button *ngIf=\"item.ma_Ct != 'DC'\" mat-menu-item (click)=\"edit(item, 86)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n                      class=\"icon\">note_add</i>\r\n              <span>{{\r\n                strMaCt == \"PN\" || strMaCt == \"TP\"\r\n                ? \"Tạo phiếu xuất\"\r\n                : \"Tạo phiếu nhập\"\r\n                }}</span>\r\n            </button>-->\r\n            \r\n            \r\n            <button *ngIf=\"!item.duyet && perm_duyet?.allow_Access\" mat-menu-item (click)=\"confirm(item, true)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">check_circle</i>\r\n              <span>Duyệt</span>\r\n            </button>\r\n            <button *ngIf=\"item.duyet && perm_duyet?.allow_Access\" mat-menu-item (click)=\"confirm(item, false)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">block</i>\r\n              <span>Bỏ duyệt</span>\r\n            </button> \r\n\r\n            <button mat-menu-item (click)=\"exportPDF(item)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">picture_as_pdf</i>\r\n              <span>Xem file PDF</span>\r\n            </button>\r\n\r\n            <button mat-menu-item (click)=\"signPDF(item,'1')\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">picture_as_pdf</i>\r\n              <span>Ký duyệt kho</span>\r\n            </button>\r\n\r\n            <button mat-menu-item (click)=\"signPDF(item,'2')\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">picture_as_pdf</i>\r\n              <span>Ký duyệt NV</span>\r\n            </button>\r\n            <!-- <button mat-menu-item *ngIf=\"perm?.allow_Delete\" (click)=\"delete(item)\">\r\n              <i [ngClass]=\"platformStr =='ios' && isNativePlatform?'material-icons-outlined':'material-icons'\"\r\n              class=\"icon\">delete</i>\r\n              <span>Xoá</span>\r\n            </button> -->\r\n          </mat-menu>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ng-container>\r\n\r\n    <ng-template #elseTemplate>\r\n      <asp-skeleton></asp-skeleton>\r\n    </ng-template>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ 55361:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/vouchers/views/approving-signature.component.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Signature\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" >\n  <div class=\"signature-container\">\n    <signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"></signature-pad>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"danger\" (click)=\"clearPad()\">Clear</ion-button>\n        </ion-col>\n        <ion-col size=\"4\" offset=\"2\">\n          <ion-button color=\"secondary\" (click)=\"savePad()\">Save</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ng-container *ngIf =\"signatureImg!\">\n    <img [src]=\"signatureImg | displayAvatar\" >\n  </ng-container>\n</ion-content>\n\n");

/***/ }),

/***/ 90277:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/vouchers/views/products-form-detail.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"asp\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\" fill=\"clear\">\r\n        <ion-icon name=\"close-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Chỉnh sửa vật tư</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"light\" class=\"p-8\">\r\n  <ion-grid>\r\n    <form role=\"form\" #fdInfo=\"ngForm\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Vật tư</mat-label>\r\n            <input readonly=\"true\" matInput name=\"ma_Vt\" autocomplete=\"off\" [(ngModel)]=\"model.ma_Vt\" />\r\n            <mat-hint align=\"end\">{{ model?.ten_Vt }}</mat-hint>\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ng-container *ngIf=\"strMa_Ct_PX.includes(strMaCt)\">\r\n          <ion-col size=\"12\">\r\n            <mat-form-field appearance=\"fill\">\r\n              <mat-label>Mã lô</mat-label>\r\n              <mat-select name=\"ma_Lo\" [(ngModel)]=\"model.ma_Lo\">\r\n                <mat-option *ngFor=\"let op of listMa_Lo\" [value]=\"op.ma_Lo\">\r\n                  {{ op.ma_Lo }}\r\n                </mat-option>\r\n              </mat-select>\r\n\r\n            </mat-form-field>\r\n          </ion-col>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!strMa_Ct_PX.includes(strMaCt)\">\r\n          <ion-col size=\"12\">\r\n            <mat-form-field appearance=\"fill\">\r\n              <mat-label>Mã lô</mat-label>\r\n              <input  matInput name=\"ma_Lo\" autocomplete=\"off\" [(ngModel)]=\"model.ma_Lo\" />\r\n            </mat-form-field>\r\n          </ion-col>\r\n        </ng-container>\r\n      \r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Hạn sử dụng</mat-label>\r\n            <input matInput name=\"han_Sd\" [(ngModel)]=\"model.han_Sd\" required [matDatepicker]=\"picker\"\r\n              (focus)=\"picker.open()\" />\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker touchUi color=\"primary\"></mat-datepicker>\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Mã sản phẩm</mat-label>\r\n            <input matInput name=\"ma_Sp\" autocomplete=\"off\" (focus)=\"openFilterProductsModal()\"\r\n              [(ngModel)]=\"model.ma_Sp\" />\r\n            <button style=\"font-size: 18px\" (click)=\"clearCusMa_SP($event)\" *ngIf=\"model?.ma_Sp\" mat-icon-button\r\n              matSuffix>\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n            <!-- <mat-hint align=\"end\">{{ model.header?.ten_Dt }}</mat-hint> -->\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <mat-form-field appearance=\"fill\">\r\n            <mat-label>Số lượng</mat-label>\r\n            <input matInput type=\"number\" name=\"so_Luong9\" autocomplete=\"off\" [(ngModel)]=\"model.so_Luong9\" />\r\n            <button style=\"font-size: 18px\" *ngIf=\"model.so_Luong9\" mat-icon-button matSuffix>\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ng-container *ngIf=\"strMaCt != 'DC'\">\r\n          <ion-col size=\"4\">\r\n            <mat-form-field appearance=\"fill\">\r\n              <mat-label>Số SO</mat-label>\r\n              <mat-select name=\"so_SO\" [(ngModel)]=\"model.so_Ct_SO\">\r\n                <mat-option *ngFor=\"let op of listSO\" [value]=\"op.so_Ct\">\r\n                  {{ op.so_Ct }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\">\r\n            <mat-form-field appearance=\"fill\">\r\n              <mat-label>Số LSX</mat-label>\r\n              <mat-select name=\"so_LSX\" [(ngModel)]=\"model.so_Ct_LSX\">\r\n                <mat-option *ngFor=\"let op of listLSX\" [value]=\"op.so_Ct\">\r\n                  {{ op.so_Ct }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\">\r\n            <mat-form-field appearance=\"fill\">\r\n              <mat-label>Số KHSX</mat-label>\r\n              <mat-select name=\"so_KHSX\" [(ngModel)]=\"model.so_Ct_KHSX\">\r\n                <mat-option *ngFor=\"let op of listKHSX\" [value]=\"op.so_Ct\">\r\n                  {{ op.so_Ct }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </ion-col>\r\n        </ng-container>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer color=\"bgcolor\" class=\"bg-footer ion-no-border\">\r\n  <ion-item color=\"bgcolor\" class=\"ion-text-center pt-8 pb-8\" lines=\"none\">\r\n    <ion-label class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n      <ion-button (click)=\"closeModal()\" expand=\"block\" size=\"default\" color=\"asp\">\r\n        <span>Hoàn tất</span>\r\n        <ion-icon name=\"checkmark-done-sharp\" slot=\"start\" size=\"default\"></ion-icon>\r\n      </ion-button>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-footer>");

/***/ }),

/***/ 35291:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/vouchers/views/step-info-form.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row>\r\n\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Kho</mat-label>\r\n      <mat-select name=\"ma_Kho\" [(ngModel)]=\"model.header.ma_Kho\" required>\r\n        <mat-option *ngFor=\"let op of inventories\" [value]=\"op.ma_Kho\">\r\n          {{ op.ten_Kho }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <!-- [disabled]=\"model.header.ma_Ct='DC'\" -->\r\n  <ng-container *ngIf=\"strMaCt == 'DC'\">\r\n    <ion-col size=\"12\">\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Kho nhập</mat-label>\r\n        <mat-select name=\"ma_KhoN\" [(ngModel)]=\"model.header.ma_KhoN\" required>\r\n          <mat-option *ngFor=\"let op of inventories\" [value]=\"op.ma_Kho\">\r\n            {{ op.ten_Kho }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-container>\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Loại nhập xuất</mat-label>\r\n      <mat-select name=\"Ma_LoaiNX\" [(ngModel)]=\"model.header.ma_LoaiNX\" required>\r\n        <mat-option *ngFor=\"let op of listLoaiNhapXuat\" [value]=\"op.ma_LoaiNX\">\r\n          {{ op.ten_LoaiNX }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"7\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Ngày</mat-label>\r\n      <input matInput name=\"ngay_Ct\" [max]=\"today\" [(ngModel)]=\"model.header.ngay_Ct\" required [matDatepicker]=\"picker\"\r\n        (focus)=\"picker.open()\" />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker touchUi color=\"primary\"></mat-datepicker>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"5\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Số Chứng từ</mat-label>\r\n      <input matInput readonly name=\"so_Ct\" [(ngModel)]=\"model.header.so_Ct\">\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Khách hàng</mat-label>\r\n      <input matInput name=\"ma_Dt\" autocomplete=\"off\" (focus)=\"openFilterCustomersModal()\"\r\n        [(ngModel)]=\"model.header.ma_Dt\" />\r\n      <button style=\"font-size: 18px\" (click)=\"clearCus($event)\" *ngIf=\"model.header?.ma_Dt\" mat-icon-button matSuffix>\r\n        <mat-icon>clear</mat-icon>\r\n      </button>\r\n      <mat-hint align=\"end\">{{ model.header?.ten_Dt }}</mat-hint>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n\r\n\r\n  <ion-col size=\"6\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Mã nhân viên</mat-label>\r\n      <mat-select name=\"ma_cbnv\" [(ngModel)]=\"model.header.ma_CbNv\">\r\n        <mat-option *ngFor=\"let op of listEmployees\" [value]=\"op.ma_CbNv\">\r\n          {{ op.ten_CbNv }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </ion-col>\r\n  <ion-col size=\"6\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Mã bộ phận</mat-label>\r\n      <mat-select name=\"ma_Bp\" [(ngModel)]=\"model.header.ma_Bp\">\r\n        <mat-option *ngFor=\"let op of listDepartment\" [value]=\"op.ma_Bp\">\r\n          {{ op.ten_Bp }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </ion-col>\r\n\r\n  <ng-container *ngIf=\"strMaCt != 'DC'\">\r\n    <ion-col size=\"4\" >\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Số SO</mat-label>\r\n        <mat-select name=\"so_SO\" [(ngModel)]=\"model.header.so_Ct_SO\">\r\n          <mat-option *ngFor=\"let op of listSO\" [value]=\"op.so_Ct\">\r\n            {{ op.so_Ct }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  \r\n    <ion-col size=\"4\">\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Số LSX</mat-label>\r\n        <mat-select name=\"so_LSX\" [(ngModel)]=\"model.header.so_Ct_LSX\">\r\n          <mat-option *ngFor=\"let op of listLSX\" [value]=\"op.so_Ct\">\r\n            {{ op.so_Ct }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  \r\n    <ion-col size=\"4\">\r\n      <mat-form-field appearance=\"fill\">\r\n        <mat-label>Số KHSX</mat-label>\r\n        <mat-select name=\"so_KHSX\" [(ngModel)]=\"model.header.so_Ct_KHSX\">\r\n          <mat-option *ngFor=\"let op of listKHSX\" [value]=\"op.so_Ct\">\r\n            {{ op.so_Ct }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </ion-col>\r\n  </ng-container>\r\n\r\n  <ion-col size=\"12\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Diễn Giải</mat-label>\r\n      <textarea matInput name=\"dien_Giai\" rows=\"3\" [(ngModel)]=\"model.header.dien_Giai\"></textarea>\r\n    </mat-form-field>\r\n  </ion-col>\r\n</ion-row>");

/***/ }),

/***/ 60777:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/vouchers/views/step-products-form.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row>\r\n  <ion-col size=\"10\">\r\n    <ion-searchbar class=\"m-0 p-0\" [ngModelOptions]=\"{standalone: true}\" showCancelButton=\"never\"\r\n      (ionFocus)=\"openFilterProductsModal()\" [(ngModel)]=\"searchTerm\" placeholder=\"Tìm kiếm và chọn sản phẩm...\">\r\n    </ion-searchbar>\r\n  </ion-col>\r\n  <ion-col size=\"2\">\r\n    <ion-button (click)=\"productScanner()\" fill=\"clear\" class=\"ion-no-margin mt-8 p-0 btn-scan\" color=\"medium\">\r\n      <ion-icon slot=\"icon-only\" size=\"large\" name=\"scan-sharp\"></ion-icon>\r\n    </ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ng-container>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-list>\r\n        <ion-item class=\"ion-no-padding\" *ngFor=\"let item of this.model.detail;let last = last;\">\r\n          <ion-label>\r\n            <h2>{{item.ten_Vt}}</h2>\r\n            <p class=\"asp-color-medium\">\r\n               {{\"Mã vật tư: \"+ item.ma_Vt}}\r\n            </p>\r\n            <p class=\"asp-color-medium\">\r\n              {{item.ma_Lo? \"Mã lô: \"+ item.ma_Lo:\"\"}}\r\n            </p>\r\n            <p class=\"asp-color-medium\">\r\n              {{item.ma_Sp? \"Mã sản phẩm: \"+item.ma_Sp:\"\"}}\r\n            </p>\r\n            <p>Số lượng:&nbsp;\r\n              <!-- <span class=\"asp-color-danger\">{{item.so_Luong9}}</span> -->\r\n              <span class=\"quantity ion-text-center\">\r\n                <ion-button\r\n                  class=\"ion-no-margin ion-no-padding\" fill=\"clear\" slot=\"start\"\r\n                  (click)=\"changeQty(item,'previous')\" color=\"medium\">\r\n                  <ion-icon slot=\"icon-only\" name=\"remove\" size=\"small\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button size=\"small\" style=\"width: 70px;\"\r\n                  fill=\"outline\" slot=\"start\" color=\"asp\" (click)=\"updateQty(item)\"\r\n                  class=\"ion-no-margin ion-no-padding\">\r\n                  {{item.so_Luong9}}\r\n                </ion-button>\r\n                <ion-button  fill=\"clear\"\r\n                  (click)=\"changeQty(item,'next')\" color=\"medium\" class=\"ion-no-margin ion-no-padding\">\r\n                  <ion-icon slot=\"icon-only\" name=\"add\" size=\"small\"></ion-icon>\r\n                </ion-button>\r\n              </span>\r\n            </p>\r\n          </ion-label>\r\n\r\n          <ion-button fill=\"clear\" [matMenuTriggerFor]=\"menu\" class=\"ion-no-margin ion-no-padding\" slot=\"end\"\r\n            color=\"medium\">\r\n            <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-sharp\" size=\"default\"></ion-icon>\r\n          </ion-button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"edit(item)\">\r\n              <mat-icon>flip_to_front</mat-icon>\r\n              <span>Sửa</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"removeProduct(item)\">\r\n              <mat-icon>delete</mat-icon>\r\n              <span>Xóa</span>\r\n            </button>\r\n          </mat-menu>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n</ng-container>");

/***/ }),

/***/ 94447:
/*!***********************************************************!*\
  !*** ./node_modules/signature_pad/dist/signature_pad.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || new Date().getTime();
}

Point.prototype.velocityFrom = function (start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};

Point.prototype.distanceTo = function (start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};

Point.prototype.equals = function (other) {
  return this.x === other.x && this.y === other.y && this.time === other.time;
};

function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}

// Returns approximated length.
Bezier.prototype.length = function () {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;

  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }

  return length;
};

/* eslint-disable no-multi-spaces, space-in-parens */
Bezier.prototype._point = function (t, start, c1, c2, end) {
  return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};

/* eslint-disable */

// http://stackoverflow.com/a/27078401/815507
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};

  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = 'throttle' in opts ? opts.throttle : 16; // in miliseconds
  this.minDistance = 'minDistance' in opts ? opts.minDistance : 5;

  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }

  this.dotSize = opts.dotSize || function () {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || 'black';
  this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;

  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
  this.clear();

  // We need add these inline so they are available to unbind while still having
  // access to 'self' we could use _.bind but it's not worth adding a dependency.
  this._handleMouseDown = function (event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };

  this._handleMouseMove = function (event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };

  this._handleMouseUp = function (event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };

  this._handleTouchStart = function (event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };

  this._handleTouchMove = function (event) {
    // Prevent scrolling.
    event.preventDefault();

    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };

  this._handleTouchEnd = function (event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };

  // Enable mouse and touch event handlers
  this.on();
}

// Public methods
SignaturePad.prototype.clear = function () {
  var ctx = this._ctx;
  var canvas = this._canvas;

  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this._data = [];
  this._reset();
  this._isEmpty = true;
};

SignaturePad.prototype.fromDataURL = function (dataUrl) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var image = new Image();
  var ratio = options.ratio || window.devicePixelRatio || 1;
  var width = options.width || this._canvas.width / ratio;
  var height = options.height || this._canvas.height / ratio;

  this._reset();
  image.src = dataUrl;
  image.onload = function () {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};

SignaturePad.prototype.toDataURL = function (type) {
  var _canvas;

  switch (type) {
    case 'image/svg+xml':
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }

      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};

SignaturePad.prototype.on = function () {
  this._handleMouseEvents();
  this._handleTouchEvents();
};

SignaturePad.prototype.off = function () {
  this._canvas.removeEventListener('mousedown', this._handleMouseDown);
  this._canvas.removeEventListener('mousemove', this._handleMouseMove);
  document.removeEventListener('mouseup', this._handleMouseUp);

  this._canvas.removeEventListener('touchstart', this._handleTouchStart);
  this._canvas.removeEventListener('touchmove', this._handleTouchMove);
  this._canvas.removeEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype.isEmpty = function () {
  return this._isEmpty;
};

// Private methods
SignaturePad.prototype._strokeBegin = function (event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);

  if (typeof this.onBegin === 'function') {
    this.onBegin(event);
  }
};

SignaturePad.prototype._strokeUpdate = function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var point = this._createPoint(x, y);
  var lastPointGroup = this._data[this._data.length - 1];
  var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
  var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;

  // Skip this point if it's too close to the previous one
  if (!(lastPoint && isLastPointTooClose)) {
    var _addPoint = this._addPoint(point),
        curve = _addPoint.curve,
        widths = _addPoint.widths;

    if (curve && widths) {
      this._drawCurve(curve, widths.start, widths.end);
    }

    this._data[this._data.length - 1].push({
      x: point.x,
      y: point.y,
      time: point.time,
      color: this.penColor
    });
  }
};

SignaturePad.prototype._strokeEnd = function (event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0]; // Point instance

  if (!canDrawCurve && point) {
    this._drawDot(point);
  }

  if (point) {
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object

    // When drawing a dot, there's only one point in a group, so without this check
    // such group would end up with exactly the same 2 points.
    if (!point.equals(lastPoint)) {
      lastPointGroup.push({
        x: point.x,
        y: point.y,
        time: point.time,
        color: this.penColor
      });
    }
  }

  if (typeof this.onEnd === 'function') {
    this.onEnd(event);
  }
};

SignaturePad.prototype._handleMouseEvents = function () {
  this._mouseButtonDown = false;

  this._canvas.addEventListener('mousedown', this._handleMouseDown);
  this._canvas.addEventListener('mousemove', this._handleMouseMove);
  document.addEventListener('mouseup', this._handleMouseUp);
};

SignaturePad.prototype._handleTouchEvents = function () {
  // Pass touch events to canvas element on mobile IE11 and Edge.
  this._canvas.style.msTouchAction = 'none';
  this._canvas.style.touchAction = 'none';

  this._canvas.addEventListener('touchstart', this._handleTouchStart);
  this._canvas.addEventListener('touchmove', this._handleTouchMove);
  this._canvas.addEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype._reset = function () {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};

SignaturePad.prototype._createPoint = function (x, y, time) {
  var rect = this._canvas.getBoundingClientRect();

  return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
};

SignaturePad.prototype._addPoint = function (point) {
  var points = this.points;
  var tmp = void 0;

  points.push(point);

  if (points.length > 2) {
    // To reduce the initial lag make it work with 3 points
    // by copying the first point to the beginning.
    if (points.length === 3) points.unshift(points[0]);

    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);

    // Remove the first element from the list,
    // so that we always have no more than 4 points in points array.
    points.shift();

    return { curve: curve, widths: widths };
  }

  return {};
};

SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;

  var m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
  var m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };

  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;

  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };

  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;

  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};

SignaturePad.prototype._calculateCurveWidths = function (curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };

  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

  var newWidth = this._strokeWidth(velocity);

  widths.start = this._lastWidth;
  widths.end = newWidth;

  this._lastVelocity = velocity;
  this._lastWidth = newWidth;

  return widths;
};

SignaturePad.prototype._strokeWidth = function (velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};

SignaturePad.prototype._drawPoint = function (x, y, size) {
  var ctx = this._ctx;

  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};

SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());

  ctx.beginPath();

  for (var i = 0; i < drawSteps; i += 1) {
    // Calculate the Bezier (x, y) coordinate for this step.
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;

    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;

    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;

    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }

  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._drawDot = function (point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];

    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
        var color = rawPoint.color;

        if (j === 0) {
          // First point in a group. Nothing to draw yet.

          // All points in the group have the same color, so it's enough to set
          // penColor just at the beginning.
          this.penColor = color;
          this._reset();

          this._addPoint(point);
        } else if (j !== group.length - 1) {
          // Middle point in a group.
          var _addPoint2 = this._addPoint(point),
              curve = _addPoint2.curve,
              widths = _addPoint2.widths;

          if (curve && widths) {
            drawCurve(curve, widths, color);
          }
        } else {
          // Last point in a group. Do nothing.
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};

SignaturePad.prototype._toSVG = function () {
  var _this2 = this;

  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttributeNS(null, 'width', canvas.width);
  svg.setAttributeNS(null, 'height', canvas.height);

  this._fromData(pointGroups, function (curve, widths, color) {
    var path = document.createElement('path');

    // Need to check curve for NaN values, these pop up when drawing
    // lines on the canvas that are not continuous. E.g. Sharp corners
    // or stopping mid-stroke and than continuing without lifting mouse.
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));

      path.setAttribute('d', attr);
      path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
      path.setAttribute('stroke', color);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      svg.appendChild(path);
    }
  }, function (rawPoint) {
    var circle = document.createElement('circle');
    var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute('r', dotSize);
    circle.setAttribute('cx', rawPoint.x);
    circle.setAttribute('cy', rawPoint.y);
    circle.setAttribute('fill', rawPoint.color);

    svg.appendChild(circle);
  });

  var prefix = 'data:image/svg+xml;base64,';
  var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
  var body = svg.innerHTML;

  // IE hack for missing innerHTML property on SVGElement
  if (body === undefined) {
    var dummy = document.createElement('dummy');
    var nodes = svg.childNodes;
    dummy.innerHTML = '';

    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }

    body = dummy.innerHTML;
  }

  var footer = '</svg>';
  var data = header + body + footer;

  return prefix + btoa(data);
};

SignaturePad.prototype.fromData = function (pointGroups) {
  var _this3 = this;

  this.clear();

  this._fromData(pointGroups, function (curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function (rawPoint) {
    return _this3._drawDot(rawPoint);
  });

  this._data = pointGroups;
};

SignaturePad.prototype.toData = function () {
  return this._data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignaturePad);


/***/ })

}]);
//# sourceMappingURL=src_app_components_vouchers_voucher_module_ts.js.map