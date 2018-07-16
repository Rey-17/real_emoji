"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var mock_questions_1 = require("./mock-questions");
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.changeYes = true;
        this.q2 = mock_questions_1.Questi;
        this.data = [];
        this.respuestas = ['Nada de acuerdo.', 'Algo de acuerdo.', 'Bastante de acuerdo.', 'Muy de acuerdo', 'Totalmente de acuerdo.'];
        this.index = 0;
        this.route.queryParams.subscribe(function (params) {
            _this.id_w = params['id'];
            _this.op_w = params['option'];
        });
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.loadQ();
    };
    QuestionsComponent.prototype.loadQ = function () {
        this.q_a = this.q2[this.index].q;
        this.q_ida = this.q2[this.index].id;
    };
    QuestionsComponent.prototype.onItemTap = function (args) {
        var res = +args.index + 1;
        this.data.push({ id: this.q_ida, resp: res });
        console.dir(this.data);
        this.index++;
        if (this.index == 25) {
            this.router.navigate(["/end"]);
        }
        else {
            this.loadQ();
        }
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-questions',
            templateUrl: './questions.component.html',
            styleUrls: ['./questions.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQStDO0FBQy9DLHNEQUE2RDtBQUU3RCxtREFBMEM7QUFRMUM7SUFjRSw0QkFBb0IsS0FBcUIsRUFBVSxNQUF3QjtRQUEzRSxpQkFLQztRQUxtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBWHBFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsT0FBRSxHQUFVLHVCQUFNLENBQUM7UUFDbkIsU0FBSSxHQUFDLEVBQUUsQ0FBQztRQUNSLGVBQVUsR0FBRyxDQUFDLGtCQUFrQixFQUFDLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFFekgsVUFBSyxHQUFHLENBQUMsQ0FBQztRQU1mLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVGLHNDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUF4Q1Usa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQWUyQix1QkFBYyxFQUFrQix5QkFBZ0I7T0FkaEUsa0JBQWtCLENBeUM5QjtJQUFELHlCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBRdWVzdGkgfSBmcm9tICcuL21vY2stcXVlc3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXF1ZXN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWVzdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpZF93OiBzdHJpbmc7XG4gIHB1YmxpYyBvcF93OiBzdHJpbmc7XG4gIHB1YmxpYyBjaGFuZ2VZZXMgPSB0cnVlO1xuXG4gIHB1YmxpYyBxMjogYW55W10gPSBRdWVzdGk7XG4gIHB1YmxpYyBkYXRhPVtdO1xuICBwdWJsaWMgcmVzcHVlc3RhcyA9IFsnTmFkYSBkZSBhY3VlcmRvLicsJ0FsZ28gZGUgYWN1ZXJkby4nLCAnQmFzdGFudGUgZGUgYWN1ZXJkby4nLCAnTXV5IGRlIGFjdWVyZG8nLCAnVG90YWxtZW50ZSBkZSBhY3VlcmRvLiddO1xuXG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIHB1YmxpYyBxX2E6IGFueTsgICAvLyBwcmVndW50YVxuICBwdWJsaWMgcV9pZGE6IGFueTsgIC8vIGlkXG4gIHB1YmxpYyByZXNwX2E6IGFueTsgIC8vIHJlc3B1ZXN0YVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmlkX3cgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLm9wX3cgPSBwYXJhbXNbJ29wdGlvbiddO1xuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRRKCk7XG4gICB9XG5cbiAgIGxvYWRRKCkge1xuICAgICB0aGlzLnFfYSA9IHRoaXMucTJbdGhpcy5pbmRleF0ucTtcbiAgICAgdGhpcy5xX2lkYSA9IHRoaXMucTJbdGhpcy5pbmRleF0uaWQ7XG4gICB9XG5cbiAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBsZXQgcmVzID0gK2FyZ3MuaW5kZXggKyAxO1xuICAgIHRoaXMuZGF0YS5wdXNoKHtpZDogdGhpcy5xX2lkYSwgcmVzcDogcmVzfSk7XG4gICAgY29uc29sZS5kaXIodGhpcy5kYXRhKTtcbiAgICB0aGlzLmluZGV4ICsrO1xuICAgIGlmKHRoaXMuaW5kZXggPT0gMjUpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2VuZFwiXSk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmxvYWRRKCk7XG4gICAgfVxuICB9ICBcbn1cbiJdfQ==