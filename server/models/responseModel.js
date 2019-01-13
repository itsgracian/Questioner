class Response{
  constructor(){
    this.response=[];
  }
  create(element){
    this.response.push(element);
    return element;
  }
}

module.exports=new Response();
