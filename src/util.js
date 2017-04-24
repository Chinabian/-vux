/**
 * Created by HL03 on 2017/4/21.
 */
export default {
    extend (a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i) && b[i]) {
                a[i] = b[i]
            }
        }
    },
    isParent (children, parent) {
        if (!parent) return false
        while (children) {
            if (children === parent) return true
            children = children.parentNode
        }
        return false
    }
}