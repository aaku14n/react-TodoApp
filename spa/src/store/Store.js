import { EventEmitter } from "events";

class UserData extends EventEmitter {
  constructor() {
    super();
    this.user = {
      profile: [
        { name: "Aakarsh Yadav" },
        { profile: "Developer" },
        { status: "Self" },
        { address: "BTM 1 Stage Bangalore" }
      ],
      post: [
        {
          id: 1,
          name: "Manav Yadav",
          post:
            "Shortly before Pakistan gave its hypocritical sermons in this august house today, its envoy in New Delhi was summoned in the context of the most recent of the terror attacks in Uri that claimed 18 Indian lives. That terrorist attack is part of a trail of continuous flow of terrorists trained and armed by our neighbour and tasked to carry out terrorist attacks in my country."
        },
        {
          id: 2,
          name: "Nirbhay Yadav",
          post:
            "What we see in Pakistan, Mr President, is a terrorist state, which channelizes billions of dollars, much of it diverted from international aid, to training, financing and supporting terrorist groups as militant proxies against it neighbours."
        }
      ]
    };
  }

  addPost(post) {
    post.id = this.user.post.length + 1;
    let oldData = this.user.post;
    console.log(oldData);
    oldData.push(post);
    this.emit("change");
  }

  userEdit(data) {
    let oldData = this.user.profile;
    if (data.name !== "") oldData[0].name = data.name;
    if (data.profile !== "") oldData[1].profile = data.profile;
    if (data.status !== "") oldData[2].status = data.status;
    if (data.address !== "") oldData[3].address = data.address;
    this.emit("change");
    alert("Success");
  }
  getAll() {
    return this.user;
  }
}
const userData = new UserData();
export default userData;
