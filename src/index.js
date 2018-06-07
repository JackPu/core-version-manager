// 一个管理版本的 JS 库
const versionReg = /^\d+\.\d+\.\d+[-a-zA-Z.\d]*$/
const LAST_VERSION_NO = 99

const _transfomrVersion = (v) => {
  if (!v) return 0
  
  return v.split('.')
    .map((value, index) => value * Math.pow(10, (2 - index) * 2))
    .reduce((acc, value) => acc + value, 0)
}

const _coreVersionManager = {

  check (v) {
    return versionReg.test(v)
  },

  next (v) {
    let [major, minor, patch] = v
      .split('.')
      .map(i => i * 1)
    
    if (patch === LAST_VERSION_NO) {
      patch = 0
      if (minor === LAST_VERSION_NO) {
        minor = 0
        major += 1
      } else {
        minor += 1
      }
    } else {
      patch += 1
    }
    return [major, minor, patch].join('.')
  },

  pre (v) {
    let [major, minor, patch] = v
      .split('.')
      .map(i => i * 1)
    
    if (patch === 0) {
      if (minor === 0) {
        major -= 1
        minor = LAST_VERSION_NO
      } else {
        minor -= 1
      }
      patch = LAST_VERSION_NO
    } else {
      patch -= 1
    }
    return [major, minor, patch].join('.')
  },

  max (...list) {
    if (!list.length) return 0

    return this
      .sort(list)
      .pop()
  },

  min (...list) {
    if (!list.length) return 0

    return this
      .sort(list)
      .shift()
  },

  sort (arr) {
    return arr
      .sort((a, b) => _transfomrVersion(a) - _transfomrVersion(b))
  },

  compareAB (a, b) {
    const v1 = _transfomrVersion(a)
    const v2 = _transfomrVersion(b)
    if (v1 > v2) {
      return 1
    } else if (v1 < v2) {
      return -1
    }
    return 0
  },

  _getVersionNumber (v) {
    return v.replace(/-[a-zA-Z.\d]+$/, '')
  }
}

module.exports = _coreVersionManager

