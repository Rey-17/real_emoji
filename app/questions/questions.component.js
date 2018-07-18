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
        this.respuestas = [{ id: 1, q: 'Nada de acuerdo.' }, { id: 2, q: 'Algo de acuerdo.' }, { id: 3, q: 'Bastante de acuerdo.' }, { id: 4, q: 'Muy de acuerdo' }, { id: 5, q: 'Totalmente de acuerdo.' }];
        this.index = 0;
        this.f_ae = 0; // atencion emocional puntajes
        this.f_ce = 0; // claridad emocional
        this.f_re = 0; // reparación de las emociones
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
        if (this.q_ida <= 8) {
            this.f_ae += res;
        }
        else if (this.q_ida > 8 && this.q_ida <= 16) {
            this.f_ce += res;
        }
        else if (this.q_ida > 16 && this.q_ida <= 24) {
            this.f_re += res;
        }
        this.index++;
        if (this.index == 25) {
            var extras = {
                queryParams: {
                    atencion: this.f_ae,
                    claridad: this.f_ce,
                    reparacion: this.f_re,
                    data: this.data,
                    welcome: this.id_w
                }
            };
            this.router.navigate(["/end"], extras);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlFO0FBQ2pFLHNEQUE2RDtBQUU3RCxtREFBMEM7QUFRMUM7SUFrQkUsNEJBQW9CLEtBQXFCLEVBQVUsTUFBd0I7UUFBM0UsaUJBS0M7UUFMbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQWZwRSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE9BQUUsR0FBVSx1QkFBTSxDQUFDO1FBQ25CLFNBQUksR0FBQyxFQUFFLENBQUM7UUFDUixlQUFVLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsc0JBQXNCLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSx3QkFBd0IsRUFBQyxDQUFDLENBQUM7UUFFcEwsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUtWLFNBQUksR0FBVyxDQUFDLENBQUMsQ0FBRSw4QkFBOEI7UUFDakQsU0FBSSxHQUFXLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUN2QyxTQUFJLEdBQVcsQ0FBQyxDQUFDLENBQUMsOEJBQThCO1FBR3JELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVGLHNDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUNuQixDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUNuQixDQUFDO1FBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztRQUNuQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBRWQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3JCLElBQUksTUFBTSxHQUFxQjtnQkFDN0IsV0FBVyxFQUFFO29CQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ25CO2FBQ0YsQ0FBQztZQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUE3RFUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQW1CMkIsdUJBQWMsRUFBa0IseUJBQWdCO09BbEJoRSxrQkFBa0IsQ0E4RDlCO0lBQUQseUJBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFF1ZXN0aSB9IGZyb20gJy4vbW9jay1xdWVzdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcXVlc3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3F1ZXN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGlkX3c6IHN0cmluZztcbiAgcHVibGljIG9wX3c6IHN0cmluZztcbiAgcHVibGljIGNoYW5nZVllcyA9IHRydWU7XG5cbiAgcHVibGljIHEyOiBhbnlbXSA9IFF1ZXN0aTtcbiAgcHVibGljIGRhdGE9W107XG4gIHB1YmxpYyByZXNwdWVzdGFzID0gW3tpZDogMSAscTogJ05hZGEgZGUgYWN1ZXJkby4nfSx7aWQ6IDIsIHE6ICdBbGdvIGRlIGFjdWVyZG8uJ30sIHtpZDogMywgcTogJ0Jhc3RhbnRlIGRlIGFjdWVyZG8uJ30sIHtpZDogNCwgcTogJ011eSBkZSBhY3VlcmRvJ30se2lkOiA1LCBxOiAnVG90YWxtZW50ZSBkZSBhY3VlcmRvLid9XTtcblxuICBwdWJsaWMgaW5kZXggPSAwO1xuICBwdWJsaWMgcV9hOiBhbnk7ICAgLy8gcHJlZ3VudGFcbiAgcHVibGljIHFfaWRhOiBhbnk7ICAvLyBpZFxuICBwdWJsaWMgcmVzcF9hOiBhbnk7ICAvLyByZXNwdWVzdGFcblxuICBwdWJsaWMgZl9hZTogbnVtYmVyID0gMDsgIC8vIGF0ZW5jaW9uIGVtb2Npb25hbCBwdW50YWplc1xuICBwdWJsaWMgZl9jZTogbnVtYmVyID0gMDsgLy8gY2xhcmlkYWQgZW1vY2lvbmFsXG4gIHB1YmxpYyBmX3JlOiBudW1iZXIgPSAwOyAvLyByZXBhcmFjacOzbiBkZSBsYXMgZW1vY2lvbmVzXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuaWRfdyA9IHBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMub3BfdyA9IHBhcmFtc1snb3B0aW9uJ107XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRRKCk7XG4gICB9XG5cbiAgIGxvYWRRKCkge1xuICAgICB0aGlzLnFfYSA9IHRoaXMucTJbdGhpcy5pbmRleF0ucTtcbiAgICAgdGhpcy5xX2lkYSA9IHRoaXMucTJbdGhpcy5pbmRleF0uaWQ7XG4gICB9XG5cbiAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICBsZXQgcmVzID0gK2FyZ3MuaW5kZXggKyAxO1xuICAgIHRoaXMuZGF0YS5wdXNoKHtpZDogdGhpcy5xX2lkYSwgcmVzcDogcmVzfSk7XG4gICAgY29uc29sZS5kaXIodGhpcy5kYXRhKTtcbiAgICBpZih0aGlzLnFfaWRhIDw9IDgpe1xuICAgICAgdGhpcy5mX2FlICs9IHJlcztcbiAgICB9ZWxzZSBpZih0aGlzLnFfaWRhID4gOCAmJiB0aGlzLnFfaWRhIDw9IDE2KXtcbiAgICAgIHRoaXMuZl9jZSArPSByZXM7XG4gICAgfWVsc2UgaWYodGhpcy5xX2lkYSA+IDE2ICYmIHRoaXMucV9pZGEgPD0gMjQpe1xuICAgICAgdGhpcy5mX3JlICs9IHJlcztcbiAgICB9XG4gICAgdGhpcy5pbmRleCArKztcblxuICAgIGlmKHRoaXMuaW5kZXggPT0gMjUpe1xuICAgIGxldCBleHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBhdGVuY2lvbjogdGhpcy5mX2FlLFxuICAgICAgICBjbGFyaWRhZDogdGhpcy5mX2NlLFxuICAgICAgICByZXBhcmFjaW9uOiB0aGlzLmZfcmUsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgd2VsY29tZTogdGhpcy5pZF93XG4gICAgICB9XG4gICAgfTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9lbmRcIl0sIGV4dHJhcyk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmxvYWRRKCk7XG4gICAgfVxuICB9ICBcbn1cbiJdfQ==