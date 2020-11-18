function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/admin-mgmt.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/admin-mgmt.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtAdminMgmtComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <style>\n      body {\n        font-family: Arial;\n      }\n\n      /* Style the tab */\n      .tab {\n        overflow: hidden;\n        border: 1px solid #ccc;\n        background-color: #f1f1f1;\n      }\n\n      /* Style the buttons inside the tab */\n      .tab button {\n        background-color: inherit;\n        float: left;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        padding: 14px 16px;\n        transition: 0.3s;\n        font-size: 17px;\n      }\n\n      /* Change background color of buttons on hover */\n      .tab button:hover {\n        background-color: #ddd;\n      }\n\n      /* Create an active/current tablink class */\n      .tab button.active {\n        background-color: #ccc;\n      }\n\n      /* Style the tab content */\n      .tabcontent {\n        display: none;\n        padding: 6px 12px;\n        border: 1px solid #ccc;\n        border-top: none;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"container\">\n      <a href=\"#\" class=\"btn btn-info btn-lg\">\n        <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n      </a>\n    </div>\n    <br /><br />\n    <div class=\"tab\">\n      <button class=\"tablinks\" (click)=\"enrolluser()\">Enroll User</button>\n      <button class=\"tablinks\" (click)=\"doUploadData()\">Data Upload</button>\n      <button class=\"tablinks\" (click)=\"UpdateItems()\">Edit data</button>\n      <button class=\"tablinks\" (click)=\"sitesDetails()\">Site Details</button>\n\n      <div id=\"enrolluser\" class=\"tabcontent\">\n        <h3>Enroll User</h3>\n        <p>This Page will be comming soon.</p>\n      </div>\n\n      <div id=\"Data Upload\" class=\"tabcontent\">\n        <h3>Data Upload</h3>\n      </div>\n    </div>\n    <script>\n      function openTab(evt, action) {\n        var i, tabcontent, tablinks;\n        tabcontent = document.getElementsByClassName(\"tabcontent\");\n        for (i = 0; i < tabcontent.length; i++) {\n          tabcontent[i].style.display = \"none\";\n        }\n        tablinks = document.getElementsByClassName(\"tablinks\");\n        for (i = 0; i < tablinks.length; i++) {\n          tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\n        }\n        document.getElementById(action).style.display = \"block\";\n        evt.currentTarget.className += \" active\";\n      }\n    </script>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/data-upload/data-upload.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/data-upload/data-upload.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtDataUploadDataUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body-bg\">\n  <app-header [selectedTab]=\"'dataupload'\"></app-header>\n  <div class=\"above-table\">\n    <div class=\"table-title\">BATCH UPDATE</div>\n    <!-- <div>\n      <input type=\"file\" name=\"files\" class=\"form-control\" #uploads (change)=\"onChange(uploads.files)\" multiple\n        value=\"process\" />\n    </div> -->\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text upload\" (click)=\"upload()\" id=\"btnUpload\">Upload</span>\n      </div>\n      <div class=\"custom-file\">\n        <form action=\"/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n          <input (change)=\"fileChange($event)\" type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\"\n            aria-describedby=\"inputGroupFileAddon01\">\n        </form>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"table-container\">\n    <table>\n      <tbody>\n        <tr *ngFor=\"let record of dataList\">\n          <td *ngFor=\"let key of keys\">{{ record[key] }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/enrolluser/enrolluser.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/enrolluser/enrolluser.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtEnrolluserEnrolluserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a href=\"/admin/options\" class=\"previous\" (click)=\"goBack()\">Previous</a>\n<p>This Page will be comming soon.!!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/item-mgmt/item-mgmt.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/item-mgmt/item-mgmt.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtItemMgmtItemMgmtComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body-bg\">\n    <app-header [selectedTab]=\"'editData'\"></app-header>\n    <div class=\"above-table\">\n      <div class=\"table-title\">DEPARTMENTS</div>\n      <div class=\"search-field-container\">\n        <input class=\"form-control search-field\" placeholder=\"{{searchHelp}}\" [(ngModel)]=\"searchKeyword\" />\n        <mat-icon class=\"cursor-pointer\" matRipple>search</mat-icon>\n      </div>\n    </div>\n    <div class=\"table-container\">\n      <table>\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>Item Details</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let i of cats | itemsFilter : searchKeyword : searchFields | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}\">\n            <td>{{ i.id }}</td>\n            <td>{{ i.name }}</td>\n            <td>\n                <mat-icon (click)=\"ListitemsForCat(i)\" class=\"navigate_next-icon\" matRipple>navigate_next</mat-icon>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <form *ngIf=\"cats\" class=\"pagination-wrapper\">\n      <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"5\"\n        previousLabel=\"{{'previous'}}\" nextLabel=\"{{'next'}}\" screenReaderPaginationLabel=\"Pagination\"\n        screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n      </pagination-controls>\n      <div class=\"input-group input-group-sm\">\n        <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\">\n          <option>10</option>\n          <option>25</option>\n          <option>50</option>\n          <option>100</option>\n          <option>200</option>\n        </select>\n      </div>\n    </form>\n    \n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/itemedit/itemedit.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/itemedit/itemedit.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtItemeditItemeditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n\n    <div class=\"container\">\n\n        <div class=\"row row-content\">\n            <div class=\"col-8 offset-sm-1\">\n                <h5>DEPARTMENTS > ITEM MANAGEMENT > EDIT ITEM DETAILS</h5>\n             </div>\n        </div>\n\n        <div class=\"row row-content\">\n            <div class=\"col-9 col-md-9\">\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"itemId\" class=\"col-md-2 col-form-label\">ID:</label>\n                        <div class=\"col-md-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"itemId\" name=\"itemId\" placeholder=\"ID\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"itemText\" class=\"col-md-2 col-form-label\">Text:</label>\n                        <div class=\"col-md-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"itemText\" name=\"itemText\" placeholder=\"Text\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"itemDesc\" class=\"col-md-2 col-form-label\">Description:</label>\n                        <div class=\"col-md-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"itemDesc\" name=\"itemDesc\" placeholder=\"Description\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"itemPrice\" class=\"col-md-2 col-form-label\">Price:</label>\n                        <div class=\"col-md-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"itemPrice\" name=\"itemPrice\" placeholder=\"Price\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"itemQty\" class=\"col-md-2 col-form-label\">Quantity:</label>\n                        <div class=\"col-md-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"itemQty\" name=\"itemQty\" placeholder=\"Quantity\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n                        </div>\n                        <div class=\"col-2\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/itemupdate/itemupdate.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/itemupdate/itemupdate.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtItemupdateItemupdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body-bg\">\n  <div id=\"base\" class=\"\">\n    <div class=\"above-table\">\n      <div class=\"table-title\">DEPARTMENTS > ITEM MANAGEMENT > EDIT ITEM DETAILS</div>\n    </div>\n    <!-- Unnamed (Rectangle) -->\n    <div id=\"item_number\" class=\"ax_default paragraph\">\n      <div id=\"item_number_div\" class=\"\"></div>\n      <div id=\"item_number_text\" class=\"text\">\n        <h4>ID:</h4>\n      </div>\n    </div>\n\n    <!-- Unnamed (Rectangle) -->\n    <div id=\"item_text\" class=\"ax_default paragraph\">\n      <div id=\"item_text_div\" class=\"\"></div>\n      <div id=\"item_text_text\" class=\"text\">\n        <h4>Text :</h4>\n      </div>\n    </div>\n\n    <!-- Unnamed (Rectangle) -->\n    <div id=\"item_desc\" class=\"ax_default paragraph\">\n      <div id=\"item_desc_div\" class=\"\"></div>\n      <div id=\"item_desc_text\" class=\"text\">\n        <h4>Description:</h4>\n      </div>\n    </div>\n\n    <!-- Unnamed (Rectangle) -->\n    <div id=\"item_price\" class=\"ax_default paragraph\">\n      <div id=\"item_price_div\" class=\"\"></div>\n      <div id=\"item_price_text\" class=\"text\">\n        <h4>Price:</h4>\n      </div>\n    </div>\n\n    <!-- Unnamed (Rectangle) -->\n    <div id=\"item_qty\" class=\"ax_default paragraph\">\n      <div id=\"item_qty_div\" class=\"\"></div>\n      <div id=\"item_qty_text\" class=\"text\">\n        <h4>Quantity:</h4>\n      </div>\n    </div>\n\n    <!-- Unnamed (Rectangle) -->\n    <div id=\"btn_update\" class=\"ax_default primary_button\" (click)=\"updateItemPrice()\">\n      <div id=\"btn_update_div\" class=\"\"></div>\n      <div id=\"btn_update_text\" class=\"text\">\n        <p><span>Update</span></p>\n      </div>\n    </div>\n\n    \n\n    <!-- Unnamed (Rectangle) -->\n    <div id=\"btn_cancel\" class=\"ax_default primary_button\" (click)=\"cancelClicked()\">\n      <div id=\"btn_cancel_div\" class=\"\"></div>\n      <div id=\"btn_cancel_text\" class=\"text\">\n        <p><span>Cancel</span></p>\n      </div>\n    </div>\n\n    <!-- Unnamed (Text Field) -->\n      <div  >\n      <b>\n        <span class=\"info\">{{ selectedItem.id }}</span>\n    </b>\n    </div>\n    <!-- Unnamed (Text Field) -->\n    <div id=\"item_name_ip\" class=\"ax_default text_field\">\n      <div id=\"item_name_ip_div\" class=\"\"></div>\n      <input id=\"item_name_ip_input\" type=\"text\" value=\"{{ selectedItem.name }}\" class=\"u9_input\" />\n    </div>\n\n    <!-- Unnamed (Text Field) -->\n    <div id=\"item_desc_ip\" class=\"ax_default text_field\">\n      <div id=\"item_desc_ip_div\" class=\"\"></div>\n      <input id=\"item_desc_ip_input\" type=\"text\" value=\"{{ selectedItem.desc }}\" class=\"u10_input\" />\n    </div>\n\n    <!-- Unnamed (Text Field) -->\n    <div id=\"item_price_ip\" class=\"ax_default text_field\">\n      <div id=\"item_price_ip_div\" class=\"\"></div>\n      <input id=\"item_price_ip_input\" type=\"text\" value=\"{{ selectedItem.itemPrice }}\" class=\"u11_input\" />\n    </div>\n\n    <!-- Unnamed (Text Field) -->\n    <div id=\"item_qty_ip\" class=\"ax_default text_field\">\n      <div id=\"item_qty_ip_div\" class=\"\"></div>\n      <input id=\"item_qty_ip_input\" type=\"text\" [disabled]=\"true\" value=\"{{ selectedItem.itemQuantity }}\"\n        class=\"u12_input\" />\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/sites/sites.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/sites/sites.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtSitesSitesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body-bg\">\r\n  <app-header [selectedTab]=\"'sites'\"></app-header>\r\n  <div class=\"above-table\">\r\n    <div class=\"table-title\">SITE MANAGEMENT</div>\r\n    <div class=\"search-field-container\">\r\n      <input class=\"form-control search-field\" placeholder=\"{{searchHelp}}\" [(ngModel)]=\"searchKeyword\" />\r\n      <mat-icon class=\"cursor-pointer\" matRipple>search</mat-icon>\r\n    </div>\r\n  </div>\r\n  <div class=\"table-container\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Site Number</th>\r\n          <th>Site Name</th>\r\n          <th>Health Check</th>\r\n          <th>Generate File</th>\r\n          <th>Export Status</th>\r\n          <th>Pending File</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"let site of Sites | itemsFilter : searchKeyword : searchFields | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}\">\r\n          <td>{{ site.siteName }}</td>\r\n          <td>{{ site.enterpriseUnitName }}</td>\r\n          <td>\r\n            <button type=\"button\" class=\"btn btn-info\" (click)='getStatus(site.siteName)'>\r\n              {{site.checkStatus}}\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button type=\"button\" class=\"btn btn-info\" (click)='generateXMLFile(site.siteName)'>\r\n              {{site.generateFile}}\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button type=\"button\" class=\"btn btn-info\" (click)='exportStatus(site.siteName)'>\r\n              {{site.ExportFile}}\r\n            </button>\r\n          </td>\r\n          <td>{{ site.PendingFile }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <form *ngIf=\"Sites\" class=\"pagination-wrapper\">\r\n    <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"5\"\r\n      previousLabel=\"{{'previous'}}\" nextLabel=\"{{'next'}}\" screenReaderPaginationLabel=\"Pagination\"\r\n      screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\r\n    </pagination-controls>\r\n    <div class=\"input-group input-group-sm\">\r\n      <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\">\r\n        <option>10</option>\r\n        <option>25</option>\r\n        <option>50</option>\r\n        <option>100</option>\r\n        <option>200</option>\r\n      </select>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/update-items-data/update-items-data.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/update-items-data/update-items-data.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtUpdateItemsDataUpdateItemsDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body-bg\">\n  <app-header [selectedTab]=\"'editData'\"></app-header>\n  <div class=\"above-table\">\n    <div class=\"table-title\">DEPARTMENTS > ITEM MANAGEMENT</div>\n    <div class=\"search-field-container\">\n      <input class=\"form-control search-field\" placeholder=\"{{searchHelp}}\" [(ngModel)]=\"searchKeyword\" />\n      <mat-icon class=\"cursor-pointer\" matRipple>search</mat-icon>\n    </div>\n  </div>\n  <div class=\"table-container\">\n    <table>\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Name</th>\n          <th>Description</th>\n          <th>ItemCode</th>\n          <th>Price</th>\n          <th>Quantity</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let i of items | itemsFilter : searchKeyword : searchFields | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}\">\n          <td>{{ i.id }}</td>\n          <td>{{ i.name }}</td>\n          <td>{{ i.desc }}</td>\n          <td>{{ i.itemCode }}</td>\n          <td>{{ i.itemPrice }}</td>\n          <td>{{ i.itemQuantity }}</td>\n          <td>\n            <mat-icon (click)=\"EdititemsFortheID(i)\" class=\"edit-icon\" matRipple>edit</mat-icon>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <form *ngIf=\"items\" class=\"pagination-wrapper\">\n    <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"5\"\n      previousLabel=\"{{'previous'}}\" nextLabel=\"{{'next'}}\" screenReaderPaginationLabel=\"Pagination\"\n      screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n    </pagination-controls>\n    <button mat-button (click)=\"goBack()\">BACK</button>\n    <div class=\"input-group input-group-sm\">\n      <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\">\n        <option>5</option>\n        <option>10</option>\n        <option>25</option>\n        <option>50</option>\n        <option>100</option>\n        <option>200</option>\n      </select>\n    </div>\n  </form>\n  <app-itemupdate *ngIf=\"openEditItem\" [selectedItem]=\"selectedItem\" (cancel)=\"openEditItem = false\" (update)=\"GetItemsForTheCat(catId)\"></app-itemupdate>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/user-mgmt/user-mgmt.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/user-mgmt/user-mgmt.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtUserMgmtUserMgmtComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body-bg\"><app-header [selectedTab]=\"'user'\"></app-header>\n\n<app-users [addButtonText]=\"'add-user'\" [subHeading]=\"'User Management'\"\n                        [columns]=\"userTableHeaderColumns\" [searchFields]=\"searchFields\" [searchHelp]=\"searchHelp\"\n                        [list]=\"users\" (add)=\"onAdd()\" (edit)=\"onEdit($event)\"\n                        (delete)=\"onDelete($event)\"></app-users>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/users/users.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/users/users.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminMgmtUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"above-table\">\n  <div class=\"table-title\">{{ retailerName | uppercase }} {{ subHeading| uppercase }}</div>\n  <div class=\"search-field-container\">\n    <input class=\"form-control search-field\" placeholder=\"{{searchHelp}}\" [(ngModel)]=\"searchKeyword\"/>\n    <mat-icon class=\"cursor-pointer\" matRipple>search</mat-icon>\n  </div>\n  <button class=\"add-row-button\" matRipple (click)=\"onAdd()\"> + &nbsp; {{addButtonText}}</button>\n</div>\n\n<div class=\"table-container\">\n  <table>\n    <thead>\n    <tr>\n      <th *ngFor=\"let label of columns\">{{label.header}}</th>\n      <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of list | itemsFilter : searchKeyword : searchFields | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber}\">\n      <td *ngFor=\"let label of columns\">\n        {{label.field === 'customerPercentage' ? item[label.field] * 100 : label.field === 'stores' ? item[label.field].length : item[label.field]}}\n      </td>\n      <td>\n        <mat-icon (click)=\"onEdit(item)\" class=\"edit-icon\" matRipple>edit</mat-icon>\n        <mat-icon (click)=\"onDelete(item)\" matRipple>delete</mat-icon>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<form *ngIf=\"list\" class=\"pagination-wrapper\">\n  <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"5\"\n                       previousLabel=\"{{'previous'}}\" nextLabel=\"{{'next'}}\"\n                       screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n                       screenReaderCurrentLabel=\"You're on page\">\n  </pagination-controls>\n  <div class=\"input-group input-group-sm\">\n    <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\">\n      <option>10</option>\n      <option>25</option>\n      <option>50</option>\n      <option>100</option>\n      <option>200</option>\n    </select>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<app-loader></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-wrapper\">\n  <img src=\"assets/images/page-not-found.png\"/>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/header/header.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/header/header.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"retailer-header\">\n  <img class=\"header-logo\" src=\"../../../../assets/images/logo.png\"/>\n  <div class=\"logout\" matRipple (click)=\"logout()\">\n    <mat-icon>logout</mat-icon>\n    <div class=\"logout-text\">{{\"logout\" | uppercase}}</div>\n  </div>\n</div>\n<div class=\"switch-page-header\">\n  <div [ngClass]=\"{'highlight': selectedTab == 'user'}\" (click)=\"goToPage('users')\" class=\"page-selector-block\" matRipple>\n    {{'User Management'}}\n  </div>\n  <div [ngClass]=\"{'highlight': selectedTab == 'dataupload'}\" (click)=\"goToPage('dataupload')\" class=\"page-selector-block\" matRipple>\n    {{'Batch Update'}}\n  </div>\n  <div [ngClass]=\"{'highlight': selectedTab == 'editData'}\" (click)=\"goToPage('editData')\" class=\"page-selector-block\" matRipple>\n    {{'Item Management' }}\n  </div>\n  <div [ngClass]=\"{'highlight': selectedTab == 'sites'}\" (click)=\"goToPage('sites')\" class=\"page-selector-block\" matRipple>\n    {{'Site Management' }}\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDialogsSomethingWrongDialogSomethingWrongDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dialog-image\">\n  <img src=\"assets/images/sad-face.png\"/>\n</div>\n<div *ngIf=\"!data.rawTitle\" class=\"title\">{{data.title | translate}}</div>\n<div *ngIf=\"data.rawTitle\" class=\"title\">{{data.title}}</div>\n<div *ngIf=\"!data.rawDescription\" class=\"instruction\">{{data.description | translate}}</div>\n<div *ngIf=\"data.rawDescription\" class=\"instruction\">{{data.description}}</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/success-dialog/success-dialog.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/success-dialog/success-dialog.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDialogsSuccessDialogSuccessDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dialog-image\">\n  <img src=\"assets/images/check.png\"/>\n</div>\n<div class=\"title\">{{data.title | translate}}</div>\n<div class=\"instruction\">\n  <div *ngIf=\"data.descriptionPart1\" class=\"inline\">{{data.descriptionPart1 | translate}}</div>\n  <div *ngIf=\"data.highlightedData\" class=\"highlighted\">{{data.highlightedData}}</div>\n  <div *ngIf=\"data.descriptionPart2\" class=\"inline\">{{data.descriptionPart2 | translate}}</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"shouldShow\" class=\"spinner-container\">\n  <img class=\"loader-gif\" src=\"{{loaderImage}}\">\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/start/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"formModel\" (submit)=\"signIn()\">\n  <div class=\"form-group\"\n       [ngClass]=\"{'has-error': formModel.get('username').touched && formModel.get('username').errors}\">\n    <input class=\"form-control\" formControlName=\"username\" placeholder=\"{{ 'email' | translate }}\"\n           [ngClass]=\"{'has-error': formModel.get('username').touched && formModel.get('username').errors}\">\n  </div>\n  <label class=\"error-message\" *ngIf=\"formModel.get('username').touched && formModel.get('username').errors?.required\">\n    {{\"required-field-error\" | translate}}\n  </label>\n  <label class=\"error-message\" *ngIf=\"formModel.get('username').touched && formModel.get('username').errors?.email\">\n    {{\"invalid-email-error\" | translate}}\n  </label>\n  <div class=\"form-group has-icon\"\n       [ngClass]=\"{'has-error': formModel.get('password').touched && formModel.get('password').errors}\">\n    <input class=\"form-control\" [type]=\"hidePassword ? 'password' : 'text'\" formControlName=\"password\"\n           placeholder=\"{{ 'password' | translate }}\"\n           [ngClass]=\"{'has-error': formModel.get('password').touched && formModel.get('password').errors}\">\n  </div>\n  <label class=\"error-message\"\n         *ngIf=\"formModel.get('password').touched && formModel.get('password').errors?.required\">\n    {{\"required-field-error\" | translate}}\n  </label>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"button\" matRipple\n            [disabled]=\"!formModel.valid || isSignInExecuting\">{{\"sign-in\" | translate | uppercase}}</button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-wrapper\">\n  <div class=\"wrapper\">\n    <div class=\"logo\">\n      <img src=\"assets/images/logo.png\"/>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin-mgmt/admin-mgmt-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin-mgmt/admin-mgmt-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AdminMgmtRoutingModule */

  /***/
  function srcAppAdminMgmtAdminMgmtRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminMgmtRoutingModule", function () {
      return AdminMgmtRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _itemupdate_itemupdate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./itemupdate/itemupdate.component */
    "./src/app/admin-mgmt/itemupdate/itemupdate.component.ts");
    /* harmony import */


    var _enrolluser_enrolluser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./enrolluser/enrolluser.component */
    "./src/app/admin-mgmt/enrolluser/enrolluser.component.ts");
    /* harmony import */


    var _data_upload_data_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data-upload/data-upload.component */
    "./src/app/admin-mgmt/data-upload/data-upload.component.ts");
    /* harmony import */


    var _admin_mgmt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-mgmt.component */
    "./src/app/admin-mgmt/admin-mgmt.component.ts");
    /* harmony import */


    var _update_items_data_update_items_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-items-data/update-items-data.component */
    "./src/app/admin-mgmt/update-items-data/update-items-data.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sites_sites_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sites/sites.component */
    "./src/app/admin-mgmt/sites/sites.component.ts");
    /* harmony import */


    var _user_mgmt_user_mgmt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-mgmt/user-mgmt.component */
    "./src/app/admin-mgmt/user-mgmt/user-mgmt.component.ts");
    /* harmony import */


    var _item_mgmt_item_mgmt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./item-mgmt/item-mgmt.component */
    "./src/app/admin-mgmt/item-mgmt/item-mgmt.component.ts");
    /* harmony import */


    var _itemedit_itemedit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./itemedit/itemedit.component */
    "./src/app/admin-mgmt/itemedit/itemedit.component.ts");

    var routes = [{
      path: "",
      redirectTo: "users",
      pathMatch: "full"
    }, {
      path: "options",
      component: _admin_mgmt_component__WEBPACK_IMPORTED_MODULE_4__["AdminMgmtComponent"]
    }, {
      path: "dataupload",
      component: _data_upload_data_upload_component__WEBPACK_IMPORTED_MODULE_3__["DataUploadComponent"]
    }, {
      path: "enrolluser",
      component: _enrolluser_enrolluser_component__WEBPACK_IMPORTED_MODULE_2__["EnrolluserComponent"]
    }, {
      path: "users",
      component: _user_mgmt_user_mgmt_component__WEBPACK_IMPORTED_MODULE_9__["UserMgmtComponent"]
    }, {
      path: "editData",
      component: _item_mgmt_item_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["ItemMgmtComponent"]
    }, {
      path: "itemDetails/:id",
      component: _update_items_data_update_items_data_component__WEBPACK_IMPORTED_MODULE_5__["UpdateItemsDataComponent"]
    }, {
      path: "itemUpdate",
      component: _itemupdate_itemupdate_component__WEBPACK_IMPORTED_MODULE_1__["ItemupdateComponent"]
    }, {
      path: 'sites',
      component: _sites_sites_component__WEBPACK_IMPORTED_MODULE_8__["SitesComponent"]
    }, {
      path: 'itemedit',
      component: _itemedit_itemedit_component__WEBPACK_IMPORTED_MODULE_11__["ItemeditComponent"]
    }];

    var AdminMgmtRoutingModule = function AdminMgmtRoutingModule() {
      _classCallCheck(this, AdminMgmtRoutingModule);
    };

    AdminMgmtRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], AdminMgmtRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/admin-mgmt.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/admin-mgmt/admin-mgmt.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtAdminMgmtComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1nbXQvYWRtaW4tbWdtdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/admin-mgmt.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin-mgmt/admin-mgmt.component.ts ***!
    \****************************************************/

  /*! exports provided: AdminMgmtComponent */

  /***/
  function srcAppAdminMgmtAdminMgmtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminMgmtComponent", function () {
      return AdminMgmtComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");

    var AdminMgmtComponent = /*#__PURE__*/function () {
      function AdminMgmtComponent(router, stateService) {
        _classCallCheck(this, AdminMgmtComponent);

        this.router = router;
        this.stateService = stateService;
      }

      _createClass(AdminMgmtComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doUploadData",
        value: function doUploadData() {
          this.router.navigate(["admin/dataupload"]);
        }
      }, {
        key: "doLogoutClick",
        value: function doLogoutClick() {
          this.stateService.clearAll();
          this.router.navigate([""]);
        }
      }, {
        key: "enrolluser",
        value: function enrolluser() {
          this.router.navigate(["admin/enrolluser"]);
        }
      }, {
        key: "UpdateItems",
        value: function UpdateItems() {
          this.router.navigate(["admin/editData"]);
        }
      }, {
        key: "sitesDetails",
        value: function sitesDetails() {
          this.router.navigate(["admin/sites"]);
        }
      }]);

      return AdminMgmtComponent;
    }();

    AdminMgmtComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
      }];
    };

    AdminMgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin-mgmt",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-mgmt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/admin-mgmt.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-mgmt.component.scss */
      "./src/app/admin-mgmt/admin-mgmt.component.scss"))["default"]]
    })], AdminMgmtComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/admin-mgmt.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin-mgmt/admin-mgmt.module.ts ***!
    \*************************************************/

  /*! exports provided: AdminMgmtModule */

  /***/
  function srcAppAdminMgmtAdminMgmtModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminMgmtModule", function () {
      return AdminMgmtModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin-mgmt-routing.module */
    "./src/app/admin-mgmt/admin-mgmt-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admin_mgmt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-mgmt.component */
    "./src/app/admin-mgmt/admin-mgmt.component.ts");
    /* harmony import */


    var _data_upload_data_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data-upload/data-upload.component */
    "./src/app/admin-mgmt/data-upload/data-upload.component.ts");
    /* harmony import */


    var _enrolluser_enrolluser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./enrolluser/enrolluser.component */
    "./src/app/admin-mgmt/enrolluser/enrolluser.component.ts");
    /* harmony import */


    var _update_items_data_update_items_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./update-items-data/update-items-data.component */
    "./src/app/admin-mgmt/update-items-data/update-items-data.component.ts");
    /* harmony import */


    var _itemupdate_itemupdate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./itemupdate/itemupdate.component */
    "./src/app/admin-mgmt/itemupdate/itemupdate.component.ts");
    /* harmony import */


    var _sites_sites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sites/sites.component */
    "./src/app/admin-mgmt/sites/sites.component.ts");
    /* harmony import */


    var _user_mgmt_user_mgmt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-mgmt/user-mgmt.component */
    "./src/app/admin-mgmt/user-mgmt/user-mgmt.component.ts");
    /* harmony import */


    var _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/component/header/header.component */
    "./src/app/shared/component/header/header.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/admin-mgmt/users/users.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _pipes_items_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../pipes/items-filter.pipe */
    "./src/app/pipes/items-filter.pipe.ts");
    /* harmony import */


    var _item_mgmt_item_mgmt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./item-mgmt/item-mgmt.component */
    "./src/app/admin-mgmt/item-mgmt/item-mgmt.component.ts");
    /* harmony import */


    var _itemedit_itemedit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./itemedit/itemedit.component */
    "./src/app/admin-mgmt/itemedit/itemedit.component.ts");

    var AdminMgmtModule = function AdminMgmtModule() {
      _classCallCheck(this, AdminMgmtModule);
    };

    AdminMgmtModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_admin_mgmt_component__WEBPACK_IMPORTED_MODULE_4__["AdminMgmtComponent"], _data_upload_data_upload_component__WEBPACK_IMPORTED_MODULE_5__["DataUploadComponent"], _enrolluser_enrolluser_component__WEBPACK_IMPORTED_MODULE_6__["EnrolluserComponent"], _update_items_data_update_items_data_component__WEBPACK_IMPORTED_MODULE_7__["UpdateItemsDataComponent"], _itemupdate_itemupdate_component__WEBPACK_IMPORTED_MODULE_8__["ItemupdateComponent"], _item_mgmt_item_mgmt_component__WEBPACK_IMPORTED_MODULE_17__["ItemMgmtComponent"], _sites_sites_component__WEBPACK_IMPORTED_MODULE_9__["SitesComponent"], _user_mgmt_user_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["UserMgmtComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"], _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _pipes_items_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["ItemsFilterPipe"], _itemedit_itemedit_component__WEBPACK_IMPORTED_MODULE_18__["ItemeditComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _admin_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminMgmtRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]
    })], AdminMgmtModule);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/data-upload/data-upload.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-mgmt/data-upload/data-upload.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtDataUploadDataUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body-bg {\n  background-color: #ffffff;\n}\n\n.subnmenu-container {\n  position: absolute;\n  width: 100%;\n  top: 51px;\n  height: 92.5%;\n}\n\n.subnmenu-body {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.submenu-header {\n  flex: 10%;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.submenu-heading {\n  position: absolute;\n  top: 235px;\n  text-align: center;\n  width: 100%;\n  letter-spacing: 2.92px;\n  color: #361808;\n  text-shadow: 0px 3px 30px #36180833;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-size: 52px;\n  font-weight: 800;\n}\n\n.submenu-sub-heading {\n  position: absolute;\n  top: 360px;\n  margin-left: 35px;\n  width: 85%;\n  height: 200px;\n  text-align: left;\n  font-family: \"Open Sans Light\";\n  font-size: 24px;\n  letter-spacing: 0px;\n  color: #2c1407;\n  overflow: hidden;\n}\n\n.submenu-list-coloum {\n  flex: 70%;\n  height: 89%;\n  overflow: hidden;\n  background-color: #FFFFFF;\n}\n\n.container-div {\n  background-color: #FFFFFF;\n  height: 90%;\n}\n\n.totalDiv {\n  background-color: #A6CE39;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #361808;\n  text-shadow: 0px 3px 30px #36180833;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-size: 24px;\n  font-weight: 600;\n  padding: 3%;\n}\n\n.above-table {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 5%;\n}\n\n@media (max-width: 767px) {\n  .above-table {\n    flex-direction: column;\n  }\n}\n\n.above-table .table-title {\n  color: #0F7A86;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.above-table .search-field-container {\n  width: 35%;\n  border-bottom: 1px dotted #888;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  .above-table .search-field-container {\n    width: 100%;\n    margin: 15px 0 20px;\n  }\n}\n\n.above-table .search-field-container .search-field {\n  font-size: 14px;\n  border-color: #FFFFFF;\n}\n\n.above-table .search-field-container .cursor-pointer {\n  cursor: pointer;\n}\n\n.above-table .add-row-button {\n  background: #0F7A86;\n  border: #0F7A86;\n  color: #FFFFFF;\n}\n\n.table-container {\n  overflow-x: scroll;\n  width: 100%;\n}\n\n@media (max-width: 767px) {\n  .table-container table {\n    min-width: 1024px;\n  }\n}\n\n.table-container table thead {\n  background-color: #F4F4F4;\n  height: 45px;\n}\n\n.table-container table tbody tr {\n  border-bottom: 1px solid #CCC;\n  min-height: 55px;\n}\n\n.table-container table thead, .table-container table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  text-align: center;\n}\n\n.table-container table .edit-icon {\n  margin-right: 10px;\n}\n\n.header {\n  text-align: center;\n}\n\n.header h1 {\n  font-family: serif;\n  font-size: 38px;\n  font-family: \"Times New Roman\";\n}\n\n.content {\n  margin: 100px;\n}\n\n.margin25 {\n  margin: 25px;\n}\n\n.upload {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWdtdC9kYXRhLXVwbG9hZC9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhcHBcXGFkbWluLW1nbXRcXGRhdGEtdXBsb2FkXFxkYXRhLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC9kYXRhLXVwbG9hZC9kYXRhLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC9kYXRhLXVwbG9hZC9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUY7O0FERUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRTVDWTtBRGdEZDs7QUREQTtFQUNFLHlCRWhEWTtFRmlEWixXQUFBO0FDSUY7O0FERUE7RUFDRSx5QkVoRWM7RUZpRWQsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFRTtFQU5GO0lBT0ksc0JBQUE7RUNDRjtBQUNGOztBRENFO0VBQ0UsY0UxRG1CO0VGMkRuQixnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVJO0VBTkY7SUFPSSxXQUFBO0lBQ0EsbUJBQUE7RUNDSjtBQUNGOztBRENJO0VBQ0UsZUFBQTtFQUNBLHFCRW5HUTtBRG9HZDs7QURFSTtFQUNFLGVBQUE7QUNBTjs7QURJRTtFQUNFLG1CRXJGbUI7RUZzRm5CLGVFdEZtQjtFRnVGbkIsY0U5R1U7QUQ0R2Q7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURNSTtFQUZGO0lBR0ksaUJBQUE7RUNISjtBQUNGOztBREtJO0VBQ0UseUJFbEhvQjtFRm1IcEIsWUFBQTtBQ0hOOztBRE1JO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQ0pOOztBRE9JO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTE47O0FEUUk7RUFDRSxrQkFBQTtBQ05OOztBRFdBO0VBQ0Usa0JBQUE7QUNSRjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDUkY7O0FEV0E7RUFDRSxhQUFBO0FDUkY7O0FEV0E7RUFDRSxZQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1tZ210L2RhdGEtdXBsb2FkL2RhdGEtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzLnNjc3NcIjtcblxuLmJvZHktYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zdWJubWVudS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUxcHg7XG4gIGhlaWdodDogOTIuNSU7XG59XG4uc3Vibm1lbnUtYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zdWJtZW51LWhlYWRlciB7XG4gIGZsZXg6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN1Ym1lbnUtaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuOTJweDtcbiAgY29sb3I6ICMzNjE4MDg7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDMwcHggIzM2MTgwODMzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLnN1Ym1lbnUtc3ViLWhlYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzJjMTQwNztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zdWJtZW51LWxpc3QtY29sb3VtIHtcbiAgZmxleDogNzAlO1xuICBoZWlnaHQ6IDg5JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xufVxuXG4uY29udGFpbmVyLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgaGVpZ2h0OiA5MCU7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC8vIG1heC13aWR0aDogMTAwdnc7XG4gICAgLy8gb3ZlcmZsb3cteDogYXV0bztcbiAgfVxufVxuLnRvdGFsRGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZ3JlZW47XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjMzYxODA4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzMHB4ICMzNjE4MDgzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5hYm92ZS10YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA1JTtcblxuICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudGFibGUtdGl0bGUge1xuICAgIGNvbG9yOiAkbWFpbi1oaWdobGlnaHQtY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICR0cnVlLWdyZXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWZpZWxkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuICAgIH1cblxuICAgIC5jdXJzb3ItcG9pbnRlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmFkZC1yb3ctYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1oaWdobGlnaHQtY29sb3I7XG4gICAgYm9yZGVyOiAkbWFpbi1oaWdobGlnaHQtY29sb3I7XG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgfVxufVxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgdGFibGUge1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcbiAgICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG5cbiAgICB0Ym9keSB0ciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICAgIH1cblxuICAgIHRoZWFkLCB0Ym9keSB0ciB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZWRpdC1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAxMDBweDtcbn1cblxuLm1hcmdpbjI1IHtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4udXBsb2FkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi5ib2R5LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnN1Ym5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTFweDtcbiAgaGVpZ2h0OiA5Mi41JTtcbn1cblxuLnN1Ym5tZW51LWJvZHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdWJtZW51LWhlYWRlciB7XG4gIGZsZXg6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VibWVudS1oZWFkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBsZXR0ZXItc3BhY2luZzogMi45MnB4O1xuICBjb2xvcjogIzM2MTgwODtcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMzBweCAjMzYxODA4MzM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDUycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5zdWJtZW51LXN1Yi1oZWFkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2MHB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIExpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICMyYzE0MDc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWJtZW51LWxpc3QtY29sb3VtIHtcbiAgZmxleDogNzAlO1xuICBoZWlnaHQ6IDg5JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLmNvbnRhaW5lci1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDkwJTtcbn1cbi50b3RhbERpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNkNFMzk7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjMzYxODA4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzMHB4ICMzNjE4MDgzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5hYm92ZS10YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWJvdmUtdGFibGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5hYm92ZS10YWJsZSAudGFibGUtdGl0bGUge1xuICBjb2xvcjogIzBGN0E4NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmFib3ZlLXRhYmxlIC5zZWFyY2gtZmllbGQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM1JTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjODg4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcbiAgfVxufVxuLmFib3ZlLXRhYmxlIC5zZWFyY2gtZmllbGQtY29udGFpbmVyIC5zZWFyY2gtZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbn1cbi5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciAuY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWJvdmUtdGFibGUgLmFkZC1yb3ctYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzBGN0E4NjtcbiAgYm9yZGVyOiAjMEY3QTg2O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB7XG4gICAgbWluLXdpZHRoOiAxMDI0cHg7XG4gIH1cbn1cbi50YWJsZS1jb250YWluZXIgdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4udGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gIG1pbi1oZWlnaHQ6IDU1cHg7XG59XG4udGFibGUtY29udGFpbmVyIHRhYmxlIHRoZWFkLCAudGFibGUtY29udGFpbmVyIHRhYmxlIHRib2R5IHRyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFibGUtY29udGFpbmVyIHRhYmxlIC5lZGl0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIgaDEge1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCI7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAxMDBweDtcbn1cblxuLm1hcmdpbjI1IHtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4udXBsb2FkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIiRuY3ItZ3JlZW46ICM1NEI5NDg7XG4kcHJpbWFyeS1hcHAtY29sb3I6ICNBNkNFMzk7XG4kcHJpbWFyeS1ncmVlbjogI0E2Q0UzOTtcbiR0aGVtZS1jb2xvcjogIzk1QkUzMTtcbiR0ZXh0LWdyZWVuOiAjNTBCOTQ4O1xuJGxpZ2h0LWdyZWVuLWJhY2tncm91bmQ6ICNGNEY5RTc7XG4kYnV0dG9uLWRpc2FibGVkLWRlZmF1bHQ6ICNEM0QzRDM7XG4kZXJyb3ItcmVkOiAjRkYwQzNFO1xuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcbiRkYXJrLXRlYWwtY29sb3I6ICMwRjdBODY7XG4kYnV0dG9uLWRlbGV0ZS1yZXNlcnZhdGlvbi1jb2xvcjogI0M5QzlDOTtcbiRzbG90LWNvZGUtY29sb3I6ICM0MDdFODk7XG4kZ3JleS1jb2xvcjogI0YwRjBGMDtcbiRkaXNhYmxlZC1pbnB1dC1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xuJGRpc2FibGVkLXRleHQtY29sb3I6ICM4ODg7XG4kZ3JleS1idXR0b24tb3V0bGluZTogIzg4ODtcbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTs7XG4kZ3JleS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kOiAjRjRGNEY0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcblxuJGlwaG9uZTUtd2lkdGg6IDMyMHB4O1xuJGlwaG9uZTUtaGVpZ2h0OiA1NjhweDtcbiRoZWFkZXItaGVpZ2h0OiA4MHB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlwYWQtd2lkdGg6IDc2OHB4O1xuJHN3aXRjaC1wYWdlLWhlYWRlci1oZWlnaHQ6IDQ1cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kdGFiLWJhY2tncm91bmQ6ICNDM0UzRDk7XG4kbWFpbi1oaWdobGlnaHQtY29sb3I6ICMwRjdBODY7XG4kdHJ1ZS1ncmV5OiAjODg4O1xuJGxpZ2h0LWdyZXk6ICNDQ0M7XG5cblxuXG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/data-upload/data-upload.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin-mgmt/data-upload/data-upload.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DataUploadComponent */

  /***/
  function srcAppAdminMgmtDataUploadDataUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataUploadComponent", function () {
      return DataUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! papaparse */
    "./node_modules/papaparse/papaparse.min.js");
    /* harmony import */


    var papaparse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var DataUploadComponent = /*#__PURE__*/function () {
      function DataUploadComponent(router, http) {
        _classCallCheck(this, DataUploadComponent);

        this.router = router;
        this.http = http;
      }

      _createClass(DataUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange(files) {
          var _this = this;

          if (files[0]) {
            console.log(files[0]);
            papaparse__WEBPACK_IMPORTED_MODULE_4__["parse"](files[0], {
              header: true,
              skipEmptyLines: true,
              complete: function complete(result, file) {
                console.log("list :" + JSON.stringify(result));
                _this.dataList = result.data;
                _this.keys = result.meta.fields;
              }
            });
          }
        }
      }, {
        key: "UploadData",
        value: function UploadData() {}
      }, {
        key: "goBacktoAdmin",
        value: function goBacktoAdmin() {
          this.router.navigate(["admin"]);
        }
      }, {
        key: "fileChange",
        value: function fileChange(element) {
          this.uploadedFiles = element.target.files;
        }
      }, {
        key: "upload",
        value: function upload() {
          var formData = new FormData();

          for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
          }

          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl + '/upload', formData).subscribe(function (response) {
            console.log('response received is ', response);
          });
        }
      }]);

      return DataUploadComponent;
    }();

    DataUploadComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DataUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-data-upload",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data-upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/data-upload/data-upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data-upload.component.scss */
      "./src/app/admin-mgmt/data-upload/data-upload.component.scss"))["default"]]
    })], DataUploadComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/enrolluser/enrolluser.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/admin-mgmt/enrolluser/enrolluser.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtEnrolluserEnrolluserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1nbXQvZW5yb2xsdXNlci9lbnJvbGx1c2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/enrolluser/enrolluser.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin-mgmt/enrolluser/enrolluser.component.ts ***!
    \***************************************************************/

  /*! exports provided: EnrolluserComponent */

  /***/
  function srcAppAdminMgmtEnrolluserEnrolluserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnrolluserComponent", function () {
      return EnrolluserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EnrolluserComponent = /*#__PURE__*/function () {
      function EnrolluserComponent(router) {
        _classCallCheck(this, EnrolluserComponent);

        this.router = router;
      }

      _createClass(EnrolluserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['admin/options']);
        }
      }]);

      return EnrolluserComponent;
    }();

    EnrolluserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    EnrolluserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-enrolluser',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./enrolluser.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/enrolluser/enrolluser.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./enrolluser.component.scss */
      "./src/app/admin-mgmt/enrolluser/enrolluser.component.scss"))["default"]]
    })], EnrolluserComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/item-mgmt/item-mgmt.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/admin-mgmt/item-mgmt/item-mgmt.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtItemMgmtItemMgmtComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body-bg {\n  background-color: #ffffff;\n}\n\n.above-table {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 5%;\n}\n\n@media (max-width: 767px) {\n  .above-table {\n    flex-direction: column;\n  }\n}\n\n.above-table .table-title {\n  color: #0F7A86;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.above-table .search-field-container {\n  width: 35%;\n  border-bottom: 1px dotted #888;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  .above-table .search-field-container {\n    width: 100%;\n    margin: 15px 0 20px;\n  }\n}\n\n.above-table .search-field-container .search-field {\n  font-size: 14px;\n  border-color: #FFFFFF;\n}\n\n.above-table .search-field-container .cursor-pointer {\n  cursor: pointer;\n}\n\n.above-table .add-row-button {\n  background: #0F7A86;\n  border: #0F7A86;\n  color: #FFFFFF;\n}\n\n@media (min-width: 768px) {\n  ::-webkit-scrollbar {\n    height: 0;\n  }\n}\n\n.table-container {\n  overflow-x: scroll;\n  width: 100%;\n}\n\n@media (max-width: 767px) {\n  .table-container table {\n    min-width: 1024px;\n  }\n}\n\n.table-container table thead {\n  background-color: #F4F4F4;\n  height: 45px;\n}\n\n.table-container table tbody tr {\n  border-bottom: 1px solid #CCC;\n  min-height: 55px;\n}\n\n.table-container table thead, .table-container table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  text-align: center;\n}\n\n.table-container table .edit-icon {\n  margin-right: 10px;\n}\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n}\n\n@media (max-width: 767px) {\n  .pagination-wrapper {\n    flex-direction: column-reverse;\n  }\n}\n\n.pagination-wrapper .my-pagination {\n  padding-left: 40px;\n}\n\n@media (max-width: 767px) {\n  .pagination-wrapper .my-pagination {\n    padding-left: 0;\n  }\n}\n\n.pagination-wrapper .input-group {\n  width: 70px;\n  margin-right: 80px;\n}\n\n@media (max-width: 767px) {\n  .pagination-wrapper .input-group {\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n}\n\n.subnmenu-container {\n  position: absolute;\n  width: 100%;\n  top: 51px;\n  height: 92.5%;\n}\n\n.subnmenu-body {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.submenu-header {\n  flex: 10%;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.submenu-heading {\n  position: absolute;\n  top: 235px;\n  text-align: center;\n  width: 100%;\n  letter-spacing: 2.92px;\n  color: #361808;\n  text-shadow: 0px 3px 30px #36180833;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-size: 52px;\n  font-weight: 800;\n}\n\n.submenu-sub-heading {\n  position: absolute;\n  top: 360px;\n  margin-left: 35px;\n  width: 85%;\n  height: 200px;\n  text-align: left;\n  font-family: \"Open Sans Light\";\n  font-size: 24px;\n  letter-spacing: 0px;\n  color: #2c1407;\n  overflow: hidden;\n}\n\n.submenu-list-coloum {\n  flex: 70%;\n  height: 89%;\n  overflow: hidden;\n  background-color: #FFFFFF;\n}\n\n.container-div {\n  background-color: #FFFFFF;\n  height: 90%;\n}\n\n.totalDiv {\n  background-color: #A6CE39;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #361808;\n  text-shadow: 0px 3px 30px #36180833;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-size: 24px;\n  font-weight: 600;\n  padding: 3%;\n}\n\ntable {\n  height: 80%;\n}\n\n@media (max-width: 767px) {\n  table {\n    min-width: 1024px;\n  }\n}\n\ntable tbody {\n  display: block;\n  max-height: 60vh;\n  overflow: auto;\n}\n\n@media (max-width: 1023px) {\n  table tbody {\n    max-height: unset;\n  }\n}\n\ntable tbody tr {\n  margin: 10px 0 10px 0;\n  border-bottom: 1px solid #d1d1d1;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 25px;\n}\n\ntable thead {\n  background-color: #F4F4F4;\n  font-weight: normal;\n  font-size: 16px;\n  height: 46px;\n}\n\ntable thead,\ntable tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  font-family: Roboto;\n  font-style: normal;\n  text-align: center;\n  letter-spacing: 0.15px;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n\ntable thead button,\ntable tbody tr button {\n  border: none;\n  background-color: transparent;\n}\n\ntable thead button .icon-delete_1::before,\ntable tbody tr button .icon-delete_1::before {\n  color: #000000;\n}\n\n.cat_img {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 80px;\n}\n\n.level-right {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  width: 360px;\n  height: 97px;\n  background: #dc3545 0% 0% no-repeat padding-box;\n  opacity: 1;\n  font: Bold 32.5px/97px Open Sans;\n}\n\n.level-text {\n  text-align: center;\n  letter-spacing: 1.76px;\n  color: #361808;\n  text-transform: uppercase;\n}\n\nspan {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWdtdC9pdGVtLW1nbXQvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXBwXFxhZG1pbi1tZ210XFxpdGVtLW1nbXRcXGl0ZW0tbWdtdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC9pdGVtLW1nbXQvaXRlbS1tZ210LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1tZ210L2l0ZW0tbWdtdC9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdFO0VBTkY7SUFPSSxzQkFBQTtFQ0FGO0FBQ0Y7O0FERUU7RUFDRSxjRWdCbUI7RUZmbkIsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHSTtFQU5GO0lBT0ksV0FBQTtJQUNBLG1CQUFBO0VDQUo7QUFDRjs7QURFSTtFQUNFLGVBQUE7RUFDQSxxQkV6QlE7QUR5QmQ7O0FER0k7RUFDRSxlQUFBO0FDRE47O0FES0U7RUFDRSxtQkVYbUI7RUZZbkIsZUVabUI7RUZhbkIsY0VwQ1U7QURpQ2Q7O0FET0E7RUFFRTtJQUNFLFNBQUE7RUNMRjtBQUNGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDTkY7O0FEVUk7RUFGRjtJQUdJLGlCQUFBO0VDUEo7QUFDRjs7QURTSTtFQUNFLHlCRWhEb0I7RUZpRHBCLFlBQUE7QUNQTjs7QURVSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNSTjs7QURXSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1ROOztBRFlJO0VBQ0Usa0JBQUE7QUNWTjs7QURtQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ2pCRjs7QURtQkU7RUFQRjtJQVFJLDhCQUFBO0VDaEJGO0FBQ0Y7O0FEa0JFO0VBQ0Usa0JBQUE7QUNoQko7O0FEa0JJO0VBSEY7SUFJSSxlQUFBO0VDZko7QUFDRjs7QURrQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNoQko7O0FEa0JJO0VBSkY7SUFLSSxlQUFBO0lBQ0EsbUJBQUE7RUNmSjtBQUNGOztBRG1CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDaEJGOztBRGtCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDZkY7O0FEaUJBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNkRjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDWkY7O0FEY0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJFbEtZO0FEdUpkOztBRGNBO0VBQ0UseUJFdEtZO0VGdUtaLFdBQUE7QUNYRjs7QURrQkE7RUFDRSx5QkV2TGM7RUZ3TGQsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsV0FBQTtBQ2hCRjs7QURpQkU7RUFGRjtJQUdJLGlCQUFBO0VDZEY7QUFDRjs7QURnQkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDZEo7O0FEZUk7RUFKRjtJQUtJLGlCQUFBO0VDWko7QUFDRjs7QURjSTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1pOOztBRGdCRTtFQUNFLHlCRTNNc0I7RUY0TXRCLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNkSjs7QURpQkU7O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ2hCSjs7QURpQkk7O0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FDZE47O0FEZ0JNOztFQUNFLGNFOU9NO0FEaU9kOztBRGtCQTtFQUNFLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNmRjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNiRjs7QURlQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tbWdtdC9pdGVtLW1nbXQvaXRlbS1tZ210LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzLnNjc3NcIjtcclxuXHJcbi5ib2R5LWJne1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5hYm92ZS10YWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDUlO1xyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC50YWJsZS10aXRsZSB7XHJcbiAgICBjb2xvcjogJG1haW4taGlnaGxpZ2h0LWNvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtZmllbGQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICR0cnVlLWdyZXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWZpZWxkIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRkLXJvdy1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogJG1haW4taGlnaGxpZ2h0LWNvbG9yO1xyXG4gICAgYm9yZGVyOiAkbWFpbi1oaWdobGlnaHQtY29sb3I7XHJcbiAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogJGlwYWQtd2lkdGgpIHtcclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHRhYmxlIHtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xyXG4gICAgICBtaW4td2lkdGg6IDEwMjRweDtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHRyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xyXG4gICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoZWFkLCB0Ym9keSB0ciB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHsgXHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2I5YjljZTsgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAubXktcGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdWJubWVudS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDUxcHg7XHJcbiAgaGVpZ2h0OiA5Mi41JTtcclxufVxyXG4uc3Vibm1lbnUtYm9keSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zdWJtZW51LWhlYWRlciB7XHJcbiAgZmxleDogMTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN1Ym1lbnUtaGVhZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAyLjkycHg7XHJcbiAgY29sb3I6ICMzNjE4MDg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMzBweCAjMzYxODA4MzM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uc3VibWVudS1zdWItaGVhZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIExpZ2h0XCI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICMyYzE0MDc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc3VibWVudS1saXN0LWNvbG91bSB7XHJcbiAgZmxleDogNzAlO1xyXG4gIGhlaWdodDogODklO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLy8gbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIC8vIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4udG90YWxEaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWdyZWVuO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY29sb3I6ICMzNjE4MDg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMzBweCAjMzYxODA4MzM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgbWluLXdpZHRoOiAxMDI0cHg7XHJcbiAgfVxyXG5cclxuICB0Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgICAgbWF4LWhlaWdodDogdW5zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHIge1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICB9XHJcblxyXG4gIHRoZWFkLFxyXG4gIHRib2R5IHRyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAuaWNvbi1kZWxldGVfMTo6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jYXRfaW1nIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbi5sZXZlbC1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIGhlaWdodDogOTdweDtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQ6IEJvbGQgMzIuNXB4Lzk3cHggT3BlbiBTYW5zO1xyXG59XHJcbi5sZXZlbC10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNzZweDtcclxuICBjb2xvcjogIzM2MTgwODtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbnNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuIiwiLmJvZHktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYWJvdmUtdGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggNSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFib3ZlLXRhYmxlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uYWJvdmUtdGFibGUgLnRhYmxlLXRpdGxlIHtcbiAgY29sb3I6ICMwRjdBODY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzg4ODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCAwIDIwcHg7XG4gIH1cbn1cbi5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciAuc2VhcmNoLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG4uYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIgLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFib3ZlLXRhYmxlIC5hZGQtcm93LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMwRjdBODY7XG4gIGJvcmRlcjogIzBGN0E4NjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cbi50YWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC50YWJsZS1jb250YWluZXIgdGFibGUge1xuICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICB9XG59XG4udGFibGUtY29udGFpbmVyIHRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICBtaW4taGVpZ2h0OiA1NXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0aGVhZCwgLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSAuZWRpdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnBhZ2luYXRpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhZ2luYXRpb24td3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG4ucGFnaW5hdGlvbi13cmFwcGVyIC5teS1wYWdpbmF0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wYWdpbmF0aW9uLXdyYXBwZXIgLm15LXBhZ2luYXRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuLnBhZ2luYXRpb24td3JhcHBlciAuaW5wdXQtZ3JvdXAge1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wYWdpbmF0aW9uLXdyYXBwZXIgLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuXG4uc3Vibm1lbnUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1MXB4O1xuICBoZWlnaHQ6IDkyLjUlO1xufVxuXG4uc3Vibm1lbnUtYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN1Ym1lbnUtaGVhZGVyIHtcbiAgZmxleDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJtZW51LWhlYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAyLjkycHg7XG4gIGNvbG9yOiAjMzYxODA4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzMHB4ICMzNjE4MDgzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnN1Ym1lbnUtc3ViLWhlYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgTGlnaHRcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzJjMTQwNztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN1Ym1lbnUtbGlzdC1jb2xvdW0ge1xuICBmbGV4OiA3MCU7XG4gIGhlaWdodDogODklO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY29udGFpbmVyLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGhlaWdodDogOTAlO1xufVxuLnRvdGFsRGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E2Q0UzOTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICMzNjE4MDg7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDMwcHggIzM2MTgwODMzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAzJTtcbn1cblxudGFibGUge1xuICBoZWlnaHQ6IDgwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICB0YWJsZSB7XG4gICAgbWluLXdpZHRoOiAxMDI0cHg7XG4gIH1cbn1cbnRhYmxlIHRib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICB0YWJsZSB0Ym9keSB7XG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XG4gIH1cbn1cbnRhYmxlIHRib2R5IHRyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDFkMTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbnRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG59XG50YWJsZSB0aGVhZCxcbnRhYmxlIHRib2R5IHRyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxudGFibGUgdGhlYWQgYnV0dG9uLFxudGFibGUgdGJvZHkgdHIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnRhYmxlIHRoZWFkIGJ1dHRvbiAuaWNvbi1kZWxldGVfMTo6YmVmb3JlLFxudGFibGUgdGJvZHkgdHIgYnV0dG9uIC5pY29uLWRlbGV0ZV8xOjpiZWZvcmUge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNhdF9pbWcge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubGV2ZWwtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogOTdweDtcbiAgYmFja2dyb3VuZDogI2RjMzU0NSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQ6IEJvbGQgMzIuNXB4Lzk3cHggT3BlbiBTYW5zO1xufVxuXG4ubGV2ZWwtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNzZweDtcbiAgY29sb3I6ICMzNjE4MDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59IiwiJG5jci1ncmVlbjogIzU0Qjk0ODtcbiRwcmltYXJ5LWFwcC1jb2xvcjogI0E2Q0UzOTtcbiRwcmltYXJ5LWdyZWVuOiAjQTZDRTM5O1xuJHRoZW1lLWNvbG9yOiAjOTVCRTMxO1xuJHRleHQtZ3JlZW46ICM1MEI5NDg7XG4kbGlnaHQtZ3JlZW4tYmFja2dyb3VuZDogI0Y0RjlFNztcbiRidXR0b24tZGlzYWJsZWQtZGVmYXVsdDogI0QzRDNEMztcbiRlcnJvci1yZWQ6ICNGRjBDM0U7XG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XG4kYmxhY2stb3ZlcmxheTogcmdiYSgwLCAwLCAwLCAwLjUpO1xuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xuJGRhcmstdGVhbC1jb2xvcjogIzBGN0E4NjtcbiRidXR0b24tZGVsZXRlLXJlc2VydmF0aW9uLWNvbG9yOiAjQzlDOUM5O1xuJHNsb3QtY29kZS1jb2xvcjogIzQwN0U4OTtcbiRncmV5LWNvbG9yOiAjRjBGMEYwO1xuJGRpc2FibGVkLWlucHV0LWJhY2tncm91bmQ6ICNGMkYyRjI7XG4kZGlzYWJsZWQtdGV4dC1jb2xvcjogIzg4ODtcbiRncmV5LWJ1dHRvbi1vdXRsaW5lOiAjODg4O1xuJGdyZXktdGV4dDogcmdiYSgwLCAwLCAwLCAwLjYpOztcbiRncmV5LWJhY2tncm91bmQ6ICNGM0YzRjM7XG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQ6ICNGNEY0RjQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuXG4kaXBob25lNS13aWR0aDogMzIwcHg7XG4kaXBob25lNS1oZWlnaHQ6IDU2OHB4O1xuJGhlYWRlci1oZWlnaHQ6IDgwcHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaXBhZC13aWR0aDogNzY4cHg7XG4kc3dpdGNoLXBhZ2UtaGVhZGVyLWhlaWdodDogNDVweDtcbiRoZWFkZXItdmVydGljYWwtcGFkZGluZzogMjVweDtcbiRpbmxpbmUtaWNvbi1tYXJnaW46IDdweDtcbiR0YWItYmFja2dyb3VuZDogI0MzRTNEOTtcbiRtYWluLWhpZ2hsaWdodC1jb2xvcjogIzBGN0E4NjtcbiR0cnVlLWdyZXk6ICM4ODg7XG4kbGlnaHQtZ3JleTogI0NDQztcblxuXG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/item-mgmt/item-mgmt.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin-mgmt/item-mgmt/item-mgmt.component.ts ***!
    \*************************************************************/

  /*! exports provided: ItemMgmtComponent */

  /***/
  function srcAppAdminMgmtItemMgmtItemMgmtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemMgmtComponent", function () {
      return ItemMgmtComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api/bsp-service.service */
    "./src/app/services/api/bsp-service.service.ts");
    /* harmony import */


    var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/loader/loader.service */
    "./src/app/shared/loader/loader.service.ts");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");

    var ItemMgmtComponent = /*#__PURE__*/function () {
      function ItemMgmtComponent(bspServiceService, loaderService, helperService, router, stateService) {
        _classCallCheck(this, ItemMgmtComponent);

        this.bspServiceService = bspServiceService;
        this.loaderService = loaderService;
        this.helperService = helperService;
        this.router = router;
        this.stateService = stateService;
        this.openItemDetails = false;
        this.searchFields = ['name', 'id'];
        this.searchHelp = "Name OR id";
        this.pageSize = 10;
        this.pageNumber = 1;
      }

      _createClass(ItemMgmtComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loaderService.show();
          this.bspServiceService.getCats().toPromise().then(function (cats) {
            _this2.cats = cats;
            console.log(cats);

            _this2.loaderService.dismiss();
          })["catch"](function (error) {
            _this2.loaderService.dismiss();

            _this2.helperService.openSomethingWrongDialog(error);
          });
        }
      }, {
        key: "ListitemsForCat",
        value: function ListitemsForCat(cat) {
          console.log('Navigate to List items page');
          console.log('Get item details for the Cat', cat);
          this.router.navigate(['admin/itemDetails', cat.id]); //thi.selectedCat = cat;
          //this.openItemDetails = true;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(page) {
          this.pageNumber = page;
        }
      }]);

      return ItemMgmtComponent;
    }();

    ItemMgmtComponent.ctorParameters = function () {
      return [{
        type: src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_4__["BspServiceService"]
      }, {
        type: src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }];
    };

    ItemMgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-mgmt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-mgmt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/item-mgmt/item-mgmt.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-mgmt.component.scss */
      "./src/app/admin-mgmt/item-mgmt/item-mgmt.component.scss"))["default"]]
    })], ItemMgmtComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/itemedit/itemedit.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/admin-mgmt/itemedit/itemedit.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtItemeditItemeditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1nbXQvaXRlbWVkaXQvaXRlbWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/itemedit/itemedit.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin-mgmt/itemedit/itemedit.component.ts ***!
    \***********************************************************/

  /*! exports provided: ItemeditComponent */

  /***/
  function srcAppAdminMgmtItemeditItemeditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemeditComponent", function () {
      return ItemeditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ItemeditComponent = /*#__PURE__*/function () {
      function ItemeditComponent() {
        _classCallCheck(this, ItemeditComponent);
      }

      _createClass(ItemeditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemeditComponent;
    }();

    ItemeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-itemedit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./itemedit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/itemedit/itemedit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./itemedit.component.scss */
      "./src/app/admin-mgmt/itemedit/itemedit.component.scss"))["default"]]
    })], ItemeditComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/itemupdate/itemupdate.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/admin-mgmt/itemupdate/itemupdate.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtItemupdateItemupdateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  margin: 0px;\n  background-image: none;\n  position: relative;\n  left: -700px;\n  width: 490px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n}\n\n.body-bg {\n  background-color: #ffffff;\n}\n\n.form_sketch {\n  border-color: transparent;\n  background-color: transparent;\n}\n\n.label {\n  color: white;\n  padding: 8px;\n  width: 100px;\n}\n\n.info {\n  background-color: #2196F3;\n  position: absolute;\n  left: 350px;\n  top: 160px;\n  width: 300px;\n  text-align: center;\n}\n\n/* Blue */\n\n#base {\n  position: absolute;\n  top: 15%;\n  z-index: 2;\n  width: 100%;\n  height: 85%;\n  background-color: #ffffff;\n}\n\n#item_details_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 233px;\n  height: 37px;\n  background: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 0px;\n  box-shadow: none;\n  font-family: \"Arial Bold\", \"Arial\", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n#item_details {\n  border-width: 0px;\n  position: absolute;\n  left: 350px;\n  top: 79px;\n  width: 233px;\n  height: 37px;\n  display: flex;\n  font-family: \"Arial Bold\", \"Arial\", sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n#item_details .text {\n  position: absolute;\n  align-self: flex-start;\n  padding: 0px 0px 0px 0px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_details_text {\n  border-width: 0px;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #f3f707;\n}\n\n#item_number_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 150px;\n  height: 25px;\n  background: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 0px;\n  box-shadow: none;\n  font-size: 17px;\n}\n\n#item_number_div11 {\n  border-width: 0px;\n  position: relative;\n  left: 450px;\n  top: 70px;\n  width: 100px;\n  height: 25px;\n  background: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 0px;\n  box-shadow: none;\n  font-size: 17px;\n}\n\n#item_number {\n  border-width: 0px;\n  position: absolute;\n  left: 160px;\n  top: 160px;\n  width: 150px;\n  height: 25px;\n  display: flex;\n  font-size: 17px;\n  font-family: \"Arial Bold\", \"Arial\", sans-serif;\n}\n\n#item_number .text {\n  position: absolute;\n  align-self: flex-start;\n  padding: 0px 0px 0px 0px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_number_text {\n  border-width: 0px;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #212529;\n}\n\n#item_text_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 150px;\n  height: 25px;\n  background: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 0px;\n  box-shadow: none;\n  font-size: 17px;\n}\n\n#item_text {\n  border-width: 0px;\n  position: absolute;\n  left: 160px;\n  top: 210px;\n  width: 150px;\n  height: 25px;\n  display: flex;\n  font-size: 17px;\n  font-family: \"Arial Bold\", \"Arial\", sans-serif;\n}\n\n#item_text .text {\n  position: absolute;\n  align-self: flex-start;\n  padding: 0px 0px 0px 0px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_text_text {\n  border-width: 0px;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #212529;\n  font-weight: 400;\n}\n\n#item_desc_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 150px;\n  height: 25px;\n  background: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 0px;\n  box-shadow: none;\n  font-size: 17px;\n}\n\n#item_desc {\n  border-width: 0px;\n  position: absolute;\n  left: 160px;\n  top: 260px;\n  width: 150px;\n  height: 25px;\n  display: flex;\n  font-size: 17px;\n  font-family: \"Arial Bold\", \"Arial\", sans-serif;\n}\n\n#item_desc .text {\n  position: absolute;\n  align-self: flex-start;\n  padding: 0px 0px 0px 0px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_desc_text {\n  border-width: 0px;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #212529;\n}\n\n#item_price_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 150px;\n  height: 25px;\n  background: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 0px;\n  box-shadow: none;\n  font-size: 17px;\n}\n\n#item_price {\n  border-width: 0px;\n  position: absolute;\n  left: 160px;\n  top: 310px;\n  width: 150px;\n  height: 25px;\n  display: flex;\n  font-size: 17px;\n  font-family: \"Arial Bold\", \"Arial\", sans-serif;\n}\n\n#item_price .text {\n  position: absolute;\n  align-self: flex-start;\n  padding: 0px 0px 0px 0px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_price_text {\n  border-width: 0px;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #212529;\n}\n\n#item_qty_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 150px;\n  height: 25px;\n  background: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  border-radius: 0px;\n  box-shadow: none;\n  font-size: 17px;\n}\n\n#item_qty {\n  border-width: 0px;\n  position: absolute;\n  left: 160px;\n  top: 360px;\n  width: 150px;\n  height: 25px;\n  display: flex;\n  font-size: 17px;\n  font-family: \"Arial Bold\", \"Arial\", sans-serif;\n}\n\n#item_qty .text {\n  position: absolute;\n  align-self: flex-start;\n  padding: 0px 0px 0px 0px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_qty_text {\n  border-width: 0px;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #212529;\n}\n\n#btn_update_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 140px;\n  height: 40px;\n  background: #0F7A86;\n  border: #0F7A86;\n  border-radius: 5px;\n  box-shadow: none;\n}\n\n#btn_update {\n  border-width: 0px;\n  position: absolute;\n  left: 213px;\n  top: 445px;\n  width: 140px;\n  height: 40px;\n  display: flex;\n}\n\n#btn_update .text {\n  position: absolute;\n  align-self: center;\n  padding: 15px 2px 2px 40px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#btn_update_text {\n  border-width: 0px;\n  align-self: center;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #FFFFFF;\n  font-weight: bold;\n}\n\n#btn_cancel_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 140px;\n  height: 40px;\n  background: #0F7A86;\n  border: #0F7A86;\n  color: #FFFFFF;\n  border-radius: 5px;\n  box-shadow: none;\n}\n\n#btn_cancel {\n  border-width: 0px;\n  position: absolute;\n  left: 416px;\n  top: 445px;\n  width: 140px;\n  height: 40px;\n  display: flex;\n}\n\n#btn_cancel .text {\n  position: absolute;\n  align-self: center;\n  padding: 15px 2px 2px 40px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#btn_cancel_text {\n  border-width: 0px;\n  word-wrap: break-word;\n  text-transform: none;\n  color: #FFFFFF;\n  font-weight: bold;\n}\n\n#item_num_ip_input {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_num_ip_input.disabled {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_num_ip_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_num_ip {\n  border-width: 0px;\n  position: absolute;\n  left: 350px;\n  top: 160px;\n  width: 300px;\n  height: 25px;\n  display: flex;\n}\n\n#item_num_ip .text {\n  position: absolute;\n  align-self: center;\n  padding: 2px 2px 2px 2px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_num_ip_div.disabled {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: #f0f0f0;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_name_ip_input {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_name_ip_input.disabled {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_name_ip_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_name_ip {\n  border-width: 0px;\n  position: absolute;\n  left: 350px;\n  top: 210px;\n  width: 300px;\n  height: 25px;\n  display: flex;\n}\n\n#item_name_ip .text {\n  position: absolute;\n  align-self: center;\n  padding: 2px 2px 2px 2px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_name_ip_div.disabled {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: #f0f0f0;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_desc_ip_input {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_desc_ip_input.disabled {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_desc_ip_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_desc_ip {\n  border-width: 0px;\n  position: absolute;\n  left: 350px;\n  top: 260px;\n  width: 300px;\n  height: 25px;\n  display: flex;\n}\n\n#item_desc_ip .text {\n  position: absolute;\n  align-self: center;\n  padding: 2px 2px 2px 2px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_desc_ip_div.disabled {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: #f0f0f0;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_price_ip_input {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_price_ip_input.disabled {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_price_ip_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_price_ip {\n  border-width: 0px;\n  position: absolute;\n  left: 350px;\n  top: 310px;\n  width: 300px;\n  height: 25px;\n  display: flex;\n}\n\n#item_price_ip .text {\n  position: absolute;\n  align-self: center;\n  padding: 2px 2px 2px 2px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_price_ip_div.disabled {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: #f0f0f0;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_qty_ip_input {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_qty_ip_input.disabled {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  padding: 2px 2px 2px 2px;\n  font-family: \"Arial\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: normal;\n  color: #000000;\n  vertical-align: none;\n  text-align: left;\n  text-transform: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n#item_qty_ip_div {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n#item_qty_ip {\n  border-width: 0px;\n  position: absolute;\n  left: 350px;\n  top: 360px;\n  width: 300px;\n  height: 25px;\n  display: flex;\n}\n\n#item_qty_ip .text {\n  position: absolute;\n  align-self: center;\n  padding: 2px 2px 2px 2px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n#item_qty_ip_div.disabled {\n  border-width: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 25px;\n  background: inherit;\n  background-color: #f0f0f0;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #797979;\n  border-radius: 0px;\n  box-shadow: none;\n}\n\n.table-container {\n  overflow-x: scroll;\n  width: 100%;\n}\n\n@media (max-width: 767px) {\n  .table-container table {\n    min-width: 1024px;\n  }\n}\n\n.table-container table thead {\n  background-color: #F4F4F4;\n  height: 45px;\n}\n\n.table-container table tbody tr {\n  border-bottom: 1px solid #CCC;\n  min-height: 55px;\n}\n\n.table-container table thead, .table-container table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  text-align: center;\n}\n\n.table-container table .edit-icon {\n  margin-right: 10px;\n}\n\n.above-table {\n  display: absolute;\n  top: 100px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 5%;\n}\n\n@media (max-width: 767px) {\n  .above-table {\n    flex-direction: column;\n  }\n}\n\n.above-table .table-title {\n  color: #0F7A86;\n  font-weight: 500;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWdtdC9pdGVtdXBkYXRlL0M6XFxVc2Vyc1xcUksxODUzMDJcXERvY3VtZW50c1xcTkNSXFxCU1BcXENPREVcXE9DVE9CRVJcXE5FV3djXFx0cnVua1xccmV0YWlsLWNsaWVudC9zcmNcXGFwcFxcYWRtaW4tbWdtdFxcaXRlbXVwZGF0ZVxcaXRlbXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC9pdGVtdXBkYXRlL2l0ZW11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLW1nbXQvaXRlbXVwZGF0ZS9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFBTyx5QkFBQTtFQUNMLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURIRSxTQUFBOztBQUVGO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURIQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1FGOztBRExBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ1FGOztBRE5BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGVBQUE7QUNVRjs7QURSQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQ1dGOztBRFRBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDWUY7O0FEVkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDYUY7O0FEVkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGVBQUE7QUNhRjs7QURYQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDZUY7O0FEYkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNnQkY7O0FEZEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGVBQUE7QUNpQkY7O0FEZkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUNrQkY7O0FEaEJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDbUJGOztBRGpCQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxlQUFBO0FDcUJGOztBRG5CQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQ3NCRjs7QURwQkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUN1QkY7O0FEckJBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ3dCRjs7QUR0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGVBQUE7QUN5QkY7O0FEdkJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO0FDMEJGOztBRHhCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQzJCRjs7QUR6QkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDNEJGOztBRDFCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBQzZCRjs7QUQzQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUM4QkY7O0FENUJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDK0JGOztBRDdCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDZ0NGOztBRDlCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7QUNpQ0Y7O0FEL0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDa0NGOztBRGhDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ21DRjs7QURqQ0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNvQ0Y7O0FEbENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ3FDRjs7QURuQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDc0NGOztBRHBDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBQ3VDRjs7QURyQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN3Q0Y7O0FEdENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDeUNGOztBRHZDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBQzBDRjs7QUR0Q0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDeUNGOztBRHZDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUMwQ0Y7O0FEeENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0FDMkNGOztBRHpDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQzRDRjs7QUQxQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUM2Q0Y7O0FEM0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0FDOENGOztBRDFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUM2Q0Y7O0FEM0NBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQzhDRjs7QUQ1Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7QUMrQ0Y7O0FEN0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDZ0RGOztBRDlDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ2lERjs7QUQvQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7QUNrREY7O0FEOUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ2lERjs7QUQvQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDa0RGOztBRGhEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBQ21ERjs7QURqREE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNvREY7O0FEbERBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcURGOztBRG5EQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBQ3NERjs7QURsREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDcURGOztBRG5EQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNzREY7O0FEcERBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0FDdURGOztBRHJEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3dERjs7QUR0REE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUN5REY7O0FEdkRBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0FDMERGOztBRHREQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ3lERjs7QURyREk7RUFGRjtJQUdJLGlCQUFBO0VDd0RKO0FBQ0Y7O0FEdERJO0VBQ0UseUJFN3pCb0I7RUY4ekJwQixZQUFBO0FDd0ROOztBRHJESTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUN1RE47O0FEcERJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDc0ROOztBRG5ESTtFQUNFLGtCQUFBO0FDcUROOztBRGpEQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ29ERjs7QURsREU7RUFQRjtJQVFJLHNCQUFBO0VDcURGO0FBQ0Y7O0FEbkRFO0VBQ0UsY0VqMUJtQjtFRmsxQm5CLGdCQUFBO0VBQ0EsZUFBQTtBQ3FESiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1nbXQvaXRlbXVwZGF0ZS9pdGVtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzLnNjc3NcIjtcblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC03MDBweDtcbiAgd2lkdGg6IDQ5MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmJvZHktYmd7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uZm9ybV9za2V0Y2gge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDoxMDBweDtcbn1cbi5pbmZvIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6MzUwcHg7XG4gIHRvcDogMTYwcHg7XG4gIHdpZHRoOjMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IC8qIEJsdWUgKi9cblxuI2Jhc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0Ojg1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbiNpdGVtX2RldGFpbHNfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDIzM3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiNpdGVtX2RldGFpbHMge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNTBweDtcbiAgdG9wOiA3OXB4O1xuICB3aWR0aDogMjMzcHg7XG4gIGhlaWdodDogMzdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiNpdGVtX2RldGFpbHMgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIFxufVxuI2l0ZW1fZGV0YWlsc190ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiNmM2Y3MDc7XG59XG4jaXRlbV9udW1iZXJfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuI2l0ZW1fbnVtYmVyX2RpdjExIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDUwcHg7XG4gIHRvcDogNzBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuI2l0ZW1fbnVtYmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTYwcHg7XG4gIHRvcDogMTYwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJvbGRcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuI2l0ZW1fbnVtYmVyIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2l0ZW1fbnVtYmVyX3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6IzIxMjUyOTtcbiAgXG59XG4jaXRlbV90ZXh0X2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbiNpdGVtX3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNjBweDtcbiAgdG9wOiAyMTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG4jaXRlbV90ZXh0IC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2l0ZW1fdGV4dF90ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiMyMTI1Mjk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4jaXRlbV9kZXNjX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbiNpdGVtX2Rlc2Mge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNjBweDtcbiAgdG9wOiAyNjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG4jaXRlbV9kZXNjIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2l0ZW1fZGVzY190ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiMyMTI1Mjk7XG59XG4jaXRlbV9wcmljZV9kaXYge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4jaXRlbV9wcmljZSB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2MHB4O1xuICB0b3A6IDMxMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJBcmlhbCBCb2xkXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cbiNpdGVtX3ByaWNlIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2l0ZW1fcHJpY2VfdGV4dCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjojMjEyNTI5O1xufVxuI2l0ZW1fcXR5X2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbiNpdGVtX3F0eSB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2MHB4O1xuICB0b3A6IDM2MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJBcmlhbCBCb2xkXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cbiNpdGVtX3F0eSAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cbiNpdGVtX3F0eV90ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiMyMTI1Mjk7XG59XG4jYnRuX3VwZGF0ZV9kaXYge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzBGN0E4NjtcbiAgYm9yZGVyOiAjMEY3QTg2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuI2J0bl91cGRhdGUge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMTNweDtcbiAgdG9wOiA0NDVweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jYnRuX3VwZGF0ZSAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDJweCAycHggNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jYnRuX3VwZGF0ZV90ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2J0bl9jYW5jZWxfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwRjdBODY7XG4gIGJvcmRlcjogIzBGN0E4NjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4jYnRuX2NhbmNlbCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQxNnB4O1xuICB0b3A6IDQ0NXB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNidG5fY2FuY2VsIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMnB4IDJweCA0MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cbiNidG5fY2FuY2VsX3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2l0ZW1fbnVtX2lwX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHZlcnRpY2FsLWFsaWduOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4jaXRlbV9udW1faXBfaW5wdXQuZGlzYWJsZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiNpdGVtX251bV9pcF9kaXYge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiNpdGVtX251bV9pcCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1MHB4O1xuICB0b3A6IDE2MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNpdGVtX251bV9pcCAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2l0ZW1fbnVtX2lwX2Rpdi5kaXNhYmxlZCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDEpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuI2l0ZW1fbnVtX2lwLmRpc2FibGVkIHtcbn1cbiNpdGVtX25hbWVfaXBfaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiNpdGVtX25hbWVfaXBfaW5wdXQuZGlzYWJsZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiNpdGVtX25hbWVfaXBfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4jaXRlbV9uYW1lX2lwIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzUwcHg7XG4gIHRvcDogMjEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2l0ZW1fbmFtZV9pcCAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2l0ZW1fbmFtZV9pcF9kaXYuZGlzYWJsZWQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiNpdGVtX25hbWVfaXAuZGlzYWJsZWQge1xufVxuI2l0ZW1fZGVzY19pcF9pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI2l0ZW1fZGVzY19pcF9pbnB1dC5kaXNhYmxlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI2l0ZW1fZGVzY19pcF9kaXYge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIxLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiNpdGVtX2Rlc2NfaXAge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNTBweDtcbiAgdG9wOiAyNjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jaXRlbV9kZXNjX2lwIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jaXRlbV9kZXNjX2lwX2Rpdi5kaXNhYmxlZCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDEpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuI2l0ZW1fZGVzY19pcC5kaXNhYmxlZCB7XG59XG4jaXRlbV9wcmljZV9pcF9pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI2l0ZW1fcHJpY2VfaXBfaW5wdXQuZGlzYWJsZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiNpdGVtX3ByaWNlX2lwX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDEpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuI2l0ZW1fcHJpY2VfaXAge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNTBweDtcbiAgdG9wOiAzMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jaXRlbV9wcmljZV9pcCAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2l0ZW1fcHJpY2VfaXBfZGl2LmRpc2FibGVkIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4jaXRlbV9wcmljZV9pcC5kaXNhYmxlZCB7XG59XG4jaXRlbV9xdHlfaXBfaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiNpdGVtX3F0eV9pcF9pbnB1dC5kaXNhYmxlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI2l0ZW1fcXR5X2lwX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDEpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuI2l0ZW1fcXR5X2lwIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzUwcHg7XG4gIHRvcDogMzYwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2l0ZW1fcXR5X2lwIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jaXRlbV9xdHlfaXBfZGl2LmRpc2FibGVkIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4jaXRlbV9xdHlfaXAuZGlzYWJsZWQge1xufVxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgdGFibGUge1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcbiAgICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG5cbiAgICB0Ym9keSB0ciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICAgIH1cblxuICAgIHRoZWFkLCB0Ym9keSB0ciB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZWRpdC1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbi5hYm92ZS10YWJsZSB7XG4gIGRpc3BsYXk6IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggNSU7XG5cbiAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRhYmxlLXRpdGxlIHtcbiAgICBjb2xvcjogJG1haW4taGlnaGxpZ2h0LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cblxufVxuIiwiYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC03MDBweDtcbiAgd2lkdGg6IDQ5MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYm9keS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb3JtX3NrZXRjaCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzUwcHg7XG4gIHRvcDogMTYwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBCbHVlICovXG4jYmFzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI2l0ZW1fZGV0YWlsc19kaXYge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMjMzcHg7XG4gIGhlaWdodDogMzdweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LWZhbWlseTogXCJBcmlhbCBCb2xkXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4jaXRlbV9kZXRhaWxzIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzUwcHg7XG4gIHRvcDogNzlweDtcbiAgd2lkdGg6IDIzM3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJvbGRcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbiNpdGVtX2RldGFpbHMgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNpdGVtX2RldGFpbHNfdGV4dCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogI2YzZjcwNztcbn1cblxuI2l0ZW1fbnVtYmVyX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI2l0ZW1fbnVtYmVyX2RpdjExIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDUwcHg7XG4gIHRvcDogNzBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jaXRlbV9udW1iZXIge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNjBweDtcbiAgdG9wOiAxNjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNpdGVtX251bWJlciAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2l0ZW1fbnVtYmVyX3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbiNpdGVtX3RleHRfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jaXRlbV90ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTYwcHg7XG4gIHRvcDogMjEwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJvbGRcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4jaXRlbV90ZXh0IC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaXRlbV90ZXh0X3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbiNpdGVtX2Rlc2NfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jaXRlbV9kZXNjIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTYwcHg7XG4gIHRvcDogMjYwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJvbGRcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4jaXRlbV9kZXNjIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaXRlbV9kZXNjX3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbiNpdGVtX3ByaWNlX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI2l0ZW1fcHJpY2Uge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNjBweDtcbiAgdG9wOiAzMTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNpdGVtX3ByaWNlIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaXRlbV9wcmljZV90ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4jaXRlbV9xdHlfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jaXRlbV9xdHkge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNjBweDtcbiAgdG9wOiAzNjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbiNpdGVtX3F0eSAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2l0ZW1fcXR5X3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbiNidG5fdXBkYXRlX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMEY3QTg2O1xuICBib3JkZXI6ICMwRjdBODY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiNidG5fdXBkYXRlIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjEzcHg7XG4gIHRvcDogNDQ1cHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jYnRuX3VwZGF0ZSAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDJweCAycHggNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNidG5fdXBkYXRlX3RleHQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNidG5fY2FuY2VsX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMEY3QTg2O1xuICBib3JkZXI6ICMwRjdBODY7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4jYnRuX2NhbmNlbCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQxNnB4O1xuICB0b3A6IDQ0NXB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2J0bl9jYW5jZWwgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAycHggMnB4IDQwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYnRuX2NhbmNlbF90ZXh0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2l0ZW1fbnVtX2lwX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHZlcnRpY2FsLWFsaWduOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNpdGVtX251bV9pcF9pbnB1dC5kaXNhYmxlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jaXRlbV9udW1faXBfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNzk3OTc5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4jaXRlbV9udW1faXAge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNTBweDtcbiAgdG9wOiAxNjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNpdGVtX251bV9pcCAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaXRlbV9udW1faXBfZGl2LmRpc2FibGVkIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM3OTc5Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiNpdGVtX25hbWVfaXBfaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2l0ZW1fbmFtZV9pcF9pbnB1dC5kaXNhYmxlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jaXRlbV9uYW1lX2lwX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzc5Nzk3OTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuI2l0ZW1fbmFtZV9pcCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1MHB4O1xuICB0b3A6IDIxMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2l0ZW1fbmFtZV9pcCAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaXRlbV9uYW1lX2lwX2Rpdi5kaXNhYmxlZCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNzk3OTc5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4jaXRlbV9kZXNjX2lwX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHZlcnRpY2FsLWFsaWduOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNpdGVtX2Rlc2NfaXBfaW5wdXQuZGlzYWJsZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2l0ZW1fZGVzY19pcF9kaXYge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM3OTc5Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiNpdGVtX2Rlc2NfaXAge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNTBweDtcbiAgdG9wOiAyNjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNpdGVtX2Rlc2NfaXAgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2l0ZW1fZGVzY19pcF9kaXYuZGlzYWJsZWQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzc5Nzk3OTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuI2l0ZW1fcHJpY2VfaXBfaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2l0ZW1fcHJpY2VfaXBfaW5wdXQuZGlzYWJsZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2l0ZW1fcHJpY2VfaXBfZGl2IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNzk3OTc5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4jaXRlbV9wcmljZV9pcCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1MHB4O1xuICB0b3A6IDMxMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2l0ZW1fcHJpY2VfaXAgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2l0ZW1fcHJpY2VfaXBfZGl2LmRpc2FibGVkIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM3OTc5Nzk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiNpdGVtX3F0eV9pcF9pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jaXRlbV9xdHlfaXBfaW5wdXQuZGlzYWJsZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdmVydGljYWwtYWxpZ246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2l0ZW1fcXR5X2lwX2RpdiB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzc5Nzk3OTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuI2l0ZW1fcXR5X2lwIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzUwcHg7XG4gIHRvcDogMzYwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jaXRlbV9xdHlfaXAgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2l0ZW1fcXR5X2lwX2Rpdi5kaXNhYmxlZCB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNzk3OTc5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcbiAgfVxufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gIGhlaWdodDogNDVweDtcbn1cbi50YWJsZS1jb250YWluZXIgdGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbiAgbWluLWhlaWdodDogNTVweDtcbn1cbi50YWJsZS1jb250YWluZXIgdGFibGUgdGhlYWQsIC50YWJsZS1jb250YWluZXIgdGFibGUgdGJvZHkgdHIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJsZS1jb250YWluZXIgdGFibGUgLmVkaXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmFib3ZlLXRhYmxlIHtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWJvdmUtdGFibGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5hYm92ZS10YWJsZSAudGFibGUtdGl0bGUge1xuICBjb2xvcjogIzBGN0E4NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSIsIiRuY3ItZ3JlZW46ICM1NEI5NDg7XG4kcHJpbWFyeS1hcHAtY29sb3I6ICNBNkNFMzk7XG4kcHJpbWFyeS1ncmVlbjogI0E2Q0UzOTtcbiR0aGVtZS1jb2xvcjogIzk1QkUzMTtcbiR0ZXh0LWdyZWVuOiAjNTBCOTQ4O1xuJGxpZ2h0LWdyZWVuLWJhY2tncm91bmQ6ICNGNEY5RTc7XG4kYnV0dG9uLWRpc2FibGVkLWRlZmF1bHQ6ICNEM0QzRDM7XG4kZXJyb3ItcmVkOiAjRkYwQzNFO1xuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcbiRkYXJrLXRlYWwtY29sb3I6ICMwRjdBODY7XG4kYnV0dG9uLWRlbGV0ZS1yZXNlcnZhdGlvbi1jb2xvcjogI0M5QzlDOTtcbiRzbG90LWNvZGUtY29sb3I6ICM0MDdFODk7XG4kZ3JleS1jb2xvcjogI0YwRjBGMDtcbiRkaXNhYmxlZC1pbnB1dC1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xuJGRpc2FibGVkLXRleHQtY29sb3I6ICM4ODg7XG4kZ3JleS1idXR0b24tb3V0bGluZTogIzg4ODtcbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTs7XG4kZ3JleS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kOiAjRjRGNEY0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcblxuJGlwaG9uZTUtd2lkdGg6IDMyMHB4O1xuJGlwaG9uZTUtaGVpZ2h0OiA1NjhweDtcbiRoZWFkZXItaGVpZ2h0OiA4MHB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlwYWQtd2lkdGg6IDc2OHB4O1xuJHN3aXRjaC1wYWdlLWhlYWRlci1oZWlnaHQ6IDQ1cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kdGFiLWJhY2tncm91bmQ6ICNDM0UzRDk7XG4kbWFpbi1oaWdobGlnaHQtY29sb3I6ICMwRjdBODY7XG4kdHJ1ZS1ncmV5OiAjODg4O1xuJGxpZ2h0LWdyZXk6ICNDQ0M7XG5cblxuXG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/itemupdate/itemupdate.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin-mgmt/itemupdate/itemupdate.component.ts ***!
    \***************************************************************/

  /*! exports provided: ItemupdateComponent */

  /***/
  function srcAppAdminMgmtItemupdateItemupdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemupdateComponent", function () {
      return ItemupdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/loader/loader.service */
    "./src/app/shared/loader/loader.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api/bsp-service.service */
    "./src/app/services/api/bsp-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ItemupdateComponent = /*#__PURE__*/function () {
      function ItemupdateComponent(bspServiceService, loaderService, route, router, helperService) {
        _classCallCheck(this, ItemupdateComponent);

        this.bspServiceService = bspServiceService;
        this.loaderService = loaderService;
        this.route = route;
        this.router = router;
        this.helperService = helperService;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // this.item = new ItemModel();
        // this.itemId = parseInt(this.route.snapshot.paramMap.get("id"));
        // this.item.id = parseInt(this.route.snapshot.paramMap.get("id"));
        // this.item.name = this.route.snapshot.paramMap.get("name");
        // this.item.desc = this.route.snapshot.paramMap.get("desc");
        // this.item.itemPrice = this.route.snapshot.paramMap.get("itemPrice");
        // this.item.itemQuantity = parseInt(this.route.snapshot.paramMap.get("itemQuantity"));
      }

      _createClass(ItemupdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itemId = this.selectedItem.id; // console.log('ItemUpdate Component, ' + this.itemData);

          console.log('ngOnInit function called - ' + this.itemId);
        }
      }, {
        key: "updateItemPrice",
        value: function updateItemPrice() {
          var _this3 = this;

          console.log('Update function called');
          var newPrice = parseFloat(document.getElementById('item_price_ip_input').value);
          console.log('Updated Price - ' + newPrice + ' for item_number - ' + this.itemId);
          this.loaderService.show();
          this.bspServiceService.updateItemPrice(this.itemId, newPrice, function (result) {
            if (result) {
              _this3.update.emit(); // this.loaderService.dismiss();
              // this.router.navigate(["admin/editData"]);

            } else {
              _this3.loaderService.dismiss();

              _this3.helperService.openSomethingWrongDialog();

              alert('Error : Item Price Not Updated');
            }
          });
        }
      }, {
        key: "cancelClicked",
        value: function cancelClicked() {
          console.log('Cancel function called'); // this.router.navigate(['admin/editData']);

          this.cancel.emit();
        }
      }]);

      return ItemupdateComponent;
    }();

    ItemupdateComponent.ctorParameters = function () {
      return [{
        type: src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_4__["BspServiceService"]
      }, {
        type: src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], ItemupdateComponent.prototype, "selectedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], ItemupdateComponent.prototype, "cancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], ItemupdateComponent.prototype, "update", void 0);
    ItemupdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-itemupdate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./itemupdate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/itemupdate/itemupdate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./itemupdate.component.scss */
      "./src/app/admin-mgmt/itemupdate/itemupdate.component.scss"))["default"]]
    })], ItemupdateComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/sites/sites.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/admin-mgmt/sites/sites.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtSitesSitesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Main menu start */\n.container {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 85%;\n  opacity: 1;\n  /* border: 1px solid green;   */\n}\n/* Sun enu start */\n.subnmenu-container {\n  position: absolute;\n  width: 100%;\n  background-color: #ffffff;\n  height: 92.5%;\n}\n.subnmenu-body {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.submenu-header {\n  flex: 10%;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n.submenu-heading {\n  position: absolute;\n  top: 235px;\n  text-align: center;\n  width: 100%;\n  letter-spacing: 2.92px;\n  color: #361808;\n  text-shadow: 0px 3px 30px #36180833;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-size: 52px;\n  font-weight: 800;\n}\n.submenu-sub-heading {\n  position: absolute;\n  top: 360px;\n  margin-left: 35px;\n  width: 85%;\n  height: 200px;\n  text-align: left;\n  font-family: \"Open Sans Light\";\n  font-size: 24px;\n  letter-spacing: 0px;\n  color: #2C1407;\n  overflow: hidden;\n}\n.navigation {\n  display: flex;\n  position: absolute;\n  top: 560px;\n  width: 100%;\n  height: 108px;\n}\n.left {\n  flex: 50%;\n  margin-left: 20%;\n  width: 108px;\n  height: 108px;\n}\n.lEnable {\n  background: transparent url('nav-back_buttons-up.svg') 0% 0% no-repeat padding-box;\n}\n.lDisable {\n  background: transparent url('disabled_arrow_left.svg') 0% 0% no-repeat padding-box;\n}\n.right {\n  flex: 50%;\n  margin-right: 20%;\n  width: 108px;\n  height: 108px;\n}\n.rEnable {\n  background: transparent url('nav-buttons-up.svg') 0% 0% no-repeat padding-box;\n}\n.rDisable {\n  background: transparent url('disabled_arrow_right.svg') 0% 0% no-repeat padding-box;\n}\n.submenu-list-coloum {\n  flex: 70%;\n  height: 100%;\n  overflow: hidden;\n}\n.submenus-div {\n  height: 100%;\n  width: 125%;\n  align-items: center;\n}\n.submenu-listview {\n  position: relative;\n  display: inline-block;\n  margin: 10px 10px 10px 10px;\n  width: 405px;\n  height: 667px;\n}\n.submenu-listview div {\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  opacity: 1;\n}\n.submenu-listview img {\n  /* width: 100px; */\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  opacity: 1;\n}\n.submenu-listview span {\n  position: absolute;\n  bottom: -60px;\n  left: 0px;\n  width: 100%;\n  font-family: Open Sans;\n  font-size: 30px;\n  font-weight: 800;\n  text-align: center;\n  letter-spacing: 1px;\n  color: #582307;\n  text-shadow: 0px 3px 20px #2D8DD34D;\n  text-transform: uppercase;\n  opacity: 1;\n}\n.submenu-center {\n  display: flex;\n}\n.submenu-gridview {\n  position: relative;\n  display: inline-block;\n  margin: 10px 10px 10px 10px;\n  width: 405px;\n  height: 405px;\n}\n.submenu-gridview div {\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  opacity: 1;\n}\n.submenu-gridview img {\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n}\n.submenu-gridview span {\n  position: absolute;\n  bottom: 36px;\n  left: 111px;\n  width: 70%;\n  font-family: Open Sans;\n  font-size: 26px;\n  font-weight: 800;\n  text-align: left;\n  color: #FF860D;\n  text-shadow: 0px 3px 20px #2D8DD34D;\n  text-transform: uppercase;\n  opacity: 1;\n}\n/* Sub menu end */\n.cat_default_Image {\n  background: transparent url('cat_default_bg.png') 0% 0% no-repeat padding-box;\n}\n.responsive-table li {\n  border-radius: 3px;\n  width: 50%;\n  padding: 25px 30px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n.responsive-table .table-header {\n  background-color: #95A5A6;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.responsive-table .table-row {\n  background-color: #ffffff;\n  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);\n}\n.responsive-table .col-1 {\n  flex-basis: 10%;\n}\n.responsive-table .col-2 {\n  flex-basis: 40%;\n}\n.responsive-table .col-3 {\n  flex-basis: 25%;\n}\n.responsive-table .col-4 {\n  flex-basis: 25%;\n}\n@media all and (max-width: 767px) {\n  .responsive-table .table-header {\n    display: none;\n  }\n  .responsive-table li {\n    display: block;\n  }\n  .responsive-table .col {\n    flex-basis: 100%;\n  }\n  .responsive-table .col {\n    display: flex;\n    padding: 10px 0;\n  }\n  .responsive-table .col:before {\n    color: #6C7A89;\n    padding-right: 10px;\n    content: attr(data-label);\n    flex-basis: 50%;\n    text-align: right;\n  }\n}\n.pricebookHeading {\n  margin-left: 7em;\n}\n.body-bg {\n  background-color: #ffffff;\n}\n.above-table {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 5%;\n}\n@media (max-width: 767px) {\n  .above-table {\n    flex-direction: column;\n  }\n}\n.above-table .table-title {\n  color: #0F7A86;\n  font-weight: 500;\n  font-size: 20px;\n}\n.above-table .search-field-container {\n  width: 35%;\n  border-bottom: 1px dotted #888;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .above-table .search-field-container {\n    width: 100%;\n    margin: 15px 0 20px;\n  }\n}\n.above-table .search-field-container .search-field {\n  font-size: 14px;\n  border-color: #FFFFFF;\n}\n.above-table .search-field-container .cursor-pointer {\n  cursor: pointer;\n}\n.above-table .add-row-button {\n  background: #0F7A86;\n  border: #0F7A86;\n  color: #FFFFFF;\n}\n@media (min-width: 768px) {\n  ::-webkit-scrollbar {\n    height: 0;\n  }\n}\n.table-container {\n  overflow-x: scroll;\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .table-container table {\n    min-width: 1024px;\n  }\n}\n.table-container table thead {\n  background-color: #F4F4F4;\n  height: 45px;\n}\n.table-container table tbody tr {\n  border-bottom: 1px solid #CCC;\n  min-height: 55px;\n}\n.table-container table thead, .table-container table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  text-align: center;\n}\n.table-container table .edit-icon {\n  margin-right: 10px;\n}\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n}\n@media (max-width: 767px) {\n  .pagination-wrapper {\n    flex-direction: column-reverse;\n  }\n}\n.pagination-wrapper .my-pagination {\n  padding-left: 40px;\n}\n@media (max-width: 767px) {\n  .pagination-wrapper .my-pagination {\n    padding-left: 0;\n  }\n}\n.pagination-wrapper .input-group {\n  width: 70px;\n  margin-right: 80px;\n}\n@media (max-width: 767px) {\n  .pagination-wrapper .input-group {\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWdtdC9zaXRlcy9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhcHBcXGFkbWluLW1nbXRcXHNpdGVzXFxzaXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC9zaXRlcy9zaXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC9zaXRlcy9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsb0JBQUE7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQ0RKO0FESUEsa0JBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtBQ0ZKO0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RKO0FER0E7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRENBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRUo7QURBQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR0o7QUREQTtFQUNJLGtGQUFBO0FDSUo7QURGQTtFQUNJLGtGQUFBO0FDS0o7QURGQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDS0o7QURIQTtFQUNJLDZFQUFBO0FDTUo7QURKQTtFQUNJLG1GQUFBO0FDT0o7QURKQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBRExBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1FKO0FETkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1NKO0FEUEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ1VKO0FEUkE7RUFDSSxrQkFBQTtFQU1BLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDTUo7QURKQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7QUNPSjtBRExBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNRSjtBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNTSjtBRFBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDVUo7QURSQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ1dKO0FEVEEsaUJBQUE7QUFDQTtFQUNJLDZFQUFBO0FDWUo7QURUSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNZTjtBRFZJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ1lOO0FEVkk7RUFDRSx5QkFBQTtFQUNBLDhDQUFBO0FDWU47QURWSTtFQUNFLGVBQUE7QUNZTjtBRFZJO0VBQ0UsZUFBQTtBQ1lOO0FEVkk7RUFDRSxlQUFBO0FDWU47QURWSTtFQUNFLGVBQUE7QUNZTjtBRFRJO0VBQ0U7SUFDRSxhQUFBO0VDV047RUROSTtJQUNFLGNBQUE7RUNRTjtFRE5JO0lBRUUsZ0JBQUE7RUNPTjtFREpJO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUNNTjtFRExNO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNPUjtBQUNGO0FESEU7RUFBb0IsZ0JBQUE7QUNPdEI7QURMRTtFQUNFLHlCQUFBO0FDUUo7QURMRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNRSjtBRE5JO0VBTkY7SUFPSSxzQkFBQTtFQ1NKO0FBQ0Y7QURQSTtFQUNFLGNFck9pQjtFRnNPakIsZ0JBQUE7RUFDQSxlQUFBO0FDU047QUROSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1FOO0FETk07RUFORjtJQU9JLFdBQUE7SUFDQSxtQkFBQTtFQ1NOO0FBQ0Y7QURQTTtFQUNFLGVBQUE7RUFDQSxxQkU5UU07QUR1UmQ7QUROTTtFQUNFLGVBQUE7QUNRUjtBREpJO0VBQ0UsbUJFaFFpQjtFRmlRakIsZUVqUWlCO0VGa1FqQixjRXpSUTtBRCtSZDtBREZFO0VBRUU7SUFDRSxTQUFBO0VDSUo7QUFDRjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDR0o7QURDTTtFQUZGO0lBR0ksaUJBQUE7RUNFTjtBQUNGO0FEQU07RUFDRSx5QkVyU2tCO0VGc1NsQixZQUFBO0FDRVI7QURDTTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREVNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURHTTtFQUNFLGtCQUFBO0FDRFI7QURNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSEo7QURLSTtFQVBGO0lBUUksOEJBQUE7RUNGSjtBQUNGO0FESUk7RUFDRSxrQkFBQTtBQ0ZOO0FESU07RUFIRjtJQUlJLGVBQUE7RUNETjtBQUNGO0FESUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRElNO0VBSkY7SUFLSSxlQUFBO0lBQ0EsbUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tbWdtdC9zaXRlcy9zaXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzLnNjc3NcIjtcclxuLyogTWFpbiBtZW51IHN0YXJ0ICovXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBvcGFjaXR5OiAxOyAgXHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICAqL1xyXG59XHJcblxyXG4vKiBTdW4gZW51IHN0YXJ0ICovXHJcbi5zdWJubWVudS1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvLyB0b3A6IDUxcHg7XHJcbiAgICBoZWlnaHQ6IDkyLjUlO1xyXG59XHJcbi5zdWJubWVudS1ib2R5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zdWJtZW51LWhlYWRlcntcclxuICAgIGZsZXg6IDEwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zdWJtZW51LWhlYWRpbmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMi45MnB4O1xyXG4gICAgY29sb3I6ICMzNjE4MDg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzMHB4ICMzNjE4MDgzMztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5zdWJtZW51LXN1Yi1oZWFkaW5ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjM1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCc7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMyQzE0MDc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG4ubmF2aWdhdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwOHB4O1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgZmxleDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xyXG4gICAgd2lkdGg6IDEwOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDhweDtcclxufVxyXG4ubEVuYWJsZXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uYXYtYmFja19idXR0b25zLXVwLnN2ZycpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG4ubERpc2FibGV7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzYWJsZWRfYXJyb3dfbGVmdC5zdmcnKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICAgIGZsZXg6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDoyMCU7ICAgXHJcbiAgICB3aWR0aDogMTA4cHg7XHJcbiAgICBoZWlnaHQ6IDEwOHB4O1xyXG59XHJcbi5yRW5hYmxle1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25hdi1idXR0b25zLXVwLnN2ZycpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG4uckRpc2FibGV7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzYWJsZWRfYXJyb3dfcmlnaHQuc3ZnJykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcblxyXG4uc3VibWVudS1saXN0LWNvbG91bXtcclxuICAgIGZsZXg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnN1Ym1lbnVzLWRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMjUlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc3VibWVudS1saXN0dmlld3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHdpZHRoOiA0MDVweDtcclxuICAgIGhlaWdodDogNjY3cHg7XHJcbn1cclxuLnN1Ym1lbnUtbGlzdHZpZXcgZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMTsgICAgXHJcbn1cclxuLnN1Ym1lbnUtbGlzdHZpZXcgaW1ne1xyXG4gICAgLyogd2lkdGg6IDEwMHB4OyAqL1xyXG4gICAgLy8gbWF4LXdpZHRoOjkwJTtcclxuICAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBib3R0b206IDE0cHg7XHJcbiAgICAvLyBsZWZ0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMTsgICAgXHJcbn1cclxuLnN1Ym1lbnUtbGlzdHZpZXcgc3BhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTYwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjNTgyMzA3O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggMjBweCAjMkQ4REQzNEQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3BhY2l0eTogMTsgICAgICAgIFxyXG59XHJcblxyXG4uc3VibWVudS1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zdWJtZW51LWdyaWR2aWV3e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDQwNXB4O1xyXG4gICAgaGVpZ2h0OiA0MDVweDtcclxufVxyXG4uc3VibWVudS1ncmlkdmlldyBkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvcGFjaXR5OiAxOyAgICBcclxufVxyXG4uc3VibWVudS1ncmlkdmlldyBpbWd7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDMwcHg7ICAgIFxyXG59XHJcbi5zdWJtZW51LWdyaWR2aWV3IHNwYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDM2cHg7XHJcbiAgICBsZWZ0OjExMXB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjRkY4NjBEO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggMjBweCAjMkQ4REQzNEQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3BhY2l0eTogMTsgICAgICAgIFxyXG59XHJcbi8qIFN1YiBtZW51IGVuZCAqL1xyXG4uY2F0X2RlZmF1bHRfSW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2F0X2RlZmF1bHRfYmcucG5nJykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbi5yZXNwb25zaXZlLXRhYmxlIHtcclxuICAgIGxpIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVBNUE2O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICB9XHJcbiAgICAudGFibGUtcm93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIH1cclxuICAgIC5jb2wtMSB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDEwJTtcclxuICAgIH1cclxuICAgIC5jb2wtMiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDQwJTtcclxuICAgIH1cclxuICAgIC5jb2wtMyB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuICAgIH1cclxuICAgIC5jb2wtNCB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAudGFibGUtcm93e1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuY29sIHtcclxuICAgICAgICBcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNkM3QTg5O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnByaWNlYm9va0hlYWRpbmcgeyBtYXJnaW4tbGVmdDogN2VtOyB9XHJcblxyXG4gIC5ib2R5LWJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmFib3ZlLXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCA1JTtcclxuICBcclxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGFibGUtdGl0bGUge1xyXG4gICAgICBjb2xvcjogJG1haW4taGlnaGxpZ2h0LWNvbG9yO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgJHRydWUtZ3JleTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5zZWFyY2gtZmllbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFkZC1yb3ctYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogJG1haW4taGlnaGxpZ2h0LWNvbG9yO1xyXG4gICAgICBib3JkZXI6ICRtYWluLWhpZ2hsaWdodC1jb2xvcjtcclxuICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhKG1pbi13aWR0aDogJGlwYWQtd2lkdGgpIHtcclxuICBcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICB0YWJsZSB7XHJcbiAgXHJcbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDI0cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGhlYWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGJvZHkgdHIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRoZWFkLCB0Ym9keSB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubXktcGFnaW5hdGlvbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBcclxuICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgXHJcbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiIsIi8qIE1haW4gbWVudSBzdGFydCAqL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg1JTtcbiAgb3BhY2l0eTogMTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAgKi9cbn1cblxuLyogU3VuIGVudSBzdGFydCAqL1xuLnN1Ym5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogOTIuNSU7XG59XG5cbi5zdWJubWVudS1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3VibWVudS1oZWFkZXIge1xuICBmbGV4OiAxMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1lbnUtaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuOTJweDtcbiAgY29sb3I6ICMzNjE4MDg7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDMwcHggIzM2MTgwODMzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3VibWVudS1zdWItaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBMaWdodFwiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMkMxNDA3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTA4cHg7XG59XG5cbi5sZWZ0IHtcbiAgZmxleDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogMTA4cHg7XG59XG5cbi5sRW5hYmxlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uYXYtYmFja19idXR0b25zLXVwLnN2Z1wiKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5sRGlzYWJsZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzYWJsZWRfYXJyb3dfbGVmdC5zdmdcIikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4ucmlnaHQge1xuICBmbGV4OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogMTA4cHg7XG59XG5cbi5yRW5hYmxlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uYXYtYnV0dG9ucy11cC5zdmdcIikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4uckRpc2FibGUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2FibGVkX2Fycm93X3JpZ2h0LnN2Z1wiKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5zdWJtZW51LWxpc3QtY29sb3VtIHtcbiAgZmxleDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWJtZW51cy1kaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMjUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3VibWVudS1saXN0dmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIHdpZHRoOiA0MDVweDtcbiAgaGVpZ2h0OiA2NjdweDtcbn1cblxuLnN1Ym1lbnUtbGlzdHZpZXcgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnN1Ym1lbnUtbGlzdHZpZXcgaW1nIHtcbiAgLyogd2lkdGg6IDEwMHB4OyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3VibWVudS1saXN0dmlldyBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC02MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6ICM1ODIzMDc7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDIwcHggIzJEOEREMzREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3VibWVudS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3VibWVudS1ncmlkdmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIHdpZHRoOiA0MDVweDtcbiAgaGVpZ2h0OiA0MDVweDtcbn1cblxuLnN1Ym1lbnUtZ3JpZHZpZXcgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnN1Ym1lbnUtZ3JpZHZpZXcgaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG59XG5cbi5zdWJtZW51LWdyaWR2aWV3IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzZweDtcbiAgbGVmdDogMTExcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNGRjg2MEQ7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDIwcHggIzJEOEREMzREO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBTdWIgbWVudSBlbmQgKi9cbi5jYXRfZGVmYXVsdF9JbWFnZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2F0X2RlZmF1bHRfYmcucG5nXCIpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuLnJlc3BvbnNpdmUtdGFibGUgbGkge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NUE1QTY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cbi5yZXNwb25zaXZlLXRhYmxlIC50YWJsZS1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLmNvbC0xIHtcbiAgZmxleC1iYXNpczogMTAlO1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLmNvbC0yIHtcbiAgZmxleC1iYXNpczogNDAlO1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLmNvbC0zIHtcbiAgZmxleC1iYXNpczogMjUlO1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLmNvbC00IHtcbiAgZmxleC1iYXNpczogMjUlO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucmVzcG9uc2l2ZS10YWJsZSBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbCB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgfVxuICAucmVzcG9uc2l2ZS10YWJsZSAuY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuICAucmVzcG9uc2l2ZS10YWJsZSAuY29sOmJlZm9yZSB7XG4gICAgY29sb3I6ICM2QzdBODk7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4ucHJpY2Vib29rSGVhZGluZyB7XG4gIG1hcmdpbi1sZWZ0OiA3ZW07XG59XG5cbi5ib2R5LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFib3ZlLXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDUlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hYm92ZS10YWJsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmFib3ZlLXRhYmxlIC50YWJsZS10aXRsZSB7XG4gIGNvbG9yOiAjMEY3QTg2O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIge1xuICB3aWR0aDogMzUlO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICM4ODg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFib3ZlLXRhYmxlIC5zZWFyY2gtZmllbGQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xuICB9XG59XG4uYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIgLnNlYXJjaC1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuLmFib3ZlLXRhYmxlIC5zZWFyY2gtZmllbGQtY29udGFpbmVyIC5jdXJzb3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hYm92ZS10YWJsZSAuYWRkLXJvdy1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMEY3QTg2O1xuICBib3JkZXI6ICMwRjdBODY7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudGFibGUtY29udGFpbmVyIHRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcbiAgfVxufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gIGhlaWdodDogNDVweDtcbn1cbi50YWJsZS1jb250YWluZXIgdGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbiAgbWluLWhlaWdodDogNTVweDtcbn1cbi50YWJsZS1jb250YWluZXIgdGFibGUgdGhlYWQsIC50YWJsZS1jb250YWluZXIgdGFibGUgdGJvZHkgdHIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJsZS1jb250YWluZXIgdGFibGUgLmVkaXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnBhZ2luYXRpb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhZ2luYXRpb24td3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG4ucGFnaW5hdGlvbi13cmFwcGVyIC5teS1wYWdpbmF0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wYWdpbmF0aW9uLXdyYXBwZXIgLm15LXBhZ2luYXRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuLnBhZ2luYXRpb24td3JhcHBlciAuaW5wdXQtZ3JvdXAge1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wYWdpbmF0aW9uLXdyYXBwZXIgLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSIsIiRuY3ItZ3JlZW46ICM1NEI5NDg7XG4kcHJpbWFyeS1hcHAtY29sb3I6ICNBNkNFMzk7XG4kcHJpbWFyeS1ncmVlbjogI0E2Q0UzOTtcbiR0aGVtZS1jb2xvcjogIzk1QkUzMTtcbiR0ZXh0LWdyZWVuOiAjNTBCOTQ4O1xuJGxpZ2h0LWdyZWVuLWJhY2tncm91bmQ6ICNGNEY5RTc7XG4kYnV0dG9uLWRpc2FibGVkLWRlZmF1bHQ6ICNEM0QzRDM7XG4kZXJyb3ItcmVkOiAjRkYwQzNFO1xuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcbiRkYXJrLXRlYWwtY29sb3I6ICMwRjdBODY7XG4kYnV0dG9uLWRlbGV0ZS1yZXNlcnZhdGlvbi1jb2xvcjogI0M5QzlDOTtcbiRzbG90LWNvZGUtY29sb3I6ICM0MDdFODk7XG4kZ3JleS1jb2xvcjogI0YwRjBGMDtcbiRkaXNhYmxlZC1pbnB1dC1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xuJGRpc2FibGVkLXRleHQtY29sb3I6ICM4ODg7XG4kZ3JleS1idXR0b24tb3V0bGluZTogIzg4ODtcbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTs7XG4kZ3JleS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kOiAjRjRGNEY0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcblxuJGlwaG9uZTUtd2lkdGg6IDMyMHB4O1xuJGlwaG9uZTUtaGVpZ2h0OiA1NjhweDtcbiRoZWFkZXItaGVpZ2h0OiA4MHB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlwYWQtd2lkdGg6IDc2OHB4O1xuJHN3aXRjaC1wYWdlLWhlYWRlci1oZWlnaHQ6IDQ1cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kdGFiLWJhY2tncm91bmQ6ICNDM0UzRDk7XG4kbWFpbi1oaWdobGlnaHQtY29sb3I6ICMwRjdBODY7XG4kdHJ1ZS1ncmV5OiAjODg4O1xuJGxpZ2h0LWdyZXk6ICNDQ0M7XG5cblxuXG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/sites/sites.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin-mgmt/sites/sites.component.ts ***!
    \*****************************************************/

  /*! exports provided: SitesComponent */

  /***/
  function srcAppAdminMgmtSitesSitesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitesComponent", function () {
      return SitesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api/bsp-service.service */
    "./src/app/services/api/bsp-service.service.ts");
    /* harmony import */


    var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/loader/loader.service */
    "./src/app/shared/loader/loader.service.ts");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");

    var result = [{
      "filename": '',
      "result": ''
    }];

    var SitesComponent = /*#__PURE__*/function () {
      function SitesComponent(route, router, bspServiceService, loaderService, stateService, helperService, dialog) {
        _classCallCheck(this, SitesComponent);

        this.route = route;
        this.router = router;
        this.bspServiceService = bspServiceService;
        this.loaderService = loaderService;
        this.stateService = stateService;
        this.helperService = helperService;
        this.dialog = dialog;
        this.OnlineStatus = '';
        this.searchFields = ['siteName'];
        this.searchHelp = "Site Number";
        this.pageSize = 10;
        this.pageNumber = 1;
        this.lastPage = false;
        this.totalPages = 0;
        this.totalResult = 0;
        this.siteId = this.route.snapshot.paramMap.get('id');
      }

      _createClass(SitesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllSiteInformation();
        }
      }, {
        key: "getAllSiteInformation",
        value: function getAllSiteInformation() {
          var _this4 = this;

          this.bspServiceService.getAllSiteInformation().toPromise().then(function (res) {
            _this4.lastPage = res.lastPage;
            _this4.totalPages = res.totalPages;
            _this4.pageContent = res.pageContent;
            _this4.Sites = res.pageContent;
            var lenght = _this4.Sites.length;

            for (var i = 0; i < lenght; i++) {
              _this4.Sites[i].checkStatus = "CheckStatus";
              _this4.Sites[i].generateFile = "GenerateXML";
              _this4.Sites[i].ExportFile = "CheckStatus";
              _this4.Sites[i].PendingFile = "";
            }
          })["catch"](function (error) {
            _this4.loaderService.dismiss();

            _this4.helperService.openSomethingWrongDialog(error);
          });
        }
      }, {
        key: "getStatus",
        value: function getStatus(id) {
          var _this5 = this;

          this.siteId = id;
          this.loaderService.show();
          this.bspServiceService.getSiteOnlineStatus(id).toPromise().then(function (result) {
            _this5.Sites.find(function (site) {
              return site.siteName === id;
            }).checkStatus = result.online_status;

            _this5.loaderService.dismiss();
          })["catch"](function (error) {
            _this5.loaderService.dismiss(); //this.helperService.openSomethingWrongDialog(error);

          }); //return status;
        }
      }, {
        key: "exportStatus",
        value: function exportStatus(id) {
          var _this6 = this;

          this.siteId = id;
          this.loaderService.show();
          this.bspServiceService.getSiteOnlineStatus(id).toPromise().then(function (result) {
            _this6.Sites.find(function (site) {
              return site.siteName === id;
            }).ExportFile = result.status;
            _this6.Sites.find(function (site) {
              return site.siteName === id;
            }).PendingFile = result.pending_files;

            _this6.loaderService.dismiss();
          })["catch"](function (error) {
            _this6.loaderService.dismiss(); //this.helperService.openSomethingWrongDialog(error);

          }); //return status;
        }
      }, {
        key: "generateXMLFile",
        value: function generateXMLFile(siteName) {
          var _this7 = this;

          console.log("Gererate File button called");
          this.bspServiceService.generateXMLForSite(siteName).toPromise().then(function (res) {
            result["filename"] = res["filename"];
            result["result"] = res["result"];
            var lenght = _this7.Sites.length;

            for (var i = 0; i < lenght; i++) {
              if (_this7.Sites[i].siteName == siteName) {
                //this.Sites[i].generateFile = result.result;
                _this7.Sites[i].generateFile = result.result;
              }
            }
          })["catch"](function (error) {
            _this7.loaderService.dismiss();

            _this7.helperService.openSomethingWrongDialog(error);
          });
        }
      }, {
        key: "GetValueForTheKey",
        value: function GetValueForTheKey(attributes, key) {
          //console.log("in Get attributes" + JSON.stringify(attributes));
          for (var a in attributes) {
            var attr = attributes[a]; //console.log("attr.key" + JSON.stringify(attr));

            if (attr.key == key) return attr.value;
          }

          return "Invalid Key";
        }
      }, {
        key: "exportFile",
        value: function exportFile(attributes) {
          var _this8 = this;

          var computerName = this.GetValueForTheKey(attributes.attributes, 'computername');

          if (computerName == "Invalid Key") {
            this.helperService.openSomethingWrongDialog();
          }

          var dirname = this.GetValueForTheKey(attributes.attributes, 'folder-name');

          if (computerName == "Invalid Key") {
            this.helperService.openSomethingWrongDialog();
          }

          console.log("Gererate File button called");

          if (result["result"] == "SUCCESS") {
            this.bspServiceService.exportFileToSite(computerName, result.filename, dirname).toPromise().then(function (res) {
              var lenght = _this8.Sites.length;

              for (var i = 0; i < lenght; i++) {
                if (_this8.Sites[i].customAttributeSets[0].attributes[3].value == computerName) {
                  _this8.Sites[i].ExportFile = res.result;
                }
              }
            })["catch"](function (error) {
              _this8.loaderService.dismiss();

              _this8.helperService.openSomethingWrongDialog(error);
            });
          } else {
            var lenght = this.Sites.length;

            for (var i = 0; i < lenght; i++) {
              if (this.Sites[i].computerName == computerName) {
                //this.Sites[i].exportFile = "FAILED";
                this.Sites[i].ExportFile = "FAILED";
              }
            }
          }

          console.log("Export File button called");
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(page) {
          this.pageNumber = page;
        }
      }]);

      return SitesComponent;
    }();

    SitesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_3__["BspServiceService"]
      }, {
        type: src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    SitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/sites/sites.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sites.component.scss */
      "./src/app/admin-mgmt/sites/sites.component.scss"))["default"]]
    })], SitesComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/update-items-data/update-items-data.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin-mgmt/update-items-data/update-items-data.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtUpdateItemsDataUpdateItemsDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body-bg {\n  background-color: #ffffff;\n}\n\n.above-table {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 5%;\n}\n\n@media (max-width: 767px) {\n  .above-table {\n    flex-direction: column;\n  }\n}\n\n.above-table .table-title {\n  color: #0F7A86;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.above-table .search-field-container {\n  width: 35%;\n  border-bottom: 1px dotted #888;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  .above-table .search-field-container {\n    width: 100%;\n    margin: 15px 0 20px;\n  }\n}\n\n.above-table .search-field-container .search-field {\n  font-size: 14px;\n  border-color: #FFFFFF;\n}\n\n.above-table .search-field-container .cursor-pointer {\n  cursor: pointer;\n}\n\n.above-table .add-row-button {\n  background: #0F7A86;\n  border: #0F7A86;\n  color: #FFFFFF;\n}\n\n@media (min-width: 768px) {\n  ::-webkit-scrollbar {\n    height: 0;\n  }\n}\n\n.table-container {\n  overflow-x: scroll;\n  width: 100%;\n}\n\n@media (max-width: 767px) {\n  .table-container table {\n    min-width: 1024px;\n  }\n}\n\n.table-container table thead {\n  background-color: #F4F4F4;\n  height: 45px;\n}\n\n.table-container table tbody tr {\n  border-bottom: 1px solid #CCC;\n  min-height: 55px;\n}\n\n.table-container table thead, .table-container table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  text-align: center;\n}\n\n.table-container table .edit-icon {\n  margin-right: 10px;\n}\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n}\n\n@media (max-width: 767px) {\n  .pagination-wrapper {\n    flex-direction: column-reverse;\n  }\n}\n\n.pagination-wrapper .my-pagination {\n  padding-left: 40px;\n}\n\n@media (max-width: 767px) {\n  .pagination-wrapper .my-pagination {\n    padding-left: 0;\n  }\n}\n\n.pagination-wrapper .input-group {\n  width: 70px;\n  margin-right: 80px;\n}\n\n@media (max-width: 767px) {\n  .pagination-wrapper .input-group {\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n}\n\n.subnmenu-container {\n  position: absolute;\n  width: 100%;\n  top: 51px;\n  height: 92.5%;\n}\n\n.subnmenu-body {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.submenu-header {\n  flex: 10%;\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.submenu-heading {\n  position: absolute;\n  top: 235px;\n  text-align: center;\n  width: 100%;\n  letter-spacing: 2.92px;\n  color: #361808;\n  text-shadow: 0px 3px 30px #36180833;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-size: 52px;\n  font-weight: 800;\n}\n\n.submenu-sub-heading {\n  position: absolute;\n  top: 360px;\n  margin-left: 35px;\n  width: 85%;\n  height: 200px;\n  text-align: left;\n  font-family: \"Open Sans Light\";\n  font-size: 24px;\n  letter-spacing: 0px;\n  color: #2c1407;\n  overflow: hidden;\n}\n\n.submenu-list-coloum {\n  flex: 70%;\n  height: 89%;\n  overflow: hidden;\n  background-color: #FFFFFF;\n}\n\n.container-div {\n  background-color: #FFFFFF;\n  height: 90%;\n}\n\n.totalDiv {\n  background-color: #A6CE39;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #361808;\n  text-shadow: 0px 3px 30px #36180833;\n  text-transform: uppercase;\n  font-family: \"Open Sans\";\n  font-size: 24px;\n  font-weight: 600;\n  padding: 3%;\n}\n\ntable {\n  height: 80%;\n}\n\n@media (max-width: 767px) {\n  table {\n    min-width: 1024px;\n  }\n}\n\ntable tbody {\n  display: block;\n  max-height: 60vh;\n  overflow: auto;\n}\n\n@media (max-width: 1023px) {\n  table tbody {\n    max-height: unset;\n  }\n}\n\ntable tbody tr {\n  margin: 10px 0 10px 0;\n  border-bottom: 1px solid #d1d1d1;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 25px;\n}\n\ntable thead {\n  background-color: #F4F4F4;\n  font-weight: normal;\n  font-size: 16px;\n  height: 46px;\n}\n\ntable thead,\ntable tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  font-family: Roboto;\n  font-style: normal;\n  text-align: center;\n  letter-spacing: 0.15px;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n\ntable thead button,\ntable tbody tr button {\n  border: none;\n  background-color: transparent;\n}\n\ntable thead button .icon-delete_1::before,\ntable tbody tr button .icon-delete_1::before {\n  color: #000000;\n}\n\n.cat_img {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 80px;\n}\n\n.level-right {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  width: 360px;\n  height: 97px;\n  background: #dc3545 0% 0% no-repeat padding-box;\n  opacity: 1;\n  font: Bold 32.5px/97px Open Sans;\n}\n\n.level-text {\n  text-align: center;\n  letter-spacing: 1.76px;\n  color: #361808;\n  text-transform: uppercase;\n}\n\nspan {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWdtdC91cGRhdGUtaXRlbXMtZGF0YS9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhcHBcXGFkbWluLW1nbXRcXHVwZGF0ZS1pdGVtcy1kYXRhXFx1cGRhdGUtaXRlbXMtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC91cGRhdGUtaXRlbXMtZGF0YS91cGRhdGUtaXRlbXMtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC91cGRhdGUtaXRlbXMtZGF0YS9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdFO0VBTkY7SUFPSSxzQkFBQTtFQ0FGO0FBQ0Y7O0FERUU7RUFDRSxjRWdCbUI7RUZmbkIsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHSTtFQU5GO0lBT0ksV0FBQTtJQUNBLG1CQUFBO0VDQUo7QUFDRjs7QURFSTtFQUNFLGVBQUE7RUFDQSxxQkV6QlE7QUR5QmQ7O0FER0k7RUFDRSxlQUFBO0FDRE47O0FES0U7RUFDRSxtQkVYbUI7RUZZbkIsZUVabUI7RUZhbkIsY0VwQ1U7QURpQ2Q7O0FET0E7RUFFRTtJQUNFLFNBQUE7RUNMRjtBQUNGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDTkY7O0FEVUk7RUFGRjtJQUdJLGlCQUFBO0VDUEo7QUFDRjs7QURTSTtFQUNFLHlCRWhEb0I7RUZpRHBCLFlBQUE7QUNQTjs7QURVSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNSTjs7QURXSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1ROOztBRFlJO0VBQ0Usa0JBQUE7QUNWTjs7QURlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDWkY7O0FEY0U7RUFQRjtJQVFJLDhCQUFBO0VDWEY7QUFDRjs7QURhRTtFQUNFLGtCQUFBO0FDWEo7O0FEYUk7RUFIRjtJQUlJLGVBQUE7RUNWSjtBQUNGOztBRGFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDWEo7O0FEYUk7RUFKRjtJQUtJLGVBQUE7SUFDQSxtQkFBQTtFQ1ZKO0FBQ0Y7O0FEY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ1hGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNWRjs7QURZQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDVEY7O0FEV0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUEY7O0FEU0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJFOUpZO0FEd0pkOztBRFNBO0VBQ0UseUJFbEtZO0VGbUtaLFdBQUE7QUNORjs7QURhQTtFQUNFLHlCRW5MYztFRm9MZCxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1hGOztBRGNBO0VBQ0UsV0FBQTtBQ1hGOztBRFlFO0VBRkY7SUFHSSxpQkFBQTtFQ1RGO0FBQ0Y7O0FEV0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVEo7O0FEVUk7RUFKRjtJQUtJLGlCQUFBO0VDUEo7QUFDRjs7QURTSTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BOOztBRFdFO0VBQ0UseUJFdk1zQjtFRndNdEIsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRFlFOztFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNYSjs7QURZSTs7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUNUTjs7QURXTTs7RUFDRSxjRTFPTTtBRGtPZDs7QURhQTtFQUNFLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNWRjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FDVEY7O0FEV0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDUkY7O0FEVUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1nbXQvdXBkYXRlLWl0ZW1zLWRhdGEvdXBkYXRlLWl0ZW1zLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb25zdGFudHMuc2Nzc1wiO1xuXG4uYm9keS1iZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFib3ZlLXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDUlO1xuXG4gIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC50YWJsZS10aXRsZSB7XG4gICAgY29sb3I6ICRtYWluLWhpZ2hsaWdodC1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5zZWFyY2gtZmllbGQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgJHRydWUtZ3JleTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGQge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4gICAgfVxuXG4gICAgLmN1cnNvci1wb2ludGVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAuYWRkLXJvdy1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICRtYWluLWhpZ2hsaWdodC1jb2xvcjtcbiAgICBib3JkZXI6ICRtYWluLWhpZ2hsaWdodC1jb2xvcjtcbiAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xuICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6ICRpcGFkLXdpZHRoKSB7XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHRhYmxlIHtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XG4gICAgICBtaW4td2lkdGg6IDEwMjRweDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFibGUtaGVhZGVyLWJhY2tncm91bmQ7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuXG4gICAgdGJvZHkgdHIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgICAgbWluLWhlaWdodDogNTVweDtcbiAgICB9XG5cbiAgICB0aGVhZCwgdGJvZHkgdHIge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmVkaXQtaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5wYWdpbmF0aW9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuXG4gIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLm15LXBhZ2luYXRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLnN1Ym5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTFweDtcbiAgaGVpZ2h0OiA5Mi41JTtcbn1cbi5zdWJubWVudS1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnN1Ym1lbnUtaGVhZGVyIHtcbiAgZmxleDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3VibWVudS1oZWFkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBsZXR0ZXItc3BhY2luZzogMi45MnB4O1xuICBjb2xvcjogIzM2MTgwODtcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMzBweCAjMzYxODA4MzM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDUycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uc3VibWVudS1zdWItaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBMaWdodFwiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMmMxNDA3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN1Ym1lbnUtbGlzdC1jb2xvdW0ge1xuICBmbGV4OiA3MCU7XG4gIGhlaWdodDogODklO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG59XG5cbi5jb250YWluZXItZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuICBoZWlnaHQ6IDkwJTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLy8gbWF4LXdpZHRoOiAxMDB2dztcbiAgICAvLyBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG59XG5cbi50b3RhbERpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWdyZWVuO1xuICBoZWlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzM2MTgwODtcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMzBweCAjMzYxODA4MzM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDMlO1xufVxuXG50YWJsZSB7XG4gIGhlaWdodDogODAlO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcbiAgfVxuXG4gIHRib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxuXG4gIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFibGUtaGVhZGVyLWJhY2tncm91bmQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICB9XG5cbiAgdGhlYWQsXG4gIHRib2R5IHRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAuaWNvbi1kZWxldGVfMTo6YmVmb3JlIHtcbiAgICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5jYXRfaW1nIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbn1cbi5sZXZlbC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiA5N3B4O1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udDogQm9sZCAzMi41cHgvOTdweCBPcGVuIFNhbnM7XG59XG4ubGV2ZWwtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNzZweDtcbiAgY29sb3I6ICMzNjE4MDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuIiwiLmJvZHktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYWJvdmUtdGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggNSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFib3ZlLXRhYmxlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uYWJvdmUtdGFibGUgLnRhYmxlLXRpdGxlIHtcbiAgY29sb3I6ICMwRjdBODY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzg4ODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCAwIDIwcHg7XG4gIH1cbn1cbi5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciAuc2VhcmNoLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG4uYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIgLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFib3ZlLXRhYmxlIC5hZGQtcm93LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMwRjdBODY7XG4gIGJvcmRlcjogIzBGN0E4NjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cbi50YWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC50YWJsZS1jb250YWluZXIgdGFibGUge1xuICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICB9XG59XG4udGFibGUtY29udGFpbmVyIHRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICBtaW4taGVpZ2h0OiA1NXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0aGVhZCwgLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSAuZWRpdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbi5wYWdpbmF0aW9uLXdyYXBwZXIgLm15LXBhZ2luYXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhZ2luYXRpb24td3JhcHBlciAubXktcGFnaW5hdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG4ucGFnaW5hdGlvbi13cmFwcGVyIC5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhZ2luYXRpb24td3JhcHBlciAuaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5zdWJubWVudS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUxcHg7XG4gIGhlaWdodDogOTIuNSU7XG59XG5cbi5zdWJubWVudS1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3VibWVudS1oZWFkZXIge1xuICBmbGV4OiAxMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1lbnUtaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuOTJweDtcbiAgY29sb3I6ICMzNjE4MDg7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDMwcHggIzM2MTgwODMzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3VibWVudS1zdWItaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBMaWdodFwiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMmMxNDA3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3VibWVudS1saXN0LWNvbG91bSB7XG4gIGZsZXg6IDcwJTtcbiAgaGVpZ2h0OiA4OSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jb250YWluZXItZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgaGVpZ2h0OiA5MCU7XG59XG4udG90YWxEaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTZDRTM5O1xuICBoZWlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzM2MTgwODtcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMzBweCAjMzYxODA4MzM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDMlO1xufVxuXG50YWJsZSB7XG4gIGhlaWdodDogODAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIHRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcbiAgfVxufVxudGFibGUgdGJvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIHRhYmxlIHRib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgfVxufVxudGFibGUgdGJvZHkgdHIge1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxudGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDZweDtcbn1cbnRhYmxlIHRoZWFkLFxudGFibGUgdGJvZHkgdHIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG50YWJsZSB0aGVhZCBidXR0b24sXG50YWJsZSB0Ym9keSB0ciBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxudGFibGUgdGhlYWQgYnV0dG9uIC5pY29uLWRlbGV0ZV8xOjpiZWZvcmUsXG50YWJsZSB0Ym9keSB0ciBidXR0b24gLmljb24tZGVsZXRlXzE6OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2F0X2ltZyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5sZXZlbC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiA5N3B4O1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udDogQm9sZCAzMi41cHgvOTdweCBPcGVuIFNhbnM7XG59XG5cbi5sZXZlbC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS43NnB4O1xuICBjb2xvcjogIzM2MTgwODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn0iLCIkbmNyLWdyZWVuOiAjNTRCOTQ4O1xuJHByaW1hcnktYXBwLWNvbG9yOiAjQTZDRTM5O1xuJHByaW1hcnktZ3JlZW46ICNBNkNFMzk7XG4kdGhlbWUtY29sb3I6ICM5NUJFMzE7XG4kdGV4dC1ncmVlbjogIzUwQjk0ODtcbiRsaWdodC1ncmVlbi1iYWNrZ3JvdW5kOiAjRjRGOUU3O1xuJGJ1dHRvbi1kaXNhYmxlZC1kZWZhdWx0OiAjRDNEM0QzO1xuJGVycm9yLXJlZDogI0ZGMEMzRTtcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcbiRibGFjay1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kd2hpdGUtY29sb3I6ICNGRkZGRkY7XG4kZGFyay10ZWFsLWNvbG9yOiAjMEY3QTg2O1xuJGJ1dHRvbi1kZWxldGUtcmVzZXJ2YXRpb24tY29sb3I6ICNDOUM5Qzk7XG4kc2xvdC1jb2RlLWNvbG9yOiAjNDA3RTg5O1xuJGdyZXktY29sb3I6ICNGMEYwRjA7XG4kZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZDogI0YyRjJGMjtcbiRkaXNhYmxlZC10ZXh0LWNvbG9yOiAjODg4O1xuJGdyZXktYnV0dG9uLW91dGxpbmU6ICM4ODg7XG4kZ3JleS10ZXh0OiByZ2JhKDAsIDAsIDAsIDAuNik7O1xuJGdyZXktYmFja2dyb3VuZDogI0YzRjNGMztcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI0Y0RjRGNDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG5cbiRpcGhvbmU1LXdpZHRoOiAzMjBweDtcbiRpcGhvbmU1LWhlaWdodDogNTY4cHg7XG4kaGVhZGVyLWhlaWdodDogODBweDtcbiRpbmxpbmUtaWNvbi1tYXJnaW46IDdweDtcbiRoZWFkZXItdmVydGljYWwtcGFkZGluZzogMjVweDtcbiRpcGFkLXdpZHRoOiA3NjhweDtcbiRzd2l0Y2gtcGFnZS1oZWFkZXItaGVpZ2h0OiA0NXB4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJHRhYi1iYWNrZ3JvdW5kOiAjQzNFM0Q5O1xuJG1haW4taGlnaGxpZ2h0LWNvbG9yOiAjMEY3QTg2O1xuJHRydWUtZ3JleTogIzg4ODtcbiRsaWdodC1ncmV5OiAjQ0NDO1xuXG5cblxuXG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/update-items-data/update-items-data.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin-mgmt/update-items-data/update-items-data.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UpdateItemsDataComponent */

  /***/
  function srcAppAdminMgmtUpdateItemsDataUpdateItemsDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateItemsDataComponent", function () {
      return UpdateItemsDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api/bsp-service.service */
    "./src/app/services/api/bsp-service.service.ts");
    /* harmony import */


    var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/loader/loader.service */
    "./src/app/shared/loader/loader.service.ts");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var UpdateItemsDataComponent = /*#__PURE__*/function () {
      function UpdateItemsDataComponent(bspServiceService, loaderService, helperService, router, stateService, route, location) {
        _classCallCheck(this, UpdateItemsDataComponent);

        this.bspServiceService = bspServiceService;
        this.loaderService = loaderService;
        this.helperService = helperService;
        this.router = router;
        this.stateService = stateService;
        this.route = route;
        this.location = location;
        this.openEditItem = false;
        this.searchFields = ['name', 'itemCode'];
        this.searchHelp = "Name OR ItemCode";
        this.pageSize = 5;
        this.pageNumber = 1;
      }

      _createClass(UpdateItemsDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get("id");
          console.log(this.id);
          /*
          this.loaderService.show();
          this.bspServiceService
            .getCats()
            .toPromise()
            .then((cats) => {
              this.cats = cats;
              this.catId =
                this.stateService.getSelectedCat() != null
                  ? this.stateService.getSelectedCat()
                  : cats[0].id;
              this.GetItemsForTheCat(this.catId);
              // this.loaderService.dismiss();
            })
            .catch((error) => {
              this.loaderService.dismiss();
              this.helperService.openSomethingWrongDialog(error);
            }); */

          this.GetItemsForTheCat(this.id.toString());
        }
      }, {
        key: "GetItemsForTheCat",
        value: function GetItemsForTheCat(catId) {
          var _this9 = this;

          this.openEditItem = false; //update the ui

          console.log('Category ' + catId + 'is selected..!!');
          this.loaderService.show();
          this.bspServiceService.getCatItemDetails(catId).toPromise().then(function (itemModel) {
            console.log(JSON.stringify(itemModel));

            _this9.loaderService.dismiss();

            _this9.items = itemModel;
            _this9.catId = catId;

            _this9.stateService.setSelectedCat(_this9.catId);

            _this9.loaderService.dismiss(); // if (itemModel.items.length > 0) {
            //   this.dataList = itemModel.items;
            //   //this.keys = itemModel.items.values;
            // }

          })["catch"](function (error) {
            _this9.loaderService.dismiss();

            _this9.helperService.openSomethingWrongDialog(error);
          });
        }
      }, {
        key: "EdititemsFortheID",
        value: function EdititemsFortheID(item) {
          console.log('Navigate to edit items page');
          console.log('Get item details for the item', item); // this.router.navigate(['admin/itemUpdate', item]);

          this.selectedItem = item;
          this.openEditItem = true;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(page) {
          this.pageNumber = page;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "goBacktoAdmin",
        value: function goBacktoAdmin() {
          this.router.navigate(['admin']);
        }
      }]);

      return UpdateItemsDataComponent;
    }();

    UpdateItemsDataComponent.ctorParameters = function () {
      return [{
        type: src_app_services_api_bsp_service_service__WEBPACK_IMPORTED_MODULE_4__["BspServiceService"]
      }, {
        type: src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
      }];
    };

    UpdateItemsDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-update-items-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-items-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/update-items-data/update-items-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-items-data.component.scss */
      "./src/app/admin-mgmt/update-items-data/update-items-data.component.scss"))["default"]]
    })], UpdateItemsDataComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/user-mgmt/user-mgmt.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/admin-mgmt/user-mgmt/user-mgmt.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtUserMgmtUserMgmtComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body-bg {\n  background-color: #ffffff;\n}\n\napp-retailer-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\napp-retailer-list-view {\n  position: absolute;\n  top: 100px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n}\n\napp-add-edit-user {\n  position: absolute;\n  top: 100px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWdtdC91c2VyLW1nbXQvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXBwXFxhZG1pbi1tZ210XFx1c2VyLW1nbXRcXHVzZXItbWdtdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC91c2VyLW1nbXQvdXNlci1tZ210LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1nbXQvdXNlci1tZ210L3VzZXItbWdtdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy5zY3NzXCI7XG5cbi5ib2R5LWJne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5hcHAtcmV0YWlsZXItaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgYXBwLXJldGFpbGVyLWxpc3QtdmlldyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIGFwcC1hZGQtZWRpdC11c2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAiLCIuYm9keS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmFwcC1yZXRhaWxlci1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmFwcC1yZXRhaWxlci1saXN0LXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5hcHAtYWRkLWVkaXQtdXNlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/user-mgmt/user-mgmt.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin-mgmt/user-mgmt/user-mgmt.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserMgmtComponent */

  /***/
  function srcAppAdminMgmtUserMgmtUserMgmtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMgmtComponent", function () {
      return UserMgmtComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/loader/loader.service */
    "./src/app/shared/loader/loader.service.ts");
    /* harmony import */


    var src_app_services_api_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api/account.service */
    "./src/app/services/api/account.service.ts");

    var UserMgmtComponent = /*#__PURE__*/function () {
      function UserMgmtComponent(loaderService, accountService, helperService, stateService, dialog) {
        _classCallCheck(this, UserMgmtComponent);

        this.loaderService = loaderService;
        this.accountService = accountService;
        this.helperService = helperService;
        this.stateService = stateService;
        this.dialog = dialog;
        this.searchFields = ['firstName', 'userEmail'];
        this.searchHelp = "Name OR Email";
      }

      _createClass(UserMgmtComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRetailerUsers();
          this.buildTableHeaderColumns();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {}
      }, {
        key: "onEdit",
        value: function onEdit() {}
      }, {
        key: "onDelete",
        value: function onDelete() {}
      }, {
        key: "getRetailerUsers",
        value: function getRetailerUsers() {
          var _this10 = this;

          this.loaderService.show();
          this.accountService.getUsers().toPromise().then(function (users) {
            console.log("users :" + JSON.stringify(users));
            _this10.users = users.sort(function (u1, u2) {
              return u1.name > u2.name ? 1 : -1;
            });

            _this10.loaderService.dismiss();
          })["catch"](function (error) {
            _this10.loaderService.dismiss();

            _this10.helperService.openSomethingWrongDialog(error);
          });
        }
      }, {
        key: "buildTableHeaderColumns",
        value: function buildTableHeaderColumns() {
          this.userTableHeaderColumns = [{
            field: 'firstName',
            header: 'name'
          }, {
            field: 'userEmail',
            header: 'email'
          }, {
            field: 'roleId',
            header: 'role'
          }];
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {}
      }]);

      return UserMgmtComponent;
    }();

    UserMgmtComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: src_app_services_api_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    UserMgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-mgmt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-mgmt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/user-mgmt/user-mgmt.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-mgmt.component.scss */
      "./src/app/admin-mgmt/user-mgmt/user-mgmt.component.scss"))["default"]]
    })], UserMgmtComponent);
    /***/
  },

  /***/
  "./src/app/admin-mgmt/users/users.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/admin-mgmt/users/users.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminMgmtUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".above-table {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 5%;\n}\n@media (max-width: 767px) {\n  .above-table {\n    flex-direction: column;\n  }\n}\n.above-table .table-title {\n  color: #0F7A86;\n  font-weight: 500;\n  font-size: 20px;\n}\n.above-table .search-field-container {\n  width: 35%;\n  border-bottom: 1px dotted #888;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .above-table .search-field-container {\n    width: 100%;\n    margin: 15px 0 20px;\n  }\n}\n.above-table .search-field-container .search-field {\n  font-size: 14px;\n  border-color: #FFFFFF;\n}\n.above-table .search-field-container .cursor-pointer {\n  cursor: pointer;\n}\n.above-table .add-row-button {\n  background: #0F7A86;\n  border: #0F7A86;\n  color: #FFFFFF;\n}\n@media (min-width: 768px) {\n  ::-webkit-scrollbar {\n    height: 0;\n  }\n}\n.table-container {\n  overflow-x: scroll;\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .table-container table {\n    min-width: 1024px;\n  }\n}\n.table-container table thead {\n  background-color: #F4F4F4;\n  height: 45px;\n}\n.table-container table tbody tr {\n  border-bottom: 1px solid #CCC;\n  min-height: 55px;\n}\n.table-container table thead, .table-container table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  text-align: center;\n}\n.table-container table .edit-icon {\n  margin-right: 10px;\n}\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n}\n@media (max-width: 767px) {\n  .pagination-wrapper {\n    flex-direction: column-reverse;\n  }\n}\n.pagination-wrapper .my-pagination {\n  padding-left: 40px;\n}\n@media (max-width: 767px) {\n  .pagination-wrapper .my-pagination {\n    padding-left: 0;\n  }\n}\n.pagination-wrapper .input-group {\n  width: 70px;\n  margin-right: 80px;\n}\n@media (max-width: 767px) {\n  .pagination-wrapper .input-group {\n    margin-right: 0;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWdtdC91c2Vycy9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhcHBcXGFkbWluLW1nbXRcXHVzZXJzXFx1c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tbWdtdC91c2Vycy9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQU5GO0lBT0ksc0JBQUE7RUNBRjtBQUNGO0FERUU7RUFDRSxjRW9CbUI7RUZuQm5CLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdJO0VBTkY7SUFPSSxXQUFBO0lBQ0EsbUJBQUE7RUNBSjtBQUNGO0FERUk7RUFDRSxlQUFBO0VBQ0EscUJFckJRO0FEcUJkO0FER0k7RUFDRSxlQUFBO0FDRE47QURLRTtFQUNFLG1CRVBtQjtFRlFuQixlRVJtQjtFRlNuQixjRWhDVTtBRDZCZDtBRE9BO0VBRUU7SUFDRSxTQUFBO0VDTEY7QUFDRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDTkY7QURVSTtFQUZGO0lBR0ksaUJBQUE7RUNQSjtBQUNGO0FEU0k7RUFDRSx5QkU1Q29CO0VGNkNwQixZQUFBO0FDUE47QURVSTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNSTjtBRFdJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVE47QURZSTtFQUNFLGtCQUFBO0FDVk47QURlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDWkY7QURjRTtFQVBGO0lBUUksOEJBQUE7RUNYRjtBQUNGO0FEYUU7RUFDRSxrQkFBQTtBQ1hKO0FEYUk7RUFIRjtJQUlJLGVBQUE7RUNWSjtBQUNGO0FEYUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGFJO0VBSkY7SUFLSSxlQUFBO0lBQ0EsbUJBQUE7RUNWSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tbWdtdC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy5zY3NzXCI7XG5cbi5hYm92ZS10YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA1JTtcblxuICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudGFibGUtdGl0bGUge1xuICAgIGNvbG9yOiAkbWFpbi1oaWdobGlnaHQtY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICR0cnVlLWdyZXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWZpZWxkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuICAgIH1cblxuICAgIC5jdXJzb3ItcG9pbnRlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmFkZC1yb3ctYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1oaWdobGlnaHQtY29sb3I7XG4gICAgYm9yZGVyOiAkbWFpbi1oaWdobGlnaHQtY29sb3I7XG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAkaXBhZC13aWR0aCkge1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMDtcbiAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcblxuICB0YWJsZSB7XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgICAgbWluLXdpZHRoOiAxMDI0cHg7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kO1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIH1cblxuICAgIHRib2R5IHRyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gICAgfVxuXG4gICAgdGhlYWQsIHRib2R5IHRyIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5lZGl0LWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcblxuICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5teS1wYWdpbmF0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgfVxuXG4gIC5pbnB1dC1ncm91cCB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQtd2lkdGggLSAxcHgpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICB9XG59XG4iLCIuYWJvdmUtdGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggNSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFib3ZlLXRhYmxlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uYWJvdmUtdGFibGUgLnRhYmxlLXRpdGxlIHtcbiAgY29sb3I6ICMwRjdBODY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzg4ODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCAwIDIwcHg7XG4gIH1cbn1cbi5hYm92ZS10YWJsZSAuc2VhcmNoLWZpZWxkLWNvbnRhaW5lciAuc2VhcmNoLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG59XG4uYWJvdmUtdGFibGUgLnNlYXJjaC1maWVsZC1jb250YWluZXIgLmN1cnNvci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFib3ZlLXRhYmxlIC5hZGQtcm93LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMwRjdBODY7XG4gIGJvcmRlcjogIzBGN0E4NjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cbi50YWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC50YWJsZS1jb250YWluZXIgdGFibGUge1xuICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICB9XG59XG4udGFibGUtY29udGFpbmVyIHRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICBtaW4taGVpZ2h0OiA1NXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0aGVhZCwgLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB0Ym9keSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSAuZWRpdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbi5wYWdpbmF0aW9uLXdyYXBwZXIgLm15LXBhZ2luYXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhZ2luYXRpb24td3JhcHBlciAubXktcGFnaW5hdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG4ucGFnaW5hdGlvbi13cmFwcGVyIC5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhZ2luYXRpb24td3JhcHBlciAuaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59IiwiJG5jci1ncmVlbjogIzU0Qjk0ODtcbiRwcmltYXJ5LWFwcC1jb2xvcjogI0E2Q0UzOTtcbiRwcmltYXJ5LWdyZWVuOiAjQTZDRTM5O1xuJHRoZW1lLWNvbG9yOiAjOTVCRTMxO1xuJHRleHQtZ3JlZW46ICM1MEI5NDg7XG4kbGlnaHQtZ3JlZW4tYmFja2dyb3VuZDogI0Y0RjlFNztcbiRidXR0b24tZGlzYWJsZWQtZGVmYXVsdDogI0QzRDNEMztcbiRlcnJvci1yZWQ6ICNGRjBDM0U7XG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XG4kYmxhY2stb3ZlcmxheTogcmdiYSgwLCAwLCAwLCAwLjUpO1xuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xuJGRhcmstdGVhbC1jb2xvcjogIzBGN0E4NjtcbiRidXR0b24tZGVsZXRlLXJlc2VydmF0aW9uLWNvbG9yOiAjQzlDOUM5O1xuJHNsb3QtY29kZS1jb2xvcjogIzQwN0U4OTtcbiRncmV5LWNvbG9yOiAjRjBGMEYwO1xuJGRpc2FibGVkLWlucHV0LWJhY2tncm91bmQ6ICNGMkYyRjI7XG4kZGlzYWJsZWQtdGV4dC1jb2xvcjogIzg4ODtcbiRncmV5LWJ1dHRvbi1vdXRsaW5lOiAjODg4O1xuJGdyZXktdGV4dDogcmdiYSgwLCAwLCAwLCAwLjYpOztcbiRncmV5LWJhY2tncm91bmQ6ICNGM0YzRjM7XG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQ6ICNGNEY0RjQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuXG4kaXBob25lNS13aWR0aDogMzIwcHg7XG4kaXBob25lNS1oZWlnaHQ6IDU2OHB4O1xuJGhlYWRlci1oZWlnaHQ6IDgwcHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaXBhZC13aWR0aDogNzY4cHg7XG4kc3dpdGNoLXBhZ2UtaGVhZGVyLWhlaWdodDogNDVweDtcbiRoZWFkZXItdmVydGljYWwtcGFkZGluZzogMjVweDtcbiRpbmxpbmUtaWNvbi1tYXJnaW46IDdweDtcbiR0YWItYmFja2dyb3VuZDogI0MzRTNEOTtcbiRtYWluLWhpZ2hsaWdodC1jb2xvcjogIzBGN0E4NjtcbiR0cnVlLWdyZXk6ICM4ODg7XG4kbGlnaHQtZ3JleTogI0NDQztcblxuXG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin-mgmt/users/users.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin-mgmt/users/users.component.ts ***!
    \*****************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppAdminMgmtUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/state.service */
    "./src/app/services/state.service.ts");

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(stateService) {
        _classCallCheck(this, UsersComponent);

        this.stateService = stateService;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSize = 10;
        this.pageNumber = 1;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.add.emit();
        }
      }, {
        key: "onEdit",
        value: function onEdit(item) {
          this.edit.emit(item);
        }
      }, {
        key: "onDelete",
        value: function onDelete(item) {
          this["delete"].emit(item);
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(pN) {
          this.pageNumber = pN;
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersComponent.prototype, "addButtonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersComponent.prototype, "subHeading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersComponent.prototype, "searchHelp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersComponent.prototype, "searchFields", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UsersComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UsersComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UsersComponent.prototype, "edit", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-mgmt/users/users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/admin-mgmt/users/users.component.scss"))["default"]]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./start/start.component */
    "./src/app/start/start.component.ts");
    /* harmony import */


    var _start_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./start/login/login.component */
    "./src/app/start/login/login.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/start/login',
      pathMatch: 'full'
    }, {
      path: 'start',
      component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"],
      children: [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _start_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }]
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./admin-mgmt/admin-mgmt.module */
        "./src/app/admin-mgmt/admin-mgmt.module.ts")).then(function (m) {
          return m.AdminMgmtModule;
        });
      }
    }, {
      path: 'retail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | retail-management-retail-management-module */
        "retail-management-retail-management-module").then(__webpack_require__.bind(null,
        /*! ./retail-management/retail-management.module */
        "./src/app/retail-management/retail-management.module.ts")).then(function (m) {
          return m.RetailManagementModule;
        });
      }
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/helper.service */
    "./src/app/services/helper.service.ts");

    var AppComponent = function AppComponent(swUpdate, translate, helperService, changeDetectorRef) {
      _classCallCheck(this, AppComponent);

      this.swUpdate = swUpdate;
      this.translate = translate;
      this.helperService = helperService;
      this.changeDetectorRef = changeDetectorRef;
      this.title = 'retail-client';
      swUpdate.available.subscribe(function (next) {
        return swUpdate.activateUpdate().then(function () {
          console.log('Reload for update');
          document.location.reload();
        });
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, HttpLoaderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_mgmt_admin_mgmt_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin-mgmt/admin-mgmt.module */
    "./src/app/admin-mgmt/admin-mgmt.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _start_start_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./start/start.component */
    "./src/app/start/start.component.ts");
    /* harmony import */


    var _start_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./start/login/login.component */
    "./src/app/start/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/dialogs/success-dialog/success-dialog.component */
    "./src/app/shared/dialogs/success-dialog/success-dialog.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _guards_retail_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./guards/retail.guard */
    "./src/app/guards/retail.guard.ts");
    /* harmony import */


    var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/loader/loader.component */
    "./src/app/shared/loader/loader.component.ts");
    /* harmony import */


    var _interceptor_custom_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./interceptor/custom.interceptor */
    "./src/app/interceptor/custom.interceptor.ts");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _shared_dialogs_something_wrong_dialog_something_wrong_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/dialogs/something-wrong-dialog/something-wrong-dialog.component */
    "./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_12__["StartComponent"], _start_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _shared_dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SuccessDialogComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
        }
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_21__["DeviceDetectorModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _admin_mgmt_admin_mgmt_module__WEBPACK_IMPORTED_MODULE_1__["AdminMgmtModule"]],
      providers: [_guards_retail_guard__WEBPACK_IMPORTED_MODULE_18__["RetailGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_custom_interceptor__WEBPACK_IMPORTED_MODULE_20__["CustomInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_shared_dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SuccessDialogComponent"], _shared_dialogs_something_wrong_dialog_something_wrong_dialog_component__WEBPACK_IMPORTED_MODULE_22__["SomethingWrongDialogComponent"]]
    })], AppModule);

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/data/cats.json":
  /*!********************************!*\
    !*** ./src/app/data/cats.json ***!
    \********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

  /***/
  function srcAppDataCatsJson(module) {
    module.exports = JSON.parse("[{\"id\":\"4\",\"name\":\"Electronics\",\"active\":true,\"catImg\":\"4_.png\"},{\"id\":\"DairyProducts\",\"name\":\"Retail\",\"active\":true,\"catImg\":\"DairyProducts.png\"},{\"id\":\"Gadgets\",\"name\":\"Electronics\",\"active\":true,\"catImg\":\"Gadgets.png\"},{\"id\":\"coldBreverages\",\"name\":\"Breverages\",\"active\":true,\"catImg\":\"Default.png\"},{\"id\":\"11\",\"name\":\"Breverages\",\"active\":true,\"catImg\":\"Default.png\"},{\"id\":\"5\",\"name\":\"Fashion\",\"active\":true,\"catImg\":\"5.png\"},{\"id\":\"3\",\"name\":\"Gold and Watches\",\"active\":true,\"catImg\":\"3.png\"},{\"id\":\"8\",\"name\":\"Groceries\",\"active\":true,\"catImg\":\"Default.png\"},{\"id\":\"1\",\"name\":\"Perfumes and Cosmetics\",\"active\":true,\"catImg\":\"1.png\"},{\"id\":\"15\",\"name\":\"clothes\",\"active\":true,\"catImg\":\"5.png\"},{\"id\":\"2\",\"name\":\"Sunglasses\",\"active\":true,\"catImg\":\"2.png\"},{\"id\":\"7\",\"name\":\"Tobacco\",\"active\":true,\"catImg\":\"7.png\"}]");
    /***/
  },

  /***/
  "./src/app/data/itemDetails.json":
  /*!***************************************!*\
    !*** ./src/app/data/itemDetails.json ***!
    \***************************************/

  /*! exports provided: 0, 1, default */

  /***/
  function srcAppDataItemDetailsJson(module) {
    module.exports = JSON.parse("[{\"id\":\"1111117\",\"name\":\"Saandalwood Perfume\",\"desc\":\"Body and mist sandalwood perfume\",\"active\":false,\"itemImg\":\"1111117.png\",\"itemPrice\":25,\"itemQuantity\":1},{\"id\":\"9998881\",\"name\":\"sample text\",\"desc\":\"sample text\",\"active\":false,\"itemImg\":\"\",\"itemPrice\":\"\",\"itemQuantity\":1}]");
    /***/
  },

  /***/
  "./src/app/data/items.json":
  /*!*********************************!*\
    !*** ./src/app/data/items.json ***!
    \*********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

  /***/
  function srcAppDataItemsJson(module) {
    module.exports = JSON.parse("[{\"id\":\"1111114\",\"name\":\"Adidas Handbag\",\"active\":true,\"itemImg\":\"1111114.png\"},{\"id\":\"1111112\",\"name\":\"Amul Heavy Cream Milk\",\"active\":true,\"itemImg\":\"1111112.png\"},{\"id\":\"1111111\",\"name\":\"Amul Milk\",\"active\":true,\"itemImg\":\"1111111.png\"},{\"id\":\"1111113\",\"name\":\"BOSS Headset\",\"active\":true,\"itemImg\":\"1111113.png\"},{\"id\":\"VijayaMilk\",\"name\":\"Dairy Product\",\"active\":true,\"itemImg\":\"VijayaMilk.png\"},{\"id\":\"1111115\",\"name\":\"Fast Track watch\",\"active\":true,\"itemImg\":\"1111115.png\"},{\"id\":\"1111116\",\"name\":\"Lego\",\"active\":true,\"itemImg\":\"1111116.png\"},{\"id\":\"1111119\",\"name\":\"Marlboro\",\"active\":true,\"itemImg\":\"1111119.png\"},{\"id\":\"1111118\",\"name\":\"Persol Sunglasses\",\"active\":true,\"itemImg\":\"1111118.png\"},{\"id\":\"1111117\",\"name\":\"Saandalwood Perfume\",\"active\":true,\"itemImg\":\"1111117.png\"},{\"id\":\"9998881\",\"name\":\"sample text\",\"active\":false,\"itemImg\":\"9998881.png\"},{\"id\":\"1278932\",\"name\":\"sample text\",\"active\":false,\"itemImg\":\"1278932.png\"}]");
    /***/
  },

  /***/
  "./src/app/data/token.json":
  /*!*********************************!*\
    !*** ./src/app/data/token.json ***!
    \*********************************/

  /*! exports provided: token, user, default */

  /***/
  function srcAppDataTokenJson(module) {
    module.exports = JSON.parse("{\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmNyYWRtaW4iLCJleHAiOjE1NzIwODMxOTEsImlzcyI6Imh0dHBzOi8vd3d3Lm5jci5jb20vdHJhdmVsIiwiYXVkIjoiaHR0cHM6Ly93d3cubmNyLmNvbS90cmF2ZWwifQ.bjd3vZ1F3Q_9nd2W8jcmPyizvnvHMPLhAAZ7DU2PB3s\",\"user\":{\"id\":1,\"userName\":\"sumith\",\"firstName\":\"rao\",\"lastName\":\"b\",\"userEmail\":\"test@email.com\",\"active\":true,\"modifiedDate\":\"\",\"loginSession\":\"\",\"password\":\"test123\",\"roles\":[\"ADMIN\",\"USER\"]}}");
    /***/
  },

  /***/
  "./src/app/guards/retail.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/guards/retail.guard.ts ***!
    \****************************************/

  /*! exports provided: RetailGuard */

  /***/
  function srcAppGuardsRetailGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetailGuard", function () {
      return RetailGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _models_account_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/account.models */
    "./src/app/models/account.models.ts");

    var RetailGuard = /*#__PURE__*/function () {
      function RetailGuard(stateService, router) {
        _classCallCheck(this, RetailGuard);

        this.stateService = stateService;
        this.router = router;
      }

      _createClass(RetailGuard, [{
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          return true;
          var authorities = this.stateService.getAuthorities();

          if (authorities && authorities === _models_account_models__WEBPACK_IMPORTED_MODULE_4__["AuthoritiesEnum"].USER) {
            return true;
          } else {
            this.router.navigate(['start/login']);
            return false;
          }
        }
      }]);

      return RetailGuard;
    }();

    RetailGuard.ctorParameters = function () {
      return [{
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RetailGuard);
    /***/
  },

  /***/
  "./src/app/interceptor/custom.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptor/custom.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: CustomInterceptor */

  /***/
  function srcAppInterceptorCustomInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function () {
      return CustomInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _data_token_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../data/token.json */
    "./src/app/data/token.json");

    var _data_token_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../data/token.json */
    "./src/app/data/token.json", 1);
    /* harmony import */


    var _data_cats_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../data/cats.json */
    "./src/app/data/cats.json");

    var _data_cats_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../data/cats.json */
    "./src/app/data/cats.json", 1);
    /* harmony import */


    var _data_items_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../data/items.json */
    "./src/app/data/items.json");

    var _data_items_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../data/items.json */
    "./src/app/data/items.json", 1);
    /* harmony import */


    var _data_itemDetails_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../data/itemDetails.json */
    "./src/app/data/itemDetails.json");

    var _data_itemDetails_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../data/itemDetails.json */
    "./src/app/data/itemDetails.json", 1);

    var CustomInterceptor = /*#__PURE__*/function () {
      function CustomInterceptor(helperService) {
        _classCallCheck(this, CustomInterceptor);

        this.helperService = helperService;
      }

      _createClass(CustomInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this11 = this;

          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return this.MockApiRequest(request);
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (error.status === 401) {
                _this11.helperService.signOut();
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
          }));
        }
      }, {
        key: "MockApiRequest",
        value: function MockApiRequest(request) {
          console.log('Loaded from json : ' + request.url);
          var api = request.url.substr(request.url.lastIndexOf('/') + 1);

          switch (api) {
            case 'token':
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: _data_token_json__WEBPACK_IMPORTED_MODULE_7__
              }));
              break;

            case 'cats':
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: _data_cats_json__WEBPACK_IMPORTED_MODULE_8__
              }));
              break;

            case 'items':
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: _data_items_json__WEBPACK_IMPORTED_MODULE_9__
              }));
              break;

            case 'itemDetails':
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: _data_itemDetails_json__WEBPACK_IMPORTED_MODULE_10__
              }));
              break;

            default:
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: _data_itemDetails_json__WEBPACK_IMPORTED_MODULE_10__
              }));
          }
        }
      }]);

      return CustomInterceptor;
    }();

    CustomInterceptor.ctorParameters = function () {
      return [{
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }];
    };

    CustomInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CustomInterceptor);
    /***/
  },

  /***/
  "./src/app/models/account.models.ts":
  /*!******************************************!*\
    !*** ./src/app/models/account.models.ts ***!
    \******************************************/

  /*! exports provided: AuthoritiesEnum, AccountModel, ChangePasswordModel, UsersModel, UserModel, RoleModel, SignInModel, SignInResponseModel, ResetPasswordModel, LanguageModel */

  /***/
  function srcAppModelsAccountModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthoritiesEnum", function () {
      return AuthoritiesEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModel", function () {
      return AccountModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordModel", function () {
      return ChangePasswordModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModel", function () {
      return UsersModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModel", function () {
      return UserModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleModel", function () {
      return RoleModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInModel", function () {
      return SignInModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInResponseModel", function () {
      return SignInResponseModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function () {
      return ResetPasswordModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageModel", function () {
      return LanguageModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AuthoritiesEnum;

    (function (AuthoritiesEnum) {
      AuthoritiesEnum["USER"] = "ROLE_USER";
      AuthoritiesEnum["ADMIN"] = "ROLE_ADMIN";
      AuthoritiesEnum["STORE_MANAGER"] = "ROLE_STORE_MANAGER";
      AuthoritiesEnum["RETAIL_MANAGER"] = "ROLE_RETAIL_MANAGER";
    })(AuthoritiesEnum || (AuthoritiesEnum = {}));

    var AccountModel = function AccountModel(login, firstName, email, langKey, authorities) {
      _classCallCheck(this, AccountModel);

      this.login = login;
      this.firstName = firstName;
      this.email = email;
      this.langKey = langKey;
      this.authorities = authorities;
    };

    var ChangePasswordModel = function ChangePasswordModel(currentPassword, newPassword) {
      _classCallCheck(this, ChangePasswordModel);

      this.currentPassword = currentPassword;
      this.newPassword = newPassword;
    }; //{"id":2,"userName":"ncradmin","firstName":"NCR","lastName":"Admin","userEmail":"mari@ncr.com","active":true,"modifiedDate":"2018-09-10T14:34:00","loginSession":null,"password":null}


    var UsersModel = function UsersModel() {
      _classCallCheck(this, UsersModel);
    };

    var UserModel = function UserModel() {
      _classCallCheck(this, UserModel);
    };

    var RoleModel = function RoleModel() {
      _classCallCheck(this, RoleModel);
    };

    var SignInModel = function SignInModel() {
      _classCallCheck(this, SignInModel);
    };

    var SignInResponseModel = function SignInResponseModel() {
      _classCallCheck(this, SignInResponseModel);
    };

    var ResetPasswordModel = function ResetPasswordModel(key, newPassword) {
      _classCallCheck(this, ResetPasswordModel);

      this.key = key;
      this.newPassword = newPassword;
    };

    var LanguageModel = function LanguageModel() {
      _classCallCheck(this, LanguageModel);
    };
    /***/

  },

  /***/
  "./src/app/models/dialog.models.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/dialog.models.ts ***!
    \*****************************************/

  /*! exports provided: SomethingWrongDialogModel, SuccessDialogModel */

  /***/
  function srcAppModelsDialogModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SomethingWrongDialogModel", function () {
      return SomethingWrongDialogModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessDialogModel", function () {
      return SuccessDialogModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SomethingWrongDialogModel = function SomethingWrongDialogModel(title, description, rawTitle, rawDescription, timeToClose) {
      _classCallCheck(this, SomethingWrongDialogModel);

      this.title = title;
      this.description = description;
      this.rawTitle = rawTitle;
      this.rawDescription = rawDescription;
      this.timeToClose = timeToClose;
    };

    var SuccessDialogModel = function SuccessDialogModel(title, timeToClose, descriptionPart1, descriptionPart2, highlightedData) {
      _classCallCheck(this, SuccessDialogModel);

      this.title = title;
      this.descriptionPart1 = descriptionPart1;
      this.timeToClose = timeToClose;
      this.descriptionPart2 = descriptionPart2;
      this.highlightedData = highlightedData;
    };
    /***/

  },

  /***/
  "./src/app/models/item.models.ts":
  /*!***************************************!*\
    !*** ./src/app/models/item.models.ts ***!
    \***************************************/

  /*! exports provided: CatsModel, CatModel, ItemsModel, ItemModel, SiteModel, BasketModel */

  /***/
  function srcAppModelsItemModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatsModel", function () {
      return CatsModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatModel", function () {
      return CatModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsModel", function () {
      return ItemsModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemModel", function () {
      return ItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiteModel", function () {
      return SiteModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketModel", function () {
      return BasketModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CatsModel = function CatsModel() {
      _classCallCheck(this, CatsModel);
    };

    var CatModel = function CatModel() {
      _classCallCheck(this, CatModel);
    };

    var ItemsModel = function ItemsModel() {
      _classCallCheck(this, ItemsModel);
    };

    var ItemModel = function ItemModel() {
      _classCallCheck(this, ItemModel);
    };

    var SiteModel = function SiteModel() {
      _classCallCheck(this, SiteModel);
    };

    var BasketModel = function BasketModel() {
      _classCallCheck(this, BasketModel);

      this.totalPrice = '0.00';
      this.totalQuantity = 0;
      this.items = {};
    };
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper img {\n  width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXBwXFxwYWdlLW5vdC1mb3VuZFxccGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL0M6XFxVc2Vyc1xcUksxODUzMDJcXERvY3VtZW50c1xcTkNSXFxCU1BcXENPREVcXE9DVE9CRVJcXE5FV3djXFx0cnVua1xccmV0YWlsLWNsaWVudC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb25zdGFudHMuc2NzcyIsInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxZQ2tCWTtBQ3JCaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy5zY3NzXCI7XG5cbi5wYWdlLXdyYXBwZXIge1xuXG4gIGltZyB7XG4gICAgd2lkdGg6ICRpcGhvbmU1LXdpZHRoO1xuICB9XG59XG4iLCIkbmNyLWdyZWVuOiAjNTRCOTQ4O1xuJHByaW1hcnktYXBwLWNvbG9yOiAjQTZDRTM5O1xuJHByaW1hcnktZ3JlZW46ICNBNkNFMzk7XG4kdGhlbWUtY29sb3I6ICM5NUJFMzE7XG4kdGV4dC1ncmVlbjogIzUwQjk0ODtcbiRsaWdodC1ncmVlbi1iYWNrZ3JvdW5kOiAjRjRGOUU3O1xuJGJ1dHRvbi1kaXNhYmxlZC1kZWZhdWx0OiAjRDNEM0QzO1xuJGVycm9yLXJlZDogI0ZGMEMzRTtcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcbiRibGFjay1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kd2hpdGUtY29sb3I6ICNGRkZGRkY7XG4kZGFyay10ZWFsLWNvbG9yOiAjMEY3QTg2O1xuJGJ1dHRvbi1kZWxldGUtcmVzZXJ2YXRpb24tY29sb3I6ICNDOUM5Qzk7XG4kc2xvdC1jb2RlLWNvbG9yOiAjNDA3RTg5O1xuJGdyZXktY29sb3I6ICNGMEYwRjA7XG4kZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZDogI0YyRjJGMjtcbiRkaXNhYmxlZC10ZXh0LWNvbG9yOiAjODg4O1xuJGdyZXktYnV0dG9uLW91dGxpbmU6ICM4ODg7XG4kZ3JleS10ZXh0OiByZ2JhKDAsIDAsIDAsIDAuNik7O1xuJGdyZXktYmFja2dyb3VuZDogI0YzRjNGMztcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI0Y0RjRGNDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG5cbiRpcGhvbmU1LXdpZHRoOiAzMjBweDtcbiRpcGhvbmU1LWhlaWdodDogNTY4cHg7XG4kaGVhZGVyLWhlaWdodDogODBweDtcbiRpbmxpbmUtaWNvbi1tYXJnaW46IDdweDtcbiRoZWFkZXItdmVydGljYWwtcGFkZGluZzogMjVweDtcbiRpcGFkLXdpZHRoOiA3NjhweDtcbiRzd2l0Y2gtcGFnZS1oZWFkZXItaGVpZ2h0OiA0NXB4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJHRhYi1iYWNrZ3JvdW5kOiAjQzNFM0Q5O1xuJG1haW4taGlnaGxpZ2h0LWNvbG9yOiAjMEY3QTg2O1xuJHRydWUtZ3JleTogIzg4ODtcbiRsaWdodC1ncmV5OiAjQ0NDO1xuXG5cblxuXG5cbiIsIi5wYWdlLXdyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDMyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.scss */
      "./src/app/page-not-found/page-not-found.component.scss"))["default"]]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/pipes/items-filter.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/items-filter.pipe.ts ***!
    \********************************************/

  /*! exports provided: ItemsFilterPipe */

  /***/
  function srcAppPipesItemsFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsFilterPipe", function () {
      return ItemsFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ItemsFilterPipe = /*#__PURE__*/function () {
      function ItemsFilterPipe() {
        _classCallCheck(this, ItemsFilterPipe);
      }

      _createClass(ItemsFilterPipe, [{
        key: "transform",
        value: function transform(items, keyword, properties) {
          if (!items) {
            return [];
          }

          if (!keyword) {
            return items;
          }

          return items.filter(function (item) {
            var itemFound;
            var val; // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < properties.length; i++) {
              try {
                val = item[properties[i]].toString();
                keyword = keyword.toString();

                if (val.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                  itemFound = true;
                  break;
                }
              } catch (e) {}
            }

            return itemFound;
          });
        }
      }]);

      return ItemsFilterPipe;
    }();

    ItemsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'itemsFilter'
    })], ItemsFilterPipe);
    /***/
  },

  /***/
  "./src/app/services/api/account.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/api/account.service.ts ***!
    \*************************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppServicesApiAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/constants */
    "./src/app/shared/constants.ts");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/services/helper.service.ts");

    var AccountService = /*#__PURE__*/function () {
      function AccountService(httpClient, helperService) {
        _classCallCheck(this, AccountService);

        this.httpClient = httpClient;
        this.helperService = helperService;
      }

      _createClass(AccountService, [{
        key: "signIn",
        value: function signIn(signInModel) {
          return this.httpClient.post(_shared_constants__WEBPACK_IMPORTED_MODULE_3__["default"].BACKEND_API_ENDPOINTS.FIND_USER, signInModel);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.httpClient.get(_shared_constants__WEBPACK_IMPORTED_MODULE_3__["default"].BACKEND_API_ENDPOINTS.USERS);
        }
      }]);

      return AccountService;
    }();

    AccountService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }];
    };

    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AccountService);
    /***/
  },

  /***/
  "./src/app/services/api/bsp-service.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/api/bsp-service.service.ts ***!
    \*****************************************************/

  /*! exports provided: BspServiceService */

  /***/
  function srcAppServicesApiBspServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BspServiceService", function () {
      return BspServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/constants */
    "./src/app/shared/constants.ts");

    var BspServiceService = /*#__PURE__*/function () {
      function BspServiceService(httpClient, helperService) {
        _classCallCheck(this, BspServiceService);

        this.httpClient = httpClient;
        this.helperService = helperService;
      }

      _createClass(BspServiceService, [{
        key: "getCats",
        value: function getCats() {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_CATS, {
            headers: this.helperService.getAuthorizationHeader()
          });
        }
      }, {
        key: "getItems",
        value: function getItems(catId) {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_ITEMS, {
            headers: this.helperService.getAuthorizationHeader(),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('cat_id', catId.toString())
          });
        }
      }, {
        key: "getCatItemDetails",
        value: function getCatItemDetails(catId) {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_CAT_ITEM_DETAILS + encodeURIComponent(catId.toString()), {
            headers: this.helperService.getAuthorizationHeader()
          });
        }
      }, {
        key: "getSitesDetails",
        value: function getSitesDetails(siteId) {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_SITE_DETAILS + encodeURIComponent(siteId), {
            headers: this.helperService.getAuthorizationHeader(),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('siteId', siteId)
          });
        }
      }, {
        key: "getSiteInformation",
        value: function getSiteInformation(siteId, customParam) {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_SITE_DETAILS + encodeURIComponent(siteId) + '/' + encodeURIComponent(customParam), {
            headers: this.helperService.getAuthorizationHeader()
          });
        }
      }, {
        key: "getSiteOnlineStatus",
        value: function getSiteOnlineStatus(siteId) {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_SITE_ONLINE_STATUS + encodeURIComponent(siteId), {
            headers: this.helperService.getAuthorizationHeader()
          });
        }
      }, {
        key: "getAllSiteInformation",
        value: function getAllSiteInformation() {
          var body = {
            "criteria": {
              "status": "ACTIVE",
              "customAttributeSets": [{
                "typeName": "PRICEBOOKSITEDETAILS"
              }]
            }
          };
          return this.httpClient.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_POST_SITE_DETAILS, body, {
            headers: this.helperService.getAuthorizationHeader()
          });
        }
      }, {
        key: "generateXMLForSite",
        value: function generateXMLForSite(siteId) {
          return this.httpClient.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_PUT_GENERATEXMLFILE + encodeURIComponent(siteId), {
            headers: this.helperService.getAuthorizationHeader(),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('siteId', siteId)
          });
        }
      }, {
        key: "exportFileToSite",
        value: function exportFileToSite(computerName, FileName, dirname) {
          var body = {
            'xmlFile': FileName,
            'computername': computerName,
            'dirname': dirname
          };
          return this.httpClient.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_PUT_EXPORTFILETOSITE, body, {
            headers: this.helperService.getAuthorizationHeader() //params: new HttpParams().append('siteId', siteId)

          });
        }
      }, {
        key: "getItemAvailability",
        value: function getItemAvailability(ItemCode) {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_ITEM_AVAILABILITY + encodeURIComponent(ItemCode.toString()), {
            headers: this.helperService.getAuthorizationHeader()
          });
        }
      }, {
        key: "GetItemDetails",
        value: function GetItemDetails(ItemId) {
          return this.httpClient.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_GET_ITEMDETAILS + encodeURIComponent(ItemId.toString()), {
            headers: this.helperService.getAuthorizationHeader()
          });
        }
      }, {
        key: "updateItemPrice",
        value: function updateItemPrice(itemId, itemPrice, callback) {
          var reqBody = {
            itemPrices: [{
              price: itemPrice,
              priceId: {
                itemCode: itemId
              }
            }]
          };
          console.log(reqBody);
          this.httpClient.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_API_ENDPOINTS.BSP_PUT_ITEM_PRICE, reqBody, {
            headers: this.helperService.getAuthorizationHeader()
          }).subscribe(function (val) {
            console.log('PUT call successful value returned in body', val);
            callback(true);
          }, function (response) {
            console.log('PUT call in error', response);
            callback(false);
          }, function () {
            console.log('The PUT observable is now completed.');
          }); //console.log('response from service - ' + JSON.parse(res) );
        }
      }]);

      return BspServiceService;
    }();

    BspServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    BspServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BspServiceService);
    /***/
  },

  /***/
  "./src/app/services/helper.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/helper.service.ts ***!
    \********************************************/

  /*! exports provided: HelperService */

  /***/
  function srcAppServicesHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_dialogs_something_wrong_dialog_something_wrong_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/dialogs/something-wrong-dialog/something-wrong-dialog.component */
    "./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.ts");
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/constants */
    "./src/app/shared/constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _models_dialog_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/dialog.models */
    "./src/app/models/dialog.models.ts");
    /* harmony import */


    var _shared_dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/dialogs/success-dialog/success-dialog.component */
    "./src/app/shared/dialogs/success-dialog/success-dialog.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var HelperService = /*#__PURE__*/function () {
      function HelperService(dialog, stateService, translate, router) {
        _classCallCheck(this, HelperService);

        this.dialog = dialog;
        this.stateService = stateService;
        this.translate = translate;
        this.router = router;
        this.basketEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(HelperService, [{
        key: "openSomethingWrongDialog",
        value: function openSomethingWrongDialog(error, timeToClose) {
          var dialogTitle = 'something went wrong';
          var dialogDescription = 'Please try again later..';
          var rawTitle = false;
          var rawDescription = false;

          if (error && error.error) {
            if (error.error.title) {
              dialogTitle = error.error.title;
              rawTitle = true;
            }

            if (error.error.detail) {
              dialogDescription = error.error.detail;
              rawDescription = true;
            }
          }

          var timeToCloseInMillis = timeToClose ? timeToClose : _shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].TIME_TO_CLOSE_DIALOG;
          this.dialog.open(_shared_dialogs_something_wrong_dialog_something_wrong_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SomethingWrongDialogComponent"], {
            width: _shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].DIALOG_WIDTH,
            height: _shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].DIALOG_HEIGHT,
            data: new _models_dialog_models__WEBPACK_IMPORTED_MODULE_7__["SomethingWrongDialogModel"](dialogTitle, dialogDescription, rawTitle, rawDescription, timeToCloseInMillis)
          });
        }
      }, {
        key: "openSuccessDialog",
        value: function openSuccessDialog(successDialogModel) {
          this.dialog.open(_shared_dialogs_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_8__["SuccessDialogComponent"], {
            width: _shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].DIALOG_WIDTH,
            height: _shared_constants__WEBPACK_IMPORTED_MODULE_4__["default"].DIALOG_HEIGHT,
            data: successDialogModel
          });
        }
      }, {
        key: "comparePasswords",
        value: function comparePasswords(formBuilder) {
          var confirmPasswordControl = formBuilder.get('confirmPassword');

          if (confirmPasswordControl.errors == null || 'passwordMismatch' in confirmPasswordControl.errors) {
            if (formBuilder.get('password').value !== confirmPasswordControl.value) {
              confirmPasswordControl.setErrors({
                passwordMismatch: true
              });
            } else {
              confirmPasswordControl.setErrors(null);
            }
          }
        }
      }, {
        key: "getAuthorizationHeader",
        value: function getAuthorizationHeader() {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            Authorization: 'bearer ' + this.stateService.getToken()
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.stateService.clearAll();
          this.router.navigate(['start/login']);
        }
      }, {
        key: "getFormattedDate",
        value: function getFormattedDate(date, format) {
          var formattedDate = '';

          if (format === 'LLLL' || format === 'MMMM') {
            return this.translate.instant(new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en').transform(date, format));
          } else if (format === 'LLL' || format === 'MMM') {
            return this.translate.instant(new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en').transform(date, format));
          } else if (format.includes('MMMM')) {
            var dateFormatParts = format.split('MMMM'); // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < dateFormatParts.length; i++) {
              if (dateFormatParts[i] !== '') {
                formattedDate += new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en').transform(date, dateFormatParts[i]);
              }

              if (i !== dateFormatParts.length - 1) {
                formattedDate += this.translate.instant(new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en').transform(date, 'MMMM') + '-long');
              }
            }

            return formattedDate;
          } else if (format.includes('MMM')) {
            var _dateFormatParts = format.split('MMM'); // tslint:disable-next-line:prefer-for-of


            for (var _i = 0; _i < _dateFormatParts.length; _i++) {
              if (_dateFormatParts[_i] !== '') {
                formattedDate += new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en').transform(date, _dateFormatParts[_i]);
              }

              if (_i !== _dateFormatParts.length - 1) {
                formattedDate += this.translate.instant(new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en').transform(date, 'MMM') + '-short');
              }
            }

            return formattedDate;
          } else {
            return new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en').transform(date, format);
          }
        }
      }, {
        key: "updateBasket",
        value: function updateBasket(item, quantity) {
          var basket = this.stateService.getBasket();
          var items = basket.items;
          items[item.id] != undefined && items[item.id] != 1 ? item.itemQuantity = items[item.id].itemQuantity + quantity : item.itemQuantity = quantity;
          items[item.id] = item;
          basket.items = items;
          basket.totalPrice = (parseFloat(basket.totalPrice) + parseFloat(item.itemPrice) * quantity).toFixed(2).toString();
          basket.totalQuantity = basket.totalQuantity + quantity;

          if (item.itemQuantity < 1) {
            delete items[item.id];
          }

          this.stateService.setBasket(basket);
          this.basketEmitter.emit();
        }
      }, {
        key: "addDeliveryToCart",
        value: function addDeliveryToCart(delivery) {
          var deliveryFee = 0;
          var basket = this.stateService.getBasket();
          var _delivery = basket.delivery;

          if (_delivery != undefined) {
            deliveryFee = parseFloat(delivery.deliveryPrice) - parseFloat(_delivery.deliveryPrice);
          } else {
            deliveryFee = parseFloat(delivery.deliveryPrice);
          }

          basket.totalPrice = (parseFloat(basket.totalPrice) + deliveryFee).toFixed(2).toString();
          basket.delivery = delivery;
          this.stateService.setBasket(basket);
          this.basketEmitter.emit();
        }
      }, {
        key: "groupByItemId",
        value: function groupByItemId(items, key) {
          var groupby = items.reduce(function (result, current) {
            result[current[key]] = result[current[key]] || [];
            result[current[key]].push(current);
            return result;
          }, {});
          return groupby;
        }
      }]);

      return HelperService;
    }();

    HelperService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HelperService);
    /***/
  },

  /***/
  "./src/app/services/state.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/state.service.ts ***!
    \*******************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/constants */
    "./src/app/shared/constants.ts");
    /* harmony import */


    var _models_account_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/account.models */
    "./src/app/models/account.models.ts");
    /* harmony import */


    var _models_item_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/item.models */
    "./src/app/models/item.models.ts");

    var StateService = /*#__PURE__*/function () {
      function StateService() {
        _classCallCheck(this, StateService);
      }

      _createClass(StateService, [{
        key: "getAccountModel",
        value: function getAccountModel() {
          return new _models_account_models__WEBPACK_IMPORTED_MODULE_3__["AccountModel"](this.getLogin(), this.getFirstName(), this.getEmail(), this.getLanguage(), this.getAuthorities());
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY)) {
            return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY);
          } else {
            return sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY);
          }
        }
      }, {
        key: "getFirstName",
        value: function getFirstName() {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY)) {
            return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY);
          } else {
            return sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY);
          }
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY)) {
            return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY);
          } else {
            return sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY);
          }
        }
      }, {
        key: "getLogin",
        value: function getLogin() {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY)) {
            return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY);
          } else {
            return sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY);
          }
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LANGUAGE_KEY)) {
            return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LANGUAGE_KEY);
          } else {
            return sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LANGUAGE_KEY);
          }
        }
      }, {
        key: "getAuthorities",
        value: function getAuthorities() {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY)) {
            return localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY);
          } else {
            return sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY);
          }
        }
      }, {
        key: "setAccountModel",
        value: function setAccountModel(accountModel) {
          this.setUserId(accountModel.userEmail);
          this.setUserName(accountModel.userName);
          this.setFirstName(accountModel.firstName);
          this.setEmail(accountModel.userEmail);
          this.setLastName(accountModel.lastName);
          this.setAuthorities(accountModel.authorities);
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY, token);
        }
      }, {
        key: "setFirstName",
        value: function setFirstName(firstName) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY, firstName);
        }
      }, {
        key: "setEmail",
        value: function setEmail(email) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY, email);
        }
      }, {
        key: "setUserId",
        value: function setUserId(login) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY, login);
        }
      }, {
        key: "setLastName",
        value: function setLastName(lastName) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LAST_NAME_KEY, lastName);
        }
      }, {
        key: "setUserName",
        value: function setUserName(userName) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_USER_NAME_KEY, userName);
        }
      }, {
        key: "setAuthorities",
        value: function setAuthorities(authorities) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY, JSON.stringify(authorities));
        }
      }, {
        key: "updateAccountModel",
        value: function updateAccountModel(accountModel) {
          this.updateLogin(accountModel.login);
          this.updateFirstName(accountModel.firstName);
          this.updateEmail(accountModel.email);
          this.updateAuthorities(accountModel.authorities);
        }
      }, {
        key: "updateToken",
        value: function updateToken(token) {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY)) {
            localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY, token);
          } else if (sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY)) {
            sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_KEY, token);
          }
        }
      }, {
        key: "updateTokenExpiry",
        value: function updateTokenExpiry(expiry) {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_EXPIRY_KEY)) {
            localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_EXPIRY_KEY, expiry);
          } else if (sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_EXPIRY_KEY)) {
            sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_ACCESS_TOKEN_EXPIRY_KEY, expiry);
          }
        }
      }, {
        key: "updateFirstName",
        value: function updateFirstName(firstName) {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY)) {
            localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY, firstName);
          } else if (sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY)) {
            sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_FIRST_NAME_KEY, firstName);
          }
        }
      }, {
        key: "updateEmail",
        value: function updateEmail(email) {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY)) {
            localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY, email);
          } else if (sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY)) {
            sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_EMAIL_KEY, email);
          }
        }
      }, {
        key: "updateLogin",
        value: function updateLogin(login) {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY)) {
            localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY, login);
          } else if (sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY)) {
            sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_LOGIN_KEY, login);
          }
        }
      }, {
        key: "updateAuthorities",
        value: function updateAuthorities(authorities) {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY)) {
            localStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY, JSON.stringify(authorities));
          } else if (sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY)) {
            sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_AUTHORITIES_KEY, JSON.stringify(authorities));
          }
        }
      }, {
        key: "setCategory",
        value: function setCategory(cat) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_CATEGORY, JSON.stringify(cat));
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_CATEGORY)) {
            return JSON.parse(localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_CATEGORY));
          } else {
            return JSON.parse(sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_CATEGORY));
          }
        }
      }, {
        key: "setBasketItems",
        value: function setBasketItems(items) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS, JSON.stringify(items));
        }
      }, {
        key: "getBasketItems",
        value: function getBasketItems() {
          var items;

          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS)) {
            items = JSON.parse(localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS));
          } else {
            items = JSON.parse(sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS));
          }

          return items != null ? items : [];
        }
      }, {
        key: "setBasket",
        value: function setBasket(items) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS, JSON.stringify(items));
        }
      }, {
        key: "getBasket",
        value: function getBasket() {
          var items;

          if (localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS)) {
            items = JSON.parse(localStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS));
          } else {
            items = JSON.parse(sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].STORAGE_BASKET_ITEMS));
          }

          return items != null ? items : new _models_item_models__WEBPACK_IMPORTED_MODULE_4__["BasketModel"]();
        }
      }, {
        key: "setSelectedCat",
        value: function setSelectedCat(CatId) {
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SELECTED_CAT, CatId);
        }
      }, {
        key: "getSelectedCat",
        value: function getSelectedCat() {
          return sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SELECTED_CAT);
        }
      }, {
        key: "clearAll",
        value: function clearAll() {
          localStorage.clear();
          sessionStorage.clear();
        }
      }]);

      return StateService;
    }();

    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StateService);
    /***/
  },

  /***/
  "./src/app/shared/component/header/header.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/shared/component/header/header.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".retailer-header {\n  background-color: #A6CE39;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0 25px;\n}\n.retailer-header .header-logo {\n  height: 60px;\n  position: absolute;\n  left: 2%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n}\n.retailer-header .logout {\n  display: flex;\n  align-items: center;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.retailer-header .logout .logout-text {\n  margin-left: 10px;\n}\n@media (max-width: 767px) {\n  .retailer-header .logout .logout-text {\n    display: none;\n  }\n}\n.switch-page-header {\n  background-color: #F4F4F4;\n  height: 45px;\n  display: flex;\n  width: 100%;\n}\n.switch-page-header .page-selector-block {\n  width: 25%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 17px;\n}\n@media (max-width: 767px) {\n  .switch-page-header .page-selector-block {\n    width: 33.33%;\n  }\n}\n.switch-page-header .page-selector-block.highlight {\n  background: #C3E3D9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL0M6XFxVc2Vyc1xcUksxODUzMDJcXERvY3VtZW50c1xcTkNSXFxCU1BcXENPREVcXE9DVE9CRVJcXE5FV3djXFx0cnVua1xccmV0YWlsLWNsaWVudC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb25zdGFudHMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDRmtCO0VER2xCLFlDcUJjO0VEcEJkLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FFREY7QUZHRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7QUVESjtBRklFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NmVTtFRGdCVixlQUFBO0FFRko7QUZJSTtFQUNFLGlCQUFBO0FFRk47QUZJTTtFQUhGO0lBSUksYUFBQTtFRUROO0FBQ0Y7QUZNQTtFQUNFLHlCQ25Cd0I7RURvQnhCLFlDWDBCO0VEWTFCLGFBQUE7RUFDQSxXQUFBO0FFSEY7QUZLRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUVISjtBRktJO0VBVEY7SUFVSSxhQUFBO0VFRko7QUFDRjtBRklJO0VBQ0UsbUJDMUJXO0FDd0JqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy5zY3NzXCI7XG5cbi5yZXRhaWxlci1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1hcHAtY29sb3I7XG4gIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMCAkaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc7XG5cbiAgLmhlYWRlci1sb2dvIHtcbiAgICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0IC0gMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMiU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gIH1cblxuICAubG9nb3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAubG9nb3V0LXRleHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkaXBhZC13aWR0aCAtIDFweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc3dpdGNoLXBhZ2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kO1xuICBoZWlnaHQ6ICRzd2l0Y2gtcGFnZS1oZWFkZXItaGVpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcblxuICAucGFnZS1zZWxlY3Rvci1ibG9jayB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRpcGFkLXdpZHRoIC0gMXB4KSB7XG4gICAgICB3aWR0aDogMzMuMzMlO1xuICAgIH1cblxuICAgICYuaGlnaGxpZ2h0IHtcbiAgICAgIGJhY2tncm91bmQ6ICR0YWItYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cbn1cbiIsIiRuY3ItZ3JlZW46ICM1NEI5NDg7XG4kcHJpbWFyeS1hcHAtY29sb3I6ICNBNkNFMzk7XG4kcHJpbWFyeS1ncmVlbjogI0E2Q0UzOTtcbiR0aGVtZS1jb2xvcjogIzk1QkUzMTtcbiR0ZXh0LWdyZWVuOiAjNTBCOTQ4O1xuJGxpZ2h0LWdyZWVuLWJhY2tncm91bmQ6ICNGNEY5RTc7XG4kYnV0dG9uLWRpc2FibGVkLWRlZmF1bHQ6ICNEM0QzRDM7XG4kZXJyb3ItcmVkOiAjRkYwQzNFO1xuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcbiRkYXJrLXRlYWwtY29sb3I6ICMwRjdBODY7XG4kYnV0dG9uLWRlbGV0ZS1yZXNlcnZhdGlvbi1jb2xvcjogI0M5QzlDOTtcbiRzbG90LWNvZGUtY29sb3I6ICM0MDdFODk7XG4kZ3JleS1jb2xvcjogI0YwRjBGMDtcbiRkaXNhYmxlZC1pbnB1dC1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xuJGRpc2FibGVkLXRleHQtY29sb3I6ICM4ODg7XG4kZ3JleS1idXR0b24tb3V0bGluZTogIzg4ODtcbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTs7XG4kZ3JleS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kOiAjRjRGNEY0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcblxuJGlwaG9uZTUtd2lkdGg6IDMyMHB4O1xuJGlwaG9uZTUtaGVpZ2h0OiA1NjhweDtcbiRoZWFkZXItaGVpZ2h0OiA4MHB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlwYWQtd2lkdGg6IDc2OHB4O1xuJHN3aXRjaC1wYWdlLWhlYWRlci1oZWlnaHQ6IDQ1cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kdGFiLWJhY2tncm91bmQ6ICNDM0UzRDk7XG4kbWFpbi1oaWdobGlnaHQtY29sb3I6ICMwRjdBODY7XG4kdHJ1ZS1ncmV5OiAjODg4O1xuJGxpZ2h0LWdyZXk6ICNDQ0M7XG5cblxuXG5cblxuIiwiLnJldGFpbGVyLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNkNFMzk7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG4ucmV0YWlsZXItaGVhZGVyIC5oZWFkZXItbG9nbyB7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xufVxuLnJldGFpbGVyLWhlYWRlciAubG9nb3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZXRhaWxlci1oZWFkZXIgLmxvZ291dCAubG9nb3V0LXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucmV0YWlsZXItaGVhZGVyIC5sb2dvdXQgLmxvZ291dC10ZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5zd2l0Y2gtcGFnZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN3aXRjaC1wYWdlLWhlYWRlciAucGFnZS1zZWxlY3Rvci1ibG9jayB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc3dpdGNoLXBhZ2UtaGVhZGVyIC5wYWdlLXNlbGVjdG9yLWJsb2NrIHtcbiAgICB3aWR0aDogMzMuMzMlO1xuICB9XG59XG4uc3dpdGNoLXBhZ2UtaGVhZGVyIC5wYWdlLXNlbGVjdG9yLWJsb2NrLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6ICNDM0UzRDk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/component/header/header.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/component/header/header.component.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, helperService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.helperService = helperService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToPage",
        value: function goToPage(pageUrl) {
          this.router.navigate(['/admin/' + pageUrl]);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.helperService.signOut();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "selectedTab", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/component/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/constants.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/constants.ts ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony default export */


    __webpack_exports__["default"] = {
      TIME_TO_CLOSE_SHORT_INFO_DIALOG: 2.5 * 1000,
      TIME_TO_CLOSE_DIALOG: 5 * 1000,
      DIALOG_WIDTH: '300px',
      DIALOG_HEIGHT: '300px',
      CONFIRMATION_DIALOG_WIDTH: '320px',
      STORAGE_FIRST_NAME_KEY: 'xuWuMh68mTNgmN6vFDtg',
      STORAGE_LAST_NAME_KEY: 'ljkljhkajshdhaskjdha',
      STORAGE_EMAIL_KEY: 'CsViqEbWPVI9IrXVE78x',
      STORAGE_LOGIN_KEY: 'sqtfU0dHbUYIbqzBILyX',
      STORAGE_USER_NAME_KEY: 'oiwueonznkjsdadasds',
      STORAGE_ACCESS_TOKEN_KEY: '7zYqrnlPlt06XxzpECgl',
      STORAGE_ACCESS_TOKEN_EXPIRY_KEY: 'Wbl2pnjDmEi23yO5ALoU',
      STORAGE_LANGUAGE_KEY: 'xbrwjYw86htlM2x5Mpj3',
      STORAGE_AUTHORITIES_KEY: 'sili8cpaTd59oOHDtF0S',
      STORAGE_CATEGORY: 'frYqrnlPlt06XxzpECgl',
      STORAGE_BASKET_ITEMS: 'lkassdlhasdijkmmwsw',
      SELECTED_CAT: 'oeitueowr',
      BACKEND_API_ENDPOINTS: {
        AUTHENTICATE: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/Token',
        FIND_USER: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/user/signin',
        USERS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/user/users',
        BSP_GET_SITE_DETAILS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/site/sites/',
        BSP_GET_SITE_ONLINE_STATUS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/site/siteStatus/',
        BSP_POST_SITE_DETAILS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/site/sites/find-by-criteria',
        BSP_GET_CATS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/cat/cats',
        BSP_GET_ITEMS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/cat/items',
        BSP_GET_CAT_ITEM_DETAILS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/cat/itemdetailsByCat/',
        BSP_GET_ITEM_AVAILABILITY: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/ias/item-availability/',
        BSP_PUT_ITEM_PRICE: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/cat/item-prices',
        BSP_GET_ITEMDETAILS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/cat/itemdetailsById/',
        BSP_PUT_GENERATEXMLFILE: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/generateItemsXML/',
        BSP_PUT_EXPORTFILETOSITE: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl + '/sendXMLToStore'
      }
    };
    /***/
  },

  /***/
  "./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDialogsSomethingWrongDialogSomethingWrongDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dialog-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 30px 0 15px;\n}\n.dialog-image img {\n  width: 60px;\n}\n.title {\n  font-size: 19px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.instruction {\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3Mvc29tZXRoaW5nLXdyb25nLWRpYWxvZy9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcZGlhbG9nLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL3NvbWV0aGluZy13cm9uZy1kaWFsb2cvc29tZXRoaW5nLXdyb25nLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2dzL3NvbWV0aGluZy13cm9uZy1kaWFsb2cvc29tZXRoaW5nLXdyb25nLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4IDAgMTVweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5zdHJ1Y3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiIsIi5kaWFsb2ctaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4IDAgMTVweDtcbn1cbi5kaWFsb2ctaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5zdHJ1Y3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SomethingWrongDialogComponent */

  /***/
  function srcAppSharedDialogsSomethingWrongDialogSomethingWrongDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SomethingWrongDialogComponent", function () {
      return SomethingWrongDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _models_dialog_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/dialog.models */
    "./src/app/models/dialog.models.ts");

    var SomethingWrongDialogComponent = /*#__PURE__*/function () {
      function SomethingWrongDialogComponent(dialogRef, data) {
        _classCallCheck(this, SomethingWrongDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(SomethingWrongDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          setTimeout(function () {
            return _this12.dialogRef.close();
          }, this.data.timeToClose);
        }
      }]);

      return SomethingWrongDialogComponent;
    }();

    SomethingWrongDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _models_dialog_models__WEBPACK_IMPORTED_MODULE_3__["SomethingWrongDialogModel"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SomethingWrongDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-something-wrong-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./something-wrong-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./something-wrong-dialog.component.scss */
      "./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SomethingWrongDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/dialogs/success-dialog/success-dialog.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/dialogs/success-dialog/success-dialog.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDialogsSuccessDialogSuccessDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dialog-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 30px 0 15px;\n}\n.dialog-image img {\n  width: 60px;\n}\n.title {\n  font-size: 19px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.instruction {\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 15px;\n  font-weight: 300;\n}\n.instruction .highlighted {\n  color: #50B948;\n  display: inline;\n}\n.instruction .inline {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3Mvc3VjY2Vzcy1kaWFsb2cvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGRpYWxvZy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZGlhbG9ncy9zdWNjZXNzLWRpYWxvZy9zdWNjZXNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3Mvc3VjY2Vzcy1kaWFsb2cvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGRpYWxvZ3NcXHN1Y2Nlc3MtZGlhbG9nXFxzdWNjZXNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3Mvc3VjY2Vzcy1kaWFsb2cvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FGO0FDakJFO0VBQ0UsY0NGUztFREdULGVBQUE7QURvQko7QUNqQkU7RUFDRSxlQUFBO0FEbUJKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpYWxvZ3Mvc3VjY2Vzcy1kaWFsb2cvc3VjY2Vzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDE1cHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmluc3RydWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCIuZGlhbG9nLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDE1cHg7XG59XG4uZGlhbG9nLWltYWdlIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmluc3RydWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5pbnN0cnVjdGlvbiAuaGlnaGxpZ2h0ZWQge1xuICBjb2xvcjogIzUwQjk0ODtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmluc3RydWN0aW9uIC5pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZGlhbG9nLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy5zY3NzXCI7XG5cbi5pbnN0cnVjdGlvbiB7XG5cbiAgLmhpZ2hsaWdodGVkIHtcbiAgICBjb2xvcjogJHRleHQtZ3JlZW47XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG5cbiAgLmlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG4iLCIkbmNyLWdyZWVuOiAjNTRCOTQ4O1xuJHByaW1hcnktYXBwLWNvbG9yOiAjQTZDRTM5O1xuJHByaW1hcnktZ3JlZW46ICNBNkNFMzk7XG4kdGhlbWUtY29sb3I6ICM5NUJFMzE7XG4kdGV4dC1ncmVlbjogIzUwQjk0ODtcbiRsaWdodC1ncmVlbi1iYWNrZ3JvdW5kOiAjRjRGOUU3O1xuJGJ1dHRvbi1kaXNhYmxlZC1kZWZhdWx0OiAjRDNEM0QzO1xuJGVycm9yLXJlZDogI0ZGMEMzRTtcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcbiRibGFjay1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kd2hpdGUtY29sb3I6ICNGRkZGRkY7XG4kZGFyay10ZWFsLWNvbG9yOiAjMEY3QTg2O1xuJGJ1dHRvbi1kZWxldGUtcmVzZXJ2YXRpb24tY29sb3I6ICNDOUM5Qzk7XG4kc2xvdC1jb2RlLWNvbG9yOiAjNDA3RTg5O1xuJGdyZXktY29sb3I6ICNGMEYwRjA7XG4kZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZDogI0YyRjJGMjtcbiRkaXNhYmxlZC10ZXh0LWNvbG9yOiAjODg4O1xuJGdyZXktYnV0dG9uLW91dGxpbmU6ICM4ODg7XG4kZ3JleS10ZXh0OiByZ2JhKDAsIDAsIDAsIDAuNik7O1xuJGdyZXktYmFja2dyb3VuZDogI0YzRjNGMztcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI0Y0RjRGNDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG5cbiRpcGhvbmU1LXdpZHRoOiAzMjBweDtcbiRpcGhvbmU1LWhlaWdodDogNTY4cHg7XG4kaGVhZGVyLWhlaWdodDogODBweDtcbiRpbmxpbmUtaWNvbi1tYXJnaW46IDdweDtcbiRoZWFkZXItdmVydGljYWwtcGFkZGluZzogMjVweDtcbiRpcGFkLXdpZHRoOiA3NjhweDtcbiRzd2l0Y2gtcGFnZS1oZWFkZXItaGVpZ2h0OiA0NXB4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJHRhYi1iYWNrZ3JvdW5kOiAjQzNFM0Q5O1xuJG1haW4taGlnaGxpZ2h0LWNvbG9yOiAjMEY3QTg2O1xuJHRydWUtZ3JleTogIzg4ODtcbiRsaWdodC1ncmV5OiAjQ0NDO1xuXG5cblxuXG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/dialogs/success-dialog/success-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/dialogs/success-dialog/success-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SuccessDialogComponent */

  /***/
  function srcAppSharedDialogsSuccessDialogSuccessDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessDialogComponent", function () {
      return SuccessDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _models_dialog_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/dialog.models */
    "./src/app/models/dialog.models.ts");

    var SuccessDialogComponent = /*#__PURE__*/function () {
      function SuccessDialogComponent(dialogRef, data) {
        _classCallCheck(this, SuccessDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(SuccessDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          setTimeout(function () {
            return _this13.dialogRef.close();
          }, this.data.timeToClose);
        }
      }]);

      return SuccessDialogComponent;
    }();

    SuccessDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _models_dialog_models__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogModel"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    SuccessDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-success-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./success-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogs/success-dialog/success-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./success-dialog.component.scss */
      "./src/app/shared/dialogs/success-dialog/success-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], SuccessDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/loader/loader.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/loader/loader.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spinner-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n}\n.spinner-container .loader-gif {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGNvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NDQ2M7RURBZCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUVERjtBRkdFO0VBQ0UsV0FBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb25zdGFudHMuc2Nzc1wiO1xuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW92ZXJsYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDtcblxuICAubG9hZGVyLWdpZiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbn1cbiIsIiRuY3ItZ3JlZW46ICM1NEI5NDg7XG4kcHJpbWFyeS1hcHAtY29sb3I6ICNBNkNFMzk7XG4kcHJpbWFyeS1ncmVlbjogI0E2Q0UzOTtcbiR0aGVtZS1jb2xvcjogIzk1QkUzMTtcbiR0ZXh0LWdyZWVuOiAjNTBCOTQ4O1xuJGxpZ2h0LWdyZWVuLWJhY2tncm91bmQ6ICNGNEY5RTc7XG4kYnV0dG9uLWRpc2FibGVkLWRlZmF1bHQ6ICNEM0QzRDM7XG4kZXJyb3ItcmVkOiAjRkYwQzNFO1xuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcbiRkYXJrLXRlYWwtY29sb3I6ICMwRjdBODY7XG4kYnV0dG9uLWRlbGV0ZS1yZXNlcnZhdGlvbi1jb2xvcjogI0M5QzlDOTtcbiRzbG90LWNvZGUtY29sb3I6ICM0MDdFODk7XG4kZ3JleS1jb2xvcjogI0YwRjBGMDtcbiRkaXNhYmxlZC1pbnB1dC1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xuJGRpc2FibGVkLXRleHQtY29sb3I6ICM4ODg7XG4kZ3JleS1idXR0b24tb3V0bGluZTogIzg4ODtcbiRncmV5LXRleHQ6IHJnYmEoMCwgMCwgMCwgMC42KTs7XG4kZ3JleS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kOiAjRjRGNEY0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcblxuJGlwaG9uZTUtd2lkdGg6IDMyMHB4O1xuJGlwaG9uZTUtaGVpZ2h0OiA1NjhweDtcbiRoZWFkZXItaGVpZ2h0OiA4MHB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlwYWQtd2lkdGg6IDc2OHB4O1xuJHN3aXRjaC1wYWdlLWhlYWRlci1oZWlnaHQ6IDQ1cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kdGFiLWJhY2tncm91bmQ6ICNDM0UzRDk7XG4kbWFpbi1oaWdobGlnaHQtY29sb3I6ICMwRjdBODY7XG4kdHJ1ZS1ncmV5OiAjODg4O1xuJGxpZ2h0LWdyZXk6ICNDQ0M7XG5cblxuXG5cblxuIiwiLnNwaW5uZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sb2FkZXItZ2lmIHtcbiAgd2lkdGg6IDgwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/loader/loader.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/loader/loader.component.ts ***!
    \***************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppSharedLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loader.service */
    "./src/app/shared/loader/loader.service.ts");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent(loaderService) {
        var _this14 = this;

        _classCallCheck(this, LoaderComponent);

        this.loaderService = loaderService;
        this.shouldShow = false;
        this.loaderService.changeLoaderImage.subscribe(function (image) {
          _this14.loaderImage = image;
        });
        this.loaderService.toggleLoader.subscribe(function (show) {
          _this14.shouldShow = show;
        });
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/shared/loader/loader.component.scss"))["default"]]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/loader/loader.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/loader/loader.service.ts ***!
    \*************************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppSharedLoaderLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService = /*#__PURE__*/function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        // tslint:disable-next-line:variable-name
        this._toggleLoader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false); // tslint:disable-next-line:variable-name

        this._changeLoaderImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('assets/images/loader.gif');
      }

      _createClass(LoaderService, [{
        key: "show",
        value: function show() {
          this._toggleLoader.next(true);
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this._toggleLoader.next(false);
        }
      }, {
        key: "setLoaderImage",
        value: function setLoaderImage(image) {
          this._changeLoaderImage.next(image);
        }
      }, {
        key: "toggleLoader",
        get: function get() {
          return this._toggleLoader;
        }
      }, {
        key: "changeLoaderImage",
        get: function get() {
          return this._changeLoaderImage;
        }
      }]);

      return LoaderService;
    }();

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _dialogs_something_wrong_dialog_something_wrong_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialogs/something-wrong-dialog/something-wrong-dialog.component */
    "./src/app/shared/dialogs/something-wrong-dialog/something-wrong-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dialogs_something_wrong_dialog_something_wrong_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SomethingWrongDialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
      exports: [],
      entryComponents: [_dialogs_something_wrong_dialog_something_wrong_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SomethingWrongDialogComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/start/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/start/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStartLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-group {\n  margin: 0 10px 1rem;\n}\n.form-group.has-error {\n  margin-bottom: 0;\n}\n.form-group.has-icon {\n  position: relative;\n}\n.form-group.has-icon .inline-icon {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  right: 0;\n  top: 0;\n  font-size: 21px;\n  margin: 7px;\n}\n.form-group .form-control:focus {\n  border-color: #A6CE39;\n}\n.form-group .form-control.has-error {\n  border-color: #FF0C3E;\n}\n.form-group .button {\n  color: #FFFFFF;\n  background-color: #000000;\n  border-color: #000000;\n  width: 100%;\n  margin-top: 25px;\n}\n.form-group .button:disabled {\n  background-color: #D3D3D3;\n  border-color: #D3D3D3;\n}\n.error-message {\n  color: #FF0C3E;\n  font-size: 13px;\n  padding-left: 0.75rem;\n  margin: 0 10px 0.7rem;\n}\n.remember-me {\n  font-size: 15px;\n  font-weight: 400;\n}\n.forgot-password-link {\n  width: 100%;\n  cursor: pointer;\n  text-align: center;\n  font-size: 15px;\n  font-weight: 400;\n  margin-bottom: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvbG9naW4vQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXNzZXRzXFxzdHlsZXNcXGZvcm0uc2NzcyIsInNyYy9hcHAvc3RhcnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXJ0L2xvZ2luL0M6XFxVc2Vyc1xcUksxODUzMDJcXERvY3VtZW50c1xcTkNSXFxCU1BcXENPREVcXE9DVE9CRVJcXE5FV3djXFx0cnVua1xccmV0YWlsLWNsaWVudC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxjb25zdGFudHMuc2NzcyIsInNyYy9hcHAvc3RhcnQvbG9naW4vQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXBwXFxzdGFydFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7QUNERjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7QUNGSjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxXRVVlO0FEWnJCO0FEUUk7RUFDRSxxQkUxQlU7QURvQmhCO0FEU0k7RUFDRSxxQkV6Qk07QURrQlo7QURXRTtFQUNFLGNFM0JVO0VGNEJWLHlCRTlCVTtFRitCVixxQkUvQlU7RUZnQ1YsV0FBQTtFQUNBLGdCQUFBO0FDVEo7QURXSTtFQUNFLHlCRXRDb0I7RUZ1Q3BCLHFCRXZDb0I7QUQ4QjFCO0FEY0E7RUFDRSxjRTVDVTtFRjZDVixlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ1hGO0FFekNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FGNENGO0FFekNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FGNENGIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luOiAwIDEwcHggMXJlbTtcblxuICAmLmhhcy1lcnJvciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gICYuaGFzLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pbmxpbmUtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBtYXJnaW46ICRpbmxpbmUtaWNvbi1tYXJnaW47XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktZ3JlZW47XG4gICAgfVxuXG4gICAgJi5oYXMtZXJyb3Ige1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZXJyb3ItcmVkO1xuICAgIH1cbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGJsYWNrLWNvbG9yO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tZGlzYWJsZWQtZGVmYXVsdDtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJ1dHRvbi1kaXNhYmxlZC1kZWZhdWx0O1xuICAgIH1cbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAkZXJyb3ItcmVkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogLjc1cmVtO1xuICBtYXJnaW46IDAgMTBweCAuN3JlbTtcbn1cbiIsIi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luOiAwIDEwcHggMXJlbTtcbn1cbi5mb3JtLWdyb3VwLmhhcy1lcnJvciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZm9ybS1ncm91cC5oYXMtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtLWdyb3VwLmhhcy1pY29uIC5pbmxpbmUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IDdweDtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNBNkNFMzk7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sLmhhcy1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI0ZGMEMzRTtcbn1cbi5mb3JtLWdyb3VwIC5idXR0b24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5mb3JtLWdyb3VwIC5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICBib3JkZXItY29sb3I6ICNEM0QzRDM7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNGRjBDM0U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBtYXJnaW46IDAgMTBweCAwLjdyZW07XG59XG5cbi5yZW1lbWJlci1tZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1saW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbn0iLCIkbmNyLWdyZWVuOiAjNTRCOTQ4O1xuJHByaW1hcnktYXBwLWNvbG9yOiAjQTZDRTM5O1xuJHByaW1hcnktZ3JlZW46ICNBNkNFMzk7XG4kdGhlbWUtY29sb3I6ICM5NUJFMzE7XG4kdGV4dC1ncmVlbjogIzUwQjk0ODtcbiRsaWdodC1ncmVlbi1iYWNrZ3JvdW5kOiAjRjRGOUU3O1xuJGJ1dHRvbi1kaXNhYmxlZC1kZWZhdWx0OiAjRDNEM0QzO1xuJGVycm9yLXJlZDogI0ZGMEMzRTtcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcbiRibGFjay1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4kd2hpdGUtY29sb3I6ICNGRkZGRkY7XG4kZGFyay10ZWFsLWNvbG9yOiAjMEY3QTg2O1xuJGJ1dHRvbi1kZWxldGUtcmVzZXJ2YXRpb24tY29sb3I6ICNDOUM5Qzk7XG4kc2xvdC1jb2RlLWNvbG9yOiAjNDA3RTg5O1xuJGdyZXktY29sb3I6ICNGMEYwRjA7XG4kZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZDogI0YyRjJGMjtcbiRkaXNhYmxlZC10ZXh0LWNvbG9yOiAjODg4O1xuJGdyZXktYnV0dG9uLW91dGxpbmU6ICM4ODg7XG4kZ3JleS10ZXh0OiByZ2JhKDAsIDAsIDAsIDAuNik7O1xuJGdyZXktYmFja2dyb3VuZDogI0YzRjNGMztcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZDogI0Y0RjRGNDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG5cbiRpcGhvbmU1LXdpZHRoOiAzMjBweDtcbiRpcGhvbmU1LWhlaWdodDogNTY4cHg7XG4kaGVhZGVyLWhlaWdodDogODBweDtcbiRpbmxpbmUtaWNvbi1tYXJnaW46IDdweDtcbiRoZWFkZXItdmVydGljYWwtcGFkZGluZzogMjVweDtcbiRpcGFkLXdpZHRoOiA3NjhweDtcbiRzd2l0Y2gtcGFnZS1oZWFkZXItaGVpZ2h0OiA0NXB4O1xuJGhlYWRlci12ZXJ0aWNhbC1wYWRkaW5nOiAyNXB4O1xuJGlubGluZS1pY29uLW1hcmdpbjogN3B4O1xuJHRhYi1iYWNrZ3JvdW5kOiAjQzNFM0Q5O1xuJG1haW4taGlnaGxpZ2h0LWNvbG9yOiAjMEY3QTg2O1xuJHRydWUtZ3JleTogIzg4ODtcbiRsaWdodC1ncmV5OiAjQ0NDO1xuXG5cblxuXG5cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2Zvcm0uc2Nzc1wiO1xuXG4ucmVtZW1iZXItbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/start/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/start/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppStartLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_api_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api/account.service */
    "./src/app/services/api/account.service.ts");
    /* harmony import */


    var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/state.service */
    "./src/app/services/state.service.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/loader/loader.service */
    "./src/app/shared/loader/loader.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, dialog, accountService, stateService, helperService, translate, router, loaderService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.accountService = accountService;
        this.stateService = stateService;
        this.helperService = helperService;
        this.translate = translate;
        this.router = router;
        this.loaderService = loaderService;
        this.formModel = this.formBuilder.group({
          username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.hidePassword = true;
        this.isSignInExecuting = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// if (this.stateService.getAuthorities())
          //   this.goToHomepage();
        }
      }, {
        key: "signIn",
        value: function signIn() {
          var _this15 = this;

          try {
            if (!this.formModel.valid) {
              return;
            }

            this.isSignInExecuting = true;
            this.loaderService.show();
            this.accountService.signIn(this.formModel.value).toPromise().then(function (response) {
              console.log("Token :" + JSON.stringify(response));

              _this15.stateService.setAccountModel(response.user);

              _this15.stateService.setAuthorities(response.user.role.roleName);

              _this15.stateService.setToken(response.token);

              _this15.isSignInExecuting = false;

              _this15.goToHomepage();
            })["catch"](function (error) {
              console.log("Token :" + error);

              _this15.loaderService.dismiss();

              _this15.isSignInExecuting = false;

              _this15.helperService.openSomethingWrongDialog(error);
            });
          } catch (error) {
            console.log('sign in error: ' + error);
          }
        }
      }, {
        key: "goToHomepage",
        value: function goToHomepage() {
          var role;
          var userRole = this.stateService.getAuthorities().trim().toString().toLowerCase();
          console.log("role : " + userRole);

          if (userRole.indexOf('admin') > -1) {
            role = 'admin';
          } else role = 'user';

          switch (role) {
            case 'admin':
              console.log("admin : ");
              this.router.navigate(['admin']);
              break;

            case 'user':
              console.log("user : ");
              this.router.navigate(['retail']);
              break;

            default:
              console.log("default : ");
              this.router.navigate(['retail']);
          }

          console.log("role : " + userRole);
          this.loaderService.dismiss();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _services_api_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
      }, {
        type: _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
      }, {
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/start/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/start/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/start/start.component.scss":
  /*!********************************************!*\
    !*** ./src/app/start/start.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStartStartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper .wrapper {\n  width: 320px;\n  height: 550px;\n}\n.page-wrapper .wrapper .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 40px 0;\n}\n.page-wrapper .wrapper .logo img {\n  width: 175px;\n}\n.page-wrapper .wrapper .tab-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 10px 20px;\n}\n.page-wrapper .wrapper .tab-header .tab-title {\n  text-align: center;\n  font-size: 14px;\n  padding: 10px 40px;\n  cursor: pointer;\n  outline: none;\n  font-weight: 500;\n  width: 48%;\n}\n.page-wrapper .wrapper .tab-header .tab-title.active {\n  color: #A6CE39;\n  border-bottom: 3px solid #A6CE39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvQzpcXFVzZXJzXFxSSzE4NTMwMlxcRG9jdW1lbnRzXFxOQ1JcXEJTUFxcQ09ERVxcT0NUT0JFUlxcTkVXd2NcXHRydW5rXFxyZXRhaWwtY2xpZW50L3NyY1xcYXBwXFxzdGFydFxcc3RhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFydC9DOlxcVXNlcnNcXFJLMTg1MzAyXFxEb2N1bWVudHNcXE5DUlxcQlNQXFxDT0RFXFxPQ1RPQkVSXFxORVd3Y1xcdHJ1bmtcXHJldGFpbC1jbGllbnQvc3JjXFxhc3NldHNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0hKO0FES0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNITjtBREtNO0VBQ0UsWUFBQTtBQ0hSO0FET0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTE47QURPTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNMUjtBRE9RO0VBQ0UsY0VqQ007RUZrQ04sZ0NBQUE7QUNMViIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzLnNjc3NcIjtcblxuLnBhZ2Utd3JhcHBlciB7XG5cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuXG4gICAgLmxvZ28ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogNDBweCAwO1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTc1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYi1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgMTBweCAyMHB4O1xuXG4gICAgICAudGFiLXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB3aWR0aDogNDglO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktZ3JlZW47XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRwcmltYXJ5LWdyZWVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIucGFnZS13cmFwcGVyIC53cmFwcGVyIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuLnBhZ2Utd3JhcHBlciAud3JhcHBlciAubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDQwcHggMDtcbn1cbi5wYWdlLXdyYXBwZXIgLndyYXBwZXIgLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnBhZ2Utd3JhcHBlciAud3JhcHBlciAudGFiLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDEwcHggMjBweDtcbn1cbi5wYWdlLXdyYXBwZXIgLndyYXBwZXIgLnRhYi1oZWFkZXIgLnRhYi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDQ4JTtcbn1cbi5wYWdlLXdyYXBwZXIgLndyYXBwZXIgLnRhYi1oZWFkZXIgLnRhYi10aXRsZS5hY3RpdmUge1xuICBjb2xvcjogI0E2Q0UzOTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNBNkNFMzk7XG59IiwiJG5jci1ncmVlbjogIzU0Qjk0ODtcbiRwcmltYXJ5LWFwcC1jb2xvcjogI0E2Q0UzOTtcbiRwcmltYXJ5LWdyZWVuOiAjQTZDRTM5O1xuJHRoZW1lLWNvbG9yOiAjOTVCRTMxO1xuJHRleHQtZ3JlZW46ICM1MEI5NDg7XG4kbGlnaHQtZ3JlZW4tYmFja2dyb3VuZDogI0Y0RjlFNztcbiRidXR0b24tZGlzYWJsZWQtZGVmYXVsdDogI0QzRDNEMztcbiRlcnJvci1yZWQ6ICNGRjBDM0U7XG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XG4kYmxhY2stb3ZlcmxheTogcmdiYSgwLCAwLCAwLCAwLjUpO1xuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xuJGRhcmstdGVhbC1jb2xvcjogIzBGN0E4NjtcbiRidXR0b24tZGVsZXRlLXJlc2VydmF0aW9uLWNvbG9yOiAjQzlDOUM5O1xuJHNsb3QtY29kZS1jb2xvcjogIzQwN0U4OTtcbiRncmV5LWNvbG9yOiAjRjBGMEYwO1xuJGRpc2FibGVkLWlucHV0LWJhY2tncm91bmQ6ICNGMkYyRjI7XG4kZGlzYWJsZWQtdGV4dC1jb2xvcjogIzg4ODtcbiRncmV5LWJ1dHRvbi1vdXRsaW5lOiAjODg4O1xuJGdyZXktdGV4dDogcmdiYSgwLCAwLCAwLCAwLjYpOztcbiRncmV5LWJhY2tncm91bmQ6ICNGM0YzRjM7XG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQ6ICNGNEY0RjQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuXG4kaXBob25lNS13aWR0aDogMzIwcHg7XG4kaXBob25lNS1oZWlnaHQ6IDU2OHB4O1xuJGhlYWRlci1oZWlnaHQ6IDgwcHg7XG4kaW5saW5lLWljb24tbWFyZ2luOiA3cHg7XG4kaGVhZGVyLXZlcnRpY2FsLXBhZGRpbmc6IDI1cHg7XG4kaXBhZC13aWR0aDogNzY4cHg7XG4kc3dpdGNoLXBhZ2UtaGVhZGVyLWhlaWdodDogNDVweDtcbiRoZWFkZXItdmVydGljYWwtcGFkZGluZzogMjVweDtcbiRpbmxpbmUtaWNvbi1tYXJnaW46IDdweDtcbiR0YWItYmFja2dyb3VuZDogI0MzRTNEOTtcbiRtYWluLWhpZ2hsaWdodC1jb2xvcjogIzBGN0E4NjtcbiR0cnVlLWdyZXk6ICM4ODg7XG4kbGlnaHQtZ3JleTogI0NDQztcblxuXG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/start/start.component.ts":
  /*!******************************************!*\
    !*** ./src/app/start/start.component.ts ***!
    \******************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent() {
        _classCallCheck(this, StartComponent);
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartComponent;
    }();

    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./start.component.scss */
      "./src/app/start/start.component.scss"))["default"]]
    })], StartComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      backendUrl: 'https://retail-pricebook-demo.azurewebsites.net/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\RK185302\Documents\NCR\BSP\CODE\OCTOBER\NEWwc\trunk\retail-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map