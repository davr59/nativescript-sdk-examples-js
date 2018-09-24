"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var activity_indicator_1 = require("tns-core-modules/ui/activity-indicator");
function onNavigatingTo(args) {
    var page = args.object;
    var myStack = page.getViewById("myStack");
    var myloadingObject = { isLoading: true };
    var indicator = new activity_indicator_1.ActivityIndicator();
    indicator.bind({
        sourceProperty: "isLoading",
        targetProperty: "busy"
    }, myloadingObject);
    console.log(indicator.busy);
    myStack.addChild(indicator);
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2RUFBMkU7QUFNM0Usd0JBQStCLElBQWU7SUFDMUMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFNLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUd6RCxJQUFNLGVBQWUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUU1QyxJQUFNLFNBQVMsR0FBRyxJQUFJLHNDQUFpQixFQUFFLENBQUM7SUFFMUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNYLGNBQWMsRUFBRSxXQUFXO1FBQzNCLGNBQWMsRUFBRSxNQUFNO0tBQ3pCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVoQyxDQUFDO0FBakJELHdDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGFjdGl2aXR5LWluZGljYXRvci1yZXF1aXJlLXRzXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuLy8gPDwgYWN0aXZpdHktaW5kaWNhdG9yLXJlcXVpcmUtdHNcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBteVN0YWNrID0gPFN0YWNrTGF5b3V0PnBhZ2UuZ2V0Vmlld0J5SWQoXCJteVN0YWNrXCIpO1xuXG4gICAgLy8gPj4gYWN0aXZpdHktaW5kaWNhdG9yLWNvZGUtYmVoaW5kLXRzXG4gICAgY29uc3QgbXlsb2FkaW5nT2JqZWN0ID0geyBpc0xvYWRpbmc6IHRydWUgfTtcblxuICAgIGNvbnN0IGluZGljYXRvciA9IG5ldyBBY3Rpdml0eUluZGljYXRvcigpO1xuICAgIC8vIEJpbmQgdGhlIGJ1c3kgcHJvcGVydHkgb2YgdGhlIGluZGljYXRvciB0byB0aGUgaXNMb2FkaW5nIHByb3BlcnR5IG9mIHRoZSBpbWFnZVxuICAgIGluZGljYXRvci5iaW5kKHtcbiAgICAgICAgc291cmNlUHJvcGVydHk6IFwiaXNMb2FkaW5nXCIsXG4gICAgICAgIHRhcmdldFByb3BlcnR5OiBcImJ1c3lcIlxuICAgIH0sIG15bG9hZGluZ09iamVjdCk7XG5cbiAgICBjb25zb2xlLmxvZyhpbmRpY2F0b3IuYnVzeSk7IC8vIGJ1c3kgaXMgYSB3cml0YWJsZSBwcm9wZXJ0eVxuICAgIG15U3RhY2suYWRkQ2hpbGQoaW5kaWNhdG9yKTtcbiAgICAvLyA8PCBhY3Rpdml0eS1pbmRpY2F0b3ItY29kZS1iZWhpbmQtdHNcbn1cbiJdfQ==