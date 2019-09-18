const APIUtil = require('./api_util.js')
class FollowToggle{

  constructor(el){
    this.el =el;
    this.jq = $(el);
    this.user_id = this.jq.data("user-id") ;
    this.followState = this.jq.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render(){
    if(this.followState === "tloading"){
      this.jq.prop("disabled", true)
      this.jq.text("following");
    }
    if (this.followState === "floading") {
      this.jq.prop("disabled", true);
      this.jq.text("unfollowing")
    }
    if(this.followState){
      this.jq.prop("disabled", false)
      this.jq.text("Unfollow!")
    }else{
      this.jq.prop("disabled", false)
      this.jq.text("follow!")
    }
  }
  
  handleClick(){
    this.jq.on('click', e =>{
      e.preventDefault();
      if (this.followState){
        APIUtil.unfollowUser(this.user_id).then(
            () => {
            this.followState = "floading";
            this.render();
        
          })
       } 
      if(!this.followState) {
        APIUtil.followUser(this.user_id).then(
          () => {
          this.followState = "tloading";
          this.render();
        });
       
    }

  })
}
}



module.exports = FollowToggle;