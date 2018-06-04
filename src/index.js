// 一个管理版本的 JS 库
const versionReg = /\d+\.\d+\.\d+[-a-zA-Z]*/
const maxVerionNo = 99

const _transfomrVersion = function (v) {
  if (!v) {
    return 0
  }
  let total = 0
  v.split('.').map((item, index) => {
    total += item * Math.pow(10, (2 - index))
  })
  return total
}

const _coreVersionManager = {

  check (v) {
    return versionReg.test(v)
  },

  next (v) {
    const vArrs = v.split('.')
    vArrs[2] *= 1
    if (maxVerionNo === (vArrs[2] + 1)) {
      vArrs[1] *= 1
      if (maxVerionNo === (vArrs[1] + 1)) {
        vArrs[0] *= 1
        vArrs[0] += 1
      } else {
        vArrs[1] *= 1
      }
    } else {
      vArrs[2] += 1
    }
    return vArrs.join('.')
  },

  pre () {

  },

  max () {
    const list = Array.prototype.slice.call(arguments)
    if (list.length === 1) {
      return list[0]
    }
    const arr = this.sort(list)
    return arr.pop()
  },

  sort (arr) {
    arr.sort((a, b) => {
      return _transfomrVersion(a) - _transfomrVersion(b)
    })
    return arr
  },

  compareAB (a, b) {
    if (_transfomrVersion(a) - _transfomrVersion(b) > 0) {
      return 1
    } else {
      return -1
    }
  },

  _getVersionNumber (v) {
    return v.replace(/[a-zA-Z-]+/g, '')
  }
}

module.exports = _coreVersionManager
