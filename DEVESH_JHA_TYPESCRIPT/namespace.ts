/// <referance path="./utils.ts"/>
namespace UserUtils
{
   export class user extends parent implements userType{
    getName(){
        return this.name
    }
}

}

let u1 = new UserUtils.user();
u1.setName("Devesh")
console.warn(u1.getName())