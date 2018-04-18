/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

class makeHashTable {
  constructor() {
    this.result = {}
    this.storage = []
    this.storageLimit = 1000
    this.size = 0
  }

  insert(key, value) {
    this.size++
    let
      index = getIndexBelowMaxForKey(key, this.storageLimit),
      bucket = this.storage[index]

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) bucket[i][1] = value
      }
    } else {
      this.storage[index] = []
      this.storage[index].push([key, value])
    }
    if (this.size / this.storageLimit >= 0.75) result.resize(storageLimit * 2)
  }

  retrieve(key) {
    let
      index = getIndexBelowMaxForKey(key, this.storageLimit),
      bucket = this.storage[index]

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) return bucket[i][1]
      }
    } else return undefined
  }

  remove(key) {
    let
      index = getIndexBelowMaxForKey(key, this.storageLimit),
      bucket = this.storage[index]

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          this.size--
          bucket.splice(i, 1)
        }
      }
    }
    if (this.size / this.storageLimit <= 0.25) this.resize(this.storageLimit / 2)
  }

  resize(newLimit) {
    let
      oldStorage = this.storage,
      storageLimit = newLimit,
      storage = []

    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i]
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          let
            index = getIndexBelowMaxForKey(bucket[j][0], this.storageLimit),
            newBucket = this.storage[index]
          if (newBucket) newBucket.push([bucket[j][0], bucket[j][1]])
          else {
            newBucket = []
            newBucket.push([bucket[j][0], bucket[j][1]])
          }
        }
      }
    }
  }
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

let hashTable = new makeHashTable()
console.log(hashTable)
hashTable.insert('hi', 369)
console.log(hashTable)
console.log(hashTable.retrieve('hi'))
hashTable.remove('hi')
console.log(hashTable)

