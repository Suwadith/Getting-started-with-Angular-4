"use strict";
exports.__esModule = true;
var LikeComponent = (function () {
    /*likesCount: number;
    isSelected: boolean;*/
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        /*if(this.isSelected) {
            this.likesCount--;
            //this.isSelected = false;
        } else {
            this.likesCount++;
            //this.isSelected = true;
        }*/
        this.likesCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
