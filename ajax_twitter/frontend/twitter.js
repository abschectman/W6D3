const FollowToggle = require("./follow_toggle.js")

$( () => {
  $(".follow-toggle").each(function(idx, el){
    let test = new FollowToggle(el);
    console.log(test);
    return test;
  })

}
)