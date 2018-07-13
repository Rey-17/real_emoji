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
            console.dir(_this.id_w);
            console.dir(_this.op_w);
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
            styleUrls: ['./questions.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQStDO0FBQy9DLHNEQUE2RDtBQUU3RCxtREFBMEM7QUFRMUM7SUFjRSw0QkFBb0IsS0FBcUIsRUFBVSxNQUF3QjtRQUEzRSxpQkFPQztRQVBtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBWHBFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsT0FBRSxHQUFVLHVCQUFNLENBQUM7UUFDbkIsU0FBSSxHQUFDLEVBQUUsQ0FBQztRQUNSLGVBQVUsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFNZixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRixzQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFHLENBQUM7UUFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBMUNVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FlMkIsdUJBQWMsRUFBa0IseUJBQWdCO09BZGhFLGtCQUFrQixDQTJDOUI7SUFBRCx5QkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUXVlc3RpIH0gZnJvbSAnLi9tb2NrLXF1ZXN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1xdWVzdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVlc3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGlkX3c6IHN0cmluZztcbiAgcHVibGljIG9wX3c6IHN0cmluZztcbiAgcHVibGljIGNoYW5nZVllcyA9IHRydWU7XG5cbiAgcHVibGljIHEyOiBhbnlbXSA9IFF1ZXN0aTtcbiAgcHVibGljIGRhdGE9W107XG4gIHB1YmxpYyByZXNwdWVzdGFzID0gWzEsMiwzLDRdO1xuXG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIHB1YmxpYyBxX2E6IGFueTsgICAvLyBwcmVndW50YVxuICBwdWJsaWMgcV9pZGE6IGFueTsgIC8vIGlkXG4gIHB1YmxpYyByZXNwX2E6IGFueTsgIC8vIHJlc3B1ZXN0YVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmlkX3cgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLm9wX3cgPSBwYXJhbXNbJ29wdGlvbiddXG4gICAgICBjb25zb2xlLmRpcih0aGlzLmlkX3cpO1xuICAgICAgY29uc29sZS5kaXIodGhpcy5vcF93KTtcbiAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkUSgpO1xuICAgfVxuXG4gICBsb2FkUSgpIHtcbiAgICAgdGhpcy5xX2EgPSB0aGlzLnEyW3RoaXMuaW5kZXhdLnE7XG4gICAgIHRoaXMucV9pZGEgPSB0aGlzLnEyW3RoaXMuaW5kZXhdLmlkO1xuICAgfVxuXG4gIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgbGV0IHJlcyA9IGFyZ3MuaW5kZXg7XG4gICAgdGhpcy5kYXRhLnB1c2goe2lkOiB0aGlzLnFfaWRhLCByZXNwOiByZXN9KTtcbiAgICBjb25zb2xlLmRpcih0aGlzLmRhdGEpO1xuICAgIHRoaXMuaW5kZXggKys7XG4gICAgaWYodGhpcy5pbmRleCA9PSAyNSl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZW5kXCJdKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubG9hZFEoKTtcbiAgICB9XG4gIH0gIFxufVxuIl19