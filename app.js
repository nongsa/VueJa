new Vue({
el:"#vue-app",
data:{
   name:"Benyapa",
   job:"developer",
   age:20
},
 methods:{
      getName:function(){
        return this.name
      },
      setName:function(n){
      return this.name=n
      },
      addAge:function(){
      this.age++;
      console.log(this.age);
      },
      SubtractAge:function(){
      this.age--;
      console.log(this.age);
     }
  }
})
