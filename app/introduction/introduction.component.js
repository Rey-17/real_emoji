"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
        this.applicationSettings = require("application-settings");
    }
    IntroductionComponent.prototype.ngOnInit = function () {
        this.generos = ['Hombre', 'Mujer'];
    };
    IntroductionComponent.prototype.onItemTap = function (args) {
        var id = args.index;
        this.applicationSettings.setNumber('genero', id);
        this.gen = this.generos[id];
    };
    IntroductionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-introduction',
            templateUrl: './introduction.component.html',
            styleUrls: ['./introduction.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());
exports.IntroductionComponent = IntroductionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFRbEQ7SUFLRTtRQUpBLHdCQUFtQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBSXRDLENBQUM7SUFFakIsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLHlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWZVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDOztPQUNXLHFCQUFxQixDQWlCakM7SUFBRCw0QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1pbnRyb2R1Y3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRyb2R1Y3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhcHBsaWNhdGlvblNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuICBwdWJsaWMgZ2VuZXJvczogYW55O1xuICBwdWJsaWMgZ2VuOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyb3MgPSBbJ0hvbWJyZScsJ011amVyJ107XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3Mpe1xuICAgIGxldCBpZCA9IGFyZ3MuaW5kZXg7XG4gICAgdGhpcy5hcHBsaWNhdGlvblNldHRpbmdzLnNldE51bWJlcignZ2VuZXJvJyxpZCk7XG4gICAgdGhpcy5nZW4gPSB0aGlzLmdlbmVyb3NbaWRdO1xuICB9XG5cbn1cbiJdfQ==