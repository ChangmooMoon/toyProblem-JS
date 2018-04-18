/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

const makeHashTable = () => {
  let
    result = {},
    storage = [],
    storageLimit = 1000
  size = 0

  result.insert = (key, value) => {
    size++
    let
      index = getIndexBelowMaxForKey(key, storageLimit),
      bucket = storage[index]

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) bucket[i][1] = value
      }
    } else {
      storage[index] = []
      storage[index].push([key, value])
    }
    if (size / storageLimit >= 0.75) result.resize(storageLimit * 2)
  }

  result.retrieve = (key) => {
    let
      index = getIndexBelowMaxForKey(key, storageLimit),
      bucket = storage[index]

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) return bucket[i][1]
      }
    } else return undefined
  }

  result.remove = (key) => {
    let
      index = getIndexBelowMaxForKey(key, storageLimit),
      bucket = storage[index]

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          size--
          bucket.splice(i, 1)
        }
      }
    }
    if (size / storageLimit <= 0.25) result.resize(storageLimit / 2)
  }

  result.resize = (newLimit) => {
    let
      oldStorage = storage,
      storageLimit = newLimit,
      storage = []

    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i]
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          let
            index = getIndexBelowMaxForKey(bucket[j][0], storageLimit),
            newBucket = storage[index]
          if (newBucket) newBucket.push([bucket[j][0], bucket[j][1]])
          else {
            newBucket = []
            newBucket.push([bucket[j][0], bucket[j][1]])
          }
        }
      }
    }
  }
  return result
}

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
    hash = Math.abs(hash)
  }
  return hash % max
}

console.log(getIndexBelowMaxForKey('hi', 1024))