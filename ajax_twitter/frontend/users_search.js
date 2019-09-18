class UsersSearch {
  constructor(el){
    this.input = $(el).find("input");
    this.inputjq = $(this.input);
    this.ul = $(el).find("ul");
    this.jqul = $(this.ul);
  }

  handleinput(){
    this.inputjq.on("keypress")
  }
}