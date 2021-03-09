function modifyPopupRate(chooserate){
  let ratingStars = chooserate;
  ratingStars.style.marginBottom = '15px';
  ratingStars.innerHTML = ""
  let rateinp = createElement('input',[],{'id':'rateinput'});
  rateinp.style.display = 'none';
  ratingStars.appendChild(rateinp);

  for(let i=1;i<=5;i++){
    let stari = getStar('10px','grey');
    stari.onclick = clickStars.bind({num:i});
    stari.style.cursor = "pointer"
    ratingStars.appendChild(stari);
  }
  return chooserate;
}

function getPopupHTML(type) {
  let popUp = createElement("div", ["popupcontent"], {});
  popUp.innerHTML = "";
  let crossbutton = createElement("div", ["cross"], { id: "crosspopup" });
  crossbutton.onclick = function(){
    emitter.emit('close-popup');
  }
  let closesection = createElement("div", ["close"], {}, [crossbutton]);
  popUp.appendChild(closesection);

  if (type == "review") {
    let reviewinput = createElement("textarea", [], {
      'id': "reviewinput",
      'row': 8,
      'name':'name',
      'cols': 80,
      'placeholder': "Write a review",
    });
    popUp.appendChild(reviewinput)
    let chooserate = createElement("div", ["chooserate"], {});
    chooserate = modifyPopupRate(chooserate)
    let button = createElement("button", [], { type: "button" });
    button.onclick = addcomments.bind(button);
    button.textContent = "Submit"
    let popsubmit = createElement("div", ["popsubmit"], {}, [chooserate,button]);
    popUp.appendChild(popsubmit);
  }

  return popUp;
}

emitter.subscribe("close-popup", (data) => {
  $(".popup").style.display = "none";
  $(".popup").style.opactity = "0";
});

emitter.subscribe("open-popup", (type) => {
  $(".popup").innerHTML = "";
  $(".popup").appendChild(getPopupHTML("review"));
  $(".popup").style.display = "flex";
});
