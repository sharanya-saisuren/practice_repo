class abc
{
emp_name:string="sharanya";
emp_id:number=102;

display()
{
    return `id===  : ${this.emp_id} ,name====: ${this.emp_name}`;
}

}

var obj=new abc();

console.log(obj.display());