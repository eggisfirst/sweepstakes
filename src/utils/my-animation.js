
// 中奖名单动画 
function awardBeforeEnter(el){
  Velocity(el,
    { 
      translateY:[0, 400],
      translateX:[0, 400],
      opacity: 1,
      scale: 1,
    }, {
      duration: 1000
    }
  )
}
export { awardBeforeEnter }

function awardEnter(el, done) {
  // Velocity(el,
  //   { 
  //     opacity: 1 ,
  //     scale: 1,
  //   },
  //   {
  //     duration: 800,
  //     // complete : () => {
  //     //   Velocity(el,{
  //     //     // opacity: 1,
  //     //     // scale: 1,
  //     //     // translateY:[0,200],
  //     //     // rotateX: [-360, 360]
  //     //   },
  //     //     {
  //     //       // duration: 500
  //     //     }
  //     //   )
  //     // },
  //   }
  // )
}
export { awardEnter }

function awardLeave(el, done) {
  Velocity(el,
    { 
      opacity: 0,
      scale: 0
    },
    {
      duration: 800,
    }
  )
}
export { awardLeave }


// 中奖列表动画 
function contentBeforeEnter (el){
  // Velocity(el,
  //   { 
  //     opacity: 0,
  //     scale: 0,
  //     translateY:[0, -500],
  //     translateX:[0, -500]
  //   }, {
  //     duration: 1000
  //   }
  // )
}
export { contentBeforeEnter }

function contentEnter(el, done) {
  Velocity(el,
    { 
      opacity: 0,
      scale: 0,
    },
    {
      duration: 100,
      complete : () => {
        Velocity(el,{
         rotateX: [-360, 360],
          opacity: 1,
          scale: 1,
        },
          {
            duration: 500
          }
        )
      },
    }
  )
}
export { contentEnter }

function contentLeave(el, done) {
  Velocity(el,
    { 
      opacity: 0,
      scale: 0
    },
    {
      duration: 500,
    }
  )
}
export { contentLeave }