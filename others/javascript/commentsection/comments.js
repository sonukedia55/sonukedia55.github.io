let commentList = [];

function addcomments() {
  let rateinput = $("#rateinput").value;
  let reviewinput = $("#reviewinput").value;
  commentList.push({
    comment: reviewinput,
    user: activeUser.username,
    rating: rateinput,
    id: new Date().getTime().toString().substr(0, 13),
  });
  localStorage.setItem(`comments/${prodId}`, JSON.stringify(commentList));
  emitter.emit('comment-updated');
  emitter.emit('close-popup');
}

function clickStars(p) {
  document.querySelector("#rateinput").value = this.num;
  let ratingStars = document.querySelectorAll(".chooserate .star");
  for (let i = 0; i < 5; i++) {
    if (i + 1 <= this.num) {
      ratingStars[i].style.setProperty("--color", "#22acee");
    } else {
      ratingStars[i].style.setProperty("--color", "grey");
    }
  }
}

function loadComments() {
  commentList = JSON.parse(localStorage.getItem(`comments/${prodId}`)) || [];
  let uiList = $(".commentlist");
  uiList.innerHTML = "";
  let totalRate = 0;

  commentList.forEach((item, i) => {
    totalRate += parseInt(item.rating);
    let ratingspan = createElement("span", [], {}, [item.rating,getStar("4px", "white")]);
    let ratinghead = createElement("b", [], {});
    let ratingdiv = createElement("div", ["rating"], {}, [ratingspan,ratinghead]);

    let ratingdesc = createElement("div", ["desc"], {}, [item.comment]);
    let ratingauthor = createElement("div", ["author"], {}, [item.user]);

    let each = createElement("div", ["singlecomment"], {}, [ ratingdiv, ratingdesc, ratingauthor]);
    uiList.appendChild(each);
  });

  let ratindDesc = $(".ratingdesc");
  ratindDesc.innerHTML = "";

  let star = createElement("div", ["star"], {});
  let rleft = createElement("div", ["rleft"], {}, [
    commentList.length ? parseFloat(totalRate / commentList.length).toFixed( 2 ) : "NA",
    star,
  ]);
  ratindDesc.appendChild(rleft);

  let rright = createElement("div", ["rright"], {}, [
    `${commentList.length} Rating & ${commentList.length} Reviews`,
  ]);
  ratindDesc.appendChild(rright);

  $("#rateButton").onclick = function () {
    emitter.emit("open-popup", { type: "review" });
  };
}

emitter.subscribe("comment-updated", (data) => {
  loadComments();
});

emitter.emit('comment-updated');
