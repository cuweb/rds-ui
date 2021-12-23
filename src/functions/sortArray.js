const sortArray = (arr, term) =>
    arr.sort((a, b) => {
        const fa = a[term].toLowerCase()
        const fb = b[term].toLowerCase()

        if (fa < fb) {
            return -1
        }
        if (fa > fb) {
            return 1
        }
        return 0
    })
export default sortArray
