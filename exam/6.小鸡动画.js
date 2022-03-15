/**
 * 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
*/
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}
let start = Date.now()
// 我忽然发现小鸡的动画和这个场景一模一样
let step = () => {
  new Promise((resolve) => {
    setTimeout(() => {
      red()
      console.log(Date.now() - start)
      resolve()
    }, 3000)
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        green()
        console.log(Date.now() - start)
        resolve()
      }, 2000)
    })
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        yellow()
        console.log(Date.now() - start)
        resolve()
      }, 1000)
    })
  }).then(() => {
    step()
  })
}

step()



// 复制一下大佬写的
// function red() {
//   console.log("red");
// }
// function green() {
//   console.log("green");
// }
// function yellow() {
//   console.log("yellow");
// }
// const light = function (timer, cb) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       cb()
//       resolve()
//     }, timer)
//   })
// }
// const step = function () {
//   Promise.resolve().then(() => {
//     return light(3000, red)
//   }).then(() => {
//     return light(2000, green)
//   }).then(() => {
//     return light(1000, yellow)
//   }).then(() => {
//     return step()
//   })
// }

// step();
