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
        this.respuestas = [1, 2, 3, 4];
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
        var res = args.index;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQStDO0FBQy9DLHNEQUE2RDtBQUU3RCxtREFBMEM7QUFRMUM7SUFjRSw0QkFBb0IsS0FBcUIsRUFBVSxNQUF3QjtRQUEzRSxpQkFLQztRQUxtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBWHBFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsT0FBRSxHQUFVLHVCQUFNLENBQUM7UUFDbkIsU0FBSSxHQUFDLEVBQUUsQ0FBQztRQUNSLGVBQVUsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFNZixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRixzQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFHLENBQUM7UUFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBeENVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FlMkIsdUJBQWMsRUFBa0IseUJBQWdCO09BZGhFLGtCQUFrQixDQXlDOUI7SUFBRCx5QkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUXVlc3RpIH0gZnJvbSAnLi9tb2NrLXF1ZXN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1xdWVzdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVlc3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgaWRfdzogc3RyaW5nO1xuICBwdWJsaWMgb3Bfdzogc3RyaW5nO1xuICBwdWJsaWMgY2hhbmdlWWVzID0gdHJ1ZTtcblxuICBwdWJsaWMgcTI6IGFueVtdID0gUXVlc3RpO1xuICBwdWJsaWMgZGF0YT1bXTtcbiAgcHVibGljIHJlc3B1ZXN0YXMgPSBbMSwyLDMsNF07XG5cbiAgcHVibGljIGluZGV4ID0gMDtcbiAgcHVibGljIHFfYTogYW55OyAgIC8vIHByZWd1bnRhXG4gIHB1YmxpYyBxX2lkYTogYW55OyAgLy8gaWRcbiAgcHVibGljIHJlc3BfYTogYW55OyAgLy8gcmVzcHVlc3RhXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuaWRfdyA9IHBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMub3BfdyA9IHBhcmFtc1snb3B0aW9uJ107XG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFEoKTtcbiAgIH1cblxuICAgbG9hZFEoKSB7XG4gICAgIHRoaXMucV9hID0gdGhpcy5xMlt0aGlzLmluZGV4XS5xO1xuICAgICB0aGlzLnFfaWRhID0gdGhpcy5xMlt0aGlzLmluZGV4XS5pZDtcbiAgIH1cblxuICBvbkl0ZW1UYXAoYXJncykge1xuICAgIGxldCByZXMgPSBhcmdzLmluZGV4O1xuICAgIHRoaXMuZGF0YS5wdXNoKHtpZDogdGhpcy5xX2lkYSwgcmVzcDogcmVzfSk7XG4gICAgY29uc29sZS5kaXIodGhpcy5kYXRhKTtcbiAgICB0aGlzLmluZGV4ICsrO1xuICAgIGlmKHRoaXMuaW5kZXggPT0gMjUpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2VuZFwiXSk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmxvYWRRKCk7XG4gICAgfVxuICB9ICBcbn1cbiJdfQ==