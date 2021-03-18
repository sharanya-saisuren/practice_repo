var abc = /** @class */ (function () {
    function abc() {
        this.emp_name = "sharanya";
        this.emp_id = 102;
    }
    abc.prototype.display = function () {
        return "id===  : " + this.emp_id + " ,name====: " + this.emp_name;
    };
    return abc;
}());
var obj = new abc();
console.log(obj.display());
