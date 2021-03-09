function reviewState() {
  let obj = {
    rating : 0,
    review : '',
    id : 0
  }

  return {
    setRating : (r) => {obj.rating = r},
    setReview : (r) => {obj.review = r},
    getReview : () => {return obj.review},
    getrating : () => {return obj.rating},
    getId : () => {return obj.id},
    setId : (r) => {obj.id = r},
    reset : () => {obj = {rating : 0,review : '',id :0}}
  }
}

let reviewHand = reviewState()

function saveReview() {
  dataStorage.addReview({
    rating : reviewHand.getrating(),
    review : reviewHand.getReview(),
    user : user.getUser(),
    id : reviewHand.getId()
  })

  modalHandler.closeModal()
  updateUI('#main',createReview())
}

function getReviewModal() {

  function setReviewBar() {
    reviewHand.setRating(this+0);
    updateUI('.starset',createElement('div',[],createClickStar()))
  }

  function saveReviewText() {
    reviewHand.setReview(this.value);
  }

  function createClickStar() {
    return Array(5).fill(1).map((a,i)=>{
      return withStyle(withAttr(getStar('8px',(i+1)<=reviewHand.getrating() ? '#22acee' : 'grey'),{onclick:setReviewBar.bind(i+1)}),{cursor:'pointer'})
    })
  }

  return createElement('div',['modal'],[
    createElement('div',['modaltitle'],[
      withAttr(createElement('div',['cross']),{onclick:function(){modalHandler.closeModal()}})
    ]),
    withAttr(createElement('textarea',['reviewinput']),{onkeyup:saveReviewText,placeholder : 'Write your review',...(reviewHand.getReview().length ? {value : reviewHand.getReview()} : {})}),
    createElement('div',['reviewpopupbottom'],[
      createElement('div',['starset'],[createElement('div',[],createClickStar())]),
      withAttr(createElement('button',['loginbutton'],[T('Submit')]),{onclick:saveReview})
    ])

  ])
}


function createReview() {

  const imgUrl = "https://rukminim1.flixcart.com/image/416/416/kirr24w0/computer/z/y/9/dell-na-laptop-original-imafyhm5jgmh4jts.jpeg?q=70"
  const reviews = dataStorage.getReviews() || []
  const avg = (reviews.length) ? parseFloat(reviews.reduce((sum,i)=> sum+i.rating,0)/reviews.length).toFixed(1)  : 'NA'

  function openModalReview() {
    reviewHand.reset()
    modalHandler.openModal(getReviewModal())
  }

  function reviewhead() {
    return [
      createElement('div',['left'],[
        createElement('div',['img'],[
          withAttr(createElement('img'),{src:imgUrl})
        ])
      ]),
      createElement('div',['right'],[
        createElement('div',['reviewhead'],[
          createElement('h2',[],[T('Ratings & Reviews')]),
          ...(user.isLoggedIn() ? [withAttr(createElement('button',[],[T('Write a review')]),{onclick : openModalReview})] : [])
        ]),
        createElement('div',['reviewoverall'],[
          createElement('div',['overallstar'],[T(avg),getStar("10px", "black")])
        ]),
        ...(reviews.map((item, i) => reviewBody(item)))
      ])
    ]
  }

  function reviewupdate() {
    reviewHand.setReview(this.review)
    reviewHand.setRating(this.rating)
    reviewHand.setId(this.id)
    modalHandler.openModal(getReviewModal())
  }

  function reviewBody(obj) {
    return createElement('div',['singlereview'],[
      createElement('div',['stardiv'],[T(obj.rating),getStar("4px", "white")]),
      createElement('div',['reviewsection'],[T(obj.review)]),
      createElement('div',['author'],[
        T(obj.user),
        ...(obj.user == user.getUser() ? ([withStyle(withAttr(createElement('a',[],[T(' (Edit)')]),{onclick:reviewupdate.bind(obj)}),{cursor:'pointer'})]) : [])
      ])
    ])
  }

  return createElement('div',['main'],[
    ...(reviewhead())
  ])
}
